import { undisplay } from "@bokehjs/core/dom";
import { isArray } from "@bokehjs/core/util/types";
import { HTMLBox } from "@bokehjs/models/layouts/html_box";
import { build_views } from "@bokehjs/core/build_views";
import { ModelEvent } from "@bokehjs/core/bokeh_events";
import { div } from "@bokehjs/core/dom";
import { Enum } from "@bokehjs/core/kinds";
import { ColumnDataSource } from "@bokehjs/models/sources/column_data_source";
import { TableColumn } from "@bokehjs/models/widgets/tables";
import { debounce } from "debounce";
import { comm_settings } from "./comm_manager";
import { transform_cds_to_records } from "./data";
import { PanelHTMLBoxView, set_size } from "./layout";
export class TableEditEvent extends ModelEvent {
    constructor(column, row, pre) {
        super();
        this.column = column;
        this.row = row;
        this.pre = pre;
        this.event_name = "table-edit";
    }
    _to_json() {
        return { model: this.origin, column: this.column, row: this.row, pre: this.pre };
    }
}
TableEditEvent.__name__ = "TableEditEvent";
export class CellClickEvent extends ModelEvent {
    constructor(column, row) {
        super();
        this.column = column;
        this.row = row;
        this.event_name = "cell-click";
    }
    _to_json() {
        return { model: this.origin, column: this.column, row: this.row };
    }
}
CellClickEvent.__name__ = "CellClickEvent";
function find_group(key, value, records) {
    for (const record of records) {
        if (record[key] == value)
            return record;
    }
    return null;
}
function summarize(grouped, columns, aggregators, depth = 0) {
    const summary = {};
    if (grouped.length == 0)
        return summary;
    const agg = aggregators[depth];
    for (const group of grouped) {
        const subsummary = summarize(group._children, columns, aggregators, depth + 1);
        for (const col in subsummary) {
            if (isArray(subsummary[col]))
                group[col] = subsummary[col].reduce((a, b) => a + b, 0) / subsummary[col].length;
            else
                group[col] = subsummary[col];
        }
        for (const column of columns.slice(1)) {
            const val = group[column.field];
            if (column.field in summary) {
                const old_val = summary[column.field];
                if (agg === 'min')
                    summary[column.field] = Math.min(val, old_val);
                else if (agg === 'max')
                    summary[column.field] = Math.max(val, old_val);
                else if (agg === 'sum')
                    summary[column.field] = val + old_val;
                else if (agg === 'mean') {
                    if (isArray(summary[column.field]))
                        summary[column.field].push(val);
                    else
                        summary[column.field] = [old_val, val];
                }
            }
            else
                summary[column.field] = val;
        }
    }
    return summary;
}
function group_data(records, columns, indexes, aggregators) {
    const grouped = [];
    const index_field = columns[0].field;
    for (const record of records) {
        const value = record[indexes[0]];
        let group = find_group(index_field, value, grouped);
        if (group == null) {
            group = { _children: [] };
            group[index_field] = value;
            grouped.push(group);
        }
        let subgroup = group;
        const groups = {};
        for (const index of indexes.slice(1)) {
            subgroup = find_group(index_field, record[index], subgroup._children);
            if (subgroup == null) {
                subgroup = { _children: [] };
                subgroup[index_field] = record[index];
                group._children.push(subgroup);
            }
            groups[index] = group;
            for (const column of columns.slice(1))
                subgroup[column.field] = record[column];
            group = subgroup;
        }
        for (const column of columns.slice(1))
            subgroup[column.field] = record[column.field];
    }
    const aggs = [];
    for (const index of indexes)
        aggs.push((index in aggregators) ? aggregators[index] : 'sum');
    summarize(grouped, columns, aggs);
    return grouped;
}
const timestampSorter = function (a, b, _aRow, _bRow, _column, _dir, _params) {
    // Bokeh serializes datetime objects as UNIX timestamps.
    //a, b - the two values being compared
    //aRow, bRow - the row components for the values being compared (useful if you need to access additional fields in the row data for the sort)
    //column - the column component for the column being sorted
    //dir - the direction of the sort ("asc" or "desc")
    //sorterParams - sorterParams object from column definition array
    // Added an _ in front of some parameters as they're unused and the Typescript compiler was complaining about it.
    // const alignEmptyValues = params.alignEmptyValues
    let emptyAlign;
    emptyAlign = 0;
    const opts = { zone: new window.luxon.IANAZone('UTC') };
    // NaN values are serialized to -9223372036854776 by Bokeh
    if (String(a) == '-9223372036854776') {
        a = window.luxon.DateTime.fromISO('invalid');
    }
    else {
        a = window.luxon.DateTime.fromMillis(a, opts);
    }
    if (String(b) == '-9223372036854776') {
        b = window.luxon.DateTime.fromISO('invalid');
    }
    else {
        b = window.luxon.DateTime.fromMillis(b, opts);
    }
    if (!a.isValid) {
        emptyAlign = !b.isValid ? 0 : -1;
    }
    else if (!b.isValid) {
        emptyAlign = 1;
    }
    else {
        //compare valid values
        return a - b;
    }
    // Invalid (e.g. NaN) always at the bottom
    emptyAlign *= -1;
    return emptyAlign;
};
const dateEditor = function (cell, onRendered, success, cancel) {
    //cell - the cell component for the editable cell
    //onRendered - function to call when the editor has been rendered
    //success - function to call to pass the successfuly updated value to Tabulator
    //cancel - function to call to abort the edit and return to a normal cell
    //create and style input
    const rawValue = cell.getValue();
    const opts = { zone: new window.luxon.IANAZone('UTC') };
    let cellValue;
    if (rawValue === 'NaN' || rawValue === null)
        cellValue = null;
    else
        cellValue = window.luxon.DateTime.fromMillis(rawValue, opts).toFormat("yyyy-MM-dd");
    const input = document.createElement("input");
    input.setAttribute("type", "date");
    input.style.padding = "4px";
    input.style.width = "100%";
    input.style.boxSizing = "border-box";
    input.value = cellValue;
    onRendered(() => {
        input.focus();
        input.style.height = "100%";
    });
    function onChange() {
        const new_val = window.luxon.DateTime.fromFormat(input.value, "yyyy-MM-dd", opts).toMillis();
        if (new_val != cellValue)
            success(new_val);
        else
            cancel();
    }
    //submit new value on blur or change
    input.addEventListener("blur", onChange);
    //submit new value on enter
    input.addEventListener("keydown", function (e) {
        if (e.keyCode == 13)
            onChange();
        if (e.keyCode == 27)
            cancel();
    });
    return input;
};
const datetimeEditor = function (cell, onRendered, success, cancel) {
    //cell - the cell component for the editable cell
    //onRendered - function to call when the editor has been rendered
    //success - function to call to pass the successfuly updated value to Tabulator
    //cancel - function to call to abort the edit and return to a normal cell
    //create and style input
    const rawValue = cell.getValue();
    const opts = { zone: new window.luxon.IANAZone('UTC') };
    let cellValue;
    if (rawValue === 'NaN' || rawValue === null)
        cellValue = null;
    else
        cellValue = window.luxon.DateTime.fromMillis(rawValue, opts).toFormat("yyyy-MM-dd'T'T");
    const input = document.createElement("input");
    input.setAttribute("type", "datetime-local");
    input.style.padding = "4px";
    input.style.width = "100%";
    input.style.boxSizing = "border-box";
    input.value = cellValue;
    onRendered(() => {
        input.focus();
        input.style.height = "100%";
    });
    function onChange() {
        const new_val = window.luxon.DateTime.fromFormat(input.value, "yyyy-MM-dd'T'T", opts).toMillis();
        if (new_val != cellValue)
            success(new_val);
        else
            cancel();
    }
    //submit new value on blur or change
    input.addEventListener("blur", onChange);
    //submit new value on enter
    input.addEventListener("keydown", function (e) {
        if (e.keyCode == 13)
            onChange();
        if (e.keyCode == 27)
            cancel();
    });
    return input;
};
export class DataTabulatorView extends PanelHTMLBoxView {
    constructor() {
        super(...arguments);
        this._tabulator_cell_updating = false;
        this._updating_page = true;
        this._updating_sort = false;
        this._relayouting = false;
        this._selection_updating = false;
        this._lastVerticalScrollbarTopPosition = 0;
        this._applied_styles = false;
        this._building = false;
    }
    connect_signals() {
        super.connect_signals();
        const p = this.model.properties;
        const { configuration, layout, columns, theme, groupby } = p;
        this.on_change([configuration, layout, columns, groupby], debounce(() => this.invalidate_render(), 20, false));
        this.on_change([theme], () => this.setCSS());
        this.connect(p.download.change, () => {
            const ftype = this.model.filename.endsWith('.json') ? "json" : "csv";
            this.tabulator.download(ftype, this.model.filename);
        });
        this.connect(p.children.change, () => this.renderChildren());
        this.connect(p.expanded.change, () => {
            // The first cell is the cell of the frozen _index column.
            for (const row of this.tabulator.rowManager.getRows()) {
                if (row.cells.length > 0)
                    row.cells[0].layoutElement();
            }
            // Make sure the expand icon is changed when expanded is
            // changed from Python.
            for (const row of this.tabulator.rowManager.getRows()) {
                if (row.cells.length > 0) {
                    const index = row.data._index;
                    const icon = this.model.expanded.indexOf(index) < 0 ? "►" : "▼";
                    row.cells[1].element.innerText = icon;
                }
            }
        });
        this.connect(p.styles.change, () => {
            if (this._applied_styles)
                this.tabulator.redraw(true);
            this.setStyles();
        });
        this.connect(p.hidden_columns.change, () => {
            this.setHidden();
            this.tabulator.redraw(true);
        });
        this.connect(p.page_size.change, () => this.setPageSize());
        this.connect(p.page.change, () => {
            if (!this._updating_page)
                this.setPage();
        });
        this.connect(p.max_page.change, () => this.setMaxPage());
        this.connect(p.frozen_rows.change, () => this.setFrozen());
        this.connect(p.sorters.change, () => this.setSorters());
        this.connect(this.model.source.properties.data.change, () => this.setData());
        this.connect(this.model.source.streaming, () => this.addData());
        this.connect(this.model.source.patching, () => {
            const inds = this.model.source.selected.indices;
            this.updateOrAddData();
            this.tabulator.rowManager.element.scrollTop = this._lastVerticalScrollbarTopPosition;
            // Restore indices since updating data may have reset checkbox column
            this.model.source.selected.indices = inds;
        });
        this.connect(this.model.source.selected.change, () => this.setSelection());
        this.connect(this.model.source.selected.properties.indices.change, () => this.setSelection());
    }
    get sorters() {
        const sorters = [];
        if (this.model.sorters.length)
            sorters.push({ column: '_index', dir: 'asc' });
        for (const sort of this.model.sorters.reverse()) {
            if (sort.column === undefined)
                sort.column = sort.field;
            sorters.push(sort);
        }
        return sorters;
    }
    invalidate_render() {
        this.tabulator.destroy();
        this.tabulator = null;
        this.render();
        this.relayout();
    }
    redraw() {
        if (!this._building) {
            if (this.tabulator.columnManager.element != null) {
                this.tabulator.columnManager.redraw(true);
            }
            if (this.tabulator.rowManager.renderer != null) {
                this.tabulator.rowManager.redraw(true);
                this.setStyles();
            }
        }
    }
    after_layout() {
        super.after_layout();
        if (this.tabulator != null && (!this._relayouting || this._initializing))
            this.redraw();
    }
    render() {
        super.render();
        const wait = this.setCSS();
        if (wait)
            return;
        this._initializing = true;
        const container = div({ class: "pnx-tabulator" });
        set_size(container, this.model);
        let configuration = this.getConfiguration();
        this.tabulator = new Tabulator(container, configuration);
        this.init_callbacks();
        this.renderChildren(true);
        this.setHidden();
        this.el.appendChild(container);
    }
    tableInit() {
        this._building = true;
        // Patch the ajax request and page data parsing methods
        const ajax = this.tabulator.modules.ajax;
        ajax.sendRequest = (_url, params, _config) => {
            return this.requestPage(params.page, params.sort);
        };
        this.tabulator.modules.page._parseRemoteData = () => {
            return false;
        };
    }
    init_callbacks() {
        // Initialization
        this.tabulator.on("tableBuilding", () => this.tableInit());
        this.tabulator.on("tableBuilt", () => this.tableBuilt());
        // Disable frozenColumns during rendering (see https://github.com/olifolkerd/tabulator/issues/3530)
        this.tabulator.on("dataLoading", () => {
            this.tabulator.modules.frozenColumns.active = false;
        });
        // Rendering callbacks
        this.tabulator.on("selectableCheck", (row) => {
            const selectable = this.model.selectable_rows;
            return (selectable == null) || (selectable.indexOf(row._row.data._index) >= 0);
        });
        this.tabulator.on("tooltips", (cell) => {
            return cell.getColumn().getField() + ": " + cell.getValue();
        });
        this.tabulator.on("scrollVertical", debounce(() => {
            this.setStyles();
        }, 50, false));
        this.tabulator.on("rowFormatter", (row) => this._render_row(row));
        // Sync state with model
        this.tabulator.on("rowSelectionChanged", (data, rows) => this.rowSelectionChanged(data, rows));
        this.tabulator.on("rowClick", (e, row) => this.rowClicked(e, row));
        this.tabulator.on("cellEdited", (cell) => this.cellEdited(cell));
        this.tabulator.on("dataFiltering", (filters) => {
            this.model.filters = filters;
        });
        this.tabulator.on("dataFiltered", (_, rows) => {
            if (this._initializing)
                return;
            // Ensure that after filtering empty scroll renders
            if (rows.length === 0)
                this.tabulator.rowManager.renderEmptyScroll();
            // Ensure that after filtering the page is updated
            this.updatePage(this.tabulator.getPage());
        });
        this.tabulator.on("pageLoaded", (pageno) => {
            this.updatePage(pageno);
        });
        this.tabulator.on("dataSorting", (sorters) => {
            const sorts = [];
            for (const s of sorters) {
                if (s.field !== '_index')
                    sorts.push({ field: s.field, dir: s.dir });
            }
            if (this.model.pagination !== 'remote') {
                this._updating_sort = true;
                this.model.sorters = sorts;
                this._updating_sort = false;
            }
        });
    }
    tableBuilt() {
        this._building = false;
        this.setHidden();
        this.setSelection();
        // For remote pagination initialize on tableBuilt
        this.setMaxPage();
        this.tabulator.setPage(this.model.page);
        this.setStyles();
        this.renderChildren();
        this.setGroupBy();
        this.setFrozen();
        this.tabulator.modules.frozenColumns.active = true;
        this.tabulator.modules.frozenColumns.layout();
        this._initializing = false;
    }
    relayout() {
        if (this._relayouting)
            return;
        this._relayouting = true;
        if (this.tabulator.rowManager.renderer) {
            this.tabulator.rowManager.adjustTableSize();
        }
        this.update_layout();
        this.compute_layout();
        if (this.root !== this) {
            this.invalidate_layout();
            const parent = this.root._parent;
            if (parent != null && parent.relayout != null)
                parent.relayout();
        }
        else if (this._parent != null) { // HACK: Support ReactiveHTML
            if (this._parent.relayout != null)
                this._parent.relayout();
            else
                this._parent.invalidate_layout();
        }
        this._relayouting = false;
    }
    requestPage(page, sorters) {
        return new Promise((resolve, reject) => {
            try {
                if (page != null && sorters != null) {
                    this._updating_sort = true;
                    const sorts = [];
                    for (const s of sorters) {
                        if (s.field !== '_index')
                            sorts.push({ field: s.field, dir: s.dir });
                    }
                    this.model.sorters = sorts;
                    this._updating_sort = false;
                    this._updating_page = true;
                    try {
                        this.model.page = page || 1;
                    }
                    finally {
                        this._updating_page = false;
                    }
                }
                resolve([]);
            }
            catch (err) {
                reject(err);
            }
        });
    }
    getLayout() {
        let layout = this.model.layout;
        switch (layout) {
            case "fit_data":
                return "fitData";
            case "fit_data_fill":
                return "fitDataFill";
            case "fit_data_stretch":
                return "fitDataStretch";
            case "fit_data_table":
                return "fitDataTable";
            case "fit_columns":
                return "fitColumns";
        }
    }
    getConfiguration() {
        // Only use selectable mode if explicitly requested otherwise manually handle selections
        let selectable = this.model.select_mode === 'toggle' ? true : NaN;
        let configuration = {
            ...this.model.configuration,
            index: "_index",
            nestedFieldSeparator: false,
            movableColumns: false,
            selectable: selectable,
            columns: this.getColumns(),
            initialSort: this.sorters,
            layout: this.getLayout(),
            pagination: this.model.pagination != null,
            paginationMode: this.model.pagination,
            paginationSize: this.model.page_size,
            paginationInitialPage: 1
        };
        if (this.model.pagination === "remote") {
            configuration['ajaxURL'] = "http://panel.pyviz.org";
            configuration['sortMode'] = "remote";
        }
        const cds = this.model.source;
        let data;
        if (cds === null || (cds.columns().length === 0))
            data = [];
        else
            data = transform_cds_to_records(cds, true);
        if (configuration.dataTree)
            data = group_data(data, this.model.columns, this.model.indexes, this.model.aggregators);
        return {
            ...configuration,
            "data": data,
        };
    }
    renderChildren(initializing = false) {
        new Promise(async (resolve) => {
            const children = [];
            for (const idx of this.model.expanded) {
                if (idx in this.model.children)
                    children.push(this.model.children[idx]);
            }
            await build_views(this._child_views, children, { parent: null });
            resolve(null);
        }).then(() => {
            for (const r of this.model.expanded) {
                const row = this.tabulator.getRow(r);
                this._render_row(row);
            }
            if ((!this.model.expanded.length) && (!initializing))
                setTimeout(() => this.relayout(), 20);
        });
    }
    _render_row(row) {
        const index = row._row.data._index;
        if (this.model.expanded.indexOf(index) < 0 || !(index in this.model.children))
            return;
        const model = this.model.children[index];
        const view = this._child_views.get(model);
        if (view == null)
            return;
        view._parent = this;
        const rowEl = row.getElement();
        let viewEl = rowEl.children[rowEl.children.length - 1];
        if (viewEl.className === 'bk') {
            if (viewEl.children.length)
                return;
        }
        else {
            viewEl = null;
        }
        if (viewEl == null) {
            const style = getComputedStyle(this.tabulator.element.children[1].children[0]);
            const bg = style.backgroundColor;
            const neg_margin = "-" + rowEl.style.paddingLeft;
            viewEl = div({ style: "background-color: " + bg + "; margin-left:" + neg_margin });
        }
        row.getElement().appendChild(viewEl);
        view.renderTo(viewEl);
    }
    _expand_render(cell) {
        const index = cell._cell.row.data._index;
        const icon = this.model.expanded.indexOf(index) < 0 ? "►" : "▼";
        return "<i>" + icon + "</i>";
    }
    _update_expand(cell) {
        const index = cell._cell.row.data._index;
        const expanded = [...this.model.expanded];
        const exp_index = expanded.indexOf(index);
        if (exp_index < 0)
            expanded.push(index);
        else {
            const removed = expanded.splice(exp_index, 1)[0];
            if (removed in this.model.children) {
                const model = this.model.children[removed];
                const view = this._child_views.get(model);
                if (view !== undefined && view.el != null)
                    undisplay(view.el);
            }
        }
        this.model.expanded = expanded;
        if (expanded.indexOf(index) < 0)
            return;
        let ready = true;
        for (const idx of this.model.expanded) {
            if (!(idx in this.model.children)) {
                ready = false;
                break;
            }
        }
        if (ready)
            this.renderChildren();
    }
    getData() {
        let data = transform_cds_to_records(this.model.source, true);
        if (this.model.configuration.dataTree)
            data = group_data(data, this.model.columns, this.model.indexes, this.model.aggregators);
        return data;
    }
    getColumns() {
        const config_columns = this.model.configuration?.columns;
        let columns = [];
        columns.push({ field: '_index', frozen: true });
        if (config_columns != null) {
            for (const column of config_columns)
                if (column.columns != null) {
                    const group_columns = [];
                    for (const col of column.columns)
                        group_columns.push({ ...col });
                    columns.push({ ...column, columns: group_columns });
                }
                else if (column.formatter === "expand") {
                    const expand = {
                        hozAlign: "center",
                        cellClick: (_, cell) => { this._update_expand(cell); },
                        formatter: (cell) => { return this._expand_render(cell); },
                        width: 40,
                        frozen: true
                    };
                    columns.push(expand);
                }
                else {
                    const new_column = { ...column };
                    if (new_column.formatter === "rowSelection") {
                        new_column.cellClick = (_, cell) => {
                            cell.getRow().toggleSelect();
                        };
                    }
                    columns.push(new_column);
                }
        }
        for (const column of this.model.columns) {
            let tab_column = null;
            if (config_columns != null) {
                for (const col of columns) {
                    if (col.columns != null) {
                        for (const c of col.columns) {
                            if (column.field === c.field) {
                                tab_column = c;
                                break;
                            }
                        }
                        if (tab_column != null)
                            break;
                    }
                    else if (column.field === col.field) {
                        tab_column = col;
                        break;
                    }
                }
            }
            if (tab_column == null)
                tab_column = { field: column.field };
            if (tab_column.title == null)
                tab_column.title = column.title;
            if (tab_column.width == null && column.width != null && column.width != 0)
                tab_column.width = column.width;
            if (tab_column.formatter == null && column.formatter != null) {
                const formatter = column.formatter;
                const ftype = formatter.type;
                if (ftype === "BooleanFormatter")
                    tab_column.formatter = "tickCross";
                else {
                    tab_column.formatter = (cell) => {
                        const formatted = column.formatter.doFormat(cell.getRow(), cell, cell.getValue(), null, null);
                        if (column.formatter.type === 'HTMLTemplateFormatter')
                            return formatted;
                        const node = div();
                        node.innerHTML = formatted;
                        const child = node.children[0];
                        if (child.innerHTML === "function(){return c.convert(arguments)}") // If the formatter fails
                            return '';
                        return child;
                    };
                }
            }
            if (tab_column.sorter == 'timestamp') {
                tab_column.sorter = timestampSorter;
            }
            const editor = column.editor;
            const ctype = editor.type;
            if (tab_column.editor != null) {
                if (tab_column.editor === 'date') {
                    tab_column.editor = dateEditor;
                }
                else if (tab_column.editor === 'datetime') {
                    tab_column.editor = datetimeEditor;
                }
            }
            else if (ctype === "StringEditor") {
                if (editor.completions.length > 0) {
                    tab_column.editor = "list";
                    tab_column.editorParams = { values: editor.completions, autocomplete: true, listOnEmpty: true };
                }
                else
                    tab_column.editor = "input";
            }
            else if (ctype === "TextEditor")
                tab_column.editor = "textarea";
            else if (ctype === "IntEditor" || ctype === "NumberEditor") {
                tab_column.editor = "number";
                tab_column.editorParams = { step: editor.step };
            }
            else if (ctype === "CheckboxEditor") {
                tab_column.editor = "tickCross";
            }
            else if (ctype === "DateEditor") {
                tab_column.editor = dateEditor;
            }
            else if (ctype === "SelectEditor") {
                tab_column.editor = "list";
                tab_column.editorParams = { values: editor.options };
            }
            else if (editor != null && editor.default_view != null) {
                tab_column.editor = (cell, onRendered, success, cancel) => {
                    this.renderEditor(column, cell, onRendered, success, cancel);
                };
            }
            tab_column.editable = () => (this.model.editable && (editor.default_view != null));
            if (tab_column.headerFilter) {
                if ((typeof tab_column.headerFilter) === 'boolean' &&
                    (typeof tab_column.editor) === 'string') {
                    tab_column.headerFilter = tab_column.editor;
                    tab_column.headerFilterParams = tab_column.editorParams;
                }
            }
            for (const sort of this.model.sorters) {
                if (tab_column.field === sort.field)
                    tab_column.headerSortStartingDir = sort.dir;
            }
            tab_column.cellClick = (_, cell) => {
                const index = cell.getData()._index;
                this.model.trigger_event(new CellClickEvent(column.field, index));
            };
            if (config_columns == null)
                columns.push(tab_column);
        }
        for (const col in this.model.buttons) {
            const button_formatter = () => {
                return this.model.buttons[col];
            };
            const button_column = {
                formatter: button_formatter,
                hozAlign: "center",
                cellClick: (_, cell) => {
                    const index = cell.getData()._index;
                    this.model.trigger_event(new CellClickEvent(col, index));
                }
            };
            columns.push(button_column);
        }
        return columns;
    }
    renderEditor(column, cell, onRendered, success, error) {
        const editor = column.editor;
        const view = new editor.default_view({ column: column, model: editor, parent: this, container: cell._cell.element });
        view.initialize();
        view.connect_signals();
        onRendered(() => {
            view.setValue(cell.getValue());
        });
        view.inputEl.addEventListener('change', () => {
            const value = view.serializeValue();
            const old_value = cell.getValue();
            const validation = view.validate();
            if (!validation.valid)
                error(validation.msg);
            if (old_value != null && typeof value != typeof old_value)
                error("Mismatching type");
            else
                success(view.serializeValue());
        });
        return view.inputEl;
    }
    // Update table
    setData() {
        const data = this.getData();
        if (this.model.pagination != null)
            this.tabulator.rowManager.setData(data, true, false);
        else {
            this.tabulator.setData(data);
        }
        this.postUpdate();
    }
    addData() {
        const rows = this.tabulator.rowManager.getRows();
        const last_row = rows[rows.length - 1];
        const start = ((last_row?.data._index) || 0);
        this.setData();
        this.postUpdate();
        if (this.model.follow && last_row)
            this.tabulator.scrollToRow(start, "top", false);
    }
    postUpdate() {
        if (!this.model.pagination)
            this.setFrozen();
        this.setSelection();
        if (this.model.height == null && this.model.pagination == null)
            this.relayout();
    }
    updateOrAddData() {
        // To avoid double updating the tabulator data
        if (this._tabulator_cell_updating)
            return;
        let data = transform_cds_to_records(this.model.source, true);
        this.tabulator.setData(data);
        this.postUpdate();
    }
    setFrozen() {
        for (const row of this.model.frozen_rows)
            this.tabulator.getRow(row).freeze();
    }
    updatePage(pageno) {
        if (this.model.pagination === 'local' && this.model.page !== pageno) {
            this._updating_page = true;
            this.model.page = pageno;
            this._updating_page = false;
        }
    }
    setGroupBy() {
        if (this.model.groupby.length == 0) {
            this.tabulator.setGroupBy(false);
            return;
        }
        const groupby = (data) => {
            const groups = [];
            for (const g of this.model.groupby) {
                const group = g + ': ' + data[g];
                groups.push(group);
            }
            return groups.join(', ');
        };
        // Need to call it twice, see https://github.com/olifolkerd/tabulator/issues/3666
        this.tabulator.setGroupBy(groupby);
        this.tabulator.setGroupBy(groupby);
    }
    setSorters() {
        if (this._updating_sort)
            return;
        this.tabulator.setSort(this.sorters);
    }
    setCSS() {
        let theme;
        let theme_;
        if (this.model.theme == "default") {
            theme = "tabulator";
        }
        else {
            if (this.model.theme == "bootstrap") {
                theme_ = "bootstrap3";
            }
            else if (this.model.theme == "semantic-ui") {
                theme_ = "semanticui";
            }
            else {
                theme_ = this.model.theme;
            }
            theme = "tabulator_" + theme_;
        }
        const css = this.model.theme_url + theme + ".min.css";
        let old_node = null;
        const links = document.getElementsByTagName("link");
        const dist_index = this.model.theme_url.indexOf('dist/');
        const start_url = this.model.theme_url.slice(0, dist_index);
        for (const link of links) {
            if (link.href.indexOf(start_url) >= 0) {
                old_node = link;
                break;
            }
        }
        if (old_node != null) {
            if (old_node.href.endsWith(css))
                return false;
            else {
                old_node.href = css;
                setTimeout(() => this.render(), 100);
                return true;
            }
        }
        let parent_node = document.getElementsByTagName("head")[0];
        const css_node = document.createElement('link');
        css_node.type = 'text/css';
        css_node.rel = 'stylesheet';
        css_node.media = 'screen';
        css_node.href = css;
        css_node.onload = () => {
            if (!this._building) {
                this.render();
                this.relayout();
            }
        };
        parent_node.appendChild(css_node);
        return true;
    }
    setStyles() {
        if (this.tabulator == null || this.tabulator.getDataCount() == 0)
            return;
        this._applied_styles = false;
        for (const r in this.model.styles.data) {
            const row_style = this.model.styles.data[r];
            const row = this.tabulator.getRow(r);
            if (!row)
                continue;
            const cells = row._row.cells;
            for (const c in row_style) {
                const style = row_style[c];
                const cell = cells[c];
                if (cell == null || !style.length)
                    continue;
                const element = cell.element;
                for (const s of style) {
                    let prop, value;
                    if (isArray(s))
                        [prop, value] = s;
                    else if (!s.includes(':'))
                        continue;
                    else
                        [prop, value] = s.split(':');
                    element.style.setProperty(prop, value.trimLeft());
                    this._applied_styles = true;
                }
            }
        }
    }
    setHidden() {
        for (const column of this.tabulator.getColumns()) {
            const col = column._column;
            if ((col.field == '_index') || (this.model.hidden_columns.indexOf(col.field) > -1))
                column.hide();
            else
                column.show();
        }
    }
    setMaxPage() {
        this.tabulator.setMaxPage(this.model.max_page);
        if (this.tabulator.modules.page.pagesElement)
            this.tabulator.modules.page._setPageButtons();
    }
    setPage() {
        this.tabulator.setPage(Math.min(this.model.max_page, this.model.page));
    }
    setPageSize() {
        this.tabulator.setPageSize(this.model.page_size);
    }
    setSelection() {
        if (this.tabulator == null || this._selection_updating)
            return;
        const indices = this.model.source.selected.indices;
        const current_indices = this.tabulator.getSelectedData().map((row) => row._index);
        if (JSON.stringify(indices) == JSON.stringify(current_indices))
            return;
        this._selection_updating = true;
        this.tabulator.deselectRow();
        this.tabulator.selectRow(indices);
        for (const index of indices) {
            const row = this.tabulator.rowManager.findRow(index);
            if (row)
                this.tabulator.scrollToRow(index, "center", false).catch(() => { });
        }
        this._selection_updating = false;
    }
    // Update model
    rowClicked(e, row) {
        if (this._selection_updating ||
            this._initializing ||
            (typeof this.model.select_mode) === 'string' ||
            this.model.select_mode === false || // selection disabled
            this.model.configuration.dataTree || // dataTree does not support selection
            e.srcElement?.innerText === "►" // expand button
        )
            return;
        let indices = [];
        const selected = this.model.source.selected;
        const index = row._row.data._index;
        if (e.ctrlKey || e.metaKey) {
            indices = this.model.source.selected.indices;
        }
        else if (e.shiftKey && selected.indices.length) {
            const start = selected.indices[selected.indices.length - 1];
            if (index > start) {
                for (let i = start; i < index; i++)
                    indices.push(i);
            }
            else {
                for (let i = start; i > index; i--)
                    indices.push(i);
            }
        }
        if (indices.indexOf(index) < 0)
            indices.push(index);
        else
            indices.splice(indices.indexOf(index), 1);
        // Remove the first selected indices when selectable is an int.
        if (typeof this.model.select_mode === 'number') {
            while (indices.length > this.model.select_mode) {
                indices.shift();
            }
        }
        const filtered = this._filter_selected(indices);
        this.tabulator.deselectRow();
        this.tabulator.selectRow(filtered);
        this._selection_updating = true;
        selected.indices = filtered;
        this._selection_updating = false;
    }
    _filter_selected(indices) {
        const filtered = [];
        for (const ind of indices) {
            if (this.model.selectable_rows == null ||
                this.model.selectable_rows.indexOf(ind) >= 0)
                filtered.push(ind);
        }
        return filtered;
    }
    rowSelectionChanged(data, _) {
        if (this._selection_updating ||
            this._initializing ||
            (typeof this.model.select_mode) === 'boolean' ||
            (typeof this.model.select_mode) === 'number' ||
            this.model.configuration.dataTree)
            return;
        const indices = data.map((row) => row._index);
        const filtered = this._filter_selected(indices);
        this._selection_updating = indices.length === filtered.length;
        this.model.source.selected.indices = filtered;
        this._selection_updating = false;
    }
    cellEdited(cell) {
        const field = cell._cell.column.field;
        const index = cell.getData()._index;
        const value = cell._cell.value;
        this._tabulator_cell_updating = true;
        comm_settings.debounce = false;
        this.model.trigger_event(new TableEditEvent(field, index, true));
        try {
            this.model.source.patch({ [field]: [[index, value]] });
        }
        finally {
            comm_settings.debounce = true;
            this._tabulator_cell_updating = false;
        }
        this.model.trigger_event(new TableEditEvent(field, index, false));
        this.tabulator.scrollToRow(index, "top", false);
    }
}
DataTabulatorView.__name__ = "DataTabulatorView";
export const TableLayout = Enum("fit_data", "fit_data_fill", "fit_data_stretch", "fit_data_table", "fit_columns");
// The Bokeh .ts model corresponding to the Bokeh .py model
export class DataTabulator extends HTMLBox {
    constructor(attrs) {
        super(attrs);
    }
    static init_DataTabulator() {
        this.prototype.default_view = DataTabulatorView;
        this.define(({ Any, Array, Boolean, Nullable, Number, Ref, String }) => ({
            aggregators: [Any, {}],
            buttons: [Any, {}],
            children: [Any, {}],
            configuration: [Any, {}],
            columns: [Array(Ref(TableColumn)), []],
            download: [Boolean, false],
            editable: [Boolean, true],
            expanded: [Array(Number), []],
            filename: [String, "table.csv"],
            filters: [Array(Any), []],
            follow: [Boolean, true],
            frozen_rows: [Array(Number), []],
            groupby: [Array(String), []],
            hidden_columns: [Array(String), []],
            indexes: [Array(String), []],
            layout: [TableLayout, "fit_data"],
            max_page: [Number, 0],
            pagination: [Nullable(String), null],
            page: [Number, 0],
            page_size: [Number, 0],
            select_mode: [Any, true],
            selectable_rows: [Nullable(Array(Number)), null],
            source: [Ref(ColumnDataSource)],
            sorters: [Array(Any), []],
            styles: [Any, {}],
            theme: [String, "simple"],
            theme_url: [String, "https://unpkg.com/tabulator-tables@5.3.2/dist/css/"]
        }));
    }
}
DataTabulator.__name__ = "DataTabulator";
DataTabulator.__module__ = "panel.models.tabulator";
DataTabulator.init_DataTabulator();
//# sourceMappingURL=tabulator.js.map