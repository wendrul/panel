/*!
 * Copyright (c) 2012 - 2022, Anaconda, Inc., and Bokeh Contributors
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of Anaconda nor the names of any contributors
 * may be used to endorse or promote products derived from this software
 * without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */
(function(root, factory) {
  factory(root["Bokeh"], undefined);
})(this, function(Bokeh, version) {
  let define;
  return (function(modules, entry, aliases, externals) {
    const bokeh = typeof Bokeh !== "undefined" && (version != null ? Bokeh[version] : Bokeh);
    if (bokeh != null) {
      return bokeh.register_plugin(modules, entry, aliases);
    } else {
      throw new Error("Cannot find Bokeh " + version + ". You have to load it prior to loading plugins.");
    }
  })
({
"4e90918c0a": /* index.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const Panel = (0, tslib_1.__importStar)(require("5b284469f0") /* ./models */);
    exports.Panel = Panel;
    const base_1 = require("@bokehjs/base");
    (0, base_1.register_models)(Panel);
},
"5b284469f0": /* models/index.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    var ace_1 = require("2e12ebdb23") /* ./ace */;
    __esExport("AcePlot", ace_1.AcePlot);
    var audio_1 = require("33955cfa6f") /* ./audio */;
    __esExport("Audio", audio_1.Audio);
    var card_1 = require("0972f6e77b") /* ./card */;
    __esExport("Card", card_1.Card);
    var comm_manager_1 = require("754fbb1f55") /* ./comm_manager */;
    __esExport("CommManager", comm_manager_1.CommManager);
    var customselect_1 = require("e258e515be") /* ./customselect */;
    __esExport("CustomSelect", customselect_1.CustomSelect);
    var tabulator_1 = require("65f9efaf79") /* ./tabulator */;
    __esExport("DataTabulator", tabulator_1.DataTabulator);
    var datetime_picker_1 = require("b843627155") /* ./datetime_picker */;
    __esExport("DatetimePicker", datetime_picker_1.DatetimePicker);
    var deckgl_1 = require("0155f7af4d") /* ./deckgl */;
    __esExport("DeckGLPlot", deckgl_1.DeckGLPlot);
    var echarts_1 = require("9d046c4720") /* ./echarts */;
    __esExport("ECharts", echarts_1.ECharts);
    var html_1 = require("3d7593ca5a") /* ./html */;
    __esExport("HTML", html_1.HTML);
    var idom_1 = require("7d45bd3bc4") /* ./idom */;
    __esExport("IDOM", idom_1.IDOM);
    var ipywidget_1 = require("5ad9f86156") /* ./ipywidget */;
    __esExport("IPyWidget", ipywidget_1.IPyWidget);
    var json_1 = require("0d30bea0c8") /* ./json */;
    __esExport("JSON", json_1.JSON);
    var jsoneditor_1 = require("5379466860") /* ./jsoneditor */;
    __esExport("JSONEditor", jsoneditor_1.JSONEditor);
    var file_download_1 = require("1767172ffa") /* ./file_download */;
    __esExport("FileDownload", file_download_1.FileDownload);
    var katex_1 = require("7b859fb3cf") /* ./katex */;
    __esExport("KaTeX", katex_1.KaTeX);
    var location_1 = require("aca9ec82ba") /* ./location */;
    __esExport("Location", location_1.Location);
    var mathjax_1 = require("0c21036737") /* ./mathjax */;
    __esExport("MathJax", mathjax_1.MathJax);
    var perspective_1 = require("4ae96bd77b") /* ./perspective */;
    __esExport("Perspective", perspective_1.Perspective);
    var player_1 = require("588a5ae70d") /* ./player */;
    __esExport("Player", player_1.Player);
    var plotly_1 = require("42de27e56c") /* ./plotly */;
    __esExport("PlotlyPlot", plotly_1.PlotlyPlot);
    var progress_1 = require("979633320f") /* ./progress */;
    __esExport("Progress", progress_1.Progress);
    var quill_1 = require("d51a79a0a3") /* ./quill */;
    __esExport("QuillInput", quill_1.QuillInput);
    var reactive_html_1 = require("ad426de39c") /* ./reactive_html */;
    __esExport("ReactiveHTML", reactive_html_1.ReactiveHTML);
    var singleselect_1 = require("ab54efe08a") /* ./singleselect */;
    __esExport("SingleSelect", singleselect_1.SingleSelect);
    var speech_to_text_1 = require("a96be0bcc9") /* ./speech_to_text */;
    __esExport("SpeechToText", speech_to_text_1.SpeechToText);
    var state_1 = require("bfa46a5f19") /* ./state */;
    __esExport("State", state_1.State);
    var tabs_1 = require("ab17724bd6") /* ./tabs */;
    __esExport("Tabs", tabs_1.Tabs);
    var terminal_1 = require("3ea011fa55") /* ./terminal */;
    __esExport("Terminal", terminal_1.Terminal);
    var text_to_speech_1 = require("33cd2c254e") /* ./text_to_speech */;
    __esExport("TextToSpeech", text_to_speech_1.TextToSpeech);
    var trend_1 = require("effe070807") /* ./trend */;
    __esExport("TrendIndicator", trend_1.TrendIndicator);
    var vega_1 = require("fea356270f") /* ./vega */;
    __esExport("VegaPlot", vega_1.VegaPlot);
    var video_1 = require("1b46fd56a8") /* ./video */;
    __esExport("Video", video_1.Video);
    var videostream_1 = require("e3e9b8e495") /* ./videostream */;
    __esExport("VideoStream", videostream_1.VideoStream);
    (0, tslib_1.__exportStar)(require("c51f25e2a7") /* ./vtk */, exports);
},
"2e12ebdb23": /* models/ace.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const dom_1 = require("@bokehjs/core/dom");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    function ID() {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    class AcePlotView extends layout_1.PanelHTMLBoxView {
        initialize() {
            super.initialize();
            this._container = (0, dom_1.div)({
                id: ID(),
                style: {
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }
            });
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.code.change, () => this._update_code_from_model());
            this.connect(this.model.properties.theme.change, () => this._update_theme());
            this.connect(this.model.properties.language.change, () => this._update_language());
            this.connect(this.model.properties.filename.change, () => this._update_filename());
            this.connect(this.model.properties.print_margin.change, () => this._update_print_margin());
            this.connect(this.model.properties.annotations.change, () => this._add_annotations());
            this.connect(this.model.properties.readonly.change, () => {
                this._editor.setReadOnly(this.model.readonly);
            });
        }
        render() {
            super.render();
            if (!(this._container === this.el.childNodes[0]))
                this.el.appendChild(this._container);
            this._container.textContent = this.model.code;
            this._editor = window.ace.edit(this._container.id);
            this._langTools = window.ace.require('ace/ext/language_tools');
            this._modelist = window.ace.require("ace/ext/modelist");
            this._editor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true,
                fontFamily: "monospace", //hack for cursor position
            });
            this._update_theme();
            this._update_filename();
            this._update_language();
            this._editor.setReadOnly(this.model.readonly);
            this._editor.setShowPrintMargin(this.model.print_margin);
            this._editor.on('change', () => this._update_code_from_editor());
        }
        _update_code_from_model() {
            if (this._editor && this._editor.getValue() != this.model.code)
                this._editor.setValue(this.model.code);
        }
        _update_print_margin() {
            this._editor.setShowPrintMargin(this.model.print_margin);
        }
        _update_code_from_editor() {
            if (this._editor.getValue() != this.model.code) {
                this.model.code = this._editor.getValue();
            }
        }
        _update_theme() {
            this._editor.setTheme("ace/theme/" + `${this.model.theme}`);
        }
        _update_filename() {
            if (this.model.filename) {
                const mode = this._modelist.getModeForPath(this.model.filename).mode;
                this.model.language = mode.slice(9);
            }
        }
        _update_language() {
            if (this.model.language != null) {
                this._editor.session.setMode("ace/mode/" + `${this.model.language}`);
            }
        }
        _add_annotations() {
            this._editor.session.setAnnotations(this.model.annotations);
        }
        after_layout() {
            super.after_layout();
            this._editor.resize();
        }
    }
    exports.AcePlotView = AcePlotView;
    AcePlotView.__name__ = "AcePlotView";
    class AcePlot extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_AcePlot() {
            this.prototype.default_view = AcePlotView;
            this.define(({ Any, Array, Boolean, String }) => ({
                code: [String, ''],
                filename: [String],
                language: [String],
                theme: [String, 'chrome'],
                annotations: [Array(Any), []],
                readonly: [Boolean, false],
                print_margin: [Boolean, false]
            }));
            this.override({
                height: 300,
                width: 300
            });
        }
    }
    exports.AcePlot = AcePlot;
    AcePlot.__name__ = "AcePlot";
    AcePlot.__module__ = "panel.models.ace";
    AcePlot.init_AcePlot();
},
"80a6464b1f": /* models/layout.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const dom_1 = require("@bokehjs/core/dom");
    const color_1 = require("@bokehjs/core/util/color");
    const html_1 = require("@bokehjs/core/layout/html");
    const types_1 = require("@bokehjs/core/layout/types");
    const markup_1 = require("@bokehjs/models/widgets/markup");
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    function set_size(el, model) {
        let width_policy = model.width != null ? "fixed" : "fit";
        let height_policy = model.height != null ? "fixed" : "fit";
        const { sizing_mode } = model;
        if (sizing_mode != null) {
            if (sizing_mode == "fixed")
                width_policy = height_policy = "fixed";
            else if (sizing_mode == "stretch_both")
                width_policy = height_policy = "max";
            else if (sizing_mode == "stretch_width")
                width_policy = "max";
            else if (sizing_mode == "stretch_height")
                height_policy = "max";
            else {
                switch (sizing_mode) {
                    case "scale_width":
                        width_policy = "max";
                        height_policy = "min";
                        break;
                    case "scale_height":
                        width_policy = "min";
                        height_policy = "max";
                        break;
                    case "scale_both":
                        width_policy = "max";
                        height_policy = "max";
                        break;
                    default:
                        throw new Error("unreachable");
                }
            }
        }
        if (width_policy == "fixed" && model.width)
            el.style.width = model.width + "px";
        else if (width_policy == "max")
            el.style.width = "100%";
        if (model.min_width != null)
            el.style.minWidth = model.min_width + "px";
        if (model.max_width != null)
            el.style.maxWidth = model.max_width + "px";
        if (height_policy == "fixed" && model.height)
            el.style.height = model.height + "px";
        else if (height_policy == "max")
            el.style.height = "100%";
        if (model.min_height != null)
            el.style.minHeight = model.min_height + "px";
        if (model.max_width != null)
            el.style.maxHeight = model.max_height + "px";
    }
    exports.set_size = set_size;
    class CachedVariadicBox extends html_1.VariadicBox {
        constructor(el, sizing_mode, changed) {
            super(el);
            this.el = el;
            this.sizing_mode = sizing_mode;
            this.changed = changed;
            this._cache = new Map();
            this._cache_count = new Map();
        }
        _measure(viewport) {
            const key = [viewport.width, viewport.height, this.sizing_mode];
            const key_str = key.toString();
            // If sizing mode is responsive and has changed since last render
            // we have to wait until second rerender to use cached value
            const min_count = (!this.changed || (this.sizing_mode == 'fixed') || (this.sizing_mode == null)) ? 0 : 1;
            const cached = this._cache.get(key_str);
            const cache_count = this._cache_count.get(key_str);
            if (cached != null && cache_count != null && (cache_count >= min_count)) {
                this._cache_count.set(key_str, cache_count + 1);
                return cached;
            }
            const bounded = new types_1.Sizeable(viewport).bounded_to(this.sizing.size);
            const size = (0, dom_1.sized)(this.el, bounded, () => {
                const content = new types_1.Sizeable((0, dom_1.content_size)(this.el));
                const { border, padding } = (0, dom_1.extents)(this.el);
                return content.grow_by(border).grow_by(padding).map(Math.ceil);
            });
            this._cache.set(key_str, size);
            this._cache_count.set(key_str, 0);
            return size;
        }
        invalidate_cache() {
        }
    }
    exports.CachedVariadicBox = CachedVariadicBox;
    CachedVariadicBox.__name__ = "CachedVariadicBox";
    class PanelMarkupView extends markup_1.MarkupView {
        _update_layout() {
            let changed = ((this._prev_sizing_mode !== undefined) &&
                (this._prev_sizing_mode !== this.model.sizing_mode));
            this._prev_sizing_mode = this.model.sizing_mode;
            this.layout = new CachedVariadicBox(this.el, this.model.sizing_mode, changed);
            this.layout.set_sizing(this.box_sizing());
        }
        render() {
            super.render();
            set_size(this.markup_el, this.model);
        }
    }
    exports.PanelMarkupView = PanelMarkupView;
    PanelMarkupView.__name__ = "PanelMarkupView";
    class PanelHTMLBoxView extends html_box_1.HTMLBoxView {
        connect_signals() {
            super.connect_signals();
            // Note due to on_change hack properties must be defined in this order.
            const { css_classes, background } = this.model.properties;
            this._prev_css_classes = this.model.css_classes;
            this.on_change([css_classes, background], () => {
                // Note: This ensures that changes in the background and changes
                // to the loading parameter in Panel do NOT trigger a full re-render
                const css = [];
                let skip = false;
                for (const cls of this.model.css_classes) {
                    if (cls === 'pn-loading')
                        skip = true;
                    else if (skip)
                        skip = false;
                    else
                        css.push(cls);
                }
                const prev = this._prev_css_classes;
                if (JSON.stringify(css) === JSON.stringify(prev)) {
                    const { background } = this.model;
                    this.el.style.backgroundColor = background != null ? (0, color_1.color2css)(background) : "";
                    (0, dom_1.classes)(this.el).clear().add(...this.css_classes());
                }
                else {
                    this.invalidate_render();
                }
                this._prev_css_classes = css;
            });
        }
        on_change(properties, fn) {
            // HACKALERT: LayoutDOMView triggers re-renders whenever css_classes change
            // which is very expensive so we do not connect this signal and handle it
            // ourself
            const p = this.model.properties;
            if (properties.length === 2 && properties[0] === p.background && properties[1] === p.css_classes) {
                return;
            }
            super.on_change(properties, fn);
        }
        _update_layout() {
            let changed = ((this._prev_sizing_mode !== undefined) &&
                (this._prev_sizing_mode !== this.model.sizing_mode));
            this._prev_sizing_mode = this.model.sizing_mode;
            this.layout = new CachedVariadicBox(this.el, this.model.sizing_mode, changed);
            this.layout.set_sizing(this.box_sizing());
        }
        render() {
            super.render();
            set_size(this.el, this.model);
        }
    }
    exports.PanelHTMLBoxView = PanelHTMLBoxView;
    PanelHTMLBoxView.__name__ = "PanelHTMLBoxView";
},
"33955cfa6f": /* models/audio.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class AudioView extends layout_1.PanelHTMLBoxView {
        initialize() {
            super.initialize();
            this._blocked = false;
            this._setting = false;
            this._time = Date.now();
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.loop.change, () => this.set_loop());
            this.connect(this.model.properties.paused.change, () => this.set_paused());
            this.connect(this.model.properties.time.change, () => this.set_time());
            this.connect(this.model.properties.value.change, () => this.set_value());
            this.connect(this.model.properties.volume.change, () => this.set_volume());
            this.connect(this.model.properties.muted.change, () => this.set_muted());
            this.connect(this.model.properties.autoplay.change, () => this.set_autoplay());
        }
        render() {
            super.render();
            this.audioEl = document.createElement('audio');
            this.audioEl.controls = true;
            this.audioEl.src = this.model.value;
            this.audioEl.currentTime = this.model.time;
            this.audioEl.loop = this.model.loop;
            this.audioEl.muted = this.model.muted;
            this.audioEl.autoplay = this.model.autoplay;
            if (this.model.volume != null)
                this.audioEl.volume = this.model.volume / 100;
            else
                this.model.volume = this.audioEl.volume * 100;
            this.audioEl.onpause = () => this.model.paused = true;
            this.audioEl.onplay = () => this.model.paused = false;
            this.audioEl.ontimeupdate = () => this.update_time(this);
            this.audioEl.onvolumechange = () => this.update_volume(this);
            this.el.appendChild(this.audioEl);
            if (!this.model.paused)
                this.audioEl.play();
        }
        update_time(view) {
            if (view._setting) {
                view._setting = false;
                return;
            }
            if ((Date.now() - view._time) < view.model.throttle)
                return;
            view._blocked = true;
            view.model.time = view.audioEl.currentTime;
            view._time = Date.now();
        }
        update_volume(view) {
            if (view._setting) {
                view._setting = false;
                return;
            }
            view._blocked = true;
            view.model.volume = view.audioEl.volume * 100;
        }
        set_loop() {
            this.audioEl.loop = this.model.loop;
        }
        set_muted() {
            this.audioEl.muted = this.model.muted;
        }
        set_autoplay() {
            this.audioEl.autoplay = this.model.autoplay;
        }
        set_paused() {
            if (!this.audioEl.paused && this.model.paused)
                this.audioEl.pause();
            if (this.audioEl.paused && !this.model.paused)
                this.audioEl.play();
        }
        set_volume() {
            if (this._blocked) {
                this._blocked = false;
                return;
            }
            this._setting = true;
            if (this.model.volume != null) {
                this.audioEl.volume = this.model.volume / 100;
            }
        }
        set_time() {
            if (this._blocked) {
                this._blocked = false;
                return;
            }
            this._setting = true;
            this.audioEl.currentTime = this.model.time;
        }
        set_value() {
            this.audioEl.src = this.model.value;
        }
    }
    exports.AudioView = AudioView;
    AudioView.__name__ = "AudioView";
    class Audio extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_Audio() {
            this.prototype.default_view = AudioView;
            this.define(({ Any, Boolean, Int, Number }) => ({
                loop: [Boolean, false],
                paused: [Boolean, true],
                muted: [Boolean, false],
                autoplay: [Boolean, false],
                time: [Number, 0],
                throttle: [Number, 250],
                value: [Any, ''],
                volume: [Int],
            }));
        }
    }
    exports.Audio = Audio;
    Audio.__name__ = "Audio";
    Audio.__module__ = "panel.models.widgets";
    Audio.init_Audio();
},
"0972f6e77b": /* models/card.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const column_1 = require("@bokehjs/models/layouts/column");
    const bbox_1 = require("@bokehjs/core/util/bbox");
    const DOM = (0, tslib_1.__importStar)(require("@bokehjs/core/dom"));
    const dom_1 = require("@bokehjs/core/dom");
    const grid_1 = require("@bokehjs/core/layout/grid");
    const color_1 = require("@bokehjs/core/util/color");
    class CardView extends column_1.ColumnView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.collapsed.change, () => this._collapse());
            const { active_header_background, header_background, header_color, hide_header } = this.model.properties;
            this.on_change([active_header_background, header_background, header_color, hide_header], () => this.render());
        }
        _update_layout() {
            let views;
            if (this.model.hide_header)
                views = this.child_views.slice(1);
            else
                views = this.model.collapsed ? this.child_views.slice(0, 1) : this.child_views;
            const items = views.map((child) => child.layout);
            this.layout = new grid_1.Column(items);
            this.layout.rows = this.model.rows;
            this.layout.spacing = [this.model.spacing, 0];
            this.layout.set_sizing(this.box_sizing());
        }
        update_position() {
            if (this.model.collapsible && !this.model.hide_header) {
                const header = this.child_views[0];
                const obbox = header.layout.bbox;
                const ibbox = header.layout.inner_bbox;
                if (obbox.x1 != 0) {
                    let offset;
                    if (this.model.collapsible) {
                        const icon_style = getComputedStyle(this.button_el.children[0]);
                        offset = (parseFloat(icon_style.width) + parseFloat(icon_style.marginLeft)) || 0;
                    }
                    else {
                        offset = 0;
                    }
                    const outer = new bbox_1.BBox({ x0: obbox.x0, x1: obbox.x1 - offset, y0: obbox.y0, y1: obbox.y1 });
                    const inner = new bbox_1.BBox({ x0: ibbox.x0, x1: ibbox.x1 - offset, y0: ibbox.y0, y1: ibbox.y1 });
                    header.layout.set_geometry(outer, inner);
                }
            }
            super.update_position();
        }
        render() {
            (0, dom_1.empty)(this.el);
            const { background, button_css_classes, header_color, header_tag, header_css_classes } = this.model;
            this.el.style.backgroundColor = background != null ? (0, color_1.color2css)(background) : "";
            (0, dom_1.classes)(this.el).clear().add(...this.css_classes());
            let header_background = this.model.header_background;
            if (!this.model.collapsed && this.model.active_header_background)
                header_background = this.model.active_header_background;
            const header = this.child_views[0];
            let header_el;
            if (this.model.collapsible) {
                this.button_el = DOM.createElement("button", { type: "button", class: header_css_classes });
                const icon = DOM.createElement("div", { class: button_css_classes });
                icon.innerHTML = this.model.collapsed ? "\u25ba" : "\u25bc";
                this.button_el.appendChild(icon);
                this.button_el.style.backgroundColor = header_background != null ? header_background : "";
                header.el.style.backgroundColor = header_background != null ? header_background : "";
                this.button_el.appendChild(header.el);
                this.button_el.onclick = () => this._toggle_button();
                header_el = this.button_el;
            }
            else {
                header_el = DOM.createElement(header_tag, { class: header_css_classes });
                header_el.style.backgroundColor = header_background != null ? header_background : "";
                header_el.appendChild(header.el);
            }
            if (!this.model.hide_header) {
                header_el.style.color = header_color != null ? header_color : "";
                this.el.appendChild(header_el);
                header.render();
            }
            for (const child_view of this.child_views.slice(1)) {
                if (!this.model.collapsed)
                    this.el.appendChild(child_view.el);
                child_view.render();
            }
        }
        _toggle_button() {
            this.model.collapsed = !this.model.collapsed;
        }
        _collapse() {
            this.invalidate_render();
        }
        _createElement() {
            return DOM.createElement(this.model.tag, { class: this.css_classes() });
        }
    }
    exports.CardView = CardView;
    CardView.__name__ = "CardView";
    class Card extends column_1.Column {
        constructor(attrs) {
            super(attrs);
        }
        static init_Card() {
            this.prototype.default_view = CardView;
            this.define(({ Array, Boolean, Nullable, String }) => ({
                active_header_background: [Nullable(String), null],
                button_css_classes: [Array(String), []],
                collapsed: [Boolean, true],
                collapsible: [Boolean, true],
                header_background: [Nullable(String), null],
                header_color: [Nullable(String), null],
                header_css_classes: [Array(String), []],
                header_tag: [String, "div"],
                hide_header: [Boolean, false],
                tag: [String, "div"],
            }));
        }
    }
    exports.Card = Card;
    Card.__name__ = "Card";
    Card.__module__ = "panel.models.layout";
    Card.init_Card();
},
"754fbb1f55": /* models/comm_manager.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const document_1 = require("@bokehjs/document");
    const view_1 = require("@bokehjs/core/view");
    const model_1 = require("@bokehjs/model");
    const message_1 = require("@bokehjs/protocol/message");
    const receiver_1 = require("@bokehjs/protocol/receiver");
    exports.comm_settings = {
        debounce: true
    };
    class CommManagerView extends view_1.View {
        renderTo() {
        }
    }
    exports.CommManagerView = CommManagerView;
    CommManagerView.__name__ = "CommManagerView";
    class CommManager extends model_1.Model {
        constructor(attrs) {
            super(attrs);
            this._document_listener = (event) => this._document_changed(event);
            this._receiver = new receiver_1.Receiver();
            this._event_buffer = [];
            this._blocked = false;
            this._timeout = Date.now();
            if ((window.PyViz == undefined) || (!window.PyViz.comm_manager))
                console.log("Could not find comm manager on window.PyViz, ensure the extension is loaded.");
            else {
                this.ns = window.PyViz;
                this.ns.comm_manager.register_target(this.plot_id, this.comm_id, (msg) => {
                    for (const view of this.ns.shared_views.get(this.plot_id)) {
                        if (view !== this)
                            view.msg_handler(msg);
                    }
                    this.msg_handler(msg);
                });
                this._client_comm = this.ns.comm_manager.get_client_comm(this.plot_id, this.client_comm_id, (msg) => this.on_ack(msg));
                if (this.ns.shared_views == null)
                    this.ns.shared_views = new Map();
                if (this.ns.shared_views.has(this.plot_id))
                    this.ns.shared_views.get(this.plot_id).push(this);
                else
                    this.ns.shared_views.set(this.plot_id, [this]);
            }
        }
        _doc_attached() {
            super._doc_attached();
            if (this.document != null)
                this.document.on_change(this._document_listener);
        }
        _document_changed(event) {
            // Filter out events that were initiated by the ClientSession itself
            if (event.setter_id === this.id) // XXX: not all document events define this
                return;
            // Filter out changes to attributes that aren't server-visible
            if (event instanceof document_1.ModelChangedEvent && !(event.attr in event.model.serializable_attributes()))
                return;
            this._event_buffer.push(event);
            if (!exports.comm_settings.debounce) {
                this.process_events();
            }
            else if ((!this._blocked || (Date.now() > this._timeout))) {
                setTimeout(() => this.process_events(), this.debounce);
                this._blocked = true;
                this._timeout = Date.now() + this.timeout;
            }
        }
        process_events() {
            if ((this.document == null) || (this._client_comm == null))
                return;
            const patch = this.document.create_json_patch(this._event_buffer);
            this._event_buffer = [];
            const message = message_1.Message.create('PATCH-DOC', {}, patch);
            this._client_comm.send(message);
            for (const view of this.ns.shared_views.get(this.plot_id)) {
                if (view !== this && view.document != null)
                    view.document.apply_json_patch(patch, [], this.id);
            }
        }
        disconnect_signals() {
            super.disconnect_signals();
            this.ns.shared_views.shared_views.delete(this.plot_id);
        }
        on_ack(msg) {
            // Receives acknowledgement from Python, processing event
            // and unblocking Comm if event queue empty
            const metadata = msg.metadata;
            if (this._event_buffer.length) {
                this._blocked = true;
                this._timeout = Date.now() + this.timeout;
                this.process_events();
            }
            else
                this._blocked = false;
            if ((metadata.msg_type == "Ready") && metadata.content)
                console.log("Python callback returned following output:", metadata.content);
            else if (metadata.msg_type == "Error")
                console.log("Python failed with the following traceback:", metadata.traceback);
        }
        msg_handler(msg) {
            const metadata = msg.metadata;
            const buffers = msg.buffers;
            const content = msg.content.data;
            const plot_id = this.plot_id;
            if ((metadata.msg_type == "Ready")) {
                if (metadata.content)
                    console.log("Python callback returned following output:", metadata.content);
                else if (metadata.msg_type == "Error")
                    console.log("Python failed with the following traceback:", metadata.traceback);
            }
            else if (plot_id != null) {
                let plot = null;
                if ((plot_id in this.ns.plot_index) && (this.ns.plot_index[plot_id] != null))
                    plot = this.ns.plot_index[plot_id];
                else if ((window.Bokeh !== undefined) && (plot_id in window.Bokeh.index))
                    plot = window.Bokeh.index[plot_id];
                if (plot == null)
                    return;
                if ((buffers != undefined) && (buffers.length > 0))
                    this._receiver.consume(buffers[0].buffer);
                else
                    this._receiver.consume(content);
                const comm_msg = this._receiver.message;
                if ((comm_msg != null) && (Object.keys(comm_msg.content).length > 0) && this.document != null)
                    this.document.apply_json_patch(comm_msg.content, comm_msg.buffers, this.id);
            }
        }
        static init_CommManager() {
            this.prototype.default_view = CommManagerView;
            this.define(({ Int, String }) => ({
                plot_id: [String],
                comm_id: [String],
                client_comm_id: [String],
                timeout: [Int, 5000],
                debounce: [Int, 50],
            }));
        }
    }
    exports.CommManager = CommManager;
    CommManager.__name__ = "CommManager";
    CommManager.__module__ = "panel.models.comm_manager";
    CommManager.init_CommManager();
},
"e258e515be": /* models/customselect.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var _a;
    const selectbox_1 = require("@bokehjs/models/widgets/selectbox");
    class CustomSelectView extends selectbox_1.SelectView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.disabled_options.change, () => this._update_disabled_options());
        }
        options_el() {
            let opts = super.options_el();
            opts.forEach((element) => {
                if (this.model.disabled_options.includes(element.value)) {
                    element.setAttribute('disabled', 'true');
                }
            });
            return opts;
        }
        _update_disabled_options() {
            for (const element of this.input_el.options) {
                if (this.model.disabled_options.includes(element.value)) {
                    element.setAttribute('disabled', 'true');
                }
                else {
                    element.removeAttribute('disabled');
                }
            }
        }
    }
    exports.CustomSelectView = CustomSelectView;
    CustomSelectView.__name__ = "CustomSelectView";
    class CustomSelect extends selectbox_1.Select {
        constructor(attrs) {
            super(attrs);
        }
    }
    exports.CustomSelect = CustomSelect;
    _a = CustomSelect;
    CustomSelect.__name__ = "CustomSelect";
    CustomSelect.__module__ = "panel.models.widgets";
    (() => {
        _a.prototype.default_view = CustomSelectView;
        _a.define(({ Array, String }) => {
            return {
                disabled_options: [Array(String), []],
            };
        });
    })();
},
"65f9efaf79": /* models/tabulator.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const dom_1 = require("@bokehjs/core/dom");
    const types_1 = require("@bokehjs/core/util/types");
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const build_views_1 = require("@bokehjs/core/build_views");
    const bokeh_events_1 = require("@bokehjs/core/bokeh_events");
    const dom_2 = require("@bokehjs/core/dom");
    const kinds_1 = require("@bokehjs/core/kinds");
    const column_data_source_1 = require("@bokehjs/models/sources/column_data_source");
    const tables_1 = require("@bokehjs/models/widgets/tables");
    const debounce_1 = require("99a25e6992") /* debounce */;
    const comm_manager_1 = require("754fbb1f55") /* ./comm_manager */;
    const data_1 = require("7f7d9e0c6b") /* ./data */;
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class TableEditEvent extends bokeh_events_1.ModelEvent {
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
    exports.TableEditEvent = TableEditEvent;
    TableEditEvent.__name__ = "TableEditEvent";
    class CellClickEvent extends bokeh_events_1.ModelEvent {
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
    exports.CellClickEvent = CellClickEvent;
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
                if ((0, types_1.isArray)(subsummary[col]))
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
                        if ((0, types_1.isArray)(summary[column.field]))
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
    class DataTabulatorView extends layout_1.PanelHTMLBoxView {
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
            this.on_change([configuration, layout, columns, groupby], (0, debounce_1.debounce)(() => this.invalidate_render(), 20, false));
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
            const container = (0, dom_2.div)({ class: "pnx-tabulator" });
            (0, layout_1.set_size)(container, this.model);
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
            this.tabulator.on("scrollVertical", (0, debounce_1.debounce)(() => {
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
            let configuration = Object.assign(Object.assign({}, this.model.configuration), { index: "_index", nestedFieldSeparator: false, movableColumns: false, selectable: selectable, columns: this.getColumns(), initialSort: this.sorters, layout: this.getLayout(), pagination: this.model.pagination != null, paginationMode: this.model.pagination, paginationSize: this.model.page_size, paginationInitialPage: 1 });
            if (this.model.pagination === "remote") {
                configuration['ajaxURL'] = "http://panel.pyviz.org";
                configuration['sortMode'] = "remote";
            }
            const cds = this.model.source;
            let data;
            if (cds === null || (cds.columns().length === 0))
                data = [];
            else
                data = (0, data_1.transform_cds_to_records)(cds, true);
            if (configuration.dataTree)
                data = group_data(data, this.model.columns, this.model.indexes, this.model.aggregators);
            return Object.assign(Object.assign({}, configuration), { "data": data });
        }
        renderChildren(initializing = false) {
            new Promise(async (resolve) => {
                const children = [];
                for (const idx of this.model.expanded) {
                    if (idx in this.model.children)
                        children.push(this.model.children[idx]);
                }
                await (0, build_views_1.build_views)(this._child_views, children, { parent: null });
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
                viewEl = (0, dom_2.div)({ style: "background-color: " + bg + "; margin-left:" + neg_margin });
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
                        (0, dom_1.undisplay)(view.el);
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
            let data = (0, data_1.transform_cds_to_records)(this.model.source, true);
            if (this.model.configuration.dataTree)
                data = group_data(data, this.model.columns, this.model.indexes, this.model.aggregators);
            return data;
        }
        getColumns() {
            var _a;
            const config_columns = (_a = this.model.configuration) === null || _a === void 0 ? void 0 : _a.columns;
            let columns = [];
            columns.push({ field: '_index', frozen: true });
            if (config_columns != null) {
                for (const column of config_columns)
                    if (column.columns != null) {
                        const group_columns = [];
                        for (const col of column.columns)
                            group_columns.push(Object.assign({}, col));
                        columns.push(Object.assign(Object.assign({}, column), { columns: group_columns }));
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
                        const new_column = Object.assign({}, column);
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
                            const node = (0, dom_2.div)();
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
            const start = ((last_row === null || last_row === void 0 ? void 0 : last_row.data._index) || 0);
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
            let data = (0, data_1.transform_cds_to_records)(this.model.source, true);
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
                        if ((0, types_1.isArray)(s))
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
            var _a;
            if (this._selection_updating ||
                this._initializing ||
                (typeof this.model.select_mode) === 'string' ||
                this.model.select_mode === false || // selection disabled
                this.model.configuration.dataTree || // dataTree does not support selection
                ((_a = e.srcElement) === null || _a === void 0 ? void 0 : _a.innerText) === "►" // expand button
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
            comm_manager_1.comm_settings.debounce = false;
            this.model.trigger_event(new TableEditEvent(field, index, true));
            try {
                this.model.source.patch({ [field]: [[index, value]] });
            }
            finally {
                comm_manager_1.comm_settings.debounce = true;
                this._tabulator_cell_updating = false;
            }
            this.model.trigger_event(new TableEditEvent(field, index, false));
            this.tabulator.scrollToRow(index, "top", false);
        }
    }
    exports.DataTabulatorView = DataTabulatorView;
    DataTabulatorView.__name__ = "DataTabulatorView";
    exports.TableLayout = (0, kinds_1.Enum)("fit_data", "fit_data_fill", "fit_data_stretch", "fit_data_table", "fit_columns");
    // The Bokeh .ts model corresponding to the Bokeh .py model
    class DataTabulator extends html_box_1.HTMLBox {
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
                columns: [Array(Ref(tables_1.TableColumn)), []],
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
                layout: [exports.TableLayout, "fit_data"],
                max_page: [Number, 0],
                pagination: [Nullable(String), null],
                page: [Number, 0],
                page_size: [Number, 0],
                select_mode: [Any, true],
                selectable_rows: [Nullable(Array(Number)), null],
                source: [Ref(column_data_source_1.ColumnDataSource)],
                sorters: [Array(Any), []],
                styles: [Any, {}],
                theme: [String, "simple"],
                theme_url: [String, "https://unpkg.com/tabulator-tables@5.3.2/dist/css/"]
            }));
        }
    }
    exports.DataTabulator = DataTabulator;
    DataTabulator.__name__ = "DataTabulator";
    DataTabulator.__module__ = "panel.models.tabulator";
    DataTabulator.init_DataTabulator();
},
"99a25e6992": /* debounce/index.js */ function _(require, module, exports, __esModule, __esExport) {
    /**
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds. If `immediate` is passed, trigger the function on the
     * leading edge, instead of the trailing. The function also has a property 'clear'
     * that is a function which will clear the timer to prevent previously scheduled executions.
     *
     * @source underscore.js
     * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
     * @param {Function} function to wrap
     * @param {Number} timeout in ms (`100`)
     * @param {Boolean} whether to execute at the beginning (`false`)
     * @api public
     */
    function debounce(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        if (null == wait)
            wait = 100;
        function later() {
            var last = Date.now() - timestamp;
            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    context = args = null;
                }
            }
        }
        ;
        var debounced = function () {
            context = this;
            args = arguments;
            timestamp = Date.now();
            var callNow = immediate && !timeout;
            if (!timeout)
                timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
        debounced.clear = function () {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
        };
        debounced.flush = function () {
            if (timeout) {
                result = func.apply(context, args);
                context = args = null;
                clearTimeout(timeout);
                timeout = null;
            }
        };
        return debounced;
    }
    ;
    // Adds compatibility for ES modules
    debounce.debounce = debounce;
    module.exports = debounce;
},
"7f7d9e0c6b": /* models/data.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    function transform_cds_to_records(cds, addId = false, start = 0) {
        const data = [];
        const columns = cds.columns();
        const cdsLength = cds.get_length();
        if (columns.length === 0 || cdsLength === null)
            return [];
        for (let i = start; i < cdsLength; i++) {
            const item = {};
            for (const column of columns) {
                let array = cds.get_array(column);
                const shape = array[0].shape == null ? null : array[0].shape;
                if ((shape != null) && (shape.length > 1) && (typeof shape[0] == "number"))
                    item[column] = array.slice(i * shape[1], i * shape[1] + shape[1]);
                else
                    item[column] = array[i];
            }
            if (addId)
                item['_index'] = i;
            data.push(item);
        }
        return data;
    }
    exports.transform_cds_to_records = transform_cds_to_records;
    function dict_to_records(data, index = true) {
        const records = [];
        for (let i = 0; i < data.index.length; i++) {
            const record = {};
            for (const col of data) {
                if (index || col !== "index")
                    record[col] = data[col][i];
            }
        }
        return records;
    }
    exports.dict_to_records = dict_to_records;
},
"b843627155": /* models/datetime_picker.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const flatpickr_1 = (0, tslib_1.__importDefault)(require("50d3473f3f") /* flatpickr */);
    const input_widget_1 = require("@bokehjs/models/widgets/input_widget");
    const dom_1 = require("@bokehjs/core/dom");
    const enums_1 = require("@bokehjs/core/enums");
    const types_1 = require("@bokehjs/core/util/types");
    const inputs = (0, tslib_1.__importStar)(require("@bokehjs/styles/widgets/inputs.css"));
    const flatpickr_css_1 = (0, tslib_1.__importDefault)(require("@bokehjs/styles/widgets/flatpickr.css"));
    function _convert_date_list(value) {
        const result = [];
        for (const item of value) {
            if ((0, types_1.isString)(item))
                result.push(item);
            else {
                const [from, to] = item;
                result.push({ from, to });
            }
        }
        return result;
    }
    class DatetimePickerView extends input_widget_1.InputWidgetView {
        connect_signals() {
            super.connect_signals();
            const { value, min_date, max_date, disabled_dates, enabled_dates, position, inline, enable_time, enable_seconds, military_time, date_format, mode } = this.model.properties;
            this.connect(value.change, () => { var _a; return this.model.value ? (_a = this._picker) === null || _a === void 0 ? void 0 : _a.setDate(this.model.value) : this._clear(); });
            this.connect(min_date.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("minDate", this.model.min_date); });
            this.connect(max_date.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("maxDate", this.model.max_date); });
            this.connect(disabled_dates.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("disable", this.model.disabled_dates); });
            this.connect(enabled_dates.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("enable", this.model.enabled_dates); });
            this.connect(position.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("position", this.model.position); });
            this.connect(inline.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("inline", this.model.inline); });
            this.connect(enable_time.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("enableTime", this.model.enable_time); });
            this.connect(enable_seconds.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("enableSeconds", this.model.enable_seconds); });
            this.connect(military_time.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("time_24hr", this.model.military_time); });
            this.connect(mode.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("mode", this.model.mode); });
            this.connect(date_format.change, () => { var _a; return (_a = this._picker) === null || _a === void 0 ? void 0 : _a.set("dateFormat", this.model.date_format); });
        }
        remove() {
            var _a;
            (_a = this._picker) === null || _a === void 0 ? void 0 : _a.destroy();
            super.remove();
        }
        styles() {
            return [...super.styles(), flatpickr_css_1.default];
        }
        render() {
            if (this._picker != null)
                return;
            super.render();
            this.input_el = (0, dom_1.input)({ type: "text", class: inputs.input, disabled: this.model.disabled });
            this.group_el.appendChild(this.input_el);
            this._picker = (0, flatpickr_1.default)(this.input_el, {
                defaultDate: this.model.value,
                minDate: this.model.min_date ? new Date(this.model.min_date) : undefined,
                maxDate: this.model.max_date ? new Date(this.model.max_date) : undefined,
                inline: this.model.inline,
                position: this.model.position,
                disable: _convert_date_list(this.model.disabled_dates),
                enable: _convert_date_list(this.model.enabled_dates),
                enableTime: this.model.enable_time,
                enableSeconds: this.model.enable_seconds,
                time_24hr: this.model.military_time,
                dateFormat: this.model.date_format,
                mode: this.model.mode,
                onClose: (selected_dates, date_string, instance) => this._on_close(selected_dates, date_string, instance),
            });
            this._picker.maxDateHasTime = true;
            this._picker.minDateHasTime = true;
        }
        _clear() {
            var _a;
            (_a = this._picker) === null || _a === void 0 ? void 0 : _a.clear();
            this.model.value = null;
        }
        _on_close(_selected_dates, date_string, _instance) {
            if (this.model.mode == "range" && !date_string.includes("to"))
                return;
            this.model.value = date_string;
            this.change_input();
        }
    }
    exports.DatetimePickerView = DatetimePickerView;
    DatetimePickerView.__name__ = "DatetimePickerView";
    class DatetimePicker extends input_widget_1.InputWidget {
        constructor(attrs) {
            super(attrs);
        }
        static init_DatetimePicker() {
            this.prototype.default_view = DatetimePickerView;
            this.define(({ Boolean, String, Array, Tuple, Or, Nullable }) => {
                const DateStr = String;
                const DatesList = Array(Or(DateStr, Tuple(DateStr, DateStr)));
                return {
                    value: [Nullable(String), null],
                    min_date: [Nullable(String), null],
                    max_date: [Nullable(String), null],
                    disabled_dates: [DatesList, []],
                    enabled_dates: [DatesList, []],
                    position: [enums_1.CalendarPosition, "auto"],
                    inline: [Boolean, false],
                    enable_time: [Boolean, true],
                    enable_seconds: [Boolean, true],
                    military_time: [Boolean, true],
                    date_format: [String, "Y-m-d H:i:S"],
                    mode: [String, "single"],
                };
            });
        }
    }
    exports.DatetimePicker = DatetimePicker;
    DatetimePicker.__name__ = "DatetimePicker";
    DatetimePicker.__module__ = "panel.models.datetime_picker";
    DatetimePicker.init_DatetimePicker();
},
"50d3473f3f": /* flatpickr/dist/flatpickr.js */ function _(require, module, exports, __esModule, __esExport) {
    /* flatpickr v4.6.6, @license MIT */
    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
            typeof define === 'function' && define.amd ? define(factory) :
                (global = global || self, global.flatpickr = factory());
    }(this, (function () {
        'use strict';
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.
    
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
    
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        var __assign = function () {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
                for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                    r[k] = a[j];
            return r;
        }
        var HOOKS = [
            "onChange",
            "onClose",
            "onDayCreate",
            "onDestroy",
            "onKeyDown",
            "onMonthChange",
            "onOpen",
            "onParseConfig",
            "onReady",
            "onValueUpdate",
            "onYearChange",
            "onPreCalendarPosition",
        ];
        var defaults = {
            _disable: [],
            _enable: [],
            allowInput: false,
            allowInvalidPreload: false,
            altFormat: "F j, Y",
            altInput: false,
            altInputClass: "form-control input",
            animate: typeof window === "object" &&
                window.navigator.userAgent.indexOf("MSIE") === -1,
            ariaDateFormat: "F j, Y",
            autoFillDefaultTime: true,
            clickOpens: true,
            closeOnSelect: true,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: false,
            enable: [],
            enableSeconds: false,
            enableTime: false,
            errorHandler: function (err) {
                return typeof console !== "undefined" && console.warn(err);
            },
            getWeek: function (givenDate) {
                var date = new Date(givenDate.getTime());
                date.setHours(0, 0, 0, 0);
                // Thursday in current week decides the year.
                date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
                // January 4 is always in week 1.
                var week1 = new Date(date.getFullYear(), 0, 4);
                // Adjust to Thursday in week 1 and count number of weeks from date to week1.
                return (1 +
                    Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                        3 +
                        ((week1.getDay() + 6) % 7)) /
                        7));
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: false,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            monthSelectorType: "dropdown",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: false,
            now: new Date(),
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: undefined,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: false,
            showMonths: 1,
            static: false,
            time_24hr: false,
            weekNumbers: false,
            wrap: false,
        };
        var english = {
            weekdays: {
                shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                longhand: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
            },
            months: {
                shorthand: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                longhand: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function (nth) {
                var s = nth % 100;
                if (s > 3 && s < 21)
                    return "th";
                switch (s % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th";
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"],
            yearAriaLabel: "Year",
            monthAriaLabel: "Month",
            hourAriaLabel: "Hour",
            minuteAriaLabel: "Minute",
            time_24hr: false,
        };
        var pad = function (number, length) {
            if (length === void 0) {
                length = 2;
            }
            return ("000" + number).slice(length * -1);
        };
        var int = function (bool) { return (bool === true ? 1 : 0); };
        /* istanbul ignore next */
        function debounce(func, wait, immediate) {
            if (immediate === void 0) {
                immediate = false;
            }
            var timeout;
            return function () {
                var context = this, args = arguments;
                timeout !== null && clearTimeout(timeout);
                timeout = window.setTimeout(function () {
                    timeout = null;
                    if (!immediate)
                        func.apply(context, args);
                }, wait);
                if (immediate && !timeout)
                    func.apply(context, args);
            };
        }
        var arrayify = function (obj) {
            return obj instanceof Array ? obj : [obj];
        };
        function toggleClass(elem, className, bool) {
            if (bool === true)
                return elem.classList.add(className);
            elem.classList.remove(className);
        }
        function createElement(tag, className, content) {
            var e = window.document.createElement(tag);
            className = className || "";
            content = content || "";
            e.className = className;
            if (content !== undefined)
                e.textContent = content;
            return e;
        }
        function clearNode(node) {
            while (node.firstChild)
                node.removeChild(node.firstChild);
        }
        function findParent(node, condition) {
            if (condition(node))
                return node;
            else if (node.parentNode)
                return findParent(node.parentNode, condition);
            return undefined; // nothing found
        }
        function createNumberInput(inputClassName, opts) {
            var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
            if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
                numInput.type = "number";
            }
            else {
                numInput.type = "text";
                numInput.pattern = "\\d*";
            }
            if (opts !== undefined)
                for (var key in opts)
                    numInput.setAttribute(key, opts[key]);
            wrapper.appendChild(numInput);
            wrapper.appendChild(arrowUp);
            wrapper.appendChild(arrowDown);
            return wrapper;
        }
        function getEventTarget(event) {
            try {
                if (typeof event.composedPath === "function") {
                    var path = event.composedPath();
                    return path[0];
                }
                return event.target;
            }
            catch (error) {
                return event.target;
            }
        }
        var doNothing = function () { return undefined; };
        var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
        var revFormat = {
            D: doNothing,
            F: function (dateObj, monthName, locale) {
                dateObj.setMonth(locale.months.longhand.indexOf(monthName));
            },
            G: function (dateObj, hour) {
                dateObj.setHours(parseFloat(hour));
            },
            H: function (dateObj, hour) {
                dateObj.setHours(parseFloat(hour));
            },
            J: function (dateObj, day) {
                dateObj.setDate(parseFloat(day));
            },
            K: function (dateObj, amPM, locale) {
                dateObj.setHours((dateObj.getHours() % 12) +
                    12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
            },
            M: function (dateObj, shortMonth, locale) {
                dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
            },
            S: function (dateObj, seconds) {
                dateObj.setSeconds(parseFloat(seconds));
            },
            U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
            W: function (dateObj, weekNum, locale) {
                var weekNumber = parseInt(weekNum);
                var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
                date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
                return date;
            },
            Y: function (dateObj, year) {
                dateObj.setFullYear(parseFloat(year));
            },
            Z: function (_, ISODate) { return new Date(ISODate); },
            d: function (dateObj, day) {
                dateObj.setDate(parseFloat(day));
            },
            h: function (dateObj, hour) {
                dateObj.setHours(parseFloat(hour));
            },
            i: function (dateObj, minutes) {
                dateObj.setMinutes(parseFloat(minutes));
            },
            j: function (dateObj, day) {
                dateObj.setDate(parseFloat(day));
            },
            l: doNothing,
            m: function (dateObj, month) {
                dateObj.setMonth(parseFloat(month) - 1);
            },
            n: function (dateObj, month) {
                dateObj.setMonth(parseFloat(month) - 1);
            },
            s: function (dateObj, seconds) {
                dateObj.setSeconds(parseFloat(seconds));
            },
            u: function (_, unixMillSeconds) {
                return new Date(parseFloat(unixMillSeconds));
            },
            w: doNothing,
            y: function (dateObj, year) {
                dateObj.setFullYear(2000 + parseFloat(year));
            },
        };
        var tokenRegex = {
            D: "(\\w+)",
            F: "(\\w+)",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "(\\w+)",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "(\\w+)",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            u: "(.+)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})",
        };
        var formats = {
            // get the date in UTC
            Z: function (date) { return date.toISOString(); },
            // weekday name, short, e.g. Thu
            D: function (date, locale, options) {
                return locale.weekdays.shorthand[formats.w(date, locale, options)];
            },
            // full month name e.g. January
            F: function (date, locale, options) {
                return monthToStr(formats.n(date, locale, options) - 1, false, locale);
            },
            // padded hour 1-12
            G: function (date, locale, options) {
                return pad(formats.h(date, locale, options));
            },
            // hours with leading zero e.g. 03
            H: function (date) { return pad(date.getHours()); },
            // day (1-30) with ordinal suffix e.g. 1st, 2nd
            J: function (date, locale) {
                return locale.ordinal !== undefined
                    ? date.getDate() + locale.ordinal(date.getDate())
                    : date.getDate();
            },
            // AM/PM
            K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
            // shorthand month e.g. Jan, Sep, Oct, etc
            M: function (date, locale) {
                return monthToStr(date.getMonth(), true, locale);
            },
            // seconds 00-59
            S: function (date) { return pad(date.getSeconds()); },
            // unix timestamp
            U: function (date) { return date.getTime() / 1000; },
            W: function (date, _, options) {
                return options.getWeek(date);
            },
            // full year e.g. 2016, padded (0001-9999)
            Y: function (date) { return pad(date.getFullYear(), 4); },
            // day in month, padded (01-30)
            d: function (date) { return pad(date.getDate()); },
            // hour from 1-12 (am/pm)
            h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
            // minutes, padded with leading zero e.g. 09
            i: function (date) { return pad(date.getMinutes()); },
            // day in month (1-30)
            j: function (date) { return date.getDate(); },
            // weekday name, full, e.g. Thursday
            l: function (date, locale) {
                return locale.weekdays.longhand[date.getDay()];
            },
            // padded month number (01-12)
            m: function (date) { return pad(date.getMonth() + 1); },
            // the month number (1-12)
            n: function (date) { return date.getMonth() + 1; },
            // seconds 0-59
            s: function (date) { return date.getSeconds(); },
            // Unix Milliseconds
            u: function (date) { return date.getTime(); },
            // number of the day of the week
            w: function (date) { return date.getDay(); },
            // last two digits of year e.g. 16 for 2016
            y: function (date) { return String(date.getFullYear()).substring(2); },
        };
        var createDateFormatter = function (_a) {
            var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
            return function (dateObj, frmt, overrideLocale) {
                var locale = overrideLocale || l10n;
                if (config.formatDate !== undefined && !isMobile) {
                    return config.formatDate(dateObj, frmt, locale);
                }
                return frmt
                    .split("")
                    .map(function (c, i, arr) {
                    return formats[c] && arr[i - 1] !== "\\"
                        ? formats[c](dateObj, locale, config)
                        : c !== "\\"
                            ? c
                            : "";
                })
                    .join("");
            };
        };
        var createDateParser = function (_a) {
            var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
            return function (date, givenFormat, timeless, customLocale) {
                if (date !== 0 && !date)
                    return undefined;
                var locale = customLocale || l10n;
                var parsedDate;
                var dateOrig = date;
                if (date instanceof Date)
                    parsedDate = new Date(date.getTime());
                else if (typeof date !== "string" &&
                    date.toFixed !== undefined // timestamp
                )
                    // create a copy
                    parsedDate = new Date(date);
                else if (typeof date === "string") {
                    // date string
                    var format = givenFormat || (config || defaults).dateFormat;
                    var datestr = String(date).trim();
                    if (datestr === "today") {
                        parsedDate = new Date();
                        timeless = true;
                    }
                    else if (/Z$/.test(datestr) ||
                        /GMT$/.test(datestr) // datestrings w/ timezone
                    )
                        parsedDate = new Date(date);
                    else if (config && config.parseDate)
                        parsedDate = config.parseDate(date, format);
                    else {
                        parsedDate =
                            !config || !config.noCalendar
                                ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                                : new Date(new Date().setHours(0, 0, 0, 0));
                        var matched = void 0, ops = [];
                        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                            var token_1 = format[i];
                            var isBackSlash = token_1 === "\\";
                            var escaped = format[i - 1] === "\\" || isBackSlash;
                            if (tokenRegex[token_1] && !escaped) {
                                regexStr += tokenRegex[token_1];
                                var match = new RegExp(regexStr).exec(date);
                                if (match && (matched = true)) {
                                    ops[token_1 !== "Y" ? "push" : "unshift"]({
                                        fn: revFormat[token_1],
                                        val: match[++matchIndex],
                                    });
                                }
                            }
                            else if (!isBackSlash)
                                regexStr += "."; // don't really care
                            ops.forEach(function (_a) {
                                var fn = _a.fn, val = _a.val;
                                return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                            });
                        }
                        parsedDate = matched ? parsedDate : undefined;
                    }
                }
                /* istanbul ignore next */
                if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                    config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                    return undefined;
                }
                if (timeless === true)
                    parsedDate.setHours(0, 0, 0, 0);
                return parsedDate;
            };
        };
        /**
         * Compute the difference in dates, measured in ms
         */
        function compareDates(date1, date2, timeless) {
            if (timeless === void 0) {
                timeless = true;
            }
            if (timeless !== false) {
                return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                    new Date(date2.getTime()).setHours(0, 0, 0, 0));
            }
            return date1.getTime() - date2.getTime();
        }
        var isBetween = function (ts, ts1, ts2) {
            return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
        };
        var duration = {
            DAY: 86400000,
        };
        if (typeof Object.assign !== "function") {
            Object.assign = function (target) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (!target) {
                    throw TypeError("Cannot convert undefined or null to object");
                }
                var _loop_1 = function (source) {
                    if (source) {
                        Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                    }
                };
                for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                    var source = args_1[_a];
                    _loop_1(source);
                }
                return target;
            };
        }
        var DEBOUNCED_CHANGE_MS = 300;
        function FlatpickrInstance(element, instanceConfig) {
            var self = {
                config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
                l10n: english,
            };
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
            self._handlers = [];
            self.pluginElements = [];
            self.loadedPlugins = [];
            self._bind = bind;
            self._setHoursFromDate = setHoursFromDate;
            self._positionCalendar = positionCalendar;
            self.changeMonth = changeMonth;
            self.changeYear = changeYear;
            self.clear = clear;
            self.close = close;
            self._createElement = createElement;
            self.destroy = destroy;
            self.isEnabled = isEnabled;
            self.jumpToDate = jumpToDate;
            self.open = open;
            self.redraw = redraw;
            self.set = set;
            self.setDate = setDate;
            self.toggle = toggle;
            function setupHelperFunctions() {
                self.utils = {
                    getDaysInMonth: function (month, yr) {
                        if (month === void 0) {
                            month = self.currentMonth;
                        }
                        if (yr === void 0) {
                            yr = self.currentYear;
                        }
                        if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                            return 29;
                        return self.l10n.daysInMonth[month];
                    },
                };
            }
            function init() {
                self.element = self.input = element;
                self.isOpen = false;
                parseConfig();
                setupLocale();
                setupInputs();
                setupDates();
                setupHelperFunctions();
                if (!self.isMobile)
                    build();
                bindEvents();
                if (self.selectedDates.length || self.config.noCalendar) {
                    if (self.config.enableTime) {
                        setHoursFromDate(self.config.noCalendar
                            ? self.latestSelectedDateObj || self.config.minDate
                            : undefined);
                    }
                    updateValue(false);
                }
                setCalendarWidth();
                var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                /* TODO: investigate this further
            
                  Currently, there is weird positioning behavior in safari causing pages
                  to scroll up. https://github.com/chmln/flatpickr/issues/563
            
                  However, most browsers are not Safari and positioning is expensive when used
                  in scale. https://github.com/chmln/flatpickr/issues/1096
                */
                if (!self.isMobile && isSafari) {
                    positionCalendar();
                }
                triggerEvent("onReady");
            }
            function bindToInstance(fn) {
                return fn.bind(self);
            }
            function setCalendarWidth() {
                var config = self.config;
                if (config.weekNumbers === false && config.showMonths === 1) {
                    return;
                }
                else if (config.noCalendar !== true) {
                    window.requestAnimationFrame(function () {
                        if (self.calendarContainer !== undefined) {
                            self.calendarContainer.style.visibility = "hidden";
                            self.calendarContainer.style.display = "block";
                        }
                        if (self.daysContainer !== undefined) {
                            var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                            self.daysContainer.style.width = daysWidth + "px";
                            self.calendarContainer.style.width =
                                daysWidth +
                                    (self.weekWrapper !== undefined
                                        ? self.weekWrapper.offsetWidth
                                        : 0) +
                                    "px";
                            self.calendarContainer.style.removeProperty("visibility");
                            self.calendarContainer.style.removeProperty("display");
                        }
                    });
                }
            }
            /**
             * The handler for all events targeting the time inputs
             */
            function updateTime(e) {
                if (self.selectedDates.length === 0) {
                    var defaultDate = self.config.minDate !== undefined
                        ? new Date(self.config.minDate.getTime())
                        : new Date();
                    var _a = getDefaultHours(), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
                    defaultDate.setHours(hours, minutes, seconds, 0);
                    self.setDate(defaultDate, false);
                }
                if (e !== undefined && e.type !== "blur") {
                    timeWrapper(e);
                }
                var prevValue = self._input.value;
                setHoursFromInputs();
                updateValue();
                if (self._input.value !== prevValue) {
                    self._debouncedChange();
                }
            }
            function ampm2military(hour, amPM) {
                return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
            }
            function military2ampm(hour) {
                switch (hour % 24) {
                    case 0:
                    case 12:
                        return 12;
                    default:
                        return hour % 12;
                }
            }
            /**
             * Syncs the selected date object time with user's time input
             */
            function setHoursFromInputs() {
                if (self.hourElement === undefined || self.minuteElement === undefined)
                    return;
                var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                    ? (parseInt(self.secondElement.value, 10) || 0) % 60
                    : 0;
                if (self.amPM !== undefined) {
                    hours = ampm2military(hours, self.amPM.textContent);
                }
                var limitMinHours = self.config.minTime !== undefined ||
                    (self.config.minDate &&
                        self.minDateHasTime &&
                        self.latestSelectedDateObj &&
                        compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                            0);
                var limitMaxHours = self.config.maxTime !== undefined ||
                    (self.config.maxDate &&
                        self.maxDateHasTime &&
                        self.latestSelectedDateObj &&
                        compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                            0);
                if (limitMaxHours) {
                    var maxTime = self.config.maxTime !== undefined
                        ? self.config.maxTime
                        : self.config.maxDate;
                    hours = Math.min(hours, maxTime.getHours());
                    if (hours === maxTime.getHours())
                        minutes = Math.min(minutes, maxTime.getMinutes());
                    if (minutes === maxTime.getMinutes())
                        seconds = Math.min(seconds, maxTime.getSeconds());
                }
                if (limitMinHours) {
                    var minTime = self.config.minTime !== undefined
                        ? self.config.minTime
                        : self.config.minDate;
                    hours = Math.max(hours, minTime.getHours());
                    if (hours === minTime.getHours())
                        minutes = Math.max(minutes, minTime.getMinutes());
                    if (minutes === minTime.getMinutes())
                        seconds = Math.max(seconds, minTime.getSeconds());
                }
                setHours(hours, minutes, seconds);
            }
            /**
             * Syncs time input values with a date
             */
            function setHoursFromDate(dateObj) {
                var date = dateObj || self.latestSelectedDateObj;
                if (date) {
                    setHours(date.getHours(), date.getMinutes(), date.getSeconds());
                }
            }
            function getDefaultHours() {
                var hours = self.config.defaultHour;
                var minutes = self.config.defaultMinute;
                var seconds = self.config.defaultSeconds;
                if (self.config.minDate !== undefined) {
                    var minHr = self.config.minDate.getHours();
                    var minMinutes = self.config.minDate.getMinutes();
                    hours = Math.max(hours, minHr);
                    if (hours === minHr)
                        minutes = Math.max(minMinutes, minutes);
                    if (hours === minHr && minutes === minMinutes)
                        seconds = self.config.minDate.getSeconds();
                }
                if (self.config.maxDate !== undefined) {
                    var maxHr = self.config.maxDate.getHours();
                    var maxMinutes = self.config.maxDate.getMinutes();
                    hours = Math.min(hours, maxHr);
                    if (hours === maxHr)
                        minutes = Math.min(maxMinutes, minutes);
                    if (hours === maxHr && minutes === maxMinutes)
                        seconds = self.config.maxDate.getSeconds();
                }
                return { hours: hours, minutes: minutes, seconds: seconds };
            }
            /**
             * Sets the hours, minutes, and optionally seconds
             * of the latest selected date object and the
             * corresponding time inputs
             * @param {Number} hours the hour. whether its military
             *                 or am-pm gets inferred from config
             * @param {Number} minutes the minutes
             * @param {Number} seconds the seconds (optional)
             */
            function setHours(hours, minutes, seconds) {
                if (self.latestSelectedDateObj !== undefined) {
                    self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
                }
                if (!self.hourElement || !self.minuteElement || self.isMobile)
                    return;
                self.hourElement.value = pad(!self.config.time_24hr
                    ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                    : hours);
                self.minuteElement.value = pad(minutes);
                if (self.amPM !== undefined)
                    self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
                if (self.secondElement !== undefined)
                    self.secondElement.value = pad(seconds);
            }
            /**
             * Handles the year input and incrementing events
             * @param {Event} event the keyup or increment event
             */
            function onYearInput(event) {
                var eventTarget = getEventTarget(event);
                var year = parseInt(eventTarget.value) + (event.delta || 0);
                if (year / 1000 > 1 ||
                    (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                    changeYear(year);
                }
            }
            /**
             * Essentially addEventListener + tracking
             * @param {Element} element the element to addEventListener to
             * @param {String} event the event name
             * @param {Function} handler the event handler
             */
            function bind(element, event, handler, options) {
                if (event instanceof Array)
                    return event.forEach(function (ev) { return bind(element, ev, handler, options); });
                if (element instanceof Array)
                    return element.forEach(function (el) { return bind(el, event, handler, options); });
                element.addEventListener(event, handler, options);
                self._handlers.push({
                    element: element,
                    event: event,
                    handler: handler,
                    options: options,
                });
            }
            function triggerChange() {
                triggerEvent("onChange");
            }
            /**
             * Adds all the necessary event listeners
             */
            function bindEvents() {
                if (self.config.wrap) {
                    ["open", "close", "toggle", "clear"].forEach(function (evt) {
                        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                            return bind(el, "click", self[evt]);
                        });
                    });
                }
                if (self.isMobile) {
                    setupMobile();
                    return;
                }
                var debouncedResize = debounce(onResize, 50);
                self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
                if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                    bind(self.daysContainer, "mouseover", function (e) {
                        if (self.config.mode === "range")
                            onMouseOver(getEventTarget(e));
                    });
                bind(window.document.body, "keydown", onKeyDown);
                if (!self.config.inline && !self.config.static)
                    bind(window, "resize", debouncedResize);
                if (window.ontouchstart !== undefined)
                    bind(window.document, "touchstart", documentClick);
                else
                    bind(window.document, "click", documentClick);
                bind(window.document, "focus", documentClick, { capture: true });
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                if (self.daysContainer !== undefined) {
                    bind(self.monthNav, "click", onMonthNavClick);
                    bind(self.monthNav, ["keyup", "increment"], onYearInput);
                    bind(self.daysContainer, "click", selectDate);
                }
                if (self.timeContainer !== undefined &&
                    self.minuteElement !== undefined &&
                    self.hourElement !== undefined) {
                    var selText = function (e) {
                        return getEventTarget(e).select();
                    };
                    bind(self.timeContainer, ["increment"], updateTime);
                    bind(self.timeContainer, "blur", updateTime, { capture: true });
                    bind(self.timeContainer, "click", timeIncrement);
                    bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                    if (self.secondElement !== undefined)
                        bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                    if (self.amPM !== undefined) {
                        bind(self.amPM, "click", function (e) {
                            updateTime(e);
                            triggerChange();
                        });
                    }
                }
                if (self.config.allowInput)
                    bind(self._input, "blur", onBlur);
            }
            /**
             * Set the calendar view to a particular date.
             * @param {Date} jumpDate the date to set the view to
             * @param {boolean} triggerChange if change events should be triggered
             */
            function jumpToDate(jumpDate, triggerChange) {
                var jumpTo = jumpDate !== undefined
                    ? self.parseDate(jumpDate)
                    : self.latestSelectedDateObj ||
                        (self.config.minDate && self.config.minDate > self.now
                            ? self.config.minDate
                            : self.config.maxDate && self.config.maxDate < self.now
                                ? self.config.maxDate
                                : self.now);
                var oldYear = self.currentYear;
                var oldMonth = self.currentMonth;
                try {
                    if (jumpTo !== undefined) {
                        self.currentYear = jumpTo.getFullYear();
                        self.currentMonth = jumpTo.getMonth();
                    }
                }
                catch (e) {
                    /* istanbul ignore next */
                    e.message = "Invalid date supplied: " + jumpTo;
                    self.config.errorHandler(e);
                }
                if (triggerChange && self.currentYear !== oldYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                if (triggerChange &&
                    (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                    triggerEvent("onMonthChange");
                }
                self.redraw();
            }
            /**
             * The up/down arrow handler for time inputs
             * @param {Event} e the click event
             */
            function timeIncrement(e) {
                var eventTarget = getEventTarget(e);
                if (~eventTarget.className.indexOf("arrow"))
                    incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
            }
            /**
             * Increments/decrements the value of input associ-
             * ated with the up/down arrow by dispatching an
             * "increment" event on the input.
             *
             * @param {Event} e the click event
             * @param {Number} delta the diff (usually 1 or -1)
             * @param {Element} inputElem the input element
             */
            function incrementNumInput(e, delta, inputElem) {
                var target = e && getEventTarget(e);
                var input = inputElem ||
                    (target && target.parentNode && target.parentNode.firstChild);
                var event = createEvent("increment");
                event.delta = delta;
                input && input.dispatchEvent(event);
            }
            function build() {
                var fragment = window.document.createDocumentFragment();
                self.calendarContainer = createElement("div", "flatpickr-calendar");
                self.calendarContainer.tabIndex = -1;
                if (!self.config.noCalendar) {
                    fragment.appendChild(buildMonthNav());
                    self.innerContainer = createElement("div", "flatpickr-innerContainer");
                    if (self.config.weekNumbers) {
                        var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                        self.innerContainer.appendChild(weekWrapper);
                        self.weekNumbers = weekNumbers;
                        self.weekWrapper = weekWrapper;
                    }
                    self.rContainer = createElement("div", "flatpickr-rContainer");
                    self.rContainer.appendChild(buildWeekdays());
                    if (!self.daysContainer) {
                        self.daysContainer = createElement("div", "flatpickr-days");
                        self.daysContainer.tabIndex = -1;
                    }
                    buildDays();
                    self.rContainer.appendChild(self.daysContainer);
                    self.innerContainer.appendChild(self.rContainer);
                    fragment.appendChild(self.innerContainer);
                }
                if (self.config.enableTime) {
                    fragment.appendChild(buildTime());
                }
                toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
                toggleClass(self.calendarContainer, "animate", self.config.animate === true);
                toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
                self.calendarContainer.appendChild(fragment);
                var customAppend = self.config.appendTo !== undefined &&
                    self.config.appendTo.nodeType !== undefined;
                if (self.config.inline || self.config.static) {
                    self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                    if (self.config.inline) {
                        if (!customAppend && self.element.parentNode)
                            self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                        else if (self.config.appendTo !== undefined)
                            self.config.appendTo.appendChild(self.calendarContainer);
                    }
                    if (self.config.static) {
                        var wrapper = createElement("div", "flatpickr-wrapper");
                        if (self.element.parentNode)
                            self.element.parentNode.insertBefore(wrapper, self.element);
                        wrapper.appendChild(self.element);
                        if (self.altInput)
                            wrapper.appendChild(self.altInput);
                        wrapper.appendChild(self.calendarContainer);
                    }
                }
                if (!self.config.static && !self.config.inline)
                    (self.config.appendTo !== undefined
                        ? self.config.appendTo
                        : window.document.body).appendChild(self.calendarContainer);
            }
            function createDay(className, date, dayNumber, i) {
                var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
                dayElement.dateObj = date;
                dayElement.$i = i;
                dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
                if (className.indexOf("hidden") === -1 &&
                    compareDates(date, self.now) === 0) {
                    self.todayDateElem = dayElement;
                    dayElement.classList.add("today");
                    dayElement.setAttribute("aria-current", "date");
                }
                if (dateIsEnabled) {
                    dayElement.tabIndex = -1;
                    if (isDateSelected(date)) {
                        dayElement.classList.add("selected");
                        self.selectedDateElem = dayElement;
                        if (self.config.mode === "range") {
                            toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                                compareDates(date, self.selectedDates[0], true) === 0);
                            toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                                compareDates(date, self.selectedDates[1], true) === 0);
                            if (className === "nextMonthDay")
                                dayElement.classList.add("inRange");
                        }
                    }
                }
                else {
                    dayElement.classList.add("flatpickr-disabled");
                }
                if (self.config.mode === "range") {
                    if (isDateInRange(date) && !isDateSelected(date))
                        dayElement.classList.add("inRange");
                }
                if (self.weekNumbers &&
                    self.config.showMonths === 1 &&
                    className !== "prevMonthDay" &&
                    dayNumber % 7 === 1) {
                    self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
                }
                triggerEvent("onDayCreate", dayElement);
                return dayElement;
            }
            function focusOnDayElem(targetNode) {
                targetNode.focus();
                if (self.config.mode === "range")
                    onMouseOver(targetNode);
            }
            function getFirstAvailableDay(delta) {
                var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
                var endMonth = delta > 0 ? self.config.showMonths : -1;
                for (var m = startMonth; m != endMonth; m += delta) {
                    var month = self.daysContainer.children[m];
                    var startIndex = delta > 0 ? 0 : month.children.length - 1;
                    var endIndex = delta > 0 ? month.children.length : -1;
                    for (var i = startIndex; i != endIndex; i += delta) {
                        var c = month.children[i];
                        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                            return c;
                    }
                }
                return undefined;
            }
            function getNextAvailableDay(current, delta) {
                var givenMonth = current.className.indexOf("Month") === -1
                    ? current.dateObj.getMonth()
                    : self.currentMonth;
                var endMonth = delta > 0 ? self.config.showMonths : -1;
                var loopDelta = delta > 0 ? 1 : -1;
                for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                    var month = self.daysContainer.children[m];
                    var startIndex = givenMonth - self.currentMonth === m
                        ? current.$i + delta
                        : delta < 0
                            ? month.children.length - 1
                            : 0;
                    var numMonthDays = month.children.length;
                    for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                        var c = month.children[i];
                        if (c.className.indexOf("hidden") === -1 &&
                            isEnabled(c.dateObj) &&
                            Math.abs(current.$i - i) >= Math.abs(delta))
                            return focusOnDayElem(c);
                    }
                }
                self.changeMonth(loopDelta);
                focusOnDay(getFirstAvailableDay(loopDelta), 0);
                return undefined;
            }
            function focusOnDay(current, offset) {
                var dayFocused = isInView(document.activeElement || document.body);
                var startElem = current !== undefined
                    ? current
                    : dayFocused
                        ? document.activeElement
                        : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                            ? self.selectedDateElem
                            : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                                ? self.todayDateElem
                                : getFirstAvailableDay(offset > 0 ? 1 : -1);
                if (startElem === undefined) {
                    self._input.focus();
                }
                else if (!dayFocused) {
                    focusOnDayElem(startElem);
                }
                else {
                    getNextAvailableDay(startElem, offset);
                }
            }
            function buildMonthDays(year, month) {
                var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
                var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
                var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
                var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
                // prepend days from the ending of previous month
                for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                    days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
                }
                // Start at 1 since there is no 0th day
                for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                    days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
                }
                // append days from the next month
                for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                    (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                    days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
                }
                //updateNavigationCurrentMonth();
                var dayContainer = createElement("div", "dayContainer");
                dayContainer.appendChild(days);
                return dayContainer;
            }
            function buildDays() {
                if (self.daysContainer === undefined) {
                    return;
                }
                clearNode(self.daysContainer);
                // TODO: week numbers for each month
                if (self.weekNumbers)
                    clearNode(self.weekNumbers);
                var frag = document.createDocumentFragment();
                for (var i = 0; i < self.config.showMonths; i++) {
                    var d = new Date(self.currentYear, self.currentMonth, 1);
                    d.setMonth(self.currentMonth + i);
                    frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
                }
                self.daysContainer.appendChild(frag);
                self.days = self.daysContainer.firstChild;
                if (self.config.mode === "range" && self.selectedDates.length === 1) {
                    onMouseOver();
                }
            }
            function buildMonthSwitch() {
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType !== "dropdown")
                    return;
                var shouldBuildMonth = function (month) {
                    if (self.config.minDate !== undefined &&
                        self.currentYear === self.config.minDate.getFullYear() &&
                        month < self.config.minDate.getMonth()) {
                        return false;
                    }
                    return !(self.config.maxDate !== undefined &&
                        self.currentYear === self.config.maxDate.getFullYear() &&
                        month > self.config.maxDate.getMonth());
                };
                self.monthsDropdownContainer.tabIndex = -1;
                self.monthsDropdownContainer.innerHTML = "";
                for (var i = 0; i < 12; i++) {
                    if (!shouldBuildMonth(i))
                        continue;
                    var month = createElement("option", "flatpickr-monthDropdown-month");
                    month.value = new Date(self.currentYear, i).getMonth().toString();
                    month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                    month.tabIndex = -1;
                    if (self.currentMonth === i) {
                        month.selected = true;
                    }
                    self.monthsDropdownContainer.appendChild(month);
                }
            }
            function buildMonth() {
                var container = createElement("div", "flatpickr-month");
                var monthNavFragment = window.document.createDocumentFragment();
                var monthElement;
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    monthElement = createElement("span", "cur-month");
                }
                else {
                    self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                    self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
                    bind(self.monthsDropdownContainer, "change", function (e) {
                        var target = getEventTarget(e);
                        var selectedMonth = parseInt(target.value, 10);
                        self.changeMonth(selectedMonth - self.currentMonth);
                        triggerEvent("onMonthChange");
                    });
                    buildMonthSwitch();
                    monthElement = self.monthsDropdownContainer;
                }
                var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
                var yearElement = yearInput.getElementsByTagName("input")[0];
                yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
                if (self.config.minDate) {
                    yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
                }
                if (self.config.maxDate) {
                    yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                    yearElement.disabled =
                        !!self.config.minDate &&
                            self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
                }
                var currentMonth = createElement("div", "flatpickr-current-month");
                currentMonth.appendChild(monthElement);
                currentMonth.appendChild(yearInput);
                monthNavFragment.appendChild(currentMonth);
                container.appendChild(monthNavFragment);
                return {
                    container: container,
                    yearElement: yearElement,
                    monthElement: monthElement,
                };
            }
            function buildMonths() {
                clearNode(self.monthNav);
                self.monthNav.appendChild(self.prevMonthNav);
                if (self.config.showMonths) {
                    self.yearElements = [];
                    self.monthElements = [];
                }
                for (var m = self.config.showMonths; m--;) {
                    var month = buildMonth();
                    self.yearElements.push(month.yearElement);
                    self.monthElements.push(month.monthElement);
                    self.monthNav.appendChild(month.container);
                }
                self.monthNav.appendChild(self.nextMonthNav);
            }
            function buildMonthNav() {
                self.monthNav = createElement("div", "flatpickr-months");
                self.yearElements = [];
                self.monthElements = [];
                self.prevMonthNav = createElement("span", "flatpickr-prev-month");
                self.prevMonthNav.innerHTML = self.config.prevArrow;
                self.nextMonthNav = createElement("span", "flatpickr-next-month");
                self.nextMonthNav.innerHTML = self.config.nextArrow;
                buildMonths();
                Object.defineProperty(self, "_hidePrevMonthArrow", {
                    get: function () { return self.__hidePrevMonthArrow; },
                    set: function (bool) {
                        if (self.__hidePrevMonthArrow !== bool) {
                            toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                            self.__hidePrevMonthArrow = bool;
                        }
                    },
                });
                Object.defineProperty(self, "_hideNextMonthArrow", {
                    get: function () { return self.__hideNextMonthArrow; },
                    set: function (bool) {
                        if (self.__hideNextMonthArrow !== bool) {
                            toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                            self.__hideNextMonthArrow = bool;
                        }
                    },
                });
                self.currentYearElement = self.yearElements[0];
                updateNavigationCurrentMonth();
                return self.monthNav;
            }
            function buildTime() {
                self.calendarContainer.classList.add("hasTime");
                if (self.config.noCalendar)
                    self.calendarContainer.classList.add("noCalendar");
                self.timeContainer = createElement("div", "flatpickr-time");
                self.timeContainer.tabIndex = -1;
                var separator = createElement("span", "flatpickr-time-separator", ":");
                var hourInput = createNumberInput("flatpickr-hour", {
                    "aria-label": self.l10n.hourAriaLabel,
                });
                self.hourElement = hourInput.getElementsByTagName("input")[0];
                var minuteInput = createNumberInput("flatpickr-minute", {
                    "aria-label": self.l10n.minuteAriaLabel,
                });
                self.minuteElement = minuteInput.getElementsByTagName("input")[0];
                self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
                self.hourElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getHours()
                    : self.config.time_24hr
                        ? self.config.defaultHour
                        : military2ampm(self.config.defaultHour));
                self.minuteElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getMinutes()
                    : self.config.defaultMinute);
                self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
                self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
                self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
                self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
                self.minuteElement.setAttribute("min", "0");
                self.minuteElement.setAttribute("max", "59");
                self.timeContainer.appendChild(hourInput);
                self.timeContainer.appendChild(separator);
                self.timeContainer.appendChild(minuteInput);
                if (self.config.time_24hr)
                    self.timeContainer.classList.add("time24hr");
                if (self.config.enableSeconds) {
                    self.timeContainer.classList.add("hasSeconds");
                    var secondInput = createNumberInput("flatpickr-second");
                    self.secondElement = secondInput.getElementsByTagName("input")[0];
                    self.secondElement.value = pad(self.latestSelectedDateObj
                        ? self.latestSelectedDateObj.getSeconds()
                        : self.config.defaultSeconds);
                    self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                    self.secondElement.setAttribute("min", "0");
                    self.secondElement.setAttribute("max", "59");
                    self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                    self.timeContainer.appendChild(secondInput);
                }
                if (!self.config.time_24hr) {
                    // add self.amPM if appropriate
                    self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                        ? self.hourElement.value
                        : self.config.defaultHour) > 11)]);
                    self.amPM.title = self.l10n.toggleTitle;
                    self.amPM.tabIndex = -1;
                    self.timeContainer.appendChild(self.amPM);
                }
                return self.timeContainer;
            }
            function buildWeekdays() {
                if (!self.weekdayContainer)
                    self.weekdayContainer = createElement("div", "flatpickr-weekdays");
                else
                    clearNode(self.weekdayContainer);
                for (var i = self.config.showMonths; i--;) {
                    var container = createElement("div", "flatpickr-weekdaycontainer");
                    self.weekdayContainer.appendChild(container);
                }
                updateWeekdays();
                return self.weekdayContainer;
            }
            function updateWeekdays() {
                if (!self.weekdayContainer) {
                    return;
                }
                var firstDayOfWeek = self.l10n.firstDayOfWeek;
                var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
                if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                    weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
                }
                for (var i = self.config.showMonths; i--;) {
                    self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
                }
            }
            /* istanbul ignore next */
            function buildWeeks() {
                self.calendarContainer.classList.add("hasWeeks");
                var weekWrapper = createElement("div", "flatpickr-weekwrapper");
                weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
                var weekNumbers = createElement("div", "flatpickr-weeks");
                weekWrapper.appendChild(weekNumbers);
                return {
                    weekWrapper: weekWrapper,
                    weekNumbers: weekNumbers,
                };
            }
            function changeMonth(value, isOffset) {
                if (isOffset === void 0) {
                    isOffset = true;
                }
                var delta = isOffset ? value : value - self.currentMonth;
                if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                    (delta > 0 && self._hideNextMonthArrow === true))
                    return;
                self.currentMonth += delta;
                if (self.currentMonth < 0 || self.currentMonth > 11) {
                    self.currentYear += self.currentMonth > 11 ? 1 : -1;
                    self.currentMonth = (self.currentMonth + 12) % 12;
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                buildDays();
                triggerEvent("onMonthChange");
                updateNavigationCurrentMonth();
            }
            function clear(triggerChangeEvent, toInitial) {
                if (triggerChangeEvent === void 0) {
                    triggerChangeEvent = true;
                }
                if (toInitial === void 0) {
                    toInitial = true;
                }
                self.input.value = "";
                if (self.altInput !== undefined)
                    self.altInput.value = "";
                if (self.mobileInput !== undefined)
                    self.mobileInput.value = "";
                self.selectedDates = [];
                self.latestSelectedDateObj = undefined;
                if (toInitial === true) {
                    self.currentYear = self._initialDate.getFullYear();
                    self.currentMonth = self._initialDate.getMonth();
                }
                if (self.config.enableTime === true) {
                    var _a = getDefaultHours(), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
                    setHours(hours, minutes, seconds);
                }
                self.redraw();
                if (triggerChangeEvent)
                    // triggerChangeEvent is true (default) or an Event
                    triggerEvent("onChange");
            }
            function close() {
                self.isOpen = false;
                if (!self.isMobile) {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.classList.remove("open");
                    }
                    if (self._input !== undefined) {
                        self._input.classList.remove("active");
                    }
                }
                triggerEvent("onClose");
            }
            function destroy() {
                if (self.config !== undefined)
                    triggerEvent("onDestroy");
                for (var i = self._handlers.length; i--;) {
                    var h = self._handlers[i];
                    h.element.removeEventListener(h.event, h.handler, h.options);
                }
                self._handlers = [];
                if (self.mobileInput) {
                    if (self.mobileInput.parentNode)
                        self.mobileInput.parentNode.removeChild(self.mobileInput);
                    self.mobileInput = undefined;
                }
                else if (self.calendarContainer && self.calendarContainer.parentNode) {
                    if (self.config.static && self.calendarContainer.parentNode) {
                        var wrapper = self.calendarContainer.parentNode;
                        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                        if (wrapper.parentNode) {
                            while (wrapper.firstChild)
                                wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                            wrapper.parentNode.removeChild(wrapper);
                        }
                    }
                    else
                        self.calendarContainer.parentNode.removeChild(self.calendarContainer);
                }
                if (self.altInput) {
                    self.input.type = "text";
                    if (self.altInput.parentNode)
                        self.altInput.parentNode.removeChild(self.altInput);
                    delete self.altInput;
                }
                if (self.input) {
                    self.input.type = self.input._type;
                    self.input.classList.remove("flatpickr-input");
                    self.input.removeAttribute("readonly");
                }
                [
                    "_showTimeInput",
                    "latestSelectedDateObj",
                    "_hideNextMonthArrow",
                    "_hidePrevMonthArrow",
                    "__hideNextMonthArrow",
                    "__hidePrevMonthArrow",
                    "isMobile",
                    "isOpen",
                    "selectedDateElem",
                    "minDateHasTime",
                    "maxDateHasTime",
                    "days",
                    "daysContainer",
                    "_input",
                    "_positionElement",
                    "innerContainer",
                    "rContainer",
                    "monthNav",
                    "todayDateElem",
                    "calendarContainer",
                    "weekdayContainer",
                    "prevMonthNav",
                    "nextMonthNav",
                    "monthsDropdownContainer",
                    "currentMonthElement",
                    "currentYearElement",
                    "navigationCurrentMonth",
                    "selectedDateElem",
                    "config",
                ].forEach(function (k) {
                    try {
                        delete self[k];
                    }
                    catch (_) { }
                });
            }
            function isCalendarElem(elem) {
                if (self.config.appendTo && self.config.appendTo.contains(elem))
                    return true;
                return self.calendarContainer.contains(elem);
            }
            function documentClick(e) {
                if (self.isOpen && !self.config.inline) {
                    var eventTarget_1 = getEventTarget(e);
                    var isCalendarElement = isCalendarElem(eventTarget_1);
                    var isInput = eventTarget_1 === self.input ||
                        eventTarget_1 === self.altInput ||
                        self.element.contains(eventTarget_1) ||
                        // web components
                        // e.path is not present in all browsers. circumventing typechecks
                        (e.path &&
                            e.path.indexOf &&
                            (~e.path.indexOf(self.input) ||
                                ~e.path.indexOf(self.altInput)));
                    var lostFocus = e.type === "blur"
                        ? isInput &&
                            e.relatedTarget &&
                            !isCalendarElem(e.relatedTarget)
                        : !isInput &&
                            !isCalendarElement &&
                            !isCalendarElem(e.relatedTarget);
                    var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                        return elem.contains(eventTarget_1);
                    });
                    if (lostFocus && isIgnored) {
                        if (self.timeContainer !== undefined &&
                            self.minuteElement !== undefined &&
                            self.hourElement !== undefined &&
                            self.input.value !== "" &&
                            self.input.value !== undefined) {
                            updateTime();
                        }
                        self.close();
                        if (self.config &&
                            self.config.mode === "range" &&
                            self.selectedDates.length === 1) {
                            self.clear(false);
                            self.redraw();
                        }
                    }
                }
            }
            function changeYear(newYear) {
                if (!newYear ||
                    (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                    (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                    return;
                var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
                self.currentYear = newYearNum || self.currentYear;
                if (self.config.maxDate &&
                    self.currentYear === self.config.maxDate.getFullYear()) {
                    self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
                }
                else if (self.config.minDate &&
                    self.currentYear === self.config.minDate.getFullYear()) {
                    self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
                }
                if (isNewYear) {
                    self.redraw();
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
            }
            function isEnabled(date, timeless) {
                if (timeless === void 0) {
                    timeless = true;
                }
                var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
                if ((self.config.minDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                    (self.config.maxDate &&
                        dateToCheck &&
                        compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                    return false;
                if (self.config.enable.length === 0 && self.config.disable.length === 0)
                    return true;
                if (dateToCheck === undefined)
                    return false;
                var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
                for (var i = 0, d = void 0; i < array.length; i++) {
                    d = array[i];
                    if (typeof d === "function" &&
                        d(dateToCheck) // disabled by function
                    )
                        return bool;
                    else if (d instanceof Date &&
                        dateToCheck !== undefined &&
                        d.getTime() === dateToCheck.getTime())
                        // disabled by date
                        return bool;
                    else if (typeof d === "string" && dateToCheck !== undefined) {
                        // disabled by date string
                        var parsed = self.parseDate(d, undefined, true);
                        return parsed && parsed.getTime() === dateToCheck.getTime()
                            ? bool
                            : !bool;
                    }
                    else if (
                    // disabled by range
                    typeof d === "object" &&
                        dateToCheck !== undefined &&
                        d.from &&
                        d.to &&
                        dateToCheck.getTime() >= d.from.getTime() &&
                        dateToCheck.getTime() <= d.to.getTime())
                        return bool;
                }
                return !bool;
            }
            function isInView(elem) {
                if (self.daysContainer !== undefined)
                    return (elem.className.indexOf("hidden") === -1 &&
                        elem.className.indexOf("flatpickr-disabled") === -1 &&
                        self.daysContainer.contains(elem));
                return false;
            }
            function onBlur(e) {
                var isInput = e.target === self._input;
                if (isInput &&
                    !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
                    self.setDate(self._input.value, true, e.target === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                }
            }
            function onKeyDown(e) {
                // e.key                      e.keyCode
                // "Backspace"                        8
                // "Tab"                              9
                // "Enter"                           13
                // "Escape"     (IE "Esc")           27
                // "ArrowLeft"  (IE "Left")          37
                // "ArrowUp"    (IE "Up")            38
                // "ArrowRight" (IE "Right")         39
                // "ArrowDown"  (IE "Down")          40
                // "Delete"     (IE "Del")           46
                var eventTarget = getEventTarget(e);
                var isInput = self.config.wrap
                    ? element.contains(eventTarget)
                    : eventTarget === self._input;
                var allowInput = self.config.allowInput;
                var allowKeydown = self.isOpen && (!allowInput || !isInput);
                var allowInlineKeydown = self.config.inline && isInput && !allowInput;
                if (e.keyCode === 13 && isInput) {
                    if (allowInput) {
                        self.setDate(self._input.value, true, eventTarget === self.altInput
                            ? self.config.altFormat
                            : self.config.dateFormat);
                        return eventTarget.blur();
                    }
                    else {
                        self.open();
                    }
                }
                else if (isCalendarElem(eventTarget) ||
                    allowKeydown ||
                    allowInlineKeydown) {
                    var isTimeObj = !!self.timeContainer &&
                        self.timeContainer.contains(eventTarget);
                    switch (e.keyCode) {
                        case 13:
                            if (isTimeObj) {
                                e.preventDefault();
                                updateTime();
                                focusAndClose();
                            }
                            else
                                selectDate(e);
                            break;
                        case 27: // escape
                            e.preventDefault();
                            focusAndClose();
                            break;
                        case 8:
                        case 46:
                            if (isInput && !self.config.allowInput) {
                                e.preventDefault();
                                self.clear();
                            }
                            break;
                        case 37:
                        case 39:
                            if (!isTimeObj && !isInput) {
                                e.preventDefault();
                                if (self.daysContainer !== undefined &&
                                    (allowInput === false ||
                                        (document.activeElement && isInView(document.activeElement)))) {
                                    var delta_1 = e.keyCode === 39 ? 1 : -1;
                                    if (!e.ctrlKey)
                                        focusOnDay(undefined, delta_1);
                                    else {
                                        e.stopPropagation();
                                        changeMonth(delta_1);
                                        focusOnDay(getFirstAvailableDay(1), 0);
                                    }
                                }
                            }
                            else if (self.hourElement)
                                self.hourElement.focus();
                            break;
                        case 38:
                        case 40:
                            e.preventDefault();
                            var delta = e.keyCode === 40 ? 1 : -1;
                            if ((self.daysContainer &&
                                eventTarget.$i !== undefined) ||
                                eventTarget === self.input ||
                                eventTarget === self.altInput) {
                                if (e.ctrlKey) {
                                    e.stopPropagation();
                                    changeYear(self.currentYear - delta);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                                else if (!isTimeObj)
                                    focusOnDay(undefined, delta * 7);
                            }
                            else if (eventTarget === self.currentYearElement) {
                                changeYear(self.currentYear - delta);
                            }
                            else if (self.config.enableTime) {
                                if (!isTimeObj && self.hourElement)
                                    self.hourElement.focus();
                                updateTime(e);
                                self._debouncedChange();
                            }
                            break;
                        case 9:
                            if (isTimeObj) {
                                var elems = [
                                    self.hourElement,
                                    self.minuteElement,
                                    self.secondElement,
                                    self.amPM,
                                ]
                                    .concat(self.pluginElements)
                                    .filter(function (x) { return x; });
                                var i = elems.indexOf(eventTarget);
                                if (i !== -1) {
                                    var target = elems[i + (e.shiftKey ? -1 : 1)];
                                    e.preventDefault();
                                    (target || self._input).focus();
                                }
                            }
                            else if (!self.config.noCalendar &&
                                self.daysContainer &&
                                self.daysContainer.contains(eventTarget) &&
                                e.shiftKey) {
                                e.preventDefault();
                                self._input.focus();
                            }
                            break;
                    }
                }
                if (self.amPM !== undefined && eventTarget === self.amPM) {
                    switch (e.key) {
                        case self.l10n.amPM[0].charAt(0):
                        case self.l10n.amPM[0].charAt(0).toLowerCase():
                            self.amPM.textContent = self.l10n.amPM[0];
                            setHoursFromInputs();
                            updateValue();
                            break;
                        case self.l10n.amPM[1].charAt(0):
                        case self.l10n.amPM[1].charAt(0).toLowerCase():
                            self.amPM.textContent = self.l10n.amPM[1];
                            setHoursFromInputs();
                            updateValue();
                            break;
                    }
                }
                if (isInput || isCalendarElem(eventTarget)) {
                    triggerEvent("onKeyDown", e);
                }
            }
            function onMouseOver(elem) {
                if (self.selectedDates.length !== 1 ||
                    (elem &&
                        (!elem.classList.contains("flatpickr-day") ||
                            elem.classList.contains("flatpickr-disabled"))))
                    return;
                var hoverDate = elem
                    ? elem.dateObj.getTime()
                    : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
                var containsDisabled = false;
                var minRange = 0, maxRange = 0;
                for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                    if (!isEnabled(new Date(t), true)) {
                        containsDisabled =
                            containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                        if (t < initialDate && (!minRange || t > minRange))
                            minRange = t;
                        else if (t > initialDate && (!maxRange || t < maxRange))
                            maxRange = t;
                    }
                }
                for (var m = 0; m < self.config.showMonths; m++) {
                    var month = self.daysContainer.children[m];
                    var _loop_1 = function (i, l) {
                        var dayElem = month.children[i], date = dayElem.dateObj;
                        var timestamp = date.getTime();
                        var outOfRange = (minRange > 0 && timestamp < minRange) ||
                            (maxRange > 0 && timestamp > maxRange);
                        if (outOfRange) {
                            dayElem.classList.add("notAllowed");
                            ["inRange", "startRange", "endRange"].forEach(function (c) {
                                dayElem.classList.remove(c);
                            });
                            return "continue";
                        }
                        else if (containsDisabled && !outOfRange)
                            return "continue";
                        ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        if (elem !== undefined) {
                            elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                                ? "startRange"
                                : "endRange");
                            if (initialDate < hoverDate && timestamp === initialDate)
                                dayElem.classList.add("startRange");
                            else if (initialDate > hoverDate && timestamp === initialDate)
                                dayElem.classList.add("endRange");
                            if (timestamp >= minRange &&
                                (maxRange === 0 || timestamp <= maxRange) &&
                                isBetween(timestamp, initialDate, hoverDate))
                                dayElem.classList.add("inRange");
                        }
                    };
                    for (var i = 0, l = month.children.length; i < l; i++) {
                        _loop_1(i, l);
                    }
                }
            }
            function onResize() {
                if (self.isOpen && !self.config.static && !self.config.inline)
                    positionCalendar();
            }
            function open(e, positionElement) {
                if (positionElement === void 0) {
                    positionElement = self._positionElement;
                }
                if (self.isMobile === true) {
                    if (e) {
                        e.preventDefault();
                        var eventTarget = getEventTarget(e);
                        eventTarget && eventTarget.blur();
                    }
                    if (self.mobileInput !== undefined) {
                        self.mobileInput.focus();
                        self.mobileInput.click();
                    }
                    triggerEvent("onOpen");
                    return;
                }
                if (self._input.disabled || self.config.inline)
                    return;
                var wasOpen = self.isOpen;
                self.isOpen = true;
                if (!wasOpen) {
                    self.calendarContainer.classList.add("open");
                    self._input.classList.add("active");
                    triggerEvent("onOpen");
                    positionCalendar(positionElement);
                }
                if (self.config.enableTime === true && self.config.noCalendar === true) {
                    if (self.config.allowInput === false &&
                        (e === undefined ||
                            !self.timeContainer.contains(e.relatedTarget))) {
                        setTimeout(function () { return self.hourElement.select(); }, 50);
                    }
                }
            }
            function minMaxDateSetter(type) {
                return function (date) {
                    var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                    var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                    if (dateObj !== undefined) {
                        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                            dateObj.getHours() > 0 ||
                                dateObj.getMinutes() > 0 ||
                                dateObj.getSeconds() > 0;
                    }
                    if (self.selectedDates) {
                        self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                        if (!self.selectedDates.length && type === "min")
                            setHoursFromDate(dateObj);
                        updateValue();
                    }
                    if (self.daysContainer) {
                        redraw();
                        if (dateObj !== undefined)
                            self.currentYearElement[type] = dateObj.getFullYear().toString();
                        else
                            self.currentYearElement.removeAttribute(type);
                        self.currentYearElement.disabled =
                            !!inverseDateObj &&
                                dateObj !== undefined &&
                                inverseDateObj.getFullYear() === dateObj.getFullYear();
                    }
                };
            }
            function parseConfig() {
                var boolOpts = [
                    "wrap",
                    "weekNumbers",
                    "allowInput",
                    "allowInvalidPreload",
                    "clickOpens",
                    "time_24hr",
                    "enableTime",
                    "noCalendar",
                    "altInput",
                    "shorthandCurrentMonth",
                    "inline",
                    "static",
                    "enableSeconds",
                    "disableMobile",
                ];
                var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
                var formats = {};
                self.config.parseDate = userConfig.parseDate;
                self.config.formatDate = userConfig.formatDate;
                Object.defineProperty(self.config, "enable", {
                    get: function () { return self.config._enable; },
                    set: function (dates) {
                        self.config._enable = parseDateRules(dates);
                    },
                });
                Object.defineProperty(self.config, "disable", {
                    get: function () { return self.config._disable; },
                    set: function (dates) {
                        self.config._disable = parseDateRules(dates);
                    },
                });
                var timeMode = userConfig.mode === "time";
                if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                    var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                    formats.dateFormat =
                        userConfig.noCalendar || timeMode
                            ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                            : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
                }
                if (userConfig.altInput &&
                    (userConfig.enableTime || timeMode) &&
                    !userConfig.altFormat) {
                    var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                    formats.altFormat =
                        userConfig.noCalendar || timeMode
                            ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                            : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
                }
                Object.defineProperty(self.config, "minDate", {
                    get: function () { return self.config._minDate; },
                    set: minMaxDateSetter("min"),
                });
                Object.defineProperty(self.config, "maxDate", {
                    get: function () { return self.config._maxDate; },
                    set: minMaxDateSetter("max"),
                });
                var minMaxTimeSetter = function (type) {
                    return function (val) {
                        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
                    };
                };
                Object.defineProperty(self.config, "minTime", {
                    get: function () { return self.config._minTime; },
                    set: minMaxTimeSetter("min"),
                });
                Object.defineProperty(self.config, "maxTime", {
                    get: function () { return self.config._maxTime; },
                    set: minMaxTimeSetter("max"),
                });
                if (userConfig.mode === "time") {
                    self.config.noCalendar = true;
                    self.config.enableTime = true;
                }
                Object.assign(self.config, formats, userConfig);
                for (var i = 0; i < boolOpts.length; i++)
                    // https://github.com/microsoft/TypeScript/issues/31663
                    self.config[boolOpts[i]] =
                        self.config[boolOpts[i]] === true ||
                            self.config[boolOpts[i]] === "true";
                HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                    self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
                });
                self.isMobile =
                    !self.config.disableMobile &&
                        !self.config.inline &&
                        self.config.mode === "single" &&
                        !self.config.disable.length &&
                        !self.config.enable.length &&
                        !self.config.weekNumbers &&
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                for (var i = 0; i < self.config.plugins.length; i++) {
                    var pluginConf = self.config.plugins[i](self) || {};
                    for (var key in pluginConf) {
                        if (HOOKS.indexOf(key) > -1) {
                            self.config[key] = arrayify(pluginConf[key])
                                .map(bindToInstance)
                                .concat(self.config[key]);
                        }
                        else if (typeof userConfig[key] === "undefined")
                            self.config[key] = pluginConf[key];
                    }
                }
                if (!userConfig.altInputClass) {
                    self.config.altInputClass =
                        getInputElem().className + " " + self.config.altInputClass;
                }
                triggerEvent("onParseConfig");
            }
            function getInputElem() {
                return self.config.wrap
                    ? element.querySelector("[data-input]")
                    : element;
            }
            function setupLocale() {
                if (typeof self.config.locale !== "object" &&
                    typeof flatpickr.l10ns[self.config.locale] === "undefined")
                    self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
                self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
                    ? self.config.locale
                    : self.config.locale !== "default"
                        ? flatpickr.l10ns[self.config.locale]
                        : undefined));
                tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
                var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
                if (userConfig.time_24hr === undefined &&
                    flatpickr.defaultConfig.time_24hr === undefined) {
                    self.config.time_24hr = self.l10n.time_24hr;
                }
                self.formatDate = createDateFormatter(self);
                self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
            }
            function positionCalendar(customPositionElement) {
                if (self.calendarContainer === undefined)
                    return;
                triggerEvent("onPreCalendarPosition");
                var positionElement = customPositionElement || self._positionElement;
                var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                    (configPosVertical !== "below" &&
                        distanceFromBottom < calendarHeight &&
                        inputBounds.top > calendarHeight);
                var top = window.pageYOffset +
                    inputBounds.top +
                    (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
                toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
                toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
                if (self.config.inline)
                    return;
                var left = window.pageXOffset + inputBounds.left;
                var isCenter = false;
                var isRight = false;
                if (configPosHorizontal === "center") {
                    left -= (calendarWidth - inputBounds.width) / 2;
                    isCenter = true;
                }
                else if (configPosHorizontal === "right") {
                    left -= calendarWidth - inputBounds.width;
                    isRight = true;
                }
                toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
                toggleClass(self.calendarContainer, "arrowCenter", isCenter);
                toggleClass(self.calendarContainer, "arrowRight", isRight);
                var right = window.document.body.offsetWidth -
                    (window.pageXOffset + inputBounds.right);
                var rightMost = left + calendarWidth > window.document.body.offsetWidth;
                var centerMost = right + calendarWidth > window.document.body.offsetWidth;
                toggleClass(self.calendarContainer, "rightMost", rightMost);
                if (self.config.static)
                    return;
                self.calendarContainer.style.top = top + "px";
                if (!rightMost) {
                    self.calendarContainer.style.left = left + "px";
                    self.calendarContainer.style.right = "auto";
                }
                else if (!centerMost) {
                    self.calendarContainer.style.left = "auto";
                    self.calendarContainer.style.right = right + "px";
                }
                else {
                    var doc = getDocumentStyleSheet();
                    // some testing environments don't have css support
                    if (doc === undefined)
                        return;
                    var bodyWidth = window.document.body.offsetWidth;
                    var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                    var centerBefore = ".flatpickr-calendar.centerMost:before";
                    var centerAfter = ".flatpickr-calendar.centerMost:after";
                    var centerIndex = doc.cssRules.length;
                    var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                    toggleClass(self.calendarContainer, "rightMost", false);
                    toggleClass(self.calendarContainer, "centerMost", true);
                    doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                    self.calendarContainer.style.left = centerLeft + "px";
                    self.calendarContainer.style.right = "auto";
                }
            }
            function getDocumentStyleSheet() {
                var editableSheet = null;
                for (var i = 0; i < document.styleSheets.length; i++) {
                    var sheet = document.styleSheets[i];
                    try {
                        sheet.cssRules;
                    }
                    catch (err) {
                        continue;
                    }
                    editableSheet = sheet;
                    break;
                }
                return editableSheet != null ? editableSheet : createStyleSheet();
            }
            function createStyleSheet() {
                var style = document.createElement("style");
                document.head.appendChild(style);
                return style.sheet;
            }
            function redraw() {
                if (self.config.noCalendar || self.isMobile)
                    return;
                buildMonthSwitch();
                updateNavigationCurrentMonth();
                buildDays();
            }
            function focusAndClose() {
                self._input.focus();
                if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                    navigator.msMaxTouchPoints !== undefined) {
                    // hack - bugs in the way IE handles focus keeps the calendar open
                    setTimeout(self.close, 0);
                }
                else {
                    self.close();
                }
            }
            function selectDate(e) {
                e.preventDefault();
                e.stopPropagation();
                var isSelectable = function (day) {
                    return day.classList &&
                        day.classList.contains("flatpickr-day") &&
                        !day.classList.contains("flatpickr-disabled") &&
                        !day.classList.contains("notAllowed");
                };
                var t = findParent(getEventTarget(e), isSelectable);
                if (t === undefined)
                    return;
                var target = t;
                var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
                var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                    selectedDate.getMonth() >
                        self.currentMonth + self.config.showMonths - 1) &&
                    self.config.mode !== "range";
                self.selectedDateElem = target;
                if (self.config.mode === "single")
                    self.selectedDates = [selectedDate];
                else if (self.config.mode === "multiple") {
                    var selectedIndex = isDateSelected(selectedDate);
                    if (selectedIndex)
                        self.selectedDates.splice(parseInt(selectedIndex), 1);
                    else
                        self.selectedDates.push(selectedDate);
                }
                else if (self.config.mode === "range") {
                    if (self.selectedDates.length === 2) {
                        self.clear(false, false);
                    }
                    self.latestSelectedDateObj = selectedDate;
                    self.selectedDates.push(selectedDate);
                    // unless selecting same date twice, sort ascendingly
                    if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                        self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
                }
                setHoursFromInputs();
                if (shouldChangeMonth) {
                    var isNewYear = self.currentYear !== selectedDate.getFullYear();
                    self.currentYear = selectedDate.getFullYear();
                    self.currentMonth = selectedDate.getMonth();
                    if (isNewYear) {
                        triggerEvent("onYearChange");
                        buildMonthSwitch();
                    }
                    triggerEvent("onMonthChange");
                }
                updateNavigationCurrentMonth();
                buildDays();
                updateValue();
                // maintain focus
                if (!shouldChangeMonth &&
                    self.config.mode !== "range" &&
                    self.config.showMonths === 1)
                    focusOnDayElem(target);
                else if (self.selectedDateElem !== undefined &&
                    self.hourElement === undefined) {
                    self.selectedDateElem && self.selectedDateElem.focus();
                }
                if (self.hourElement !== undefined)
                    self.hourElement !== undefined && self.hourElement.focus();
                if (self.config.closeOnSelect) {
                    var single = self.config.mode === "single" && !self.config.enableTime;
                    var range = self.config.mode === "range" &&
                        self.selectedDates.length === 2 &&
                        !self.config.enableTime;
                    if (single || range) {
                        focusAndClose();
                    }
                }
                triggerChange();
            }
            var CALLBACKS = {
                locale: [setupLocale, updateWeekdays],
                showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
                minDate: [jumpToDate],
                maxDate: [jumpToDate],
            };
            function set(option, value) {
                if (option !== null && typeof option === "object") {
                    Object.assign(self.config, option);
                    for (var key in option) {
                        if (CALLBACKS[key] !== undefined)
                            CALLBACKS[key].forEach(function (x) { return x(); });
                    }
                }
                else {
                    self.config[option] = value;
                    if (CALLBACKS[option] !== undefined)
                        CALLBACKS[option].forEach(function (x) { return x(); });
                    else if (HOOKS.indexOf(option) > -1)
                        self.config[option] = arrayify(value);
                }
                self.redraw();
                updateValue(true);
            }
            function setSelectedDate(inputDate, format) {
                var dates = [];
                if (inputDate instanceof Array)
                    dates = inputDate.map(function (d) { return self.parseDate(d, format); });
                else if (inputDate instanceof Date || typeof inputDate === "number")
                    dates = [self.parseDate(inputDate, format)];
                else if (typeof inputDate === "string") {
                    switch (self.config.mode) {
                        case "single":
                        case "time":
                            dates = [self.parseDate(inputDate, format)];
                            break;
                        case "multiple":
                            dates = inputDate
                                .split(self.config.conjunction)
                                .map(function (date) { return self.parseDate(date, format); });
                            break;
                        case "range":
                            dates = inputDate
                                .split(self.l10n.rangeSeparator)
                                .map(function (date) { return self.parseDate(date, format); });
                            break;
                    }
                }
                else
                    self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
                self.selectedDates = (self.config.allowInvalidPreload
                    ? dates
                    : dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
                if (self.config.mode === "range")
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            function setDate(date, triggerChange, format) {
                if (triggerChange === void 0) {
                    triggerChange = false;
                }
                if (format === void 0) {
                    format = self.config.dateFormat;
                }
                if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                    return self.clear(triggerChange);
                setSelectedDate(date, format);
                self.latestSelectedDateObj =
                    self.selectedDates[self.selectedDates.length - 1];
                self.redraw();
                jumpToDate(undefined, triggerChange);
                setHoursFromDate();
                if (self.selectedDates.length === 0) {
                    self.clear(false);
                }
                updateValue(triggerChange);
                if (triggerChange)
                    triggerEvent("onChange");
            }
            function parseDateRules(arr) {
                return arr
                    .slice()
                    .map(function (rule) {
                    if (typeof rule === "string" ||
                        typeof rule === "number" ||
                        rule instanceof Date) {
                        return self.parseDate(rule, undefined, true);
                    }
                    else if (rule &&
                        typeof rule === "object" &&
                        rule.from &&
                        rule.to)
                        return {
                            from: self.parseDate(rule.from, undefined),
                            to: self.parseDate(rule.to, undefined),
                        };
                    return rule;
                })
                    .filter(function (x) { return x; }); // remove falsy values
            }
            function setupDates() {
                self.selectedDates = [];
                self.now = self.parseDate(self.config.now) || new Date();
                // Workaround IE11 setting placeholder as the input's value
                var preloadedDate = self.config.defaultDate ||
                    ((self.input.nodeName === "INPUT" ||
                        self.input.nodeName === "TEXTAREA") &&
                        self.input.placeholder &&
                        self.input.value === self.input.placeholder
                        ? null
                        : self.input.value);
                if (preloadedDate)
                    setSelectedDate(preloadedDate, self.config.dateFormat);
                self._initialDate =
                    self.selectedDates.length > 0
                        ? self.selectedDates[0]
                        : self.config.minDate &&
                            self.config.minDate.getTime() > self.now.getTime()
                            ? self.config.minDate
                            : self.config.maxDate &&
                                self.config.maxDate.getTime() < self.now.getTime()
                                ? self.config.maxDate
                                : self.now;
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
                if (self.selectedDates.length > 0)
                    self.latestSelectedDateObj = self.selectedDates[0];
                if (self.config.minTime !== undefined)
                    self.config.minTime = self.parseDate(self.config.minTime, "H:i");
                if (self.config.maxTime !== undefined)
                    self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
                self.minDateHasTime =
                    !!self.config.minDate &&
                        (self.config.minDate.getHours() > 0 ||
                            self.config.minDate.getMinutes() > 0 ||
                            self.config.minDate.getSeconds() > 0);
                self.maxDateHasTime =
                    !!self.config.maxDate &&
                        (self.config.maxDate.getHours() > 0 ||
                            self.config.maxDate.getMinutes() > 0 ||
                            self.config.maxDate.getSeconds() > 0);
            }
            function setupInputs() {
                self.input = getInputElem();
                /* istanbul ignore next */
                if (!self.input) {
                    self.config.errorHandler(new Error("Invalid input element specified"));
                    return;
                }
                // hack: store previous type to restore it after destroy()
                self.input._type = self.input.type;
                self.input.type = "text";
                self.input.classList.add("flatpickr-input");
                self._input = self.input;
                if (self.config.altInput) {
                    // replicate self.element
                    self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                    self._input = self.altInput;
                    self.altInput.placeholder = self.input.placeholder;
                    self.altInput.disabled = self.input.disabled;
                    self.altInput.required = self.input.required;
                    self.altInput.tabIndex = self.input.tabIndex;
                    self.altInput.type = "text";
                    self.input.setAttribute("type", "hidden");
                    if (!self.config.static && self.input.parentNode)
                        self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
                }
                if (!self.config.allowInput)
                    self._input.setAttribute("readonly", "readonly");
                self._positionElement = self.config.positionElement || self._input;
            }
            function setupMobile() {
                var inputType = self.config.enableTime
                    ? self.config.noCalendar
                        ? "time"
                        : "datetime-local"
                    : "date";
                self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
                self.mobileInput.tabIndex = 1;
                self.mobileInput.type = inputType;
                self.mobileInput.disabled = self.input.disabled;
                self.mobileInput.required = self.input.required;
                self.mobileInput.placeholder = self.input.placeholder;
                self.mobileFormatStr =
                    inputType === "datetime-local"
                        ? "Y-m-d\\TH:i:S"
                        : inputType === "date"
                            ? "Y-m-d"
                            : "H:i:S";
                if (self.selectedDates.length > 0) {
                    self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
                }
                if (self.config.minDate)
                    self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
                if (self.config.maxDate)
                    self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
                if (self.input.getAttribute("step"))
                    self.mobileInput.step = String(self.input.getAttribute("step"));
                self.input.type = "hidden";
                if (self.altInput !== undefined)
                    self.altInput.type = "hidden";
                try {
                    if (self.input.parentNode)
                        self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
                }
                catch (_a) { }
                bind(self.mobileInput, "change", function (e) {
                    self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
                    triggerEvent("onChange");
                    triggerEvent("onClose");
                });
            }
            function toggle(e) {
                if (self.isOpen === true)
                    return self.close();
                self.open(e);
            }
            function triggerEvent(event, data) {
                // If the instance has been destroyed already, all hooks have been removed
                if (self.config === undefined)
                    return;
                var hooks = self.config[event];
                if (hooks !== undefined && hooks.length > 0) {
                    for (var i = 0; hooks[i] && i < hooks.length; i++)
                        hooks[i](self.selectedDates, self.input.value, self, data);
                }
                if (event === "onChange") {
                    self.input.dispatchEvent(createEvent("change"));
                    // many front-end frameworks bind to the input event
                    self.input.dispatchEvent(createEvent("input"));
                }
            }
            function createEvent(name) {
                var e = document.createEvent("Event");
                e.initEvent(name, true, true);
                return e;
            }
            function isDateSelected(date) {
                for (var i = 0; i < self.selectedDates.length; i++) {
                    if (compareDates(self.selectedDates[i], date) === 0)
                        return "" + i;
                }
                return false;
            }
            function isDateInRange(date) {
                if (self.config.mode !== "range" || self.selectedDates.length < 2)
                    return false;
                return (compareDates(date, self.selectedDates[0]) >= 0 &&
                    compareDates(date, self.selectedDates[1]) <= 0);
            }
            function updateNavigationCurrentMonth() {
                if (self.config.noCalendar || self.isMobile || !self.monthNav)
                    return;
                self.yearElements.forEach(function (yearElement, i) {
                    var d = new Date(self.currentYear, self.currentMonth, 1);
                    d.setMonth(self.currentMonth + i);
                    if (self.config.showMonths > 1 ||
                        self.config.monthSelectorType === "static") {
                        self.monthElements[i].textContent =
                            monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                    }
                    else {
                        self.monthsDropdownContainer.value = d.getMonth().toString();
                    }
                    yearElement.value = d.getFullYear().toString();
                });
                self._hidePrevMonthArrow =
                    self.config.minDate !== undefined &&
                        (self.currentYear === self.config.minDate.getFullYear()
                            ? self.currentMonth <= self.config.minDate.getMonth()
                            : self.currentYear < self.config.minDate.getFullYear());
                self._hideNextMonthArrow =
                    self.config.maxDate !== undefined &&
                        (self.currentYear === self.config.maxDate.getFullYear()
                            ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                            : self.currentYear > self.config.maxDate.getFullYear());
            }
            function getDateStr(format) {
                return self.selectedDates
                    .map(function (dObj) { return self.formatDate(dObj, format); })
                    .filter(function (d, i, arr) {
                    return self.config.mode !== "range" ||
                        self.config.enableTime ||
                        arr.indexOf(d) === i;
                })
                    .join(self.config.mode !== "range"
                    ? self.config.conjunction
                    : self.l10n.rangeSeparator);
            }
            /**
             * Updates the values of inputs associated with the calendar
             */
            function updateValue(triggerChange) {
                if (triggerChange === void 0) {
                    triggerChange = true;
                }
                if (self.mobileInput !== undefined && self.mobileFormatStr) {
                    self.mobileInput.value =
                        self.latestSelectedDateObj !== undefined
                            ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                            : "";
                }
                self.input.value = getDateStr(self.config.dateFormat);
                if (self.altInput !== undefined) {
                    self.altInput.value = getDateStr(self.config.altFormat);
                }
                if (triggerChange !== false)
                    triggerEvent("onValueUpdate");
            }
            function onMonthNavClick(e) {
                var eventTarget = getEventTarget(e);
                var isPrevMonth = self.prevMonthNav.contains(eventTarget);
                var isNextMonth = self.nextMonthNav.contains(eventTarget);
                if (isPrevMonth || isNextMonth) {
                    changeMonth(isPrevMonth ? -1 : 1);
                }
                else if (self.yearElements.indexOf(eventTarget) >= 0) {
                    eventTarget.select();
                }
                else if (eventTarget.classList.contains("arrowUp")) {
                    self.changeYear(self.currentYear + 1);
                }
                else if (eventTarget.classList.contains("arrowDown")) {
                    self.changeYear(self.currentYear - 1);
                }
            }
            function timeWrapper(e) {
                e.preventDefault();
                var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
                if (self.amPM !== undefined && eventTarget === self.amPM) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                    (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
                var newValue = curValue + step * delta;
                if (typeof input.value !== "undefined" && input.value.length === 2) {
                    var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                    if (newValue < min) {
                        newValue =
                            max +
                                newValue +
                                int(!isHourElem) +
                                (int(isHourElem) && int(!self.amPM));
                        if (isMinuteElem)
                            incrementNumInput(undefined, -1, self.hourElement);
                    }
                    else if (newValue > max) {
                        newValue =
                            input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                        if (isMinuteElem)
                            incrementNumInput(undefined, 1, self.hourElement);
                    }
                    if (self.amPM &&
                        isHourElem &&
                        (step === 1
                            ? newValue + curValue === 23
                            : Math.abs(newValue - curValue) > step)) {
                        self.amPM.textContent =
                            self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                    }
                    input.value = pad(newValue);
                }
            }
            init();
            return self;
        }
        /* istanbul ignore next */
        function _flatpickr(nodeList, config) {
            // static list
            var nodes = Array.prototype.slice
                .call(nodeList)
                .filter(function (x) { return x instanceof HTMLElement; });
            var instances = [];
            for (var i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                try {
                    if (node.getAttribute("data-fp-omit") !== null)
                        continue;
                    if (node._flatpickr !== undefined) {
                        node._flatpickr.destroy();
                        node._flatpickr = undefined;
                    }
                    node._flatpickr = FlatpickrInstance(node, config || {});
                    instances.push(node._flatpickr);
                }
                catch (e) {
                    console.error(e);
                }
            }
            return instances.length === 1 ? instances[0] : instances;
        }
        /* istanbul ignore next */
        if (typeof HTMLElement !== "undefined" &&
            typeof HTMLCollection !== "undefined" &&
            typeof NodeList !== "undefined") {
            // browser env
            HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
                return _flatpickr(this, config);
            };
            HTMLElement.prototype.flatpickr = function (config) {
                return _flatpickr([this], config);
            };
        }
        /* istanbul ignore next */
        var flatpickr = function (selector, config) {
            if (typeof selector === "string") {
                return _flatpickr(window.document.querySelectorAll(selector), config);
            }
            else if (selector instanceof Node) {
                return _flatpickr([selector], config);
            }
            else {
                return _flatpickr(selector, config);
            }
        };
        /* istanbul ignore next */
        flatpickr.defaultConfig = {};
        flatpickr.l10ns = {
            en: __assign({}, english),
            default: __assign({}, english),
        };
        flatpickr.localize = function (l10n) {
            flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
        };
        flatpickr.setDefaults = function (config) {
            flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
        };
        flatpickr.parseDate = createDateParser({});
        flatpickr.formatDate = createDateFormatter({});
        flatpickr.compareDates = compareDates;
        /* istanbul ignore next */
        if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
            jQuery.fn.flatpickr = function (config) {
                return _flatpickr(this, config);
            };
        }
        // eslint-disable-next-line @typescript-eslint/camelcase
        Date.prototype.fp_incr = function (days) {
            return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
        };
        if (typeof window !== "undefined") {
            window.flatpickr = flatpickr;
        }
        return flatpickr;
    })));
},
"0155f7af4d": /* models/deckgl.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const dom_1 = require("@bokehjs/core/dom");
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const column_data_source_1 = require("@bokehjs/models/sources/column_data_source");
    const debounce_1 = require("99a25e6992") /* debounce */;
    const data_1 = require("7f7d9e0c6b") /* ./data */;
    const layout_1 = require("80a6464b1f") /* ./layout */;
    const tooltips_1 = require("6e04fbe567") /* ./tooltips */;
    const constants_1 = (0, tslib_1.__importDefault)(require("093eb75864") /* @luma.gl/constants */);
    function extractClasses() {
        // Get classes for registration from standalone deck.gl
        const classesDict = {};
        const deck = window.deck;
        const classes = Object.keys(deck).filter(x => x.charAt(0) === x.charAt(0).toUpperCase());
        for (const cls of classes) {
            classesDict[cls] = deck[cls];
        }
        return classesDict;
    }
    class DeckGLPlotView extends layout_1.PanelHTMLBoxView {
        connect_signals() {
            super.connect_signals();
            const { data, mapbox_api_key, tooltip, layers, initialViewState, data_sources } = this.model.properties;
            this.on_change([mapbox_api_key, tooltip], () => this.render());
            this.on_change([data, initialViewState], () => this.updateDeck());
            this.on_change([layers], () => this._update_layers());
            this.on_change([data_sources], () => this._connect_sources(true));
            this._layer_map = {};
            this._connected = [];
            this._connect_sources();
        }
        _update_layers() {
            this._layer_map = {};
            this._update_data(true);
        }
        _connect_sources(render = false) {
            for (const cds of this.model.data_sources) {
                if (this._connected.indexOf(cds) < 0) {
                    this.connect(cds.properties.data.change, () => this._update_data(true));
                    this._connected.push(cds);
                }
            }
            this._update_data(render);
        }
        initialize() {
            super.initialize();
            if (window.deck.JSONConverter) {
                const { CSVLoader, Tiles3DLoader } = window.loaders;
                window.loaders.registerLoaders([Tiles3DLoader, CSVLoader]);
                const jsonConverterConfiguration = {
                    classes: extractClasses(),
                    // Will be resolved as `<enum-name>.<enum-value>`
                    enumerations: {
                        COORDINATE_SYSTEM: window.deck.COORDINATE_SYSTEM,
                        GL: constants_1.default
                    },
                    // Constants that should be resolved with the provided values by JSON converter
                    constants: {
                        Tiles3DLoader
                    }
                };
                this.jsonConverter = new window.deck.JSONConverter({
                    configuration: jsonConverterConfiguration
                });
            }
        }
        _update_data(render = true) {
            let n = 0;
            for (const layer of this.model.layers) {
                let cds;
                n += 1;
                if ((n - 1) in this._layer_map) {
                    cds = this.model.data_sources[this._layer_map[n - 1]];
                }
                else if (typeof layer.data != "number")
                    continue;
                else {
                    this._layer_map[n - 1] = layer.data;
                    cds = this.model.data_sources[layer.data];
                }
                layer.data = (0, data_1.transform_cds_to_records)(cds);
            }
            if (render)
                this.updateDeck();
        }
        _on_click_event(event) {
            const click_state = {
                coordinate: event.coordinate,
                lngLat: event.coordinate,
                index: event.index
            };
            if (event.layer)
                click_state.layer = event.layer.id;
            this.model.clickState = click_state;
        }
        _on_hover_event(event) {
            if (event.coordinate == null)
                return;
            const hover_state = {
                coordinate: event.coordinate,
                lngLat: event.coordinate,
                index: event.index
            };
            if (event.layer)
                hover_state.layer = event.layer.id;
            this.model.hoverState = hover_state;
        }
        _on_viewState_event(event) {
            const view_state = Object.assign({}, event.viewState);
            delete view_state.normalize;
            for (const p in view_state) {
                if (p.startsWith('transition'))
                    delete view_state[p];
            }
            const viewport = new window.deck.WebMercatorViewport(view_state);
            view_state.nw = viewport.unproject([0, 0]);
            view_state.se = viewport.unproject([viewport.width, viewport.height]);
            this.model.viewState = view_state;
        }
        getData() {
            const view_timeout = this.model.throttle['view'] || 200;
            const hover_timeout = this.model.throttle['hover'] || 100;
            const view_cb = (0, debounce_1.debounce)((event) => this._on_viewState_event(event), view_timeout, false);
            const hover_cb = (0, debounce_1.debounce)((event) => this._on_hover_event(event), hover_timeout, false);
            const data = Object.assign(Object.assign({}, this.model.data), { layers: this.model.layers, initialViewState: this.model.initialViewState, onViewStateChange: view_cb, onClick: (event) => this._on_click_event(event), onHover: hover_cb });
            return data;
        }
        updateDeck() {
            if (!this.deckGL) {
                this.render();
                return;
            }
            const data = this.getData();
            if (window.deck.updateDeck) {
                window.deck.updateDeck(data, this.deckGL);
            }
            else {
                const results = this.jsonConverter.convert(data);
                this.deckGL.setProps(results);
            }
        }
        createDeck({ mapboxApiKey, container, jsonInput, tooltip }) {
            let deckgl;
            try {
                const props = this.jsonConverter.convert(jsonInput);
                const getTooltip = (0, tooltips_1.makeTooltip)(tooltip, props.layers);
                deckgl = new window.deck.DeckGL(Object.assign(Object.assign({}, props), { map: window.mapboxgl, mapboxApiAccessToken: mapboxApiKey, container,
                    getTooltip }));
            }
            catch (err) {
                console.error(err);
            }
            return deckgl;
        }
        render() {
            super.render();
            const container = (0, dom_1.div)({ class: "deckgl" });
            (0, layout_1.set_size)(container, this.model);
            const MAPBOX_API_KEY = this.model.mapbox_api_key;
            const tooltip = this.model.tooltip;
            const data = this.getData();
            if (window.deck.createDeck) {
                this.deckGL = window.deck.createDeck({
                    mapboxApiKey: MAPBOX_API_KEY,
                    container: container,
                    jsonInput: data,
                    tooltip
                });
            }
            else {
                this.deckGL = this.createDeck({
                    mapboxApiKey: MAPBOX_API_KEY,
                    container: container,
                    jsonInput: data,
                    tooltip
                });
            }
            this.el.appendChild(container);
        }
    }
    exports.DeckGLPlotView = DeckGLPlotView;
    DeckGLPlotView.__name__ = "DeckGLPlotView";
    class DeckGLPlot extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_DeckGLPlot() {
            this.prototype.default_view = DeckGLPlotView;
            this.define(({ Any, Array, String, Ref }) => ({
                data: [Any],
                data_sources: [Array(Ref(column_data_source_1.ColumnDataSource)), []],
                clickState: [Any, {}],
                hoverState: [Any, {}],
                initialViewState: [Any, {}],
                layers: [Array(Any), []],
                mapbox_api_key: [String, ''],
                throttle: [Any, {}],
                tooltip: [Any, true],
                viewState: [Any, {}],
            }));
            this.override({
                height: 400,
                width: 600
            });
        }
    }
    exports.DeckGLPlot = DeckGLPlot;
    DeckGLPlot.__name__ = "DeckGLPlot";
    DeckGLPlot.__module__ = "panel.models.deckgl";
    DeckGLPlot.init_DeckGLPlot();
},
"6e04fbe567": /* models/tooltips.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    /*
    This file was adapted from https://github.com/uber/deck.gl/ the LICENSE
    below is preserved to comply with the original license.
    
    Copyright (c) 2015 - 2017 Uber Technologies, Inc.
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    */
    /* global document */
    let lastPickedObject;
    let lastTooltip;
    const DEFAULT_STYLE = {
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        display: 'flex',
        flex: 'wrap',
        maxWidth: '500px',
        flexDirection: 'column',
        zIndex: 2
    };
    function getDiv() {
        return document.createElement('div');
    }
    function getTooltipDefault(pickedInfo) {
        if (!pickedInfo.picked) {
            return null;
        }
        if (pickedInfo.object === lastPickedObject) {
            return lastTooltip;
        }
        const tooltip = {
            html: tabularize(pickedInfo.object),
            style: DEFAULT_STYLE
        };
        lastTooltip = tooltip;
        lastPickedObject = pickedInfo.object;
        return tooltip;
    }
    exports.getTooltipDefault = getTooltipDefault;
    const EXCLUDES = new Set(['position', 'index']);
    function tabularize(json) {
        // Turns a JSON object of picked info into HTML for a tooltip
        const dataTable = getDiv();
        // Creates rows of two columns for the tooltip
        for (const key in json) {
            if (EXCLUDES.has(key)) {
                continue; // eslint-disable-line
            }
            const header = getDiv();
            header.className = 'header';
            header.textContent = key;
            const valueElement = getDiv();
            valueElement.className = 'value';
            valueElement.textContent = toText(json[key]);
            const row = getDiv();
            setStyles(row, header, valueElement);
            row.appendChild(header);
            row.appendChild(valueElement);
            dataTable.appendChild(row);
        }
        return dataTable.innerHTML;
    }
    exports.tabularize = tabularize;
    function setStyles(row, header, value) {
        // Set default tooltip style
        Object.assign(header.style, {
            fontWeight: 700,
            marginRight: '10px',
            flex: '1 1 0%'
        });
        Object.assign(value.style, {
            flex: 'none',
            maxWidth: '250px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        });
        Object.assign(row.style, {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch'
        });
    }
    function toText(jsonValue) {
        // Set contents of table value, trimming for certain types of data
        let text;
        if (Array.isArray(jsonValue) && jsonValue.length > 4) {
            text = `Array<${jsonValue.length}>`;
        }
        else if (typeof jsonValue === 'string') {
            text = jsonValue;
        }
        else if (typeof jsonValue === 'number') {
            text = String(jsonValue);
        }
        else {
            try {
                text = JSON.stringify(jsonValue);
            }
            catch (err) {
                text = '<Non-Serializable Object>';
            }
        }
        const MAX_LENGTH = 50;
        if (text.length > MAX_LENGTH) {
            text = text.slice(0, MAX_LENGTH);
        }
        return text;
    }
    exports.toText = toText;
    function substituteIn(template, json) {
        let output = template;
        for (const key in json) {
            if (typeof json[key] === 'object') {
                for (const subkey in json[key])
                    output = output.replace(`{${key}.${subkey}}`, json[key][subkey]);
            }
            output = output.replace(`{${key}}`, json[key]);
        }
        return output;
    }
    exports.substituteIn = substituteIn;
    function makeTooltip(tooltips, layers) {
        /*
         * If explictly no tooltip passed by user, return null
         * If a JSON object passed, return a tooltip based on that object
         *   We expect the user has passed a string template that will take pickedInfo keywords
         * If a boolean passed, return the default tooltip
         */
        if (!tooltips) {
            return null;
        }
        let per_layer = false;
        const layer_tooltips = {};
        for (let i = 0; i < layers.length; i++) {
            const layer = layers[i];
            const layer_id = layer.id;
            if (typeof tooltips !== "boolean" && (i.toString() in tooltips || layer_id in tooltips)) {
                layer_tooltips[layer_id] = layer_id in tooltips ? tooltips[layer_id] : tooltips[i.toString()];
                per_layer = true;
            }
        }
        if (tooltips.html || tooltips.text || per_layer) {
            return (pickedInfo) => {
                if (!pickedInfo.picked) {
                    return null;
                }
                const tooltip = (per_layer) ? layer_tooltips[pickedInfo.layer.id] : tooltips;
                if (tooltip == null)
                    return;
                else if (typeof tooltip === "boolean")
                    return tooltip ? getTooltipDefault(pickedInfo) : null;
                const formattedTooltip = {
                    style: tooltip.style || DEFAULT_STYLE
                };
                if (tooltip.html) {
                    formattedTooltip.html = substituteIn(tooltip.html, pickedInfo.object);
                }
                else {
                    formattedTooltip.text = substituteIn(tooltip.text, pickedInfo.object);
                }
                return formattedTooltip;
            };
        }
        return getTooltipDefault;
    }
    exports.makeTooltip = makeTooltip;
},
"093eb75864": /* @luma.gl/constants/src/index.js */ function _(require, module, exports, __esModule, __esExport) {
    // GL constants, copied from Mozilla documentation
    // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
    // Standard WebGL 1 constants
    // These constants are defined on the WebGLRenderingContext interface.
    /* eslint-disable key-spacing, max-len, no-inline-comments, camelcase */
    // eslint-disable-next-line
    module.exports = {
        // Clearing buffers
        // Constants passed to clear() to clear buffer masks.
        DEPTH_BUFFER_BIT: 0x00000100,
        STENCIL_BUFFER_BIT: 0x00000400,
        COLOR_BUFFER_BIT: 0x00004000,
        // Rendering primitives
        // Constants passed to drawElements() or drawArrays() to specify what kind of primitive to render.
        POINTS: 0x0000,
        LINES: 0x0001,
        LINE_LOOP: 0x0002,
        LINE_STRIP: 0x0003,
        TRIANGLES: 0x0004,
        TRIANGLE_STRIP: 0x0005,
        TRIANGLE_FAN: 0x0006,
        // Blending modes
        // Constants passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
        ZERO: 0,
        ONE: 1,
        SRC_COLOR: 0x0300,
        ONE_MINUS_SRC_COLOR: 0x0301,
        SRC_ALPHA: 0x0302,
        ONE_MINUS_SRC_ALPHA: 0x0303,
        DST_ALPHA: 0x0304,
        ONE_MINUS_DST_ALPHA: 0x0305,
        DST_COLOR: 0x0306,
        ONE_MINUS_DST_COLOR: 0x0307,
        SRC_ALPHA_SATURATE: 0x0308,
        CONSTANT_COLOR: 0x8001,
        ONE_MINUS_CONSTANT_COLOR: 0x8002,
        CONSTANT_ALPHA: 0x8003,
        ONE_MINUS_CONSTANT_ALPHA: 0x8004,
        // Blending equations
        // Constants passed to blendEquation() or blendEquationSeparate() to control
        // how the blending is calculated (for both, RBG and alpha, or separately).
        FUNC_ADD: 0x8006,
        FUNC_SUBTRACT: 0x800a,
        FUNC_REVERSE_SUBTRACT: 0x800b,
        // Getting GL parameter information
        // Constants passed to getParameter() to specify what information to return.
        BLEND_EQUATION: 0x8009,
        BLEND_EQUATION_RGB: 0x8009,
        BLEND_EQUATION_ALPHA: 0x883d,
        BLEND_DST_RGB: 0x80c8,
        BLEND_SRC_RGB: 0x80c9,
        BLEND_DST_ALPHA: 0x80ca,
        BLEND_SRC_ALPHA: 0x80cb,
        BLEND_COLOR: 0x8005,
        ARRAY_BUFFER_BINDING: 0x8894,
        ELEMENT_ARRAY_BUFFER_BINDING: 0x8895,
        LINE_WIDTH: 0x0b21,
        ALIASED_POINT_SIZE_RANGE: 0x846d,
        ALIASED_LINE_WIDTH_RANGE: 0x846e,
        CULL_FACE_MODE: 0x0b45,
        FRONT_FACE: 0x0b46,
        DEPTH_RANGE: 0x0b70,
        DEPTH_WRITEMASK: 0x0b72,
        DEPTH_CLEAR_VALUE: 0x0b73,
        DEPTH_FUNC: 0x0b74,
        STENCIL_CLEAR_VALUE: 0x0b91,
        STENCIL_FUNC: 0x0b92,
        STENCIL_FAIL: 0x0b94,
        STENCIL_PASS_DEPTH_FAIL: 0x0b95,
        STENCIL_PASS_DEPTH_PASS: 0x0b96,
        STENCIL_REF: 0x0b97,
        STENCIL_VALUE_MASK: 0x0b93,
        STENCIL_WRITEMASK: 0x0b98,
        STENCIL_BACK_FUNC: 0x8800,
        STENCIL_BACK_FAIL: 0x8801,
        STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802,
        STENCIL_BACK_PASS_DEPTH_PASS: 0x8803,
        STENCIL_BACK_REF: 0x8ca3,
        STENCIL_BACK_VALUE_MASK: 0x8ca4,
        STENCIL_BACK_WRITEMASK: 0x8ca5,
        VIEWPORT: 0x0ba2,
        SCISSOR_BOX: 0x0c10,
        COLOR_CLEAR_VALUE: 0x0c22,
        COLOR_WRITEMASK: 0x0c23,
        UNPACK_ALIGNMENT: 0x0cf5,
        PACK_ALIGNMENT: 0x0d05,
        MAX_TEXTURE_SIZE: 0x0d33,
        MAX_VIEWPORT_DIMS: 0x0d3a,
        SUBPIXEL_BITS: 0x0d50,
        RED_BITS: 0x0d52,
        GREEN_BITS: 0x0d53,
        BLUE_BITS: 0x0d54,
        ALPHA_BITS: 0x0d55,
        DEPTH_BITS: 0x0d56,
        STENCIL_BITS: 0x0d57,
        POLYGON_OFFSET_UNITS: 0x2a00,
        POLYGON_OFFSET_FACTOR: 0x8038,
        TEXTURE_BINDING_2D: 0x8069,
        SAMPLE_BUFFERS: 0x80a8,
        SAMPLES: 0x80a9,
        SAMPLE_COVERAGE_VALUE: 0x80aa,
        SAMPLE_COVERAGE_INVERT: 0x80ab,
        COMPRESSED_TEXTURE_FORMATS: 0x86a3,
        VENDOR: 0x1f00,
        RENDERER: 0x1f01,
        VERSION: 0x1f02,
        IMPLEMENTATION_COLOR_READ_TYPE: 0x8b9a,
        IMPLEMENTATION_COLOR_READ_FORMAT: 0x8b9b,
        BROWSER_DEFAULT_WEBGL: 0x9244,
        // Buffers
        // Constants passed to bufferData(), bufferSubData(), bindBuffer(), or
        // getBufferParameter().
        STATIC_DRAW: 0x88e4,
        STREAM_DRAW: 0x88e0,
        DYNAMIC_DRAW: 0x88e8,
        ARRAY_BUFFER: 0x8892,
        ELEMENT_ARRAY_BUFFER: 0x8893,
        BUFFER_SIZE: 0x8764,
        BUFFER_USAGE: 0x8765,
        // Vertex attributes
        // Constants passed to getVertexAttrib().
        CURRENT_VERTEX_ATTRIB: 0x8626,
        VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622,
        VERTEX_ATTRIB_ARRAY_SIZE: 0x8623,
        VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624,
        VERTEX_ATTRIB_ARRAY_TYPE: 0x8625,
        VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886a,
        VERTEX_ATTRIB_ARRAY_POINTER: 0x8645,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889f,
        // Culling
        // Constants passed to cullFace().
        CULL_FACE: 0x0b44,
        FRONT: 0x0404,
        BACK: 0x0405,
        FRONT_AND_BACK: 0x0408,
        // Enabling and disabling
        // Constants passed to enable() or disable().
        BLEND: 0x0be2,
        DEPTH_TEST: 0x0b71,
        DITHER: 0x0bd0,
        POLYGON_OFFSET_FILL: 0x8037,
        SAMPLE_ALPHA_TO_COVERAGE: 0x809e,
        SAMPLE_COVERAGE: 0x80a0,
        SCISSOR_TEST: 0x0c11,
        STENCIL_TEST: 0x0b90,
        // Errors
        // Constants returned from getError().
        NO_ERROR: 0,
        INVALID_ENUM: 0x0500,
        INVALID_VALUE: 0x0501,
        INVALID_OPERATION: 0x0502,
        OUT_OF_MEMORY: 0x0505,
        CONTEXT_LOST_WEBGL: 0x9242,
        // Front face directions
        // Constants passed to frontFace().
        CW: 0x0900,
        CCW: 0x0901,
        // Hints
        // Constants passed to hint()
        DONT_CARE: 0x1100,
        FASTEST: 0x1101,
        NICEST: 0x1102,
        GENERATE_MIPMAP_HINT: 0x8192,
        // Data types
        BYTE: 0x1400,
        UNSIGNED_BYTE: 0x1401,
        SHORT: 0x1402,
        UNSIGNED_SHORT: 0x1403,
        INT: 0x1404,
        UNSIGNED_INT: 0x1405,
        FLOAT: 0x1406,
        DOUBLE: 0x140a,
        // Pixel formats
        DEPTH_COMPONENT: 0x1902,
        ALPHA: 0x1906,
        RGB: 0x1907,
        RGBA: 0x1908,
        LUMINANCE: 0x1909,
        LUMINANCE_ALPHA: 0x190a,
        // Pixel types
        // UNSIGNED_BYTE: 0x1401,
        UNSIGNED_SHORT_4_4_4_4: 0x8033,
        UNSIGNED_SHORT_5_5_5_1: 0x8034,
        UNSIGNED_SHORT_5_6_5: 0x8363,
        // Shaders
        // Constants passed to createShader() or getShaderParameter()
        FRAGMENT_SHADER: 0x8b30,
        VERTEX_SHADER: 0x8b31,
        COMPILE_STATUS: 0x8b81,
        DELETE_STATUS: 0x8b80,
        LINK_STATUS: 0x8b82,
        VALIDATE_STATUS: 0x8b83,
        ATTACHED_SHADERS: 0x8b85,
        ACTIVE_ATTRIBUTES: 0x8b89,
        ACTIVE_UNIFORMS: 0x8b86,
        MAX_VERTEX_ATTRIBS: 0x8869,
        MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb,
        MAX_VARYING_VECTORS: 0x8dfc,
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d,
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c,
        MAX_TEXTURE_IMAGE_UNITS: 0x8872,
        MAX_FRAGMENT_UNIFORM_VECTORS: 0x8dfd,
        SHADER_TYPE: 0x8b4f,
        SHADING_LANGUAGE_VERSION: 0x8b8c,
        CURRENT_PROGRAM: 0x8b8d,
        // Depth or stencil tests
        // Constants passed to depthFunc() or stencilFunc().
        NEVER: 0x0200,
        ALWAYS: 0x0207,
        LESS: 0x0201,
        EQUAL: 0x0202,
        LEQUAL: 0x0203,
        GREATER: 0x0204,
        GEQUAL: 0x0206,
        NOTEQUAL: 0x0205,
        // Stencil actions
        // Constants passed to stencilOp().
        KEEP: 0x1e00,
        REPLACE: 0x1e01,
        INCR: 0x1e02,
        DECR: 0x1e03,
        INVERT: 0x150a,
        INCR_WRAP: 0x8507,
        DECR_WRAP: 0x8508,
        // Textures
        // Constants passed to texParameteri(),
        // texParameterf(), bindTexture(), texImage2D(), and others.
        NEAREST: 0x2600,
        LINEAR: 0x2601,
        NEAREST_MIPMAP_NEAREST: 0x2700,
        LINEAR_MIPMAP_NEAREST: 0x2701,
        NEAREST_MIPMAP_LINEAR: 0x2702,
        LINEAR_MIPMAP_LINEAR: 0x2703,
        TEXTURE_MAG_FILTER: 0x2800,
        TEXTURE_MIN_FILTER: 0x2801,
        TEXTURE_WRAP_S: 0x2802,
        TEXTURE_WRAP_T: 0x2803,
        TEXTURE_2D: 0x0de1,
        TEXTURE: 0x1702,
        TEXTURE_CUBE_MAP: 0x8513,
        TEXTURE_BINDING_CUBE_MAP: 0x8514,
        TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515,
        TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516,
        TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517,
        TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518,
        TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519,
        TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851a,
        MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c,
        // TEXTURE0 - 31 0x84C0 - 0x84DF A texture unit.
        TEXTURE0: 0x84c0,
        ACTIVE_TEXTURE: 0x84e0,
        REPEAT: 0x2901,
        CLAMP_TO_EDGE: 0x812f,
        MIRRORED_REPEAT: 0x8370,
        // Emulation
        TEXTURE_WIDTH: 0x1000,
        TEXTURE_HEIGHT: 0x1001,
        // Uniform types
        FLOAT_VEC2: 0x8b50,
        FLOAT_VEC3: 0x8b51,
        FLOAT_VEC4: 0x8b52,
        INT_VEC2: 0x8b53,
        INT_VEC3: 0x8b54,
        INT_VEC4: 0x8b55,
        BOOL: 0x8b56,
        BOOL_VEC2: 0x8b57,
        BOOL_VEC3: 0x8b58,
        BOOL_VEC4: 0x8b59,
        FLOAT_MAT2: 0x8b5a,
        FLOAT_MAT3: 0x8b5b,
        FLOAT_MAT4: 0x8b5c,
        SAMPLER_2D: 0x8b5e,
        SAMPLER_CUBE: 0x8b60,
        // Shader precision-specified types
        LOW_FLOAT: 0x8df0,
        MEDIUM_FLOAT: 0x8df1,
        HIGH_FLOAT: 0x8df2,
        LOW_INT: 0x8df3,
        MEDIUM_INT: 0x8df4,
        HIGH_INT: 0x8df5,
        // Framebuffers and renderbuffers
        FRAMEBUFFER: 0x8d40,
        RENDERBUFFER: 0x8d41,
        RGBA4: 0x8056,
        RGB5_A1: 0x8057,
        RGB565: 0x8d62,
        DEPTH_COMPONENT16: 0x81a5,
        STENCIL_INDEX: 0x1901,
        STENCIL_INDEX8: 0x8d48,
        DEPTH_STENCIL: 0x84f9,
        RENDERBUFFER_WIDTH: 0x8d42,
        RENDERBUFFER_HEIGHT: 0x8d43,
        RENDERBUFFER_INTERNAL_FORMAT: 0x8d44,
        RENDERBUFFER_RED_SIZE: 0x8d50,
        RENDERBUFFER_GREEN_SIZE: 0x8d51,
        RENDERBUFFER_BLUE_SIZE: 0x8d52,
        RENDERBUFFER_ALPHA_SIZE: 0x8d53,
        RENDERBUFFER_DEPTH_SIZE: 0x8d54,
        RENDERBUFFER_STENCIL_SIZE: 0x8d55,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8cd0,
        FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8cd1,
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8cd2,
        FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8cd3,
        COLOR_ATTACHMENT0: 0x8ce0,
        DEPTH_ATTACHMENT: 0x8d00,
        STENCIL_ATTACHMENT: 0x8d20,
        DEPTH_STENCIL_ATTACHMENT: 0x821a,
        NONE: 0,
        FRAMEBUFFER_COMPLETE: 0x8cd5,
        FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8cd6,
        FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8cd7,
        FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8cd9,
        FRAMEBUFFER_UNSUPPORTED: 0x8cdd,
        FRAMEBUFFER_BINDING: 0x8ca6,
        RENDERBUFFER_BINDING: 0x8ca7,
        READ_FRAMEBUFFER: 0x8ca8,
        DRAW_FRAMEBUFFER: 0x8ca9,
        MAX_RENDERBUFFER_SIZE: 0x84e8,
        INVALID_FRAMEBUFFER_OPERATION: 0x0506,
        // Pixel storage modes
        // Constants passed to pixelStorei().
        UNPACK_FLIP_Y_WEBGL: 0x9240,
        UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241,
        UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243,
        // /////////////////////////////////////////////////////
        // Additional constants defined WebGL 2
        // These constants are defined on the WebGL2RenderingContext interface.
        // All WebGL 1 constants are also available in a WebGL 2 context.
        // /////////////////////////////////////////////////////
        // Getting GL parameter information
        // Constants passed to getParameter()
        // to specify what information to return.
        READ_BUFFER: 0x0c02,
        UNPACK_ROW_LENGTH: 0x0cf2,
        UNPACK_SKIP_ROWS: 0x0cf3,
        UNPACK_SKIP_PIXELS: 0x0cf4,
        PACK_ROW_LENGTH: 0x0d02,
        PACK_SKIP_ROWS: 0x0d03,
        PACK_SKIP_PIXELS: 0x0d04,
        TEXTURE_BINDING_3D: 0x806a,
        UNPACK_SKIP_IMAGES: 0x806d,
        UNPACK_IMAGE_HEIGHT: 0x806e,
        MAX_3D_TEXTURE_SIZE: 0x8073,
        MAX_ELEMENTS_VERTICES: 0x80e8,
        MAX_ELEMENTS_INDICES: 0x80e9,
        MAX_TEXTURE_LOD_BIAS: 0x84fd,
        MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8b49,
        MAX_VERTEX_UNIFORM_COMPONENTS: 0x8b4a,
        MAX_ARRAY_TEXTURE_LAYERS: 0x88ff,
        MIN_PROGRAM_TEXEL_OFFSET: 0x8904,
        MAX_PROGRAM_TEXEL_OFFSET: 0x8905,
        MAX_VARYING_COMPONENTS: 0x8b4b,
        FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8b8b,
        RASTERIZER_DISCARD: 0x8c89,
        VERTEX_ARRAY_BINDING: 0x85b5,
        MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122,
        MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125,
        MAX_SERVER_WAIT_TIMEOUT: 0x9111,
        MAX_ELEMENT_INDEX: 0x8d6b,
        // Textures
        // Constants passed to texParameteri(),
        // texParameterf(), bindTexture(), texImage2D(), and others.
        RED: 0x1903,
        RGB8: 0x8051,
        RGBA8: 0x8058,
        RGB10_A2: 0x8059,
        TEXTURE_3D: 0x806f,
        TEXTURE_WRAP_R: 0x8072,
        TEXTURE_MIN_LOD: 0x813a,
        TEXTURE_MAX_LOD: 0x813b,
        TEXTURE_BASE_LEVEL: 0x813c,
        TEXTURE_MAX_LEVEL: 0x813d,
        TEXTURE_COMPARE_MODE: 0x884c,
        TEXTURE_COMPARE_FUNC: 0x884d,
        SRGB: 0x8c40,
        SRGB8: 0x8c41,
        SRGB8_ALPHA8: 0x8c43,
        COMPARE_REF_TO_TEXTURE: 0x884e,
        RGBA32F: 0x8814,
        RGB32F: 0x8815,
        RGBA16F: 0x881a,
        RGB16F: 0x881b,
        TEXTURE_2D_ARRAY: 0x8c1a,
        TEXTURE_BINDING_2D_ARRAY: 0x8c1d,
        R11F_G11F_B10F: 0x8c3a,
        RGB9_E5: 0x8c3d,
        RGBA32UI: 0x8d70,
        RGB32UI: 0x8d71,
        RGBA16UI: 0x8d76,
        RGB16UI: 0x8d77,
        RGBA8UI: 0x8d7c,
        RGB8UI: 0x8d7d,
        RGBA32I: 0x8d82,
        RGB32I: 0x8d83,
        RGBA16I: 0x8d88,
        RGB16I: 0x8d89,
        RGBA8I: 0x8d8e,
        RGB8I: 0x8d8f,
        RED_INTEGER: 0x8d94,
        RGB_INTEGER: 0x8d98,
        RGBA_INTEGER: 0x8d99,
        R8: 0x8229,
        RG8: 0x822b,
        R16F: 0x822d,
        R32F: 0x822e,
        RG16F: 0x822f,
        RG32F: 0x8230,
        R8I: 0x8231,
        R8UI: 0x8232,
        R16I: 0x8233,
        R16UI: 0x8234,
        R32I: 0x8235,
        R32UI: 0x8236,
        RG8I: 0x8237,
        RG8UI: 0x8238,
        RG16I: 0x8239,
        RG16UI: 0x823a,
        RG32I: 0x823b,
        RG32UI: 0x823c,
        R8_SNORM: 0x8f94,
        RG8_SNORM: 0x8f95,
        RGB8_SNORM: 0x8f96,
        RGBA8_SNORM: 0x8f97,
        RGB10_A2UI: 0x906f,
        /* covered by extension
        COMPRESSED_R11_EAC : 0x9270,
        COMPRESSED_SIGNED_R11_EAC: 0x9271,
        COMPRESSED_RG11_EAC: 0x9272,
        COMPRESSED_SIGNED_RG11_EAC : 0x9273,
        COMPRESSED_RGB8_ETC2 : 0x9274,
        COMPRESSED_SRGB8_ETC2: 0x9275,
        COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 : 0x9276,
        COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC : 0x9277,
        COMPRESSED_RGBA8_ETC2_EAC: 0x9278,
        COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : 0x9279,
        */
        TEXTURE_IMMUTABLE_FORMAT: 0x912f,
        TEXTURE_IMMUTABLE_LEVELS: 0x82df,
        // Pixel types
        UNSIGNED_INT_2_10_10_10_REV: 0x8368,
        UNSIGNED_INT_10F_11F_11F_REV: 0x8c3b,
        UNSIGNED_INT_5_9_9_9_REV: 0x8c3e,
        FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8dad,
        UNSIGNED_INT_24_8: 0x84fa,
        HALF_FLOAT: 0x140b,
        RG: 0x8227,
        RG_INTEGER: 0x8228,
        INT_2_10_10_10_REV: 0x8d9f,
        // Queries
        CURRENT_QUERY: 0x8865,
        QUERY_RESULT: 0x8866,
        QUERY_RESULT_AVAILABLE: 0x8867,
        ANY_SAMPLES_PASSED: 0x8c2f,
        ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8d6a,
        // Draw buffers
        MAX_DRAW_BUFFERS: 0x8824,
        DRAW_BUFFER0: 0x8825,
        DRAW_BUFFER1: 0x8826,
        DRAW_BUFFER2: 0x8827,
        DRAW_BUFFER3: 0x8828,
        DRAW_BUFFER4: 0x8829,
        DRAW_BUFFER5: 0x882a,
        DRAW_BUFFER6: 0x882b,
        DRAW_BUFFER7: 0x882c,
        DRAW_BUFFER8: 0x882d,
        DRAW_BUFFER9: 0x882e,
        DRAW_BUFFER10: 0x882f,
        DRAW_BUFFER11: 0x8830,
        DRAW_BUFFER12: 0x8831,
        DRAW_BUFFER13: 0x8832,
        DRAW_BUFFER14: 0x8833,
        DRAW_BUFFER15: 0x8834,
        MAX_COLOR_ATTACHMENTS: 0x8cdf,
        COLOR_ATTACHMENT1: 0x8ce1,
        COLOR_ATTACHMENT2: 0x8ce2,
        COLOR_ATTACHMENT3: 0x8ce3,
        COLOR_ATTACHMENT4: 0x8ce4,
        COLOR_ATTACHMENT5: 0x8ce5,
        COLOR_ATTACHMENT6: 0x8ce6,
        COLOR_ATTACHMENT7: 0x8ce7,
        COLOR_ATTACHMENT8: 0x8ce8,
        COLOR_ATTACHMENT9: 0x8ce9,
        COLOR_ATTACHMENT10: 0x8cea,
        COLOR_ATTACHMENT11: 0x8ceb,
        COLOR_ATTACHMENT12: 0x8cec,
        COLOR_ATTACHMENT13: 0x8ced,
        COLOR_ATTACHMENT14: 0x8cee,
        COLOR_ATTACHMENT15: 0x8cef,
        // Samplers
        SAMPLER_3D: 0x8b5f,
        SAMPLER_2D_SHADOW: 0x8b62,
        SAMPLER_2D_ARRAY: 0x8dc1,
        SAMPLER_2D_ARRAY_SHADOW: 0x8dc4,
        SAMPLER_CUBE_SHADOW: 0x8dc5,
        INT_SAMPLER_2D: 0x8dca,
        INT_SAMPLER_3D: 0x8dcb,
        INT_SAMPLER_CUBE: 0x8dcc,
        INT_SAMPLER_2D_ARRAY: 0x8dcf,
        UNSIGNED_INT_SAMPLER_2D: 0x8dd2,
        UNSIGNED_INT_SAMPLER_3D: 0x8dd3,
        UNSIGNED_INT_SAMPLER_CUBE: 0x8dd4,
        UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8dd7,
        MAX_SAMPLES: 0x8d57,
        SAMPLER_BINDING: 0x8919,
        // Buffers
        PIXEL_PACK_BUFFER: 0x88eb,
        PIXEL_UNPACK_BUFFER: 0x88ec,
        PIXEL_PACK_BUFFER_BINDING: 0x88ed,
        PIXEL_UNPACK_BUFFER_BINDING: 0x88ef,
        COPY_READ_BUFFER: 0x8f36,
        COPY_WRITE_BUFFER: 0x8f37,
        COPY_READ_BUFFER_BINDING: 0x8f36,
        COPY_WRITE_BUFFER_BINDING: 0x8f37,
        // Data types
        FLOAT_MAT2x3: 0x8b65,
        FLOAT_MAT2x4: 0x8b66,
        FLOAT_MAT3x2: 0x8b67,
        FLOAT_MAT3x4: 0x8b68,
        FLOAT_MAT4x2: 0x8b69,
        FLOAT_MAT4x3: 0x8b6a,
        UNSIGNED_INT_VEC2: 0x8dc6,
        UNSIGNED_INT_VEC3: 0x8dc7,
        UNSIGNED_INT_VEC4: 0x8dc8,
        UNSIGNED_NORMALIZED: 0x8c17,
        SIGNED_NORMALIZED: 0x8f9c,
        // Vertex attributes
        VERTEX_ATTRIB_ARRAY_INTEGER: 0x88fd,
        VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88fe,
        // Transform feedback
        TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8c7f,
        MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8c80,
        TRANSFORM_FEEDBACK_VARYINGS: 0x8c83,
        TRANSFORM_FEEDBACK_BUFFER_START: 0x8c84,
        TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8c85,
        TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8c88,
        MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8c8a,
        MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8c8b,
        INTERLEAVED_ATTRIBS: 0x8c8c,
        SEPARATE_ATTRIBS: 0x8c8d,
        TRANSFORM_FEEDBACK_BUFFER: 0x8c8e,
        TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8c8f,
        TRANSFORM_FEEDBACK: 0x8e22,
        TRANSFORM_FEEDBACK_PAUSED: 0x8e23,
        TRANSFORM_FEEDBACK_ACTIVE: 0x8e24,
        TRANSFORM_FEEDBACK_BINDING: 0x8e25,
        // Framebuffers and renderbuffers
        FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210,
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211,
        FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212,
        FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213,
        FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214,
        FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215,
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216,
        FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217,
        FRAMEBUFFER_DEFAULT: 0x8218,
        // DEPTH_STENCIL_ATTACHMENT : 0x821A,
        // DEPTH_STENCIL: 0x84F9,
        DEPTH24_STENCIL8: 0x88f0,
        DRAW_FRAMEBUFFER_BINDING: 0x8ca6,
        READ_FRAMEBUFFER_BINDING: 0x8caa,
        RENDERBUFFER_SAMPLES: 0x8cab,
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8cd4,
        FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8d56,
        // Uniforms
        UNIFORM_BUFFER: 0x8a11,
        UNIFORM_BUFFER_BINDING: 0x8a28,
        UNIFORM_BUFFER_START: 0x8a29,
        UNIFORM_BUFFER_SIZE: 0x8a2a,
        MAX_VERTEX_UNIFORM_BLOCKS: 0x8a2b,
        MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8a2d,
        MAX_COMBINED_UNIFORM_BLOCKS: 0x8a2e,
        MAX_UNIFORM_BUFFER_BINDINGS: 0x8a2f,
        MAX_UNIFORM_BLOCK_SIZE: 0x8a30,
        MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8a31,
        MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8a33,
        UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8a34,
        ACTIVE_UNIFORM_BLOCKS: 0x8a36,
        UNIFORM_TYPE: 0x8a37,
        UNIFORM_SIZE: 0x8a38,
        UNIFORM_BLOCK_INDEX: 0x8a3a,
        UNIFORM_OFFSET: 0x8a3b,
        UNIFORM_ARRAY_STRIDE: 0x8a3c,
        UNIFORM_MATRIX_STRIDE: 0x8a3d,
        UNIFORM_IS_ROW_MAJOR: 0x8a3e,
        UNIFORM_BLOCK_BINDING: 0x8a3f,
        UNIFORM_BLOCK_DATA_SIZE: 0x8a40,
        UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8a42,
        UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8a43,
        UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8a44,
        UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8a46,
        // Sync objects
        OBJECT_TYPE: 0x9112,
        SYNC_CONDITION: 0x9113,
        SYNC_STATUS: 0x9114,
        SYNC_FLAGS: 0x9115,
        SYNC_FENCE: 0x9116,
        SYNC_GPU_COMMANDS_COMPLETE: 0x9117,
        UNSIGNALED: 0x9118,
        SIGNALED: 0x9119,
        ALREADY_SIGNALED: 0x911a,
        TIMEOUT_EXPIRED: 0x911b,
        CONDITION_SATISFIED: 0x911c,
        WAIT_FAILED: 0x911d,
        SYNC_FLUSH_COMMANDS_BIT: 0x00000001,
        // Miscellaneous constants
        COLOR: 0x1800,
        DEPTH: 0x1801,
        STENCIL: 0x1802,
        MIN: 0x8007,
        MAX: 0x8008,
        DEPTH_COMPONENT24: 0x81a6,
        STREAM_READ: 0x88e1,
        STREAM_COPY: 0x88e2,
        STATIC_READ: 0x88e5,
        STATIC_COPY: 0x88e6,
        DYNAMIC_READ: 0x88e9,
        DYNAMIC_COPY: 0x88ea,
        DEPTH_COMPONENT32F: 0x8cac,
        DEPTH32F_STENCIL8: 0x8cad,
        INVALID_INDEX: 0xffffffff,
        TIMEOUT_IGNORED: -1,
        MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247,
        // Constants defined in WebGL extensions
        // ANGLE_instanced_arrays
        VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 0x88fe,
        // WEBGL_debug_renderer_info
        UNMASKED_VENDOR_WEBGL: 0x9245,
        UNMASKED_RENDERER_WEBGL: 0x9246,
        // EXT_texture_filter_anisotropic
        MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84ff,
        TEXTURE_MAX_ANISOTROPY_EXT: 0x84fe,
        // WEBGL_compressed_texture_s3tc
        COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83f0,
        COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83f1,
        COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83f2,
        COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83f3,
        // WEBGL_compressed_texture_es3
        COMPRESSED_R11_EAC: 0x9270,
        COMPRESSED_SIGNED_R11_EAC: 0x9271,
        COMPRESSED_RG11_EAC: 0x9272,
        COMPRESSED_SIGNED_RG11_EAC: 0x9273,
        COMPRESSED_RGB8_ETC2: 0x9274,
        COMPRESSED_RGBA8_ETC2_EAC: 0x9275,
        COMPRESSED_SRGB8_ETC2: 0x9276,
        COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9277,
        COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9278,
        COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9279,
        // WEBGL_compressed_texture_pvrtc
        COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8c00,
        COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8c02,
        COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8c01,
        COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8c03,
        // WEBGL_compressed_texture_etc1
        COMPRESSED_RGB_ETC1_WEBGL: 0x8d64,
        // WEBGL_compressed_texture_atc
        COMPRESSED_RGB_ATC_WEBGL: 0x8c92,
        COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: 0x8c92,
        COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: 0x87ee,
        // WEBGL_depth_texture
        UNSIGNED_INT_24_8_WEBGL: 0x84fa,
        // OES_texture_half_float
        HALF_FLOAT_OES: 0x8d61,
        // WEBGL_color_buffer_float
        RGBA32F_EXT: 0x8814,
        RGB32F_EXT: 0x8815,
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211,
        UNSIGNED_NORMALIZED_EXT: 0x8c17,
        // EXT_blend_minmax
        MIN_EXT: 0x8007,
        MAX_EXT: 0x8008,
        // EXT_sRGB
        SRGB_EXT: 0x8c40,
        SRGB_ALPHA_EXT: 0x8c42,
        SRGB8_ALPHA8_EXT: 0x8c43,
        FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: 0x8210,
        // OES_standard_derivatives
        FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 0x8b8b,
        // WEBGL_draw_buffers
        COLOR_ATTACHMENT0_WEBGL: 0x8ce0,
        COLOR_ATTACHMENT1_WEBGL: 0x8ce1,
        COLOR_ATTACHMENT2_WEBGL: 0x8ce2,
        COLOR_ATTACHMENT3_WEBGL: 0x8ce3,
        COLOR_ATTACHMENT4_WEBGL: 0x8ce4,
        COLOR_ATTACHMENT5_WEBGL: 0x8ce5,
        COLOR_ATTACHMENT6_WEBGL: 0x8ce6,
        COLOR_ATTACHMENT7_WEBGL: 0x8ce7,
        COLOR_ATTACHMENT8_WEBGL: 0x8ce8,
        COLOR_ATTACHMENT9_WEBGL: 0x8ce9,
        COLOR_ATTACHMENT10_WEBGL: 0x8cea,
        COLOR_ATTACHMENT11_WEBGL: 0x8ceb,
        COLOR_ATTACHMENT12_WEBGL: 0x8cec,
        COLOR_ATTACHMENT13_WEBGL: 0x8ced,
        COLOR_ATTACHMENT14_WEBGL: 0x8cee,
        COLOR_ATTACHMENT15_WEBGL: 0x8cef,
        DRAW_BUFFER0_WEBGL: 0x8825,
        DRAW_BUFFER1_WEBGL: 0x8826,
        DRAW_BUFFER2_WEBGL: 0x8827,
        DRAW_BUFFER3_WEBGL: 0x8828,
        DRAW_BUFFER4_WEBGL: 0x8829,
        DRAW_BUFFER5_WEBGL: 0x882a,
        DRAW_BUFFER6_WEBGL: 0x882b,
        DRAW_BUFFER7_WEBGL: 0x882c,
        DRAW_BUFFER8_WEBGL: 0x882d,
        DRAW_BUFFER9_WEBGL: 0x882e,
        DRAW_BUFFER10_WEBGL: 0x882f,
        DRAW_BUFFER11_WEBGL: 0x8830,
        DRAW_BUFFER12_WEBGL: 0x8831,
        DRAW_BUFFER13_WEBGL: 0x8832,
        DRAW_BUFFER14_WEBGL: 0x8833,
        DRAW_BUFFER15_WEBGL: 0x8834,
        MAX_COLOR_ATTACHMENTS_WEBGL: 0x8cdf,
        MAX_DRAW_BUFFERS_WEBGL: 0x8824,
        // OES_vertex_array_object
        VERTEX_ARRAY_BINDING_OES: 0x85b5,
        // EXT_disjoint_timer_query
        QUERY_COUNTER_BITS_EXT: 0x8864,
        CURRENT_QUERY_EXT: 0x8865,
        QUERY_RESULT_EXT: 0x8866,
        QUERY_RESULT_AVAILABLE_EXT: 0x8867,
        TIME_ELAPSED_EXT: 0x88bf,
        TIMESTAMP_EXT: 0x8e28,
        GPU_DISJOINT_EXT: 0x8fbb // A Boolean indicating whether or not the GPU performed any disjoint operation.
    };
},
"9d046c4720": /* models/echarts.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    class EChartsView extends html_box_1.HTMLBoxView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.data.change, () => this._plot());
            const { width, height, renderer, theme } = this.model.properties;
            this.on_change([width, height], () => this._resize());
            this.on_change([theme, renderer], () => this.render());
        }
        render() {
            super.render();
            const config = { width: this.model.width, height: this.model.height, renderer: this.model.renderer };
            if (this._chart != null)
                window.echarts.dispose(this._chart);
            this._chart = window.echarts.init(this.el, this.model.theme, config);
            this._plot();
        }
        after_layout() {
            super.after_layout();
            this._chart.resize();
        }
        _plot() {
            if (window.echarts == null)
                return;
            this._chart.setOption(this.model.data);
        }
        _resize() {
            this._chart.resize({ width: this.model.width, height: this.model.height });
        }
    }
    exports.EChartsView = EChartsView;
    EChartsView.__name__ = "EChartsView";
    class ECharts extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_ECharts() {
            this.prototype.default_view = EChartsView;
            this.define(({ Any, String }) => ({
                data: [Any, {}],
                theme: [String, "default"],
                renderer: [String, "canvas"]
            }));
        }
    }
    exports.ECharts = ECharts;
    ECharts.__name__ = "ECharts";
    ECharts.__module__ = "panel.models.echarts";
    ECharts.init_ECharts();
},
"3d7593ca5a": /* models/html.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const markup_1 = require("@bokehjs/models/widgets/markup");
    const bokeh_events_1 = require("@bokehjs/core/bokeh_events");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    const event_to_object_1 = require("d92f7d4d2b") /* ./event-to-object */;
    class DOMEvent extends bokeh_events_1.ModelEvent {
        constructor(node, data) {
            super();
            this.node = node;
            this.data = data;
            this.event_name = "dom_event";
        }
        _to_json() {
            return { model: this.origin, node: this.node, data: this.data };
        }
    }
    exports.DOMEvent = DOMEvent;
    DOMEvent.__name__ = "DOMEvent";
    function htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }
    exports.htmlDecode = htmlDecode;
    function runScripts(node) {
        Array.from(node.querySelectorAll("script")).forEach((oldScript) => {
            const newScript = document.createElement("script");
            Array.from(oldScript.attributes)
                .forEach((attr) => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            if (oldScript.parentNode)
                oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }
    exports.runScripts = runScripts;
    class HTMLView extends layout_1.PanelMarkupView {
        constructor() {
            super(...arguments);
            this._event_listeners = {};
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.events.change, () => {
                this._remove_event_listeners();
                this._setup_event_listeners();
            });
        }
        rerender() {
            this.render();
            this.invalidate_layout();
        }
        render() {
            super.render();
            const html = this.process_tex();
            if (!html) {
                this.markup_el.innerHTML = '';
                return;
            }
            this.markup_el.innerHTML = html;
            runScripts(this.markup_el);
            this._setup_event_listeners();
        }
        process_tex() {
            const decoded = htmlDecode(this.model.text);
            const text = decoded || this.model.text;
            if (this.model.disable_math || !this.contains_tex(text))
                return text;
            const tex_parts = this.provider.MathJax.find_tex(text);
            const processed_text = [];
            let last_index = 0;
            for (const part of tex_parts) {
                processed_text.push(text.slice(last_index, part.start.n));
                processed_text.push(this.provider.MathJax.tex2svg(part.math, { display: part.display }).outerHTML);
                last_index = part.end.n;
            }
            if (last_index < text.length)
                processed_text.push(text.slice(last_index));
            return processed_text.join("");
        }
        contains_tex(html) {
            if (!this.provider.MathJax)
                return false;
            return this.provider.MathJax.find_tex(html).length > 0;
        }
        ;
        _remove_event_listeners() {
            for (const node in this._event_listeners) {
                const el = document.getElementById(node);
                if (el == null) {
                    console.warn(`DOM node '${node}' could not be found. Cannot subscribe to DOM events.`);
                    continue;
                }
                for (const event_name in this._event_listeners[node]) {
                    const event_callback = this._event_listeners[node][event_name];
                    el.removeEventListener(event_name, event_callback);
                }
            }
            this._event_listeners = {};
        }
        _setup_event_listeners() {
            for (const node in this.model.events) {
                const el = document.getElementById(node);
                if (el == null) {
                    console.warn(`DOM node '${node}' could not be found. Cannot subscribe to DOM events.`);
                    continue;
                }
                for (const event_name of this.model.events[node]) {
                    const callback = (event) => {
                        this.model.trigger_event(new DOMEvent(node, (0, event_to_object_1.serializeEvent)(event)));
                    };
                    el.addEventListener(event_name, callback);
                    if (!(node in this._event_listeners))
                        this._event_listeners[node] = {};
                    this._event_listeners[node][event_name] = callback;
                }
            }
        }
    }
    exports.HTMLView = HTMLView;
    HTMLView.__name__ = "HTMLView";
    class HTML extends markup_1.Markup {
        constructor(attrs) {
            super(attrs);
        }
        static init_HTML() {
            this.prototype.default_view = HTMLView;
            this.define(({ Any }) => ({
                events: [Any, {}]
            }));
        }
    }
    exports.HTML = HTML;
    HTML.__name__ = "HTML";
    HTML.__module__ = "panel.models.markup";
    HTML.init_HTML();
},
"d92f7d4d2b": /* models/event-to-object.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    /*
    The MIT License (MIT)
    
    Copyright (c) 2019 Ryan S. Morshead
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
    function serializeEvent(event) {
        const data = {};
        // support for CustomEvents: the whole `detail` object is serialized
        if (event.detail !== undefined) {
            Object.assign(data, { detail: JSON.parse(JSON.stringify(event.detail)) });
        }
        if (event.type in eventTransforms) {
            Object.assign(data, eventTransforms[event.type](event));
        }
        data.target = serializeDomElement(event.target);
        data.currentTarget =
            event.target === event.currentTarget
                ? data.target
                : serializeDomElement(event.currentTarget);
        data.relatedTarget = serializeDomElement(event.relatedTarget);
        return data;
    }
    exports.serializeEvent = serializeEvent;
    function serializeDomElement(element) {
        let elementData = null;
        if (element) {
            elementData = defaultElementTransform(element);
            if (element.tagName in elementTransforms) {
                elementTransforms[element.tagName].forEach((trans) => Object.assign(elementData, trans(element)));
            }
        }
        return elementData;
    }
    const elementTransformCategories = {
        hasValue: (element) => ({
            value: element.value,
        }),
        hasCurrentTime: (element) => ({
            currentTime: element.currentTime,
        }),
        hasFiles: (element) => {
            if ((element === null || element === void 0 ? void 0 : element.type) === "file") {
                return {
                    files: Array.from(element.files).map((file) => ({
                        lastModified: file.lastModified,
                        name: file.name,
                        size: file.size,
                        type: file.type,
                    })),
                };
            }
            else {
                return {};
            }
        },
    };
    function defaultElementTransform(element) {
        return { boundingClientRect: Object.assign({}, element.getBoundingClientRect()) };
    }
    const elementTagCategories = {
        hasValue: [
            "BUTTON",
            "INPUT",
            "OPTION",
            "LI",
            "METER",
            "PROGRESS",
            "PARAM",
            "SELECT",
            "TEXTAREA",
        ],
        hasCurrentTime: ["AUDIO", "VIDEO"],
        hasFiles: ["INPUT"],
    };
    const elementTransforms = {};
    Object.keys(elementTagCategories).forEach((category) => {
        elementTagCategories[category].forEach((type) => {
            const transforms = elementTransforms[type] || (elementTransforms[type] = []);
            transforms.push(elementTransformCategories[category]);
        });
    });
    class EventTransformCategories {
        clipboard(event) {
            return {
                clipboardData: event.clipboardData,
            };
        }
        composition(event) {
            return {
                data: event.data,
            };
        }
        keyboard(event) {
            return {
                altKey: event.altKey,
                charCode: event.charCode,
                ctrlKey: event.ctrlKey,
                key: event.key,
                keyCode: event.keyCode,
                locale: event.locale,
                location: event.location,
                metaKey: event.metaKey,
                repeat: event.repeat,
                shiftKey: event.shiftKey,
                which: event.which,
            };
        }
        mouse(event) {
            return {
                altKey: event.altKey,
                button: event.button,
                buttons: event.buttons,
                clientX: event.clientX,
                clientY: event.clientY,
                ctrlKey: event.ctrlKey,
                metaKey: event.metaKey,
                pageX: event.pageX,
                pageY: event.pageY,
                screenX: event.screenX,
                screenY: event.screenY,
                shiftKey: event.shiftKey,
            };
        }
        pointer(event) {
            return Object.assign(Object.assign({}, this.mouse(event)), { pointerId: event.pointerId, width: event.width, height: event.height, pressure: event.pressure, tiltX: event.tiltX, tiltY: event.tiltY, pointerType: event.pointerType, isPrimary: event.isPrimary });
        }
        selection() {
            return {
                selectedText: window.getSelection().toString()
            };
        }
        ;
        touch(event) {
            return {
                altKey: event.altKey,
                ctrlKey: event.ctrlKey,
                metaKey: event.metaKey,
                shiftKey: event.shiftKey,
            };
        }
        ui(event) {
            return {
                detail: event.detail,
            };
        }
        wheel(event) {
            return {
                deltaMode: event.deltaMode,
                deltaX: event.deltaX,
                deltaY: event.deltaY,
                deltaZ: event.deltaZ,
            };
        }
        animation(event) {
            return {
                animationName: event.animationName,
                pseudoElement: event.pseudoElement,
                elapsedTime: event.elapsedTime,
            };
        }
        transition(event) {
            return {
                propertyName: event.propertyName,
                pseudoElement: event.pseudoElement,
                elapsedTime: event.elapsedTime,
            };
        }
    }
    EventTransformCategories.__name__ = "EventTransformCategories";
    const eventTypeCategories = {
        clipboard: ["copy", "cut", "paste"],
        composition: ["compositionend", "compositionstart", "compositionupdate"],
        keyboard: ["keydown", "keypress", "keyup"],
        mouse: [
            "click",
            "contextmenu",
            "doubleclick",
            "drag",
            "dragend",
            "dragenter",
            "dragexit",
            "dragleave",
            "dragover",
            "dragstart",
            "drop",
            "mousedown",
            "mouseenter",
            "mouseleave",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
        ],
        pointer: [
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointercancel",
            "gotpointercapture",
            "lostpointercapture",
            "pointerenter",
            "pointerleave",
            "pointerover",
            "pointerout",
        ],
        selection: ["select"],
        touch: ["touchcancel", "touchend", "touchmove", "touchstart"],
        ui: ["scroll"],
        wheel: ["wheel"],
        animation: ["animationstart", "animationend", "animationiteration"],
        transition: ["transitionend"],
    };
    const eventTransforms = {};
    const eventTransformCategories = new EventTransformCategories();
    Object.keys(eventTypeCategories).forEach((category) => {
        eventTypeCategories[category].forEach((type) => {
            eventTransforms[type] = eventTransformCategories[category];
        });
    });
},
"7d45bd3bc4": /* models/idom.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const preact_1 = require("6f11f2ef27") /* preact */;
    const hooks_1 = require("4c02a9b43f") /* preact/hooks */;
    const preact_2 = require("b3f51db71c") /* htm/preact */;
    const fast_json_patch_1 = require("cbecfde9cd") /* fast-json-patch */;
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    const event_to_object_1 = require("d92f7d4d2b") /* ./event-to-object */;
    const LayoutConfigContext = (0, preact_1.createContext)({});
    function mountLayout(mountElement, saveUpdateHook, sendEvent, importSourceUrl) {
        (0, preact_1.render)((0, preact_2.html) `
      <${Layout}
        saveUpdateHook=${saveUpdateHook}
        sendEvent=${sendEvent}
        importSourceUrl=${importSourceUrl}
      />
    `, mountElement);
    }
    exports.mountLayout = mountLayout;
    function Layout({ saveUpdateHook, sendEvent, importSourceUrl }) {
        const [model, patchModel] = useInplaceJsonPatch({});
        (0, hooks_1.useEffect)(() => saveUpdateHook(patchModel), [patchModel]);
        if (model.tagName) {
            return (0, preact_2.html) `
      <${LayoutConfigContext.Provider}
        value=${{
                sendEvent: sendEvent,
                importSourceUrl: importSourceUrl,
            }}
      >
        <${Element} model=${model} />
      <//>
    `;
        }
        else
            return (0, preact_2.html) `<div />`;
    }
    exports.default = Layout;
    function Element({ model }) {
        if (model.importSource)
            return (0, preact_2.html) `<${ImportedElement} model=${model} />`;
        else
            return (0, preact_2.html) `<${StandardElement} model=${model} />`;
    }
    function ImportedElement({ model }) {
        const config = (0, hooks_1.useContext)(LayoutConfigContext);
        const module = useLazyModule(model.importSource.source, config.importSourceUrl);
        if (module) {
            const cmpt = getPathProperty(module, model.tagName);
            const children = elementChildren(model);
            const attributes = elementAttributes(model, config.sendEvent);
            return (0, preact_2.html) `<${cmpt} ...${attributes}>${children}<//>`;
        }
        else {
            const fallback = model.importSource.fallback;
            if (!fallback)
                return (0, preact_2.html) `<div />`;
            switch (typeof fallback) {
                case "object":
                    return (0, preact_2.html) `<${Element} model=${fallback} />`;
                case "string":
                    return (0, preact_2.html) `<div>${fallback}</div>`;
                default:
                    return null;
            }
        }
    }
    function StandardElement({ model }) {
        const config = (0, hooks_1.useContext)(LayoutConfigContext);
        const children = elementChildren(model);
        const attributes = elementAttributes(model, config.sendEvent);
        if (model.children && model.children.length)
            return (0, preact_2.html) `<${model.tagName} ...${attributes}>${children}<//>`;
        else
            return (0, preact_2.html) `<${model.tagName} ...${attributes} />`;
    }
    function elementChildren(model) {
        if (!model.children)
            return [];
        else {
            return model.children.map((child) => {
                switch (typeof child) {
                    case "object":
                        return (0, preact_2.html) `<${Element} model=${child} />`;
                    case "string":
                        return child;
                    default:
                        return null;
                }
            });
        }
    }
    function elementAttributes(model, sendEvent) {
        const attributes = Object.assign({}, model.attributes);
        if (model.eventHandlers) {
            Object.keys(model.eventHandlers).forEach((eventName) => {
                const eventSpec = model.eventHandlers[eventName];
                attributes[eventName] = eventHandler(sendEvent, eventSpec);
            });
        }
        return attributes;
    }
    function eventHandler(sendEvent, eventSpec) {
        return function () {
            const data = Array.from(arguments).map((value) => {
                if (typeof value === "object") {
                    if (eventSpec["preventDefault"])
                        value.preventDefault();
                    if (eventSpec["stopPropagation"])
                        value.stopPropagation();
                    return (0, event_to_object_1.serializeEvent)(value);
                }
                else
                    return value;
            });
            return new Promise((resolve) => {
                const msg = {
                    data: data,
                    target: eventSpec["target"],
                };
                sendEvent(msg);
                resolve(msg);
            });
        };
    }
    function useLazyModule(source, sourceUrlBase = "") {
        const [module, setModule] = (0, hooks_1.useState)(null);
        // use eval() to avoid weird build behavior by bundlers like Webpack
        if (!module)
            eval(`import('${joinUrl(sourceUrlBase, source)}')`).then(setModule);
        return module;
    }
    function getPathProperty(obj, prop) {
        // properties may be dot seperated strings
        const path = prop.split(".");
        const firstProp = path.shift();
        let value = obj[firstProp];
        for (let i = 0; i < path.length; i++)
            value = value[path[i]];
        return value;
    }
    function useInplaceJsonPatch(doc) {
        const ref = (0, hooks_1.useRef)(doc);
        const forceUpdate = useForceUpdate();
        const applyPatch = (0, hooks_1.useCallback)((path, patch) => {
            applyPatchInplace(ref.current, path, patch);
            forceUpdate();
        }, [ref, forceUpdate]);
        return [ref.current, applyPatch];
    }
    function applyPatchInplace(doc, path, patch) {
        if (!path)
            (0, fast_json_patch_1.applyPatch)(doc, patch);
        else {
            (0, fast_json_patch_1.applyPatch)(doc, [
                {
                    op: "replace",
                    path: path,
                    value: (0, fast_json_patch_1.applyPatch)((0, fast_json_patch_1.getValueByPointer)(doc, path), patch, false, false).newDocument,
                },
            ]);
        }
    }
    function useForceUpdate() {
        const [, updateState] = (0, hooks_1.useState)({});
        return (0, hooks_1.useCallback)(() => updateState({}), []);
    }
    function joinUrl(base, tail) {
        return tail.startsWith("./")
            ? (base.endsWith("/") ? base.slice(0, -1) : base) + tail.slice(1)
            : tail;
    }
    class IDOMView extends layout_1.PanelHTMLBoxView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.event.change, () => {
                this._update(...this.model.event);
                setTimeout(() => { requestAnimationFrame(() => this.fix_layout()); });
            });
        }
        fix_layout() {
            this.update_layout();
            this.compute_layout();
            this.invalidate_layout();
            (0, layout_1.set_size)(this.el, this.model);
        }
        initialize() {
            super.initialize();
            mountLayout(this.el, (update) => this._save_update(update), (event) => this._send(event), this.model.importSourceUrl);
        }
        async lazy_initialize() {
            await super.lazy_initialize();
            await new Promise((resolve) => {
                const check_update = () => {
                    if (this._update)
                        resolve(null);
                    else
                        setTimeout(check_update, 100);
                };
                check_update();
            });
        }
        _save_update(update) {
            this._update = update;
        }
        async render() {
            super.render();
            this._update(...this.model.event);
            await new Promise((resolve) => {
                const check_update = () => {
                    if (this.el.children.length) {
                        this.fix_layout();
                        resolve(null);
                    }
                    else
                        setTimeout(check_update, 50);
                };
                check_update();
            });
        }
        _send(event) {
            this.model.msg = event;
        }
    }
    exports.IDOMView = IDOMView;
    IDOMView.__name__ = "IDOMView";
    class IDOM extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_IDOM() {
            this.prototype.default_view = IDOMView;
            this.define(({ Any, String }) => ({
                event: [Any, []],
                importSourceUrl: [String, ''],
                msg: [Any, {}],
            }));
        }
    }
    exports.IDOM = IDOM;
    IDOM.__name__ = "IDOM";
    IDOM.__module__ = "panel.models.idom";
    IDOM.init_IDOM();
},
"6f11f2ef27": /* preact/dist/preact.module.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var n, l, u, i, t, r, o = {}, f = [], e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    exports.options = n;
    exports.isValidElement = l;
    function c(n, l) {
        for (var u in l)
            n[u] = l[u];
        return n;
    }
    function s(n) { var l = n.parentNode; l && l.removeChild(n); }
    function a(n, l, u) {
        var i, t, r, o = arguments, f = {};
        for (r in l)
            "key" == r ? i = l[r] : "ref" == r ? t = l[r] : f[r] = l[r];
        if (arguments.length > 3)
            for (u = [u], r = 3; r < arguments.length; r++)
                u.push(o[r]);
        if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps)
            for (r in n.defaultProps)
                void 0 === f[r] && (f[r] = n.defaultProps[r]);
        return v(n, f, i, t, null);
    }
    exports.createElement = a;
    exports.h = a;
    function v(l, u, i, t, r) { var o = { type: l, props: u, key: i, ref: t, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++n.__v : r }; return null != n.vnode && n.vnode(o), o; }
    function h() { return { current: null }; }
    exports.createRef = h;
    function y(n) { return n.children; }
    exports.Fragment = y;
    function p(n, l) { this.props = n, this.context = l; }
    exports.Component = p;
    function d(n, l) {
        if (null == l)
            return n.__ ? d(n.__, n.__.__k.indexOf(n) + 1) : null;
        for (var u; l < n.__k.length; l++)
            if (null != (u = n.__k[l]) && null != u.__e)
                return u.__e;
        return "function" == typeof n.type ? d(n) : null;
    }
    function _(n) {
        var l, u;
        if (null != (n = n.__) && null != n.__c) {
            for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
                if (null != (u = n.__k[l]) && null != u.__e) {
                    n.__e = n.__c.base = u.__e;
                    break;
                }
            return _(n);
        }
    }
    function k(l) { (!l.__d && (l.__d = !0) && u.push(l) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m); }
    function m() {
        for (var n; m.__r = u.length;)
            n = u.sort(function (n, l) { return n.__v.__b - l.__v.__b; }), u = [], n.some(function (n) { var l, u, i, t, r, o; n.__d && (r = (t = (l = n).__v).__e, (o = l.__P) && (u = [], (i = c({}, t)).__v = t.__v + 1, T(o, t, i, l.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [r] : null, u, null == r ? d(t) : r, t.__h), j(u, t), t.__e != r && _(t))); });
    }
    function b(n, l, u, i, t, r, e, c, s, a) {
        var h, p, _, k, m, b, w, A = i && i.__k || f, P = A.length;
        for (u.__k = [], h = 0; h < l.length; h++)
            if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(y, { children: k }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, null, k.__v) : k)) {
                if (k.__ = u, k.__b = u.__b + 1, null === (_ = A[h]) || _ && k.key == _.key && k.type === _.type)
                    A[h] = void 0;
                else
                    for (p = 0; p < P; p++) {
                        if ((_ = A[p]) && k.key == _.key && k.type === _.type) {
                            A[p] = void 0;
                            break;
                        }
                        _ = null;
                    }
                T(n, k, _ = _ || o, t, r, e, c, s, a), m = k.__e, (p = k.ref) && _.ref != p && (w || (w = []), _.ref && w.push(_.ref, null, k), w.push(p, k.__c || m, k)), null != m ? (null == b && (b = m), "function" == typeof k.type && null != k.__k && k.__k === _.__k ? k.__d = s = g(k, s, n) : s = x(n, k, _, A, m, s), a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && _.__e == s && s.parentNode != n && (s = d(_));
            }
        for (u.__e = b, h = P; h--;)
            null != A[h] && ("function" == typeof u.type && null != A[h].__e && A[h].__e == u.__d && (u.__d = d(i, h + 1)), L(A[h], A[h]));
        if (w)
            for (h = 0; h < w.length; h++)
                I(w[h], w[++h], w[++h]);
    }
    function g(n, l, u) {
        var i, t;
        for (i = 0; i < n.__k.length; i++)
            (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? g(t, l, u) : x(u, t, t, n.__k, t.__e, l));
        return l;
    }
    function w(n, l) { return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) { w(n, l); }) : l.push(n)), l; }
    exports.toChildArray = w;
    function x(n, l, u, i, t, r) {
        var o, f, e;
        if (void 0 !== l.__d)
            o = l.__d, l.__d = void 0;
        else if (null == u || t != r || null == t.parentNode)
            n: if (null == r || r.parentNode !== n)
                n.appendChild(t), o = null;
            else {
                for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2)
                    if (f == t)
                        break n;
                n.insertBefore(t, r), o = r;
            }
        return void 0 !== o ? o : t.nextSibling;
    }
    function A(n, l, u, i, t) {
        var r;
        for (r in u)
            "children" === r || "key" === r || r in l || C(n, r, null, u[r], i);
        for (r in l)
            t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || C(n, r, l[r], u[r], i);
    }
    function P(n, l, u) { "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || e.test(l) ? u : u + "px"; }
    function C(n, l, u, i, t) {
        var r;
        n: if ("style" === l)
            if ("string" == typeof u)
                n.style.cssText = u;
            else {
                if ("string" == typeof i && (n.style.cssText = i = ""), i)
                    for (l in i)
                        u && l in u || P(n.style, l, "");
                if (u)
                    for (l in u)
                        i && u[l] === i[l] || P(n.style, l, u[l]);
            }
        else if ("o" === l[0] && "n" === l[1])
            r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? H : $, r) : n.removeEventListener(l, r ? H : $, r);
        else if ("dangerouslySetInnerHTML" !== l) {
            if (t)
                l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== l && "list" !== l && "form" !== l && "download" !== l && l in n)
                try {
                    n[l] = null == u ? "" : u;
                    break n;
                }
                catch (n) { }
            "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
        }
    }
    function $(l) { this.l[l.type + !1](n.event ? n.event(l) : l); }
    function H(l) { this.l[l.type + !0](n.event ? n.event(l) : l); }
    function T(l, u, i, t, r, o, f, e, s) {
        var a, v, h, d, _, k, m, g, w, x, A, P = u.type;
        if (void 0 !== u.constructor)
            return null;
        null != i.__h && (s = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (a = n.__b) && a(u);
        try {
            n: if ("function" == typeof P) {
                if (g = u.props, w = (a = P.contextType) && t[a.__c], x = a ? w ? w.props.value : a.__ : t, i.__c ? m = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new p(g, x), v.constructor = P, v.render = M), w && w.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = c({}, v.__s)), c(v.__s, P.getDerivedStateFromProps(g, v.__s))), d = v.props, _ = v.state, h)
                    null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);
                else {
                    if (null == P.getDerivedStateFromProps && g !== d && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
                        v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v);
                        break n;
                    }
                    null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () { v.componentDidUpdate(d, _, k); });
                }
                v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = c(c({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(d, _)), A = null != a && a.type === y && null == a.key ? a.props.children : a, b(l, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, s), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), m && (v.__E = v.__ = null), v.__e = !1;
            }
            else
                null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = z(i.__e, u, i, t, r, o, f, s);
            (a = n.diffed) && a(u);
        }
        catch (l) {
            u.__v = null, (s || null != o) && (u.__e = e, u.__h = !!s, o[o.indexOf(e)] = null), n.__e(l, u, i);
        }
    }
    function j(l, u) {
        n.__c && n.__c(u, l), l.some(function (u) {
            try {
                l = u.__h, u.__h = [], l.some(function (n) { n.call(u); });
            }
            catch (l) {
                n.__e(l, u.__v);
            }
        });
    }
    function z(n, l, u, i, t, r, e, c) {
        var a, v, h, y, p = u.props, d = l.props, _ = l.type, k = 0;
        if ("svg" === _ && (t = !0), null != r)
            for (; k < r.length; k++)
                if ((a = r[k]) && (a === n || (_ ? a.localName == _ : 3 == a.nodeType))) {
                    n = a, r[k] = null;
                    break;
                }
        if (null == n) {
            if (null === _)
                return document.createTextNode(d);
            n = t ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, d.is && d), r = null, c = !1;
        }
        if (null === _)
            p === d || c && n.data === d || (n.data = d);
        else {
            if (r = r && f.slice.call(n.childNodes), v = (p = u.props || o).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
                if (null != r)
                    for (p = {}, y = 0; y < n.attributes.length; y++)
                        p[n.attributes[y].name] = n.attributes[y].value;
                (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
            }
            if (A(n, d, p, t, c), h)
                l.__k = [];
            else if (k = l.props.children, b(n, Array.isArray(k) ? k : [k], l, u, i, t && "foreignObject" !== _, r, e, n.firstChild, c), null != r)
                for (k = r.length; k--;)
                    null != r[k] && s(r[k]);
            c || ("value" in d && void 0 !== (k = d.value) && (k !== n.value || "progress" === _ && !k) && C(n, "value", k, p.value, !1), "checked" in d && void 0 !== (k = d.checked) && k !== n.checked && C(n, "checked", k, p.checked, !1));
        }
        return n;
    }
    function I(l, u, i) {
        try {
            "function" == typeof l ? l(u) : l.current = u;
        }
        catch (l) {
            n.__e(l, i);
        }
    }
    function L(l, u, i) {
        var t, r, o;
        if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || I(t, null, u)), i || "function" == typeof l.type || (i = null != (r = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
            if (t.componentWillUnmount)
                try {
                    t.componentWillUnmount();
                }
                catch (l) {
                    n.__e(l, u);
                }
            t.base = t.__P = null;
        }
        if (t = l.__k)
            for (o = 0; o < t.length; o++)
                t[o] && L(t[o], u, i);
        null != r && s(r);
    }
    function M(n, l, u) { return this.constructor(n, u); }
    function N(l, u, i) { var t, r, e; n.__ && n.__(l, u), r = (t = "function" == typeof i) ? null : i && i.__k || u.__k, e = [], T(u, l = (!t && i || u).__k = a(y, null, [l]), r || o, o, void 0 !== u.ownerSVGElement, !t && i ? [i] : r ? null : u.firstChild ? f.slice.call(u.childNodes) : null, e, !t && i ? i : r ? r.__e : u.firstChild, t), j(e, l); }
    exports.render = N;
    function O(n, l) { N(n, l, O); }
    exports.hydrate = O;
    function S(n, l, u) {
        var i, t, r, o = arguments, f = c({}, n.props);
        for (r in l)
            "key" == r ? i = l[r] : "ref" == r ? t = l[r] : f[r] = l[r];
        if (arguments.length > 3)
            for (u = [u], r = 3; r < arguments.length; r++)
                u.push(o[r]);
        return null != u && (f.children = u), v(n.type, f, i || n.key, t || n.ref, null);
    }
    exports.cloneElement = S;
    function q(n, l) { var u = { __c: l = "__cC" + r++, __: n, Consumer: function (n, l) { return n.children(l); }, Provider: function (n) { var u, i; return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () { return i; }, this.shouldComponentUpdate = function (n) { this.props.value !== n.value && u.some(k); }, this.sub = function (n) { u.push(n); var l = n.componentWillUnmount; n.componentWillUnmount = function () { u.splice(u.indexOf(n), 1), l && l.call(n); }; }), n.children; } }; return u.Provider.__ = u.Consumer.contextType = u; }
    exports.createContext = q;
    exports.options = n = { __e: function (n, l) {
            for (var u, i, t; l = l.__;)
                if ((u = l.__c) && !u.__)
                    try {
                        if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t)
                            return u.__E = u;
                    }
                    catch (l) {
                        n = l;
                    }
            throw n;
        }, __v: 0 }, exports.isValidElement = l = function (n) { return null != n && void 0 === n.constructor; }, p.prototype.setState = function (n, l) { var u; u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), "function" == typeof n && (n = n(c({}, u), this.props)), n && c(u, n), null != n && this.__v && (l && this.__h.push(l), k(this)); }, p.prototype.forceUpdate = function (n) { this.__v && (this.__e = !0, n && this.__h.push(n), k(this)); }, p.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, r = 0;
},
"4c02a9b43f": /* preact/hooks/dist/hooks.module.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const preact_1 = require("6f11f2ef27") /* preact */;
    var t, u, r, o = 0, i = [], c = preact_1.options.__b, f = preact_1.options.__r, e = preact_1.options.diffed, a = preact_1.options.__c, v = preact_1.options.unmount;
    function m(t, r) { preact_1.options.__h && preact_1.options.__h(u, t, o || r), o = 0; var i = u.__H || (u.__H = { __: [], __h: [] }); return t >= i.__.length && i.__.push({}), i.__[t]; }
    function l(n) { return o = 1, p(w, n); }
    exports.useState = l;
    function p(n, r, o) { var i = m(t++, 2); return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) { var t = i.t(i.__[0], n); i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({})); }], i.__c = u), i.__; }
    exports.useReducer = p;
    function y(r, o) { var i = m(t++, 3); !preact_1.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i)); }
    exports.useEffect = y;
    function h(r, o) { var i = m(t++, 4); !preact_1.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i)); }
    exports.useLayoutEffect = h;
    function s(n) { return o = 5, d(function () { return { current: n }; }, []); }
    exports.useRef = s;
    function _(n, t, u) { o = 6, h(function () { "function" == typeof n ? n(t()) : n && (n.current = t()); }, null == u ? u : u.concat(n)); }
    exports.useImperativeHandle = _;
    function d(n, u) { var r = m(t++, 7); return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__; }
    exports.useMemo = d;
    function A(n, t) { return o = 8, d(function () { return n; }, t); }
    exports.useCallback = A;
    function F(n) { var r = u.context[n.__c], o = m(t++, 9); return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__; }
    exports.useContext = F;
    function T(t, u) { preact_1.options.useDebugValue && preact_1.options.useDebugValue(u ? u(t) : t); }
    exports.useDebugValue = T;
    function q(n) { var r = m(t++, 10), o = l(); return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) { r.__ && r.__(n), o[1](n); }), [o[0], function () { o[1](void 0); }]; }
    exports.useErrorBoundary = q;
    function x() {
        i.forEach(function (t) {
            if (t.__P)
                try {
                    t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
                }
                catch (u) {
                    t.__H.__h = [], preact_1.options.__e(u, t.__v);
                }
        }), i = [];
    }
    preact_1.options.__b = function (n) { u = null, c && c(n); }, preact_1.options.__r = function (n) { f && f(n), t = 0; var r = (u = n.__c).__H; r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []); }, preact_1.options.diffed = function (t) { e && e(t); var o = t.__c; o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === preact_1.options.requestAnimationFrame || ((r = preact_1.options.requestAnimationFrame) || function (n) { var t, u = function () { clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n); }, r = setTimeout(u, 100); b && (t = requestAnimationFrame(u)); })(x)), u = void 0; }, preact_1.options.__c = function (t, u) {
        u.some(function (t) {
            try {
                t.__h.forEach(g), t.__h = t.__h.filter(function (n) { return !n.__ || j(n); });
            }
            catch (r) {
                u.some(function (n) { n.__h && (n.__h = []); }), u = [], preact_1.options.__e(r, t.__v);
            }
        }), a && a(t, u);
    }, preact_1.options.unmount = function (t) {
        v && v(t);
        var u = t.__c;
        if (u && u.__H)
            try {
                u.__H.__.forEach(g);
            }
            catch (t) {
                preact_1.options.__e(t, u.__v);
            }
    };
    var b = "function" == typeof requestAnimationFrame;
    function g(n) { var t = u; "function" == typeof n.__c && n.__c(), u = t; }
    function j(n) { var t = u; n.__c = n.__(), u = t; }
    function k(n, t) { return !n || n.length !== t.length || t.some(function (t, u) { return t !== n[u]; }); }
    function w(n, t) { return "function" == typeof t ? t(n) : t; }
},
"b3f51db71c": /* htm/preact/index.module.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const preact_1 = require("6f11f2ef27") /* preact */;
    var preact_2 = require("6f11f2ef27") /* preact */;
    __esExport("h", preact_2.h);
    __esExport("render", preact_2.render);
    __esExport("Component", preact_2.Component);
    const htm_1 = (0, tslib_1.__importDefault)(require("ab33dd3f38") /* htm */);
    var m = htm_1.default.bind(preact_1.h);
    exports.html = m;
},
"ab33dd3f38": /* htm/dist/htm.module.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var n = function (t, s, r, e) {
        var u;
        s[0] = 0;
        for (var h = 1; h < s.length; h++) {
            var p = s[h++], a = s[h] ? (s[0] |= p ? 1 : 2, r[s[h++]]) : s[++h];
            3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h]] = a : 6 === p ? e[1][s[++h]] += a + "" : p ? (u = t.apply(a, n(t, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h - 2] = 0, s[h] = u)) : e.push(a);
        }
        return e;
    }, t = new Map;
    function default_1(s) {
        var r = t.get(this);
        return r || (r = new Map, t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function (n) {
            for (var t, s, r = 1, e = "", u = "", h = [0], p = function (n) { 1 === r && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h.push(0, n, e) : 3 === r && (n || e) ? (h.push(3, n, e), r = 2) : 2 === r && "..." === e && n ? h.push(4, n, 0) : 2 === r && e && !n ? h.push(5, 0, !0, e) : r >= 5 && ((e || !n && 5 === r) && (h.push(r, 0, e, s), r = 6), n && (h.push(r, n, 0, s), r = 6)), e = ""; }, a = 0; a < n.length; a++) {
                a && (1 === r && p(), p(a));
                for (var l = 0; l < n[a].length; l++)
                    t = n[a][l], 1 === r ? "<" === t ? (p(), h = [h], r = 3) : e += t : 4 === r ? "--" === e && ">" === t ? (r = 1, e = "") : e = t + e[0] : u ? t === u ? u = "" : e += t : '"' === t || "'" === t ? u = t : ">" === t ? (p(), r = 1) : r && ("=" === t ? (r = 5, s = e, e = "") : "/" === t && (r < 5 || ">" === n[a][l + 1]) ? (p(), 3 === r && (h = h[0]), r = h, (h = h[0]).push(2, 0, r), r = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (p(), r = 2) : e += t), 3 === r && "!--" === e && (r = 4, h = h[0]);
            }
            return p(), h;
        }(s)), r), arguments, [])).length > 1 ? r : r[0];
    }
    exports.default = default_1;
},
"cbecfde9cd": /* fast-json-patch/lib/duplex.js */ function _(require, module, exports, __esModule, __esExport) {
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    __esModule();
    /*!
     * https://github.com/Starcounter-Jack/JSON-Patch
     * (c) 2017 Joachim Wester
     * MIT license
     */
    var helpers_1 = require("cb21060ee5") /* ./helpers */;
    var core_1 = require("b2f693e532") /* ./core */;
    /* export all core functions and types */
    var core_2 = require("b2f693e532") /* ./core */;
    exports.applyOperation = core_2.applyOperation;
    exports.applyPatch = core_2.applyPatch;
    exports.applyReducer = core_2.applyReducer;
    exports.getValueByPointer = core_2.getValueByPointer;
    exports.validate = core_2.validate;
    exports.validator = core_2.validator;
    /* export some helpers */
    var helpers_2 = require("cb21060ee5") /* ./helpers */;
    exports.JsonPatchError = helpers_2.PatchError;
    exports.deepClone = helpers_2._deepClone;
    exports.escapePathComponent = helpers_2.escapePathComponent;
    exports.unescapePathComponent = helpers_2.unescapePathComponent;
    var beforeDict = new WeakMap();
    var Mirror = /** @class */ (function () {
        function Mirror(obj) {
            this.observers = new Map();
            this.obj = obj;
        }
        return Mirror;
    }());
    var ObserverInfo = /** @class */ (function () {
        function ObserverInfo(callback, observer) {
            this.callback = callback;
            this.observer = observer;
        }
        return ObserverInfo;
    }());
    function getMirror(obj) {
        return beforeDict.get(obj);
    }
    function getObserverFromMirror(mirror, callback) {
        return mirror.observers.get(callback);
    }
    function removeObserverFromMirror(mirror, observer) {
        mirror.observers.delete(observer.callback);
    }
    /**
     * Detach an observer from an object
     */
    function unobserve(root, observer) {
        observer.unobserve();
    }
    exports.unobserve = unobserve;
    /**
     * Observes changes made to an object, which can then be retrieved using generate
     */
    function observe(obj, callback) {
        var patches = [];
        var observer;
        var mirror = getMirror(obj);
        if (!mirror) {
            mirror = new Mirror(obj);
            beforeDict.set(obj, mirror);
        }
        else {
            var observerInfo = getObserverFromMirror(mirror, callback);
            observer = observerInfo && observerInfo.observer;
        }
        if (observer) {
            return observer;
        }
        observer = {};
        mirror.value = helpers_1._deepClone(obj);
        if (callback) {
            observer.callback = callback;
            observer.next = null;
            var dirtyCheck = function () {
                generate(observer);
            };
            var fastCheck = function () {
                clearTimeout(observer.next);
                observer.next = setTimeout(dirtyCheck);
            };
            if (typeof window !== 'undefined') { //not Node
                window.addEventListener('mouseup', fastCheck);
                window.addEventListener('keyup', fastCheck);
                window.addEventListener('mousedown', fastCheck);
                window.addEventListener('keydown', fastCheck);
                window.addEventListener('change', fastCheck);
            }
        }
        observer.patches = patches;
        observer.object = obj;
        observer.unobserve = function () {
            generate(observer);
            clearTimeout(observer.next);
            removeObserverFromMirror(mirror, observer);
            if (typeof window !== 'undefined') {
                window.removeEventListener('mouseup', fastCheck);
                window.removeEventListener('keyup', fastCheck);
                window.removeEventListener('mousedown', fastCheck);
                window.removeEventListener('keydown', fastCheck);
                window.removeEventListener('change', fastCheck);
            }
        };
        mirror.observers.set(callback, new ObserverInfo(callback, observer));
        return observer;
    }
    exports.observe = observe;
    /**
     * Generate an array of patches from an observer
     */
    function generate(observer, invertible) {
        if (invertible === void 0) {
            invertible = false;
        }
        var mirror = beforeDict.get(observer.object);
        _generate(mirror.value, observer.object, observer.patches, "", invertible);
        if (observer.patches.length) {
            core_1.applyPatch(mirror.value, observer.patches);
        }
        var temp = observer.patches;
        if (temp.length > 0) {
            observer.patches = [];
            if (observer.callback) {
                observer.callback(temp);
            }
        }
        return temp;
    }
    exports.generate = generate;
    // Dirty check if obj is different from mirror, generate patches and update mirror
    function _generate(mirror, obj, patches, path, invertible) {
        if (obj === mirror) {
            return;
        }
        if (typeof obj.toJSON === "function") {
            obj = obj.toJSON();
        }
        var newKeys = helpers_1._objectKeys(obj);
        var oldKeys = helpers_1._objectKeys(mirror);
        var changed = false;
        var deleted = false;
        //if ever "move" operation is implemented here, make sure this test runs OK: "should not generate the same patch twice (move)"
        for (var t = oldKeys.length - 1; t >= 0; t--) {
            var key = oldKeys[t];
            var oldVal = mirror[key];
            if (helpers_1.hasOwnProperty(obj, key) && !(obj[key] === undefined && oldVal !== undefined && Array.isArray(obj) === false)) {
                var newVal = obj[key];
                if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null) {
                    _generate(oldVal, newVal, patches, path + "/" + helpers_1.escapePathComponent(key), invertible);
                }
                else {
                    if (oldVal !== newVal) {
                        changed = true;
                        if (invertible) {
                            patches.push({ op: "test", path: path + "/" + helpers_1.escapePathComponent(key), value: helpers_1._deepClone(oldVal) });
                        }
                        patches.push({ op: "replace", path: path + "/" + helpers_1.escapePathComponent(key), value: helpers_1._deepClone(newVal) });
                    }
                }
            }
            else if (Array.isArray(mirror) === Array.isArray(obj)) {
                if (invertible) {
                    patches.push({ op: "test", path: path + "/" + helpers_1.escapePathComponent(key), value: helpers_1._deepClone(oldVal) });
                }
                patches.push({ op: "remove", path: path + "/" + helpers_1.escapePathComponent(key) });
                deleted = true; // property has been deleted
            }
            else {
                if (invertible) {
                    patches.push({ op: "test", path: path, value: mirror });
                }
                patches.push({ op: "replace", path: path, value: obj });
                changed = true;
            }
        }
        if (!deleted && newKeys.length == oldKeys.length) {
            return;
        }
        for (var t = 0; t < newKeys.length; t++) {
            var key = newKeys[t];
            if (!helpers_1.hasOwnProperty(mirror, key) && obj[key] !== undefined) {
                patches.push({ op: "add", path: path + "/" + helpers_1.escapePathComponent(key), value: helpers_1._deepClone(obj[key]) });
            }
        }
    }
    /**
     * Create an array of patches from the differences in two objects
     */
    function compare(tree1, tree2, invertible) {
        if (invertible === void 0) {
            invertible = false;
        }
        var patches = [];
        _generate(tree1, tree2, patches, '', invertible);
        return patches;
    }
    exports.compare = compare;
    /**
     * Default export for backwards compat
     */
    // import just to re-export as default
    var core = require("b2f693e532") /* ./core */;
    var helpers_3 = require("cb21060ee5") /* ./helpers */;
    exports.default = __assign({}, core, {
        // duplex
        unobserve: unobserve,
        observe: observe,
        generate: generate,
        compare: compare,
        // helpers
        JsonPatchError: helpers_3.PatchError, deepClone: helpers_1._deepClone, escapePathComponent: helpers_1.escapePathComponent,
        unescapePathComponent: helpers_3.unescapePathComponent
    });
},
"cb21060ee5": /* fast-json-patch/lib/helpers.js */ function _(require, module, exports, __esModule, __esExport) {
    /*!
     * https://github.com/Starcounter-Jack/JSON-Patch
     * (c) 2017 Joachim Wester
     * MIT license
     */
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    __esModule();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwnProperty(obj, key) {
        return _hasOwnProperty.call(obj, key);
    }
    exports.hasOwnProperty = hasOwnProperty;
    function _objectKeys(obj) {
        if (Array.isArray(obj)) {
            var keys = new Array(obj.length);
            for (var k = 0; k < keys.length; k++) {
                keys[k] = "" + k;
            }
            return keys;
        }
        if (Object.keys) {
            return Object.keys(obj);
        }
        var keys = [];
        for (var i in obj) {
            if (hasOwnProperty(obj, i)) {
                keys.push(i);
            }
        }
        return keys;
    }
    exports._objectKeys = _objectKeys;
    ;
    /**
    * Deeply clone the object.
    * https://jsperf.com/deep-copy-vs-json-stringify-json-parse/25 (recursiveDeepCopy)
    * @param  {any} obj value to clone
    * @return {any} cloned obj
    */
    function _deepClone(obj) {
        switch (typeof obj) {
            case "object":
                return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
            case "undefined":
                return null; //this is how JSON.stringify behaves for array items
            default:
                return obj; //no need to clone primitives
        }
    }
    exports._deepClone = _deepClone;
    //3x faster than cached /^\d+$/.test(str)
    function isInteger(str) {
        var i = 0;
        var len = str.length;
        var charCode;
        while (i < len) {
            charCode = str.charCodeAt(i);
            if (charCode >= 48 && charCode <= 57) {
                i++;
                continue;
            }
            return false;
        }
        return true;
    }
    exports.isInteger = isInteger;
    /**
    * Escapes a json pointer path
    * @param path The raw pointer
    * @return the Escaped path
    */
    function escapePathComponent(path) {
        if (path.indexOf('/') === -1 && path.indexOf('~') === -1)
            return path;
        return path.replace(/~/g, '~0').replace(/\//g, '~1');
    }
    exports.escapePathComponent = escapePathComponent;
    /**
     * Unescapes a json pointer path
     * @param path The escaped pointer
     * @return The unescaped path
     */
    function unescapePathComponent(path) {
        return path.replace(/~1/g, '/').replace(/~0/g, '~');
    }
    exports.unescapePathComponent = unescapePathComponent;
    function _getPathRecursive(root, obj) {
        var found;
        for (var key in root) {
            if (hasOwnProperty(root, key)) {
                if (root[key] === obj) {
                    return escapePathComponent(key) + '/';
                }
                else if (typeof root[key] === 'object') {
                    found = _getPathRecursive(root[key], obj);
                    if (found != '') {
                        return escapePathComponent(key) + '/' + found;
                    }
                }
            }
        }
        return '';
    }
    exports._getPathRecursive = _getPathRecursive;
    function getPath(root, obj) {
        if (root === obj) {
            return '/';
        }
        var path = _getPathRecursive(root, obj);
        if (path === '') {
            throw new Error("Object not found in root");
        }
        return '/' + path;
    }
    exports.getPath = getPath;
    /**
    * Recursively checks whether an object has any undefined values inside.
    */
    function hasUndefined(obj) {
        if (obj === undefined) {
            return true;
        }
        if (obj) {
            if (Array.isArray(obj)) {
                for (var i = 0, len = obj.length; i < len; i++) {
                    if (hasUndefined(obj[i])) {
                        return true;
                    }
                }
            }
            else if (typeof obj === "object") {
                var objKeys = _objectKeys(obj);
                var objKeysLength = objKeys.length;
                for (var i = 0; i < objKeysLength; i++) {
                    if (hasUndefined(obj[objKeys[i]])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    exports.hasUndefined = hasUndefined;
    function patchErrorMessageFormatter(message, args) {
        var messageParts = [message];
        for (var key in args) {
            var value = typeof args[key] === 'object' ? JSON.stringify(args[key], null, 2) : args[key]; // pretty print
            if (typeof value !== 'undefined') {
                messageParts.push(key + ": " + value);
            }
        }
        return messageParts.join('\n');
    }
    var PatchError = /** @class */ (function (_super) {
        __extends(PatchError, _super);
        function PatchError(message, name, index, operation, tree) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, patchErrorMessageFormatter(message, { name: name, index: index, operation: operation, tree: tree })) || this;
            _this.name = name;
            _this.index = index;
            _this.operation = operation;
            _this.tree = tree;
            Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain, see https://stackoverflow.com/a/48342359
            _this.message = patchErrorMessageFormatter(message, { name: name, index: index, operation: operation, tree: tree });
            return _this;
        }
        return PatchError;
    }(Error));
    exports.PatchError = PatchError;
},
"b2f693e532": /* fast-json-patch/lib/core.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var areEquals = require("0c8122087b") /* fast-deep-equal */;
    var helpers_1 = require("cb21060ee5") /* ./helpers */;
    exports.JsonPatchError = helpers_1.PatchError;
    exports.deepClone = helpers_1._deepClone;
    /* We use a Javascript hash to store each
     function. Each hash entry (property) uses
     the operation identifiers specified in rfc6902.
     In this way, we can map each patch operation
     to its dedicated function in efficient way.
     */
    /* The operations applicable to an object */
    var objOps = {
        add: function (obj, key, document) {
            obj[key] = this.value;
            return { newDocument: document };
        },
        remove: function (obj, key, document) {
            var removed = obj[key];
            delete obj[key];
            return { newDocument: document, removed: removed };
        },
        replace: function (obj, key, document) {
            var removed = obj[key];
            obj[key] = this.value;
            return { newDocument: document, removed: removed };
        },
        move: function (obj, key, document) {
            /* in case move target overwrites an existing value,
            return the removed value, this can be taxing performance-wise,
            and is potentially unneeded */
            var removed = getValueByPointer(document, this.path);
            if (removed) {
                removed = helpers_1._deepClone(removed);
            }
            var originalValue = applyOperation(document, { op: "remove", path: this.from }).removed;
            applyOperation(document, { op: "add", path: this.path, value: originalValue });
            return { newDocument: document, removed: removed };
        },
        copy: function (obj, key, document) {
            var valueToCopy = getValueByPointer(document, this.from);
            // enforce copy by value so further operations don't affect source (see issue #177)
            applyOperation(document, { op: "add", path: this.path, value: helpers_1._deepClone(valueToCopy) });
            return { newDocument: document };
        },
        test: function (obj, key, document) {
            return { newDocument: document, test: areEquals(obj[key], this.value) };
        },
        _get: function (obj, key, document) {
            this.value = obj[key];
            return { newDocument: document };
        }
    };
    /* The operations applicable to an array. Many are the same as for the object */
    var arrOps = {
        add: function (arr, i, document) {
            if (helpers_1.isInteger(i)) {
                arr.splice(i, 0, this.value);
            }
            else { // array props
                arr[i] = this.value;
            }
            // this may be needed when using '-' in an array
            return { newDocument: document, index: i };
        },
        remove: function (arr, i, document) {
            var removedList = arr.splice(i, 1);
            return { newDocument: document, removed: removedList[0] };
        },
        replace: function (arr, i, document) {
            var removed = arr[i];
            arr[i] = this.value;
            return { newDocument: document, removed: removed };
        },
        move: objOps.move,
        copy: objOps.copy,
        test: objOps.test,
        _get: objOps._get
    };
    /**
     * Retrieves a value from a JSON document by a JSON pointer.
     * Returns the value.
     *
     * @param document The document to get the value from
     * @param pointer an escaped JSON pointer
     * @return The retrieved value
     */
    function getValueByPointer(document, pointer) {
        if (pointer == '') {
            return document;
        }
        var getOriginalDestination = { op: "_get", path: pointer };
        applyOperation(document, getOriginalDestination);
        return getOriginalDestination.value;
    }
    exports.getValueByPointer = getValueByPointer;
    /**
     * Apply a single JSON Patch Operation on a JSON document.
     * Returns the {newDocument, result} of the operation.
     * It modifies the `document` and `operation` objects - it gets the values by reference.
     * If you would like to avoid touching your values, clone them:
     * `jsonpatch.applyOperation(document, jsonpatch._deepClone(operation))`.
     *
     * @param document The document to patch
     * @param operation The operation to apply
     * @param validateOperation `false` is without validation, `true` to use default jsonpatch's validation, or you can pass a `validateOperation` callback to be used for validation.
     * @param mutateDocument Whether to mutate the original document or clone it before applying
     * @param banPrototypeModifications Whether to ban modifications to `__proto__`, defaults to `true`.
     * @return `{newDocument, result}` after the operation
     */
    function applyOperation(document, operation, validateOperation, mutateDocument, banPrototypeModifications, index) {
        if (validateOperation === void 0) {
            validateOperation = false;
        }
        if (mutateDocument === void 0) {
            mutateDocument = true;
        }
        if (banPrototypeModifications === void 0) {
            banPrototypeModifications = true;
        }
        if (index === void 0) {
            index = 0;
        }
        if (validateOperation) {
            if (typeof validateOperation == 'function') {
                validateOperation(operation, 0, document, operation.path);
            }
            else {
                validator(operation, 0);
            }
        }
        /* ROOT OPERATIONS */
        if (operation.path === "") {
            var returnValue = { newDocument: document };
            if (operation.op === 'add') {
                returnValue.newDocument = operation.value;
                return returnValue;
            }
            else if (operation.op === 'replace') {
                returnValue.newDocument = operation.value;
                returnValue.removed = document; //document we removed
                return returnValue;
            }
            else if (operation.op === 'move' || operation.op === 'copy') { // it's a move or copy to root
                returnValue.newDocument = getValueByPointer(document, operation.from); // get the value by json-pointer in `from` field
                if (operation.op === 'move') { // report removed item
                    returnValue.removed = document;
                }
                return returnValue;
            }
            else if (operation.op === 'test') {
                returnValue.test = areEquals(document, operation.value);
                if (returnValue.test === false) {
                    throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
                }
                returnValue.newDocument = document;
                return returnValue;
            }
            else if (operation.op === 'remove') { // a remove on root
                returnValue.removed = document;
                returnValue.newDocument = null;
                return returnValue;
            }
            else if (operation.op === '_get') {
                operation.value = document;
                return returnValue;
            }
            else { /* bad operation */
                if (validateOperation) {
                    throw new exports.JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, document);
                }
                else {
                    return returnValue;
                }
            }
        } /* END ROOT OPERATIONS */
        else {
            if (!mutateDocument) {
                document = helpers_1._deepClone(document);
            }
            var path = operation.path || "";
            var keys = path.split('/');
            var obj = document;
            var t = 1; //skip empty element - http://jsperf.com/to-shift-or-not-to-shift
            var len = keys.length;
            var existingPathFragment = undefined;
            var key = void 0;
            var validateFunction = void 0;
            if (typeof validateOperation == 'function') {
                validateFunction = validateOperation;
            }
            else {
                validateFunction = validator;
            }
            while (true) {
                key = keys[t];
                if (banPrototypeModifications && key == '__proto__') {
                    throw new TypeError('JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README');
                }
                if (validateOperation) {
                    if (existingPathFragment === undefined) {
                        if (obj[key] === undefined) {
                            existingPathFragment = keys.slice(0, t).join('/');
                        }
                        else if (t == len - 1) {
                            existingPathFragment = operation.path;
                        }
                        if (existingPathFragment !== undefined) {
                            validateFunction(operation, 0, document, existingPathFragment);
                        }
                    }
                }
                t++;
                if (Array.isArray(obj)) {
                    if (key === '-') {
                        key = obj.length;
                    }
                    else {
                        if (validateOperation && !helpers_1.isInteger(key)) {
                            throw new exports.JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", index, operation, document);
                        } // only parse key when it's an integer for `arr.prop` to work
                        else if (helpers_1.isInteger(key)) {
                            key = ~~key;
                        }
                    }
                    if (t >= len) {
                        if (validateOperation && operation.op === "add" && key > obj.length) {
                            throw new exports.JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", index, operation, document);
                        }
                        var returnValue = arrOps[operation.op].call(operation, obj, key, document); // Apply patch
                        if (returnValue.test === false) {
                            throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
                        }
                        return returnValue;
                    }
                }
                else {
                    if (key && key.indexOf('~') != -1) {
                        key = helpers_1.unescapePathComponent(key);
                    }
                    if (t >= len) {
                        var returnValue = objOps[operation.op].call(operation, obj, key, document); // Apply patch
                        if (returnValue.test === false) {
                            throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
                        }
                        return returnValue;
                    }
                }
                obj = obj[key];
            }
        }
    }
    exports.applyOperation = applyOperation;
    /**
     * Apply a full JSON Patch array on a JSON document.
     * Returns the {newDocument, result} of the patch.
     * It modifies the `document` object and `patch` - it gets the values by reference.
     * If you would like to avoid touching your values, clone them:
     * `jsonpatch.applyPatch(document, jsonpatch._deepClone(patch))`.
     *
     * @param document The document to patch
     * @param patch The patch to apply
     * @param validateOperation `false` is without validation, `true` to use default jsonpatch's validation, or you can pass a `validateOperation` callback to be used for validation.
     * @param mutateDocument Whether to mutate the original document or clone it before applying
     * @param banPrototypeModifications Whether to ban modifications to `__proto__`, defaults to `true`.
     * @return An array of `{newDocument, result}` after the patch
     */
    function applyPatch(document, patch, validateOperation, mutateDocument, banPrototypeModifications) {
        if (mutateDocument === void 0) {
            mutateDocument = true;
        }
        if (banPrototypeModifications === void 0) {
            banPrototypeModifications = true;
        }
        if (validateOperation) {
            if (!Array.isArray(patch)) {
                throw new exports.JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
            }
        }
        if (!mutateDocument) {
            document = helpers_1._deepClone(document);
        }
        var results = new Array(patch.length);
        for (var i = 0, length_1 = patch.length; i < length_1; i++) {
            // we don't need to pass mutateDocument argument because if it was true, we already deep cloned the object, we'll just pass `true`
            results[i] = applyOperation(document, patch[i], validateOperation, true, banPrototypeModifications, i);
            document = results[i].newDocument; // in case root was replaced
        }
        results.newDocument = document;
        return results;
    }
    exports.applyPatch = applyPatch;
    /**
     * Apply a single JSON Patch Operation on a JSON document.
     * Returns the updated document.
     * Suitable as a reducer.
     *
     * @param document The document to patch
     * @param operation The operation to apply
     * @return The updated document
     */
    function applyReducer(document, operation, index) {
        var operationResult = applyOperation(document, operation);
        if (operationResult.test === false) { // failed test
            throw new exports.JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
        }
        return operationResult.newDocument;
    }
    exports.applyReducer = applyReducer;
    /**
     * Validates a single operation. Called from `jsonpatch.validate`. Throws `JsonPatchError` in case of an error.
     * @param {object} operation - operation object (patch)
     * @param {number} index - index of operation in the sequence
     * @param {object} [document] - object where the operation is supposed to be applied
     * @param {string} [existingPathFragment] - comes along with `document`
     */
    function validator(operation, index, document, existingPathFragment) {
        if (typeof operation !== 'object' || operation === null || Array.isArray(operation)) {
            throw new exports.JsonPatchError('Operation is not an object', 'OPERATION_NOT_AN_OBJECT', index, operation, document);
        }
        else if (!objOps[operation.op]) {
            throw new exports.JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, document);
        }
        else if (typeof operation.path !== 'string') {
            throw new exports.JsonPatchError('Operation `path` property is not a string', 'OPERATION_PATH_INVALID', index, operation, document);
        }
        else if (operation.path.indexOf('/') !== 0 && operation.path.length > 0) {
            // paths that aren't empty string should start with "/"
            throw new exports.JsonPatchError('Operation `path` property must start with "/"', 'OPERATION_PATH_INVALID', index, operation, document);
        }
        else if ((operation.op === 'move' || operation.op === 'copy') && typeof operation.from !== 'string') {
            throw new exports.JsonPatchError('Operation `from` property is not present (applicable in `move` and `copy` operations)', 'OPERATION_FROM_REQUIRED', index, operation, document);
        }
        else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && operation.value === undefined) {
            throw new exports.JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_REQUIRED', index, operation, document);
        }
        else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && helpers_1.hasUndefined(operation.value)) {
            throw new exports.JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED', index, operation, document);
        }
        else if (document) {
            if (operation.op == "add") {
                var pathLen = operation.path.split("/").length;
                var existingPathLen = existingPathFragment.split("/").length;
                if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) {
                    throw new exports.JsonPatchError('Cannot perform an `add` operation at the desired path', 'OPERATION_PATH_CANNOT_ADD', index, operation, document);
                }
            }
            else if (operation.op === 'replace' || operation.op === 'remove' || operation.op === '_get') {
                if (operation.path !== existingPathFragment) {
                    throw new exports.JsonPatchError('Cannot perform the operation at a path that does not exist', 'OPERATION_PATH_UNRESOLVABLE', index, operation, document);
                }
            }
            else if (operation.op === 'move' || operation.op === 'copy') {
                var existingValue = { op: "_get", path: operation.from, value: undefined };
                var error = validate([existingValue], document);
                if (error && error.name === 'OPERATION_PATH_UNRESOLVABLE') {
                    throw new exports.JsonPatchError('Cannot perform the operation from a path that does not exist', 'OPERATION_FROM_UNRESOLVABLE', index, operation, document);
                }
            }
        }
    }
    exports.validator = validator;
    /**
     * Validates a sequence of operations. If `document` parameter is provided, the sequence is additionally validated against the object document.
     * If error is encountered, returns a JsonPatchError object
     * @param sequence
     * @param document
     * @returns {JsonPatchError|undefined}
     */
    function validate(sequence, document, externalValidator) {
        try {
            if (!Array.isArray(sequence)) {
                throw new exports.JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
            }
            if (document) {
                //clone document and sequence so that we can safely try applying operations
                applyPatch(helpers_1._deepClone(document), helpers_1._deepClone(sequence), externalValidator || true);
            }
            else {
                externalValidator = externalValidator || validator;
                for (var i = 0; i < sequence.length; i++) {
                    externalValidator(sequence[i], i, document, undefined);
                }
            }
        }
        catch (e) {
            if (e instanceof exports.JsonPatchError) {
                return e;
            }
            else {
                throw e;
            }
        }
    }
    exports.validate = validate;
    /**
     * Default export for backwards compat
     */
    exports.default = {
        JsonPatchError: exports.JsonPatchError,
        deepClone: exports.deepClone,
        getValueByPointer: getValueByPointer,
        applyOperation: applyOperation,
        applyPatch: applyPatch,
        applyReducer: applyReducer,
        validator: validator,
        validate: validate
    };
},
"0c8122087b": /* fast-deep-equal/index.js */ function _(require, module, exports, __esModule, __esExport) {
    var isArray = Array.isArray;
    var keyList = Object.keys;
    var hasProp = Object.prototype.hasOwnProperty;
    module.exports = function equal(a, b) {
        if (a === b)
            return true;
        if (a && b && typeof a == 'object' && typeof b == 'object') {
            var arrA = isArray(a), arrB = isArray(b), i, length, key;
            if (arrA && arrB) {
                length = a.length;
                if (length != b.length)
                    return false;
                for (i = length; i-- !== 0;)
                    if (!equal(a[i], b[i]))
                        return false;
                return true;
            }
            if (arrA != arrB)
                return false;
            var dateA = a instanceof Date, dateB = b instanceof Date;
            if (dateA != dateB)
                return false;
            if (dateA && dateB)
                return a.getTime() == b.getTime();
            var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
            if (regexpA != regexpB)
                return false;
            if (regexpA && regexpB)
                return a.toString() == b.toString();
            var keys = keyList(a);
            length = keys.length;
            if (length !== keyList(b).length)
                return false;
            for (i = length; i-- !== 0;)
                if (!hasProp.call(b, keys[i]))
                    return false;
            for (i = length; i-- !== 0;) {
                key = keys[i];
                if (!equal(a[key], b[key]))
                    return false;
            }
            return true;
        }
        return a !== a && b !== b;
    };
},
"5ad9f86156": /* models/ipywidget.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    const Jupyter = window.Jupyter;
    class IPyWidgetView extends layout_1.PanelHTMLBoxView {
        constructor() {
            super(...arguments);
            this.rendered = false;
        }
        async lazy_initialize() {
            await super.lazy_initialize();
            let manager;
            if ((Jupyter != null) && (Jupyter.notebook != null))
                manager = Jupyter.notebook.kernel.widget_manager;
            else if (window.PyViz.widget_manager != null)
                manager = window.PyViz.widget_manager;
            else {
                console.warn("Panel IPyWidget model could not find a WidgetManager");
                return;
            }
            this.manager = manager;
            this.ipychildren = [];
            const { spec, state } = this.model.bundle;
            const models = await manager.set_state(state);
            const model = models.find((item) => item.model_id == spec.model_id);
            if (model != null) {
                const view = await this.manager.create_view(model, { el: this.el });
                this.ipyview = view;
                if (view.children_views) {
                    for (const child of view.children_views.views)
                        this.ipychildren.push(await child);
                }
            }
        }
        render() {
            super.render();
            if (this.ipyview != null) {
                this.el.appendChild(this.ipyview.el);
                if (!this.rendered) {
                    this.ipyview.trigger('displayed', this.ipyview);
                    for (const child of this.ipychildren)
                        child.trigger('displayed', child);
                }
            }
            this.rendered = true;
        }
        has_finished() {
            return this.rendered && super.has_finished();
        }
    }
    exports.IPyWidgetView = IPyWidgetView;
    IPyWidgetView.__name__ = "IPyWidgetView";
    class IPyWidget extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_IPyWidget() {
            this.prototype.default_view = IPyWidgetView;
            this.define(({ Any }) => ({
                bundle: [Any, {}],
            }));
        }
    }
    exports.IPyWidget = IPyWidget;
    IPyWidget.__name__ = "IPyWidget";
    IPyWidget.__module__ = "panel.models.ipywidget";
    IPyWidget.init_IPyWidget();
},
"0d30bea0c8": /* models/json.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const kinds_1 = require("@bokehjs/core/kinds");
    const markup_1 = require("@bokehjs/models/widgets/markup");
    const json_formatter_js_1 = (0, tslib_1.__importDefault)(require("18bba7b7e1") /* json-formatter-js */);
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class JSONView extends layout_1.PanelMarkupView {
        connect_signals() {
            super.connect_signals();
            const { depth, hover_preview, theme } = this.model.properties;
            this.on_change([depth, hover_preview, theme], () => this.render());
        }
        render() {
            super.render();
            const text = this.model.text.replace(/(\r\n|\n|\r)/gm, "");
            let json;
            try {
                json = window.JSON.parse(text);
            }
            catch (err) {
                this.markup_el.innerHTML = "<b>Invalid JSON:</b> " + err.toString();
                return;
            }
            const config = { hoverPreviewEnabled: this.model.hover_preview, theme: this.model.theme };
            const depth = this.model.depth == null ? Infinity : this.model.depth;
            const formatter = new json_formatter_js_1.default(json, depth, config);
            const rendered = formatter.render();
            let style = "border-radius: 5px; padding: 10px;";
            if (this.model.theme == "dark")
                rendered.style.cssText = "background-color: rgb(30, 30, 30);" + style;
            else
                rendered.style.cssText = style;
            this.markup_el.append(rendered);
        }
    }
    exports.JSONView = JSONView;
    JSONView.__name__ = "JSONView";
    exports.JSONTheme = (0, kinds_1.Enum)("dark", "light");
    class JSON extends markup_1.Markup {
        constructor(attrs) {
            super(attrs);
        }
        static init_JSON() {
            this.prototype.default_view = JSONView;
            this.define(({ Boolean, Int, Nullable }) => ({
                depth: [Nullable(Int), 1],
                hover_preview: [Boolean, false],
                theme: [exports.JSONTheme, "dark"],
            }));
        }
    }
    exports.JSON = JSON;
    JSON.__name__ = "JSON";
    JSON.__module__ = "panel.models.markup";
    JSON.init_JSON();
},
"18bba7b7e1": /* json-formatter-js/dist/json-formatter.esm.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    function t(t) { return null === t ? "null" : typeof t; }
    function e(t) { return !!t && "object" == typeof t; }
    function r(t) {
        if (void 0 === t)
            return "";
        if (null === t)
            return "Object";
        if ("object" == typeof t && !t.constructor)
            return "Object";
        var e = /function ([^(]*)/.exec(t.constructor.toString());
        return e && e.length > 1 ? e[1] : "";
    }
    function n(t, e, r) { return "null" === t || "undefined" === t ? t : ("string" !== t && "stringifiable" !== t || (r = '"' + r.replace(/"/g, '\\"') + '"'), "function" === t ? e.toString().replace(/[\r\n]/g, "").replace(/\{.*\}/, "") + "{…}" : r); }
    function o(o) { var i = ""; return e(o) ? (i = r(o), Array.isArray(o) && (i += "[" + o.length + "]")) : i = n(t(o), o, o), i; }
    function i(t) { return "json-formatter-" + t; }
    function s(t, e, r) { var n = document.createElement(t); return e && n.classList.add(i(e)), void 0 !== r && (r instanceof Node ? n.appendChild(r) : n.appendChild(document.createTextNode(String(r)))), n; }
    !function (t) {
        if (t && "undefined" != typeof window) {
            var e = document.createElement("style");
            e.setAttribute("media", "screen"), e.innerHTML = t, document.head.appendChild(e);
        }
    }('.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855A00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008B;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "►";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31F031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66C2FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027BFF;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23A0DB;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "►";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n');
    var a = /(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/, f = /\d{2}:\d{2}:\d{2} GMT-\d{4}/, m = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/, l = window.requestAnimationFrame || function (t) { return t(), 0; }, d = { hoverPreviewEnabled: !1, hoverPreviewArrayCount: 100, hoverPreviewFieldCount: 5, animateOpen: !0, animateClose: !0, theme: null, useToJSON: !0, sortPropertiesBy: null }, c = function () {
        function c(t, e, r, n) { void 0 === e && (e = 1), void 0 === r && (r = d), this.json = t, this.open = e, this.config = r, this.key = n, this._isOpen = null, void 0 === this.config.hoverPreviewEnabled && (this.config.hoverPreviewEnabled = d.hoverPreviewEnabled), void 0 === this.config.hoverPreviewArrayCount && (this.config.hoverPreviewArrayCount = d.hoverPreviewArrayCount), void 0 === this.config.hoverPreviewFieldCount && (this.config.hoverPreviewFieldCount = d.hoverPreviewFieldCount), void 0 === this.config.useToJSON && (this.config.useToJSON = d.useToJSON), "" === this.key && (this.key = '""'); }
        return Object.defineProperty(c.prototype, "isOpen", { get: function () { return null !== this._isOpen ? this._isOpen : this.open > 0; }, set: function (t) { this._isOpen = t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "isDate", { get: function () { return this.json instanceof Date || "string" === this.type && (a.test(this.json) || m.test(this.json) || f.test(this.json)); }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "isUrl", { get: function () { return "string" === this.type && 0 === this.json.indexOf("http"); }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "isArray", { get: function () { return Array.isArray(this.json); }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "isObject", { get: function () { return e(this.json); }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "isEmptyObject", { get: function () { return !this.keys.length && !this.isArray; }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "isEmpty", { get: function () { return this.isEmptyObject || this.keys && !this.keys.length && this.isArray; }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "useToJSON", { get: function () { return this.config.useToJSON && "stringifiable" === this.type; }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "hasKey", { get: function () { return void 0 !== this.key; }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "constructorName", { get: function () { return r(this.json); }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "type", { get: function () { return this.config.useToJSON && this.json && this.json.toJSON ? "stringifiable" : t(this.json); }, enumerable: !0, configurable: !0 }), Object.defineProperty(c.prototype, "keys", { get: function () {
                if (this.isObject) {
                    var t = Object.keys(this.json);
                    return !this.isArray && this.config.sortPropertiesBy ? t.sort(this.config.sortPropertiesBy) : t;
                }
                return [];
            }, enumerable: !0, configurable: !0 }), c.prototype.toggleOpen = function () { this.isOpen = !this.isOpen, this.element && (this.isOpen ? this.appendChildren(this.config.animateOpen) : this.removeChildren(this.config.animateClose), this.element.classList.toggle(i("open"))); }, c.prototype.openAtDepth = function (t) { void 0 === t && (t = 1), t < 0 || (this.open = t, this.isOpen = 0 !== t, this.element && (this.removeChildren(!1), 0 === t ? this.element.classList.remove(i("open")) : (this.appendChildren(this.config.animateOpen), this.element.classList.add(i("open"))))); }, c.prototype.getInlinepreview = function () {
            var t = this;
            if (this.isArray)
                return this.json.length > this.config.hoverPreviewArrayCount ? "Array[" + this.json.length + "]" : "[" + this.json.map(o).join(", ") + "]";
            var e = this.keys, r = e.slice(0, this.config.hoverPreviewFieldCount).map((function (e) { return e + ":" + o(t.json[e]); })), n = e.length >= this.config.hoverPreviewFieldCount ? "…" : "";
            return "{" + r.join(", ") + n + "}";
        }, c.prototype.render = function () {
            this.element = s("div", "row");
            var t = this.isObject ? s("a", "toggler-link") : s("span");
            if (this.isObject && !this.useToJSON && t.appendChild(s("span", "toggler")), this.hasKey && t.appendChild(s("span", "key", this.key + ":")), this.isObject && !this.useToJSON) {
                var e = s("span", "value"), r = s("span"), o = s("span", "constructor-name", this.constructorName);
                if (r.appendChild(o), this.isArray) {
                    var a = s("span");
                    a.appendChild(s("span", "bracket", "[")), a.appendChild(s("span", "number", this.json.length)), a.appendChild(s("span", "bracket", "]")), r.appendChild(a);
                }
                e.appendChild(r), t.appendChild(e);
            }
            else {
                (e = this.isUrl ? s("a") : s("span")).classList.add(i(this.type)), this.isDate && e.classList.add(i("date")), this.isUrl && (e.classList.add(i("url")), e.setAttribute("href", this.json));
                var f = n(this.type, this.json, this.useToJSON ? this.json.toJSON() : this.json);
                e.appendChild(document.createTextNode(f)), t.appendChild(e);
            }
            if (this.isObject && this.config.hoverPreviewEnabled) {
                var m = s("span", "preview-text");
                m.appendChild(document.createTextNode(this.getInlinepreview())), t.appendChild(m);
            }
            var l = s("div", "children");
            return this.isObject && l.classList.add(i("object")), this.isArray && l.classList.add(i("array")), this.isEmpty && l.classList.add(i("empty")), this.config && this.config.theme && this.element.classList.add(i(this.config.theme)), this.isOpen && this.element.classList.add(i("open")), this.element.appendChild(t), this.element.appendChild(l), this.isObject && this.isOpen && this.appendChildren(), this.isObject && !this.useToJSON && t.addEventListener("click", this.toggleOpen.bind(this)), this.element;
        }, c.prototype.appendChildren = function (t) {
            var e = this;
            void 0 === t && (t = !1);
            var r = this.element.querySelector("div." + i("children"));
            if (r && !this.isEmpty)
                if (t) {
                    var n = 0, o = function () { var t = e.keys[n], i = new c(e.json[t], e.open - 1, e.config, t); r.appendChild(i.render()), (n += 1) < e.keys.length && (n > 10 ? o() : l(o)); };
                    l(o);
                }
                else
                    this.keys.forEach((function (t) { var n = new c(e.json[t], e.open - 1, e.config, t); r.appendChild(n.render()); }));
        }, c.prototype.removeChildren = function (t) {
            void 0 === t && (t = !1);
            var e = this.element.querySelector("div." + i("children"));
            if (t) {
                var r = 0, n = function () { e && e.children.length && (e.removeChild(e.children[0]), (r += 1) > 10 ? n() : l(n)); };
                l(n);
            }
            else
                e && (e.innerHTML = "");
        }, c;
    }();
    exports.default = c;
},
"5379466860": /* models/jsoneditor.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const bokeh_events_1 = require("@bokehjs/core/bokeh_events");
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class JSONEditEvent extends bokeh_events_1.ModelEvent {
        constructor(data) {
            super();
            this.data = data;
            this.event_name = "json_edit";
        }
        _to_json() {
            return { model: this.origin, data: this.data };
        }
    }
    exports.JSONEditEvent = JSONEditEvent;
    JSONEditEvent.__name__ = "JSONEditEvent";
    class JSONEditorView extends layout_1.PanelHTMLBoxView {
        connect_signals() {
            super.connect_signals();
            const { data, disabled, templates, menu, mode, search, schema } = this.model.properties;
            this.on_change([data], () => this.editor.update(this.model.data));
            this.on_change([templates], () => {
                this.editor.options.templates = this.model.templates;
            });
            this.on_change([menu], () => {
                this.editor.options.menu = this.model.menu;
            });
            this.on_change([search], () => {
                this.editor.options.search = this.model.search;
            });
            this.on_change([schema], () => {
                this.editor.options.schema = this.model.schema;
            });
            this.on_change([disabled, mode], () => {
                const mode = this.model.disabled ? 'view' : this.model.mode;
                this.editor.setMode(mode);
            });
        }
        remove() {
            super.remove();
            this.editor.destroy();
        }
        render() {
            super.render();
            const mode = this.model.disabled ? 'view' : this.model.mode;
            this.editor = new window.JSONEditor(this.el, {
                menu: this.model.menu,
                mode: mode,
                onChangeJSON: (json) => {
                    this.model.data = json;
                },
                onSelectionChange: (start, end) => {
                    this.model.selection = [start, end];
                },
                search: this.model.search,
                schema: this.model.schema,
                templates: this.model.templates,
            });
            this.editor.set(this.model.data);
        }
    }
    exports.JSONEditorView = JSONEditorView;
    JSONEditorView.__name__ = "JSONEditorView";
    class JSONEditor extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_JSONEditor() {
            this.prototype.default_view = JSONEditorView;
            this.define(({ Any, Array, Boolean, String }) => ({
                data: [Any, {}],
                mode: [String, 'tree'],
                menu: [Boolean, true],
                search: [Boolean, true],
                selection: [Array(Any), []],
                schema: [Any, null],
                templates: [Array(Any), []],
            }));
        }
    }
    exports.JSONEditor = JSONEditor;
    JSONEditor.__name__ = "JSONEditor";
    JSONEditor.__module__ = "panel.models.jsoneditor";
    JSONEditor.init_JSONEditor();
},
"1767172ffa": /* models/file_download.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const input_widget_1 = require("@bokehjs/models/widgets/input_widget");
    const buttons_css_1 = (0, tslib_1.__importStar)(require("@bokehjs/styles/buttons.css")), buttons = buttons_css_1;
    const dom_1 = require("@bokehjs/core/dom");
    const enums_1 = require("@bokehjs/core/enums");
    function dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        const byteString = atob(dataURI.split(',')[1]);
        // separate out the mime component
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to an ArrayBuffer
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // write the ArrayBuffer to a blob, and you're done
        var bb = new Blob([ab], { type: mimeString });
        return bb;
    }
    class FileDownloadView extends input_widget_1.InputWidgetView {
        constructor() {
            super(...arguments);
            this._downloadable = false;
            this._embed = false;
            this._prev_href = "";
            this._prev_download = "";
        }
        initialize() {
            super.initialize();
            if (this.model.data && this.model.filename) {
                this._embed = true;
            }
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.button_type.change, () => this._update_button_style());
            this.connect(this.model.properties.filename.change, () => this._update_download());
            this.connect(this.model.properties._transfers.change, () => this._handle_click());
            this.connect(this.model.properties.label.change, () => this._update_label());
            this.connect(this.model.properties.disabled.change, () => this.set_disabled());
        }
        render() {
            super.render();
            this.group_el.style.display = "flex";
            this.group_el.style.alignItems = "stretch";
            // Create an anchor HTML element that is styled as a bokeh button.
            // When its 'href' and 'download' attributes are set, it's a downloadable link:
            // * A click triggers a download
            // * A right click allows to "Save as" the file
            // There are three main cases:
            // 1. embed=True: The widget is a download link
            // 2. auto=False: The widget is first a button and becomes a download link after the first click
            // 3. auto=True: The widget is a button, i.e right click to "Save as..." won't work
            this.anchor_el = document.createElement('a');
            this._update_button_style();
            this._update_label();
            // Changing the disabled property calls render() so it needs to be handled here.
            // This callback is inherited from ControlView in bokehjs.
            if (this.model.disabled) {
                this.anchor_el.setAttribute("disabled", "");
                this._downloadable = false;
            }
            else {
                this.anchor_el.removeAttribute("disabled");
                // auto=False + toggle Disabled ==> Needs to reset the link as it was.
                if (this._prev_download) {
                    this.anchor_el.download = this._prev_download;
                }
                if (this._prev_href) {
                    this.anchor_el.href = this._prev_href;
                }
                if (this.anchor_el.download && this.anchor_el.download) {
                    this._downloadable = true;
                }
            }
            // If embedded the button is just a download link.
            // Otherwise clicks will be handled by the code itself, allowing for more interactivity.
            if (this._embed) {
                this._make_link_downloadable();
            }
            else {
                // Add a "click" listener, note that it's not going to
                // handle right clicks (they won't increment 'clicks')
                this._click_listener = this._increment_clicks.bind(this);
                this.anchor_el.addEventListener("click", this._click_listener);
            }
            this.group_el.appendChild(this.anchor_el);
            // If this is not added it will give the following error
            // "Uncaught TypeError: t is undefined"
            // This seems to be related to button do not have a value
            // property.
            this.input_el = (0, dom_1.input)({
                type: "bk_btn, bk_btn_type",
            });
            this.input_el.addEventListener("change", () => this.change_input());
        }
        styles() {
            return [...super.styles(), buttons_css_1.default];
        }
        _increment_clicks() {
            this.model.clicks = this.model.clicks + 1;
        }
        _handle_click() {
            // When auto=False the button becomes a link which no longer
            // requires being updated.
            if (!this.model.auto && this._downloadable) {
                return;
            }
            this._make_link_downloadable();
            if (!this._embed && this.model.auto) {
                // Temporarily removing the event listener to emulate a click
                // event on the anchor link which will trigger a download.
                this.anchor_el.removeEventListener("click", this._click_listener);
                this.anchor_el.click();
                // In this case #3 the widget is not a link so these attributes are removed.
                this.anchor_el.removeAttribute("href");
                this.anchor_el.removeAttribute("download");
                this.anchor_el.addEventListener("click", this._click_listener);
            }
            // Store the current state for handling changes of the disabled property.
            this._prev_href = this.anchor_el.getAttribute("href");
            this._prev_download = this.anchor_el.getAttribute("download");
        }
        _make_link_downloadable() {
            this._update_href();
            this._update_download();
            if (this.anchor_el.download && this.anchor_el.href) {
                this._downloadable = true;
            }
        }
        _update_href() {
            if (this.model.data) {
                const blob = dataURItoBlob(this.model.data);
                this.anchor_el.href = URL.createObjectURL(blob);
            }
        }
        _update_download() {
            if (this.model.filename) {
                this.anchor_el.download = this.model.filename;
            }
        }
        _update_label() {
            this.anchor_el.textContent = this.model.label;
        }
        _update_button_style() {
            const btn_type = buttons[`btn_${this.model.button_type}`];
            if (!this.anchor_el.hasAttribute("class")) { // When the widget is rendered.
                this.anchor_el.classList.add(buttons.btn);
                this.anchor_el.classList.add(btn_type);
            }
            else { // When the button type is changed.
                const prev_button_type = this.anchor_el.classList.item(1);
                if (prev_button_type)
                    this.anchor_el.classList.replace(prev_button_type, btn_type);
            }
        }
        set_disabled() {
            if (this.model.disabled) {
                this.anchor_el.setAttribute("disabled", "");
            }
            else {
                this.anchor_el.removeAttribute("disabled");
            }
        }
    }
    exports.FileDownloadView = FileDownloadView;
    FileDownloadView.__name__ = "FileDownloadView";
    class FileDownload extends input_widget_1.InputWidget {
        constructor(attrs) {
            super(attrs);
        }
        static init_FileDownload() {
            this.prototype.default_view = FileDownloadView;
            this.define(({ Boolean, Int, Nullable, String }) => ({
                auto: [Boolean, false],
                clicks: [Int, 0],
                data: [Nullable(String), null],
                label: [String, "Download"],
                filename: [Nullable(String), null],
                button_type: [enums_1.ButtonType, "default"],
                _transfers: [Int, 0],
            }));
            this.override({
                title: "",
            });
        }
    }
    exports.FileDownload = FileDownload;
    FileDownload.__name__ = "FileDownload";
    FileDownload.__module__ = "panel.models.widgets";
    FileDownload.init_FileDownload();
},
"7b859fb3cf": /* models/katex.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const markup_1 = require("@bokehjs/models/widgets/markup");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class KaTeXView extends layout_1.PanelMarkupView {
        render() {
            super.render();
            this.markup_el.innerHTML = this.model.text;
            if (!window.renderMathInElement) {
                return;
            }
            window.renderMathInElement(this.el, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "\\[", right: "\\]", display: true },
                    { left: "$", right: "$", display: false },
                    { left: "\\(", right: "\\)", display: false }
                ]
            });
        }
    }
    exports.KaTeXView = KaTeXView;
    KaTeXView.__name__ = "KaTeXView";
    class KaTeX extends markup_1.Markup {
        constructor(attrs) {
            super(attrs);
        }
        static init_KaTeX() {
            this.prototype.default_view = KaTeXView;
        }
    }
    exports.KaTeX = KaTeX;
    KaTeX.__name__ = "KaTeX";
    KaTeX.__module__ = "panel.models.katex";
    KaTeX.init_KaTeX();
},
"aca9ec82ba": /* models/location.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const view_1 = require("@bokehjs/core/view");
    const model_1 = require("@bokehjs/model");
    class LocationView extends view_1.View {
        initialize() {
            super.initialize();
            this.model.pathname = window.location.pathname;
            this.model.search = window.location.search;
            this.model.hash = window.location.hash;
            // Readonly parameters on python side
            this.model.href = window.location.href;
            this.model.hostname = window.location.hostname;
            this.model.protocol = window.location.protocol;
            this.model.port = window.location.port;
            this._hash_listener = () => {
                this.model.hash = window.location.hash;
            };
            window.addEventListener('hashchange', this._hash_listener);
            this._has_finished = true;
            this.notify_finished();
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.pathname.change, () => this.update('pathname'));
            this.connect(this.model.properties.search.change, () => this.update('search'));
            this.connect(this.model.properties.hash.change, () => this.update('hash'));
            this.connect(this.model.properties.reload.change, () => this.update('reload'));
        }
        remove() {
            super.remove();
            window.removeEventListener('hashchange', this._hash_listener);
        }
        update(change) {
            if (!this.model.reload || (change === 'reload')) {
                window.history.pushState({}, '', `${this.model.pathname}${this.model.search}${this.model.hash}`);
                this.model.href = window.location.href;
                if (change === 'reload')
                    window.location.reload();
            }
            else {
                if (change == 'pathname')
                    window.location.pathname = this.model.pathname;
                if (change == 'search')
                    window.location.search = this.model.search;
                if (change == 'hash')
                    window.location.hash = this.model.hash;
            }
        }
    }
    exports.LocationView = LocationView;
    LocationView.__name__ = "LocationView";
    class Location extends model_1.Model {
        constructor(attrs) {
            super(attrs);
        }
        static init_Location() {
            this.prototype.default_view = LocationView;
            this.define(({ Boolean, String }) => ({
                href: [String, ""],
                hostname: [String, ""],
                pathname: [String, ""],
                protocol: [String, ""],
                port: [String, ""],
                search: [String, ""],
                hash: [String, ""],
                reload: [Boolean, false],
            }));
        }
    }
    exports.Location = Location;
    Location.__name__ = "Location";
    Location.__module__ = "panel.models.location";
    Location.init_Location();
},
"0c21036737": /* models/mathjax.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const markup_1 = require("@bokehjs/models/widgets/markup");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class MathJaxView extends layout_1.PanelMarkupView {
        initialize() {
            super.initialize();
            this._hub = window.MathJax.Hub;
            this._hub.Config({
                tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] }
            });
        }
        render() {
            super.render();
            if (!this._hub) {
                return;
            }
            this.markup_el.innerHTML = this.model.text;
            this._hub.Queue(["Typeset", this._hub, this.markup_el]);
        }
    }
    exports.MathJaxView = MathJaxView;
    MathJaxView.__name__ = "MathJaxView";
    class MathJax extends markup_1.Markup {
        constructor(attrs) {
            super(attrs);
        }
        static init_MathJax() {
            this.prototype.default_view = MathJaxView;
        }
    }
    exports.MathJax = MathJax;
    MathJax.__name__ = "MathJax";
    MathJax.__module__ = "panel.models.mathjax";
    MathJax.init_MathJax();
},
"4ae96bd77b": /* models/perspective.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const dom_1 = require("@bokehjs/core/dom");
    const column_data_source_1 = require("@bokehjs/models/sources/column_data_source");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    const THEMES = {
        'material-dark': 'Material Dark',
        'material': 'Material Light',
        'material-dense': 'Material Light',
        'material-dense-dark': 'Material Dark',
        'vaporwave': 'Vaporwave',
        'solarized': 'Solarized',
        'solarized-dark': 'Solarized Dark',
        'monokai': 'Monokai'
    };
    const PLUGINS = {
        'datagrid': 'Datagrid',
        'd3_x_bar': 'X Bar',
        'd3_y_bar': 'Y Bar',
        'd3_xy_line': 'X/Y Line',
        'd3_y_line': 'Y Line',
        'd3_y_area': 'Y Area',
        'd3_y_scatter': 'Y Scatter',
        'd3_xy_scatter': 'X/Y Scatter',
        'd3_treemap': 'Treemap',
        'd3_candlestick': 'Candlestick',
        'd3_sunburst': 'Sunburst',
        'd3_heatmap': 'Heatmap',
        'd3_ohlc': 'OHLC'
    };
    function objectFlip(obj) {
        const ret = {};
        Object.keys(obj).forEach(key => {
            ret[obj[key]] = key;
        });
        return ret;
    }
    const PLUGINS_REVERSE = objectFlip(PLUGINS);
    const THEMES_REVERSE = objectFlip(THEMES);
    class PerspectiveView extends layout_1.PanelHTMLBoxView {
        constructor() {
            super(...arguments);
            this._updating = false;
            this._config_listener = null;
            this._current_config = null;
            this._event_listener = null;
            this._loaded = false;
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.source.properties.data.change, () => this.setData());
            this.connect(this.model.properties.toggle_config.change, () => {
                this.perspective_element.toggleConfig();
                this.fix_layout();
            });
            this.connect(this.model.properties.columns.change, () => {
                this.perspective_element.restore({ "columns": this.model.columns });
            });
            this.connect(this.model.properties.expressions.change, () => {
                this.perspective_element.restore({ "expressions": this.model.expressions });
            });
            this.connect(this.model.properties.split_by.change, () => {
                this.perspective_element.restore({ "split_by": this.model.split_by });
            });
            this.connect(this.model.properties.group_by.change, () => {
                this.perspective_element.restore({ "group_by": this.model.group_by });
            });
            this.connect(this.model.properties.aggregates.change, () => {
                this.perspective_element.restore({ "aggregates": this.model.aggregates });
            });
            this.connect(this.model.properties.filters.change, () => {
                this.perspective_element.restore({ "filter": this.model.filters });
            });
            this.connect(this.model.properties.sort.change, () => {
                this.perspective_element.restore({ "sort": this.model.sort });
            });
            this.connect(this.model.properties.plugin.change, () => {
                this.perspective_element.restore({ "plugin": PLUGINS[this.model.plugin] });
            });
            this.connect(this.model.properties.selectable.change, () => {
                this.perspective_element.restore({ "plugin_config": Object.assign(Object.assign({}, this._current_config), { selectable: this.model.selectable }) });
            });
            this.connect(this.model.properties.editable.change, () => {
                this.perspective_element.restore({ "plugin_config": Object.assign(Object.assign({}, this._current_config), { editable: this.model.editable }) });
            });
            this.connect(this.model.properties.theme.change, () => {
                this.perspective_element.restore({ "theme": THEMES[this.model.theme] }).catch(() => { });
            });
            if (this.model.document != null) {
                this._event_listener = (event) => this.on_event(event);
                this.model.document.on_change(this._event_listener);
            }
        }
        disconnect_signals() {
            if (this._config_listener != null)
                this.perspective_element.removeEventListener("perspective-config-update", this._config_listener);
            this._config_listener = null;
            if (this.model.document != null && this._event_listener != null)
                this.model.document.remove_on_change(this._event_listener);
            this._event_listener = null;
            super.disconnect_signals();
        }
        async render() {
            super.render();
            this.worker = window.perspective.worker();
            this.table = await this.worker.table(this.model.schema);
            this.table.update(this.data);
            const container = (0, dom_1.div)({
                class: "pnx-perspective-viewer",
                style: {
                    zIndex: 0,
                }
            });
            (0, layout_1.set_size)(container, this.model);
            container.innerHTML = "<perspective-viewer style='height:100%; width:100%;'></perspective-viewer>";
            this.perspective_element = container.children[0];
            this.perspective_element.resetThemes([...Object.values(THEMES)]).catch(() => { });
            (0, layout_1.set_size)(this.perspective_element, this.model);
            this.el.appendChild(container);
            this.perspective_element.load(this.table);
            const plugin_config = Object.assign(Object.assign({}, this.model.plugin_config), { editable: this.model.editable, selectable: this.model.selectable });
            this.perspective_element.restore({
                aggregates: this.model.aggregates,
                columns: this.model.columns,
                expressions: this.model.expressions,
                filter: this.model.filters,
                split_by: this.model.split_by,
                group_by: this.model.group_by,
                plugin: PLUGINS[this.model.plugin],
                plugin_config: plugin_config,
                sort: this.model.sort,
                theme: THEMES[this.model.theme]
            }).catch(() => { });
            this._config_listener = () => this.sync_config();
            this._current_config = await this.perspective_element.save();
            if (this.model.toggle_config)
                this.perspective_element.toggleConfig();
            this.perspective_element.addEventListener("perspective-config-update", this._config_listener);
            this._loaded = true;
            this.fix_layout();
        }
        fix_layout() {
            this.update_layout();
            this.compute_layout();
            this.invalidate_layout();
        }
        sync_config() {
            if (this._updating)
                return true;
            this.perspective_element.save().then((config) => {
                this._current_config = config;
                const props = {};
                for (let option in config) {
                    let value = config[option];
                    if (value === undefined || (option == 'plugin' && value === "debug") || option === 'settings')
                        continue;
                    if (option === 'filter')
                        option = 'filters';
                    else if (option === 'plugin')
                        value = PLUGINS_REVERSE[value];
                    else if (option === 'theme')
                        value = THEMES_REVERSE[value];
                    props[option] = value;
                }
                this._updating = true;
                this.model.setv(props);
                this._updating = false;
            });
            return true;
        }
        on_event(event) {
            event = event.hint;
            if (event == null || event.column_source == null || event.column_source.id != this.model.source.id)
                return;
            else if (event.rollover !== undefined)
                this.stream(event.data, event.rollover);
            else if (event.patches !== undefined)
                this.patch(event.patches);
        }
        get data() {
            const data = {};
            for (const column of this.model.source.columns())
                data[column] = this.model.source.get_array(column);
            return data;
        }
        stream(data, rollover) {
            if (!this._loaded)
                return;
            else if (rollover == null)
                this.table.update(data);
            else
                this.table.replace(this.data);
        }
        patch(_) {
            this.table.replace(this.data);
        }
        setData() {
            if (this._loaded)
                this.table.load(this.data);
        }
    }
    exports.PerspectiveView = PerspectiveView;
    PerspectiveView.__name__ = "PerspectiveView";
    class Perspective extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_Perspective() {
            this.prototype.default_view = PerspectiveView;
            this.define(({ Any, Array, Boolean, Ref, Nullable, String }) => ({
                aggregates: [Any,],
                columns: [Array(Nullable(String)),],
                expressions: [Nullable(Array(String)),],
                split_by: [Nullable(Array(String)),],
                editable: [Nullable(Boolean),],
                filters: [Nullable(Array(Any)),],
                group_by: [Nullable(Array(String)),],
                plugin: [String,],
                plugin_config: [Any,],
                selectable: [Nullable(Boolean),],
                schema: [Any, {}],
                toggle_config: [Boolean, true],
                sort: [Nullable(Array(Array(String))),],
                source: [Ref(column_data_source_1.ColumnDataSource),],
                theme: [String,],
            }));
        }
    }
    exports.Perspective = Perspective;
    Perspective.__name__ = "Perspective";
    Perspective.__module__ = "panel.models.perspective";
    Perspective.init_Perspective();
},
"588a5ae70d": /* models/player.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const kinds_1 = require("@bokehjs/core/kinds");
    const dom_1 = require("@bokehjs/core/dom");
    const widget_1 = require("@bokehjs/models/widgets/widget");
    function press(btn_list) {
        btn_list.forEach((btn) => btn.style.borderStyle = 'inset');
    }
    function unpress(btn_list) {
        btn_list.forEach((btn) => btn.style.borderStyle = 'outset');
    }
    class PlayerView extends widget_1.WidgetView {
        constructor() {
            super(...arguments);
            this._changing = false;
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.direction.change, () => this.set_direction());
            this.connect(this.model.properties.value.change, () => this.render());
            this.connect(this.model.properties.loop_policy.change, () => this.set_loop_state(this.model.loop_policy));
            this.connect(this.model.properties.disabled.change, () => this.toggle_disable());
            this.connect(this.model.properties.show_loop_controls.change, () => {
                if (this.model.show_loop_controls && this.loop_state.parentNode != this.groupEl)
                    this.groupEl.appendChild(this.loop_state);
                else if (!this.model.show_loop_controls && this.loop_state.parentNode == this.groupEl)
                    this.groupEl.removeChild(this.loop_state);
            });
        }
        toggle_disable() {
            this.sliderEl.disabled = this.model.disabled;
            for (const el of this.buttonEl.children) {
                const anyEl = el;
                anyEl.disabled = this.model.disabled;
            }
            for (const el of this.loop_state.children) {
                if (el.tagName == "input") {
                    const anyEl = el;
                    anyEl.disabled = this.model.disabled;
                }
            }
        }
        get_height() {
            return 250;
        }
        render() {
            if (this.sliderEl == null) {
                super.render();
            }
            else {
                this.sliderEl.min = String(this.model.start);
                this.sliderEl.max = String(this.model.end);
                this.sliderEl.value = String(this.model.value);
                return;
            }
            // Layout to group the elements
            this.groupEl = (0, dom_1.div)();
            this.groupEl.style.display = "flex";
            this.groupEl.style.flexDirection = "column";
            this.groupEl.style.alignItems = "center";
            // Slider
            this.sliderEl = document.createElement('input');
            this.sliderEl.style.width = "100%";
            this.sliderEl.setAttribute("type", "range");
            this.sliderEl.value = String(this.model.value);
            this.sliderEl.min = String(this.model.start);
            this.sliderEl.max = String(this.model.end);
            this.sliderEl.addEventListener('input', (ev) => {
                this.set_frame(parseInt(ev.target.value), false);
            });
            this.sliderEl.addEventListener('change', (ev) => {
                this.set_frame(parseInt(ev.target.value));
            });
            // Buttons
            const button_div = (0, dom_1.div)();
            this.buttonEl = button_div;
            button_div.style.cssText = "margin: 0 auto; display: flex; padding: 5px; align-items: stretch; width: 100%;";
            const button_style_small = "text-align: center; min-width: 20px; flex-grow: 1; margin: 2px";
            const button_style = "text-align: center; min-width: 40px; flex-grow: 2; margin: 2px";
            const slower = document.createElement('button');
            slower.style.cssText = button_style_small;
            slower.appendChild(document.createTextNode('–'));
            slower.onclick = () => this.slower();
            button_div.appendChild(slower);
            const first = document.createElement('button');
            first.style.cssText = button_style;
            first.appendChild(document.createTextNode('\u275a\u25c0\u25c0'));
            first.onclick = () => this.first_frame();
            button_div.appendChild(first);
            const previous = document.createElement('button');
            previous.style.cssText = button_style;
            previous.appendChild(document.createTextNode('\u275a\u25c0'));
            previous.onclick = () => this.previous_frame();
            button_div.appendChild(previous);
            const reverse = document.createElement('button');
            reverse.style.cssText = button_style;
            reverse.appendChild(document.createTextNode('\u25c0'));
            reverse.onclick = () => this.reverse_animation();
            button_div.appendChild(reverse);
            const pause = document.createElement('button');
            pause.style.cssText = button_style;
            pause.appendChild(document.createTextNode('\u275a\u275a'));
            pause.onclick = () => this.pause_animation();
            button_div.appendChild(pause);
            const play = document.createElement('button');
            play.style.cssText = button_style;
            play.appendChild(document.createTextNode('\u25b6'));
            play.onclick = () => this.play_animation();
            button_div.appendChild(play);
            const next = document.createElement('button');
            next.style.cssText = button_style;
            next.appendChild(document.createTextNode('\u25b6\u275a'));
            next.onclick = () => this.next_frame();
            button_div.appendChild(next);
            const last = document.createElement('button');
            last.style.cssText = button_style;
            last.appendChild(document.createTextNode('\u25b6\u25b6\u275a'));
            last.onclick = () => this.last_frame();
            button_div.appendChild(last);
            const faster = document.createElement('button');
            faster.style.cssText = button_style_small;
            faster.appendChild(document.createTextNode('+'));
            faster.onclick = () => this.faster();
            button_div.appendChild(faster);
            // toggle
            this._toggle_reverse = () => {
                unpress([pause, play]);
                press([reverse]);
            };
            this._toogle_pause = () => {
                unpress([reverse, play]);
                press([pause]);
            };
            this._toggle_play = () => {
                unpress([reverse, pause]);
                press([play]);
            };
            // Loop control
            this.loop_state = document.createElement('form');
            this.loop_state.style.cssText = "margin: 0 auto; display: table";
            const once = document.createElement('input');
            once.type = "radio";
            once.value = "once";
            once.name = "state";
            const once_label = document.createElement('label');
            once_label.innerHTML = "Once";
            once_label.style.cssText = "padding: 0 10px 0 5px; user-select:none;";
            const loop = document.createElement('input');
            loop.setAttribute("type", "radio");
            loop.setAttribute("value", "loop");
            loop.setAttribute("name", "state");
            const loop_label = document.createElement('label');
            loop_label.innerHTML = "Loop";
            loop_label.style.cssText = "padding: 0 10px 0 5px; user-select:none;";
            const reflect = document.createElement('input');
            reflect.setAttribute("type", "radio");
            reflect.setAttribute("value", "reflect");
            reflect.setAttribute("name", "state");
            const reflect_label = document.createElement('label');
            reflect_label.innerHTML = "Reflect";
            reflect_label.style.cssText = "padding: 0 10px 0 5px; user-select:none;";
            if (this.model.loop_policy == "once")
                once.checked = true;
            else if (this.model.loop_policy == "loop")
                loop.checked = true;
            else
                reflect.checked = true;
            // Compose everything
            this.loop_state.appendChild(once);
            this.loop_state.appendChild(once_label);
            this.loop_state.appendChild(loop);
            this.loop_state.appendChild(loop_label);
            this.loop_state.appendChild(reflect);
            this.loop_state.appendChild(reflect_label);
            this.groupEl.appendChild(this.sliderEl);
            this.groupEl.appendChild(button_div);
            if (this.model.show_loop_controls)
                this.groupEl.appendChild(this.loop_state);
            this.toggle_disable();
            this.el.appendChild(this.groupEl);
        }
        set_frame(frame, throttled = true) {
            this.model.value = frame;
            if (throttled)
                this.model.value_throttled = frame;
            if (this.sliderEl.value != String(frame))
                this.sliderEl.value = String(frame);
        }
        get_loop_state() {
            var button_group = this.loop_state.state;
            for (var i = 0; i < button_group.length; i++) {
                var button = button_group[i];
                if (button.checked)
                    return button.value;
            }
            return "once";
        }
        set_loop_state(state) {
            var button_group = this.loop_state.state;
            for (var i = 0; i < button_group.length; i++) {
                var button = button_group[i];
                if (button.value == state)
                    button.checked = true;
            }
        }
        next_frame() {
            this.set_frame(Math.min(this.model.end, this.model.value + this.model.step));
        }
        previous_frame() {
            this.set_frame(Math.max(this.model.start, this.model.value - this.model.step));
        }
        first_frame() {
            this.set_frame(this.model.start);
        }
        last_frame() {
            this.set_frame(this.model.end);
        }
        slower() {
            this.model.interval = Math.round(this.model.interval / 0.7);
            if (this.model.direction > 0)
                this.play_animation();
            else if (this.model.direction < 0)
                this.reverse_animation();
        }
        faster() {
            this.model.interval = Math.round(this.model.interval * 0.7);
            if (this.model.direction > 0)
                this.play_animation();
            else if (this.model.direction < 0)
                this.reverse_animation();
        }
        anim_step_forward() {
            if (this.model.value < this.model.end) {
                this.next_frame();
            }
            else {
                var loop_state = this.get_loop_state();
                if (loop_state == "loop") {
                    this.first_frame();
                }
                else if (loop_state == "reflect") {
                    this.last_frame();
                    this.reverse_animation();
                }
                else {
                    this.pause_animation();
                    this.last_frame();
                }
            }
        }
        anim_step_reverse() {
            if (this.model.value > this.model.start) {
                this.previous_frame();
            }
            else {
                var loop_state = this.get_loop_state();
                if (loop_state == "loop") {
                    this.last_frame();
                }
                else if (loop_state == "reflect") {
                    this.first_frame();
                    this.play_animation();
                }
                else {
                    this.pause_animation();
                    this.first_frame();
                }
            }
        }
        set_direction() {
            if (this._changing)
                return;
            else if (this.model.direction === 0)
                this.pause_animation();
            else if (this.model.direction === 1)
                this.play_animation();
            else if (this.model.direction === -1)
                this.reverse_animation();
        }
        pause_animation() {
            this._toogle_pause();
            this._changing = true;
            this.model.direction = 0;
            this._changing = false;
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
        play_animation() {
            this.pause_animation();
            this._toggle_play();
            this._changing = true;
            this.model.direction = 1;
            this._changing = false;
            if (!this.timer)
                this.timer = setInterval(() => this.anim_step_forward(), this.model.interval);
        }
        reverse_animation() {
            this.pause_animation();
            this._toggle_reverse();
            this._changing = true;
            this.model.direction = -1;
            this._changing = false;
            if (!this.timer)
                this.timer = setInterval(() => this.anim_step_reverse(), this.model.interval);
        }
    }
    exports.PlayerView = PlayerView;
    PlayerView.__name__ = "PlayerView";
    exports.LoopPolicy = (0, kinds_1.Enum)("once", "loop", "reflect");
    class Player extends widget_1.Widget {
        constructor(attrs) {
            super(attrs);
        }
        static init_Player() {
            this.prototype.default_view = PlayerView;
            this.define(({ Boolean, Int }) => ({
                direction: [Int, 0],
                interval: [Int, 500],
                start: [Int, 0],
                end: [Int, 10],
                step: [Int, 1],
                loop_policy: [exports.LoopPolicy, "once"],
                value: [Int, 0],
                value_throttled: [Int, 0],
                show_loop_controls: [Boolean, true],
            }));
            this.override({ width: 400 });
        }
    }
    exports.Player = Player;
    Player.__name__ = "Player";
    Player.__module__ = "panel.models.widgets";
    Player.init_Player();
},
"42de27e56c": /* models/plotly.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const dom_1 = require("@bokehjs/core/dom");
    const object_1 = require("@bokehjs/core/util/object");
    const eq_1 = require("@bokehjs/core/util/eq");
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const column_data_source_1 = require("@bokehjs/models/sources/column_data_source");
    const debounce_1 = require("99a25e6992") /* debounce */;
    const util_1 = require("990b5dd5c7") /* ./util */;
    const layout_1 = require("80a6464b1f") /* ./layout */;
    const filterEventData = (gd, eventData, event) => {
        // Ported from dash-core-components/src/components/Graph.react.js
        let filteredEventData = Array.isArray(eventData) ? [] : {};
        if (event === "click" || event === "hover" || event === "selected") {
            const points = [];
            if (eventData === undefined || eventData === null) {
                return null;
            }
            /*
             * remove `data`, `layout`, `xaxis`, etc
             * objects from the event data since they're so big
             * and cause JSON stringify ciricular structure errors.
             *
             * also, pull down the `customdata` point from the data array
             * into the event object
             */
            const data = gd.data;
            for (let i = 0; i < eventData.points.length; i++) {
                const fullPoint = eventData.points[i];
                let pointData = {};
                for (let property in fullPoint) {
                    const val = fullPoint[property];
                    if (fullPoint.hasOwnProperty(property) &&
                        !Array.isArray(val) && !(0, util_1.isPlainObject)(val)) {
                        pointData[property] = val;
                    }
                }
                if (fullPoint !== undefined && fullPoint !== null) {
                    if (fullPoint.hasOwnProperty("curveNumber") &&
                        fullPoint.hasOwnProperty("pointNumber") &&
                        data[fullPoint["curveNumber"]].hasOwnProperty("customdata")) {
                        pointData["customdata"] =
                            data[fullPoint["curveNumber"]].customdata[fullPoint["pointNumber"]];
                    }
                    // specific to histogram. see https://github.com/plotly/plotly.js/pull/2113/
                    if (fullPoint.hasOwnProperty('pointNumbers')) {
                        pointData["pointNumbers"] = fullPoint.pointNumbers;
                    }
                }
                points[i] = pointData;
            }
            filteredEventData["points"] = points;
        }
        else if (event === 'relayout' || event === 'restyle') {
            /*
             * relayout shouldn't include any big objects
             * it will usually just contain the ranges of the axes like
             * "xaxis.range[0]": 0.7715822247381828,
             * "xaxis.range[1]": 3.0095292008680063`
             */
            for (let property in eventData) {
                if (eventData.hasOwnProperty(property)) {
                    filteredEventData[property] = eventData[property];
                }
            }
        }
        if (eventData.hasOwnProperty('range')) {
            filteredEventData["range"] = eventData["range"];
        }
        if (eventData.hasOwnProperty('lassoPoints')) {
            filteredEventData["lassoPoints"] = eventData["lassoPoints"];
        }
        return filteredEventData;
    };
    const _isHidden = (gd) => {
        var display = window.getComputedStyle(gd).display;
        return !display || display === 'none';
    };
    class PlotlyPlotView extends layout_1.PanelHTMLBoxView {
        constructor() {
            super(...arguments);
            this._settingViewport = false;
            this._plotInitialized = false;
            this._reacting = false;
            this._relayouting = false;
            this._end_relayouting = (0, debounce_1.debounce)(() => {
                this._relayouting = false;
            }, 2000, false);
        }
        initialize() {
            super.initialize();
            this._layout_wrapper = (0, dom_1.div)({ style: "height: 100%; width: 100%;" });
        }
        connect_signals() {
            super.connect_signals();
            const { data, data_sources, layout, relayout, restyle } = this.model.properties;
            this.on_change([data, data_sources, layout], () => {
                const render_count = this.model._render_count;
                setTimeout(() => {
                    if (this.model._render_count === render_count)
                        this.model._render_count += 1;
                }, 250);
            });
            this.on_change([relayout], () => {
                if (this.model.relayout == null)
                    return;
                window.Plotly.relayout(this._layout_wrapper, this.model.relayout);
                this.model.relayout = null;
            });
            this.on_change([restyle], () => {
                if (this.model.restyle == null)
                    return;
                window.Plotly.restyle(this._layout_wrapper, this.model.restyle.data, this.model.restyle.traces);
                this.model.restyle = null;
            });
            this.connect(this.model.properties.viewport_update_policy.change, () => {
                this._updateSetViewportFunction();
            });
            this.connect(this.model.properties.viewport_update_throttle.change, () => {
                this._updateSetViewportFunction();
            });
            this.connect(this.model.properties._render_count.change, () => {
                this.plot();
            });
            this.connect(this.model.properties.frames.change, () => {
                this.plot(true);
            });
            this.connect(this.model.properties.viewport.change, () => this._updateViewportFromProperty());
            this.connect(this.model.properties.visibility.change, () => {
                this.el.style.visibility = this.model.visibility ? 'visible' : 'hidden';
            });
        }
        async render() {
            super.render();
            this.el.style.visibility = this.model.visibility ? 'visible' : 'hidden';
            this.el.appendChild(this._layout_wrapper);
            await this.plot();
            window.Plotly.relayout(this._layout_wrapper, this.model.relayout);
        }
        _trace_data() {
            const data = [];
            for (let i = 0; i < this.model.data.length; i++)
                data.push(this._get_trace(i, false));
            return data;
        }
        _layout_data() {
            const newLayout = (0, util_1.deepCopy)(this.model.layout);
            if (this._relayouting) {
                const { layout } = this._layout_wrapper;
                // For each xaxis* and yaxis* property of layout, if the value has a 'range'
                // property then use this in newLayout
                Object.keys(layout).reduce((value, key) => {
                    if (key.slice(1, 5) === "axis" && 'range' in value) {
                        newLayout[key].range = value.range;
                    }
                }, {});
            }
            return newLayout;
        }
        _install_callbacks() {
            //  - plotly_relayout
            this._layout_wrapper.on('plotly_relayout', (eventData) => {
                if (eventData['_update_from_property'] !== true) {
                    this.model.relayout_data = filterEventData(this._layout_wrapper, eventData, 'relayout');
                    this._updateViewportProperty();
                    this._end_relayouting();
                }
            });
            //  - plotly_relayouting
            this._layout_wrapper.on('plotly_relayouting', () => {
                if (this.model.viewport_update_policy !== 'mouseup') {
                    this._relayouting = true;
                    this._updateViewportProperty();
                }
            });
            //  - plotly_restyle
            this._layout_wrapper.on('plotly_restyle', (eventData) => {
                this.model.restyle_data = filterEventData(this._layout_wrapper, eventData, 'restyle');
                this._updateViewportProperty();
            });
            //  - plotly_click
            this._layout_wrapper.on('plotly_click', (eventData) => {
                this.model.click_data = filterEventData(this._layout_wrapper, eventData, 'click');
            });
            //  - plotly_hover
            this._layout_wrapper.on('plotly_hover', (eventData) => {
                this.model.hover_data = filterEventData(this._layout_wrapper, eventData, 'hover');
            });
            //  - plotly_selected
            this._layout_wrapper.on('plotly_selected', (eventData) => {
                this.model.selected_data = filterEventData(this._layout_wrapper, eventData, 'selected');
            });
            //  - plotly_clickannotation
            this._layout_wrapper.on('plotly_clickannotation', (eventData) => {
                delete eventData["event"];
                delete eventData["fullAnnotation"];
                this.model.clickannotation_data = eventData;
            });
            //  - plotly_deselect
            this._layout_wrapper.on('plotly_deselect', () => {
                this.model.selected_data = null;
            });
            //  - plotly_unhover
            this._layout_wrapper.on('plotly_unhover', () => {
                this.model.hover_data = null;
            });
        }
        async plot(new_plot = false) {
            if (!window.Plotly)
                return;
            const data = this._trace_data();
            const newLayout = this._layout_data();
            this._reacting = true;
            if (new_plot) {
                const obj = { data: data, layout: newLayout, config: this.model.config, frames: this.model.frames };
                await window.Plotly.newPlot(this._layout_wrapper, obj);
            }
            else {
                await window.Plotly.react(this._layout_wrapper, data, newLayout, this.model.config);
                if (this.model.frames != null)
                    await window.Plotly.addFrames(this._layout_wrapper, this.model.frames);
            }
            this._updateSetViewportFunction();
            this._updateViewportProperty();
            if (!this._plotInitialized)
                this._install_callbacks();
            else if (!_isHidden(this._layout_wrapper))
                window.Plotly.Plots.resize(this._layout_wrapper);
            this._reacting = false;
            this._plotInitialized = true;
        }
        after_layout() {
            super.after_layout();
            (0, layout_1.set_size)(this.el, this.model);
            if (window.Plotly && this._plotInitialized)
                window.Plotly.Plots.resize(this._layout_wrapper);
        }
        _get_trace(index, update) {
            const trace = (0, object_1.clone)(this.model.data[index]);
            const cds = this.model.data_sources[index];
            for (const column of cds.columns()) {
                let array = cds.get_array(column)[0];
                if (array.shape != null && array.shape.length > 1) {
                    const arrays = [];
                    const shape = array.shape;
                    for (let s = 0; s < shape[0]; s++) {
                        arrays.push(array.slice(s * shape[1], (s + 1) * shape[1]));
                    }
                    array = arrays;
                }
                let prop_path = column.split(".");
                let prop = prop_path[prop_path.length - 1];
                let prop_parent = trace;
                for (let k of prop_path.slice(0, -1)) {
                    prop_parent = prop_parent[k];
                }
                if (update && prop_path.length == 1) {
                    prop_parent[prop] = [array];
                }
                else {
                    prop_parent[prop] = array;
                }
            }
            return trace;
        }
        _updateViewportFromProperty() {
            if (!window.Plotly || this._settingViewport || this._reacting || !this.model.viewport) {
                return;
            }
            const fullLayout = this._layout_wrapper._fullLayout;
            // Call relayout if viewport differs from fullLayout
            Object.keys(this.model.viewport).reduce((value, key) => {
                if (!(0, eq_1.isEqual)((0, util_1.get)(fullLayout, key), value)) {
                    let clonedViewport = (0, util_1.deepCopy)(this.model.viewport);
                    clonedViewport['_update_from_property'] = true;
                    this._settingViewport = true;
                    window.Plotly.relayout(this.el, clonedViewport).then(() => {
                        this._settingViewport = false;
                    });
                    return false;
                }
                else {
                    return true;
                }
            }, {});
        }
        _updateViewportProperty() {
            const fullLayout = this._layout_wrapper._fullLayout;
            let viewport = {};
            // Get range for all xaxis and yaxis properties
            for (let prop in fullLayout) {
                if (!fullLayout.hasOwnProperty(prop))
                    continue;
                let maybe_axis = prop.slice(0, 5);
                if (maybe_axis === 'xaxis' || maybe_axis === 'yaxis')
                    viewport[prop + '.range'] = (0, util_1.deepCopy)(fullLayout[prop].range);
            }
            if (!(0, eq_1.isEqual)(viewport, this.model.viewport))
                this._setViewport(viewport);
        }
        _updateSetViewportFunction() {
            if (this.model.viewport_update_policy === "continuous" ||
                this.model.viewport_update_policy === "mouseup") {
                this._setViewport = (viewport) => {
                    if (!this._settingViewport) {
                        this._settingViewport = true;
                        this.model.viewport = viewport;
                        this._settingViewport = false;
                    }
                };
            }
            else {
                this._setViewport = (0, util_1.throttle)((viewport) => {
                    if (!this._settingViewport) {
                        this._settingViewport = true;
                        this.model.viewport = viewport;
                        this._settingViewport = false;
                    }
                }, this.model.viewport_update_throttle);
            }
        }
    }
    exports.PlotlyPlotView = PlotlyPlotView;
    PlotlyPlotView.__name__ = "PlotlyPlotView";
    class PlotlyPlot extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_PlotlyPlot() {
            this.prototype.default_view = PlotlyPlotView;
            this.define(({ Array, Any, Boolean, Ref, String, Nullable, Number }) => ({
                data: [Array(Any), []],
                layout: [Any, {}],
                config: [Any, {}],
                frames: [Nullable(Array(Any)), null],
                data_sources: [Array(Ref(column_data_source_1.ColumnDataSource)), []],
                relayout: [Nullable(Any), {}],
                restyle: [Nullable(Any), {}],
                relayout_data: [Any, {}],
                restyle_data: [Array(Any), []],
                click_data: [Any, {}],
                hover_data: [Any, {}],
                clickannotation_data: [Any, {}],
                selected_data: [Any, {}],
                viewport: [Any, {}],
                viewport_update_policy: [String, "mouseup"],
                viewport_update_throttle: [Number, 200],
                visibility: [Boolean, true],
                _render_count: [Number, 0],
            }));
        }
    }
    exports.PlotlyPlot = PlotlyPlot;
    PlotlyPlot.__name__ = "PlotlyPlot";
    PlotlyPlot.__module__ = "panel.models.plotly";
    PlotlyPlot.init_PlotlyPlot();
},
"990b5dd5c7": /* models/util.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const get = (obj, path, defaultValue = undefined) => {
        const travel = (regexp) => String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
        const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
        return result === undefined || result === obj ? defaultValue : result;
    };
    exports.get = get;
    function throttle(func, timeFrame) {
        var lastTime = 0;
        return function () {
            var now = Number(new Date());
            if (now - lastTime >= timeFrame) {
                func();
                lastTime = now;
            }
        };
    }
    exports.throttle = throttle;
    function deepCopy(obj) {
        var copy;
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj)
            return obj;
        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = deepCopy(obj[i]);
            }
            return copy;
        }
        // Handle Object
        if (obj instanceof Object) {
            const copy = {};
            for (const attr in obj) {
                const key = attr;
                if (obj.hasOwnProperty(key))
                    copy[key] = deepCopy(obj[key]);
            }
            return copy;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    }
    exports.deepCopy = deepCopy;
    function isPlainObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
    exports.isPlainObject = isPlainObject;
},
"979633320f": /* models/progress.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class ProgressView extends html_box_1.HTMLBoxView {
        connect_signals() {
            super.connect_signals();
            const resize = () => {
                this.render();
                this.root.compute_layout(); // XXX: invalidate_layout?
            };
            this.connect(this.model.properties.height.change, resize);
            this.connect(this.model.properties.width.change, resize);
            this.connect(this.model.properties.height_policy.change, resize);
            this.connect(this.model.properties.width_policy.change, resize);
            this.connect(this.model.properties.sizing_mode.change, resize);
            this.connect(this.model.properties.active.change, () => this.setCSS());
            this.connect(this.model.properties.bar_color.change, () => this.setCSS());
            this.connect(this.model.properties.css_classes.change, () => this.setCSS());
            this.connect(this.model.properties.value.change, () => this.setValue());
            this.connect(this.model.properties.max.change, () => this.setMax());
        }
        render() {
            super.render();
            const style = Object.assign(Object.assign({}, this.model.style), { display: "inline-block" });
            this.progressEl = document.createElement('progress');
            this.setValue();
            this.setMax();
            (0, layout_1.set_size)(this.progressEl, this.model);
            // Set styling
            this.setCSS();
            for (const prop in style)
                this.progressEl.style.setProperty(prop, style[prop]);
            this.el.appendChild(this.progressEl);
        }
        setCSS() {
            let css = this.model.css_classes.join(" ") + " " + this.model.bar_color;
            if (this.model.active)
                css = css + " active";
            this.progressEl.className = css;
        }
        setValue() {
            if (this.model.value == null)
                this.progressEl.value = 0;
            else if (this.model.value >= 0)
                this.progressEl.value = this.model.value;
            else if (this.model.value < 0)
                this.progressEl.removeAttribute("value");
            console.log(this.progressEl);
        }
        setMax() {
            if (this.model.max != null)
                this.progressEl.max = this.model.max;
        }
        _update_layout() {
            let changed = ((this._prev_sizing_mode !== undefined) &&
                (this._prev_sizing_mode !== this.model.sizing_mode));
            this._prev_sizing_mode = this.model.sizing_mode;
            this.layout = new layout_1.CachedVariadicBox(this.el, this.model.sizing_mode, changed);
            this.layout.set_sizing(this.box_sizing());
        }
    }
    exports.ProgressView = ProgressView;
    ProgressView.__name__ = "ProgressView";
    class Progress extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_Progress() {
            this.prototype.default_view = ProgressView;
            this.define(({ Any, Boolean, Number, String }) => ({
                active: [Boolean, true],
                bar_color: [String, 'primary'],
                style: [Any, {}],
                max: [Number, 100],
                value: [Any, null],
            }));
        }
    }
    exports.Progress = Progress;
    Progress.__name__ = "Progress";
    Progress.__module__ = "panel.models.widgets";
    Progress.init_Progress();
},
"d51a79a0a3": /* models/quill.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const dom_1 = require("@bokehjs/core/dom");
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class QuillInputView extends layout_1.PanelHTMLBoxView {
        initialize() {
            super.initialize();
            this._container = (0, dom_1.div)({});
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.disabled.change, () => this.quill.enable(!this.model.disabled));
            this.connect(this.model.properties.text.change, () => {
                if (this._editing)
                    return;
                this._editing = true;
                this.quill.enable(false);
                this.quill.setContents([]);
                this.quill.clipboard.dangerouslyPasteHTML(this.model.text);
                this.quill.enable(!this.model.disabled);
                this._editing = false;
            });
            const { mode, toolbar, placeholder } = this.model.properties;
            this.on_change([placeholder], () => {
                this.quill.root.setAttribute('data-placeholder', this.model.placeholder);
            });
            this.on_change([mode, toolbar], () => {
                this.render();
                this._layout_toolbar();
            });
        }
        _layout_toolbar() {
            if (this._toolbar == null) {
                this.el.style.removeProperty('padding-top');
            }
            else {
                const height = this._toolbar.getBoundingClientRect().height + 1;
                this.el.style.paddingTop = height + "px";
                this._toolbar.style.marginTop = -height + "px";
            }
        }
        render() {
            super.render();
            this.el.appendChild(this._container);
            const theme = (this.model.mode === 'bubble') ? 'bubble' : 'snow';
            this.quill = new window.Quill(this._container, {
                modules: {
                    toolbar: this.model.toolbar
                },
                readOnly: true,
                placeholder: this.model.placeholder,
                theme: theme
            });
            this._editor = this.el.querySelector('.ql-editor');
            this._toolbar = this.el.querySelector('.ql-toolbar');
            this.quill.clipboard.dangerouslyPasteHTML(this.model.text);
            this.quill.on('text-change', () => {
                if (this._editing)
                    return;
                this._editing = true;
                this.model.text = this._editor.innerHTML;
                this._editing = false;
            });
            if (!this.model.disabled)
                this.quill.enable(!this.model.disabled);
        }
        after_layout() {
            super.after_layout();
            this._layout_toolbar();
        }
    }
    exports.QuillInputView = QuillInputView;
    QuillInputView.__name__ = "QuillInputView";
    class QuillInput extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_QuillInput() {
            this.prototype.default_view = QuillInputView;
            this.define(({ Any, String }) => ({
                mode: [String, 'toolbar'],
                placeholder: [String, ''],
                text: [String, ''],
                toolbar: [Any, null],
            }));
            this.override({
                height: 300
            });
        }
    }
    exports.QuillInput = QuillInput;
    QuillInput.__name__ = "QuillInput";
    QuillInput.__module__ = "panel.models.quill";
    QuillInput.init_QuillInput();
},
"ad426de39c": /* models/reactive_html.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const preact_1 = require("6f11f2ef27") /* preact */;
    const hooks_1 = require("4c02a9b43f") /* preact/hooks */;
    const preact_2 = require("b3f51db71c") /* htm/preact */;
    const build_views_1 = require("@bokehjs/core/build_views");
    const types_1 = require("@bokehjs/core/util/types");
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const dom_1 = require("@bokehjs/core/dom");
    const color_1 = require("@bokehjs/core/util/color");
    const data_1 = require("7f7d9e0c6b") /* ./data */;
    const event_to_object_1 = require("d92f7d4d2b") /* ./event-to-object */;
    const html_1 = require("3d7593ca5a") /* ./html */;
    const layout_1 = require("80a6464b1f") /* ./layout */;
    function serialize_attrs(attrs) {
        const serialized = {};
        for (const attr in attrs) {
            let value = attrs[attr];
            if (typeof value !== "string")
                value = value;
            else if (value !== "" && (value === "NaN" || !isNaN(Number(value))))
                value = Number(value);
            else if (value === 'false' || value === 'true')
                value = value === 'true' ? true : false;
            serialized[attr] = value;
        }
        return serialized;
    }
    function escapeRegex(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]]/g, '\\$&');
    }
    function extractToken(template, str, tokens) {
        const tokenMapping = {};
        for (const match of tokens)
            tokenMapping[`{${match}}`] = "(.*)";
        const tokenList = [];
        let regexpTemplate = "^" + escapeRegex(template) + "$";
        // Find the order of the tokens
        let i, tokenIndex, tokenEntry;
        for (const m in tokenMapping) {
            tokenIndex = template.indexOf(m);
            // Token found
            if (tokenIndex > -1) {
                regexpTemplate = regexpTemplate.replace(m, tokenMapping[m]);
                tokenEntry = {
                    index: tokenIndex,
                    token: m
                };
                for (i = 0; i < tokenList.length && tokenList[i].index < tokenIndex; i++)
                    ;
                // Insert it at index i
                if (i < tokenList.length)
                    tokenList.splice(i, 0, tokenEntry);
                else
                    tokenList.push(tokenEntry);
            }
        }
        regexpTemplate = regexpTemplate.replace(/\{[^{}]+\}/g, '.*');
        var match = new RegExp(regexpTemplate).exec(str);
        let result = null;
        if (match) {
            result = {};
            // Find your token entry
            for (i = 0; i < tokenList.length; i++)
                result[tokenList[i].token.slice(1, -1)] = match[i + 1];
        }
        return result;
    }
    class ReactiveHTMLView extends layout_1.PanelHTMLBoxView {
        constructor() {
            super(...arguments);
            this._parent = null;
            this._changing = false;
            this._event_listeners = {};
            this._mutation_observers = [];
            this._script_fns = {};
            this._state = {};
        }
        initialize() {
            super.initialize();
            this.html = (0, html_1.htmlDecode)(this.model.html) || this.model.html;
        }
        _recursive_connect(model, update_children, path) {
            for (const prop in model.properties) {
                let subpath;
                if (path.length)
                    subpath = `${path}.${prop}`;
                else
                    subpath = prop;
                const obj = model[prop];
                if (obj == null)
                    continue;
                if (obj.properties != null)
                    this._recursive_connect(obj, true, subpath);
                this.connect(model.properties[prop].change, () => {
                    if (update_children) {
                        for (const node in this.model.children) {
                            if (this.model.children[node] == prop) {
                                let children = model[prop];
                                if (!(0, types_1.isArray)(children))
                                    children = [children];
                                this._render_node(node, children);
                                this.invalidate_layout();
                                return;
                            }
                        }
                    }
                    if (!this._changing) {
                        this._update(subpath);
                        this.invalidate_layout();
                    }
                });
            }
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.children.change, async () => {
                this.html = (0, html_1.htmlDecode)(this.model.html) || this.model.html;
                await this.rebuild();
                this.invalidate_layout();
            });
            this._recursive_connect(this.model.data, true, '');
            this.connect(this.model.properties.events.change, () => {
                this._remove_event_listeners();
                this._setup_event_listeners();
            });
            this.connect_scripts();
        }
        connect_scripts() {
            const id = this.model.data.id;
            for (let prop in this.model.scripts) {
                const scripts = this.model.scripts[prop];
                let data_model = this.model.data;
                let attr;
                if (prop.indexOf('.') >= 0) {
                    const path = prop.split('.');
                    attr = path[path.length - 1];
                    for (const p of path.slice(0, -1))
                        data_model = data_model[p];
                }
                else {
                    attr = prop;
                }
                for (const script of scripts) {
                    const decoded_script = (0, html_1.htmlDecode)(script) || script;
                    const script_fn = this._render_script(decoded_script, id);
                    this._script_fns[prop] = script_fn;
                    const property = data_model.properties[attr];
                    if (property == null)
                        continue;
                    this.connect(property.change, () => {
                        if (!this._changing)
                            this.run_script(prop);
                    });
                }
            }
        }
        run_script(property, silent = false) {
            const script_fn = this._script_fns[property];
            if (script_fn === undefined) {
                if (!silent)
                    console.log(`Script '${property}' could not be found.`);
                return;
            }
            const this_obj = {
                get_records: (property, index) => this.get_records(property, index)
            };
            for (const name in this._script_fns)
                this_obj[name] = () => this.run_script(name);
            return script_fn(this.model, this.model.data, this._state, this, (s) => this.run_script(s), this_obj);
        }
        get_records(property, index = true) {
            return (0, data_1.dict_to_records)(this.model.data[property], index);
        }
        disconnect_signals() {
            super.disconnect_signals();
            this._remove_event_listeners();
            this._remove_mutation_observers();
            this.run_script('remove', true);
        }
        get child_models() {
            const models = [];
            for (const parent in this.model.children) {
                for (const model of this.model.children[parent])
                    if (typeof model !== 'string')
                        models.push(model);
            }
            return models;
        }
        async build_child_views() {
            await (0, build_views_1.build_views)(this._child_views, this.child_models, { parent: null });
        }
        compute_layout() {
            if (this.root != this)
                super.compute_layout();
            else {
                this.update_position();
                this.after_layout();
                this.notify_finished();
            }
        }
        after_layout() {
            for (const child_view of this.child_views)
                child_view.after_layout();
            this.run_script('after_layout', true);
            this._has_finished = true;
        }
        update_layout() {
            for (const child_view of this.child_views) {
                this._align_view(child_view);
                child_view.compute_viewport();
                child_view.update_layout();
                child_view.compute_layout();
            }
            if (this.root != this)
                this._update_layout();
        }
        _align_view(view) {
            const { align } = view.model;
            let halign, valign;
            if ((0, types_1.isArray)(align))
                [halign, valign] = align;
            else
                halign = valign = align;
            if (halign === 'center') {
                view.el.style.marginLeft = 'auto';
                view.el.style.marginRight = 'auto';
            }
            else if (halign === 'end')
                view.el.style.marginLeft = 'auto';
            if (valign === 'center') {
                view.el.style.marginTop = 'auto';
                view.el.style.marginBottom = 'auto';
            }
            else if (valign === 'end')
                view.el.style.marginTop = 'auto';
        }
        render() {
            (0, dom_1.empty)(this.el);
            const { background } = this.model;
            this.el.style.backgroundColor = background != null ? (0, color_1.color2css)(background) : "";
            (0, dom_1.classes)(this.el).clear().add(...this.css_classes());
            this._update();
            this._render_children();
            this._setup_mutation_observers();
            this._setup_event_listeners();
            this.run_script('render', true);
        }
        _send_event(elname, attr, event) {
            let serialized = (0, event_to_object_1.serializeEvent)(event);
            serialized.type = attr;
            for (const key in serialized) {
                if (serialized[key] === undefined)
                    delete serialized[key];
            }
            this.model.trigger_event(new html_1.DOMEvent(elname, serialized));
        }
        _render_child(model, el) {
            const view = this._child_views.get(model);
            if (view == null)
                el.innerHTML = (0, html_1.htmlDecode)(model) || model;
            else {
                view._parent = this;
                view.renderTo(el);
            }
        }
        resize_layout() {
            if (this._parent != null)
                this._parent.resize_layout();
            if (this.root != this)
                super.resize_layout();
        }
        invalidate_layout() {
            if (this._parent != null)
                this._parent.invalidate_layout();
            if (this.root != this && this.root.has_finished())
                super.invalidate_layout();
        }
        update_position() {
            if (this.root != this) {
                super.update_position();
                return;
            }
            this.el.style.display = this.model.visible ? "block" : "none";
            (0, layout_1.set_size)(this.el, this.model);
            let { margin } = this.model;
            let margin_spec = null;
            if (margin == null)
                this.el.style.margin = "";
            else {
                if ((0, types_1.isNumber)(margin))
                    margin_spec = { top: margin, right: margin, bottom: margin, left: margin };
                else if (margin.length == 2) {
                    const [vertical, horizontal] = margin;
                    margin_spec = { top: vertical, right: horizontal, bottom: vertical, left: horizontal };
                }
                else {
                    const [top, right, bottom, left] = margin;
                    margin_spec = { top, right, bottom, left };
                }
                const { top, right, bottom, left } = margin_spec;
                this.el.style.padding = `${top}px ${right}px ${bottom}px ${left}px`;
            }
            for (const child_view of this.child_views)
                child_view.update_position();
        }
        _render_node(node, children) {
            const id = this.model.data.id;
            if (this.model.looped.indexOf(node) > -1) {
                for (let i = 0; i < children.length; i++) {
                    let el = document.getElementById(`${node}-${i}-${id}`);
                    if (el == null) {
                        console.warn(`DOM node '${node}-${i}-${id}' could not be found. Cannot render children.`);
                        continue;
                    }
                    this._render_child(children[i], el);
                }
            }
            else {
                let el = document.getElementById(`${node}-${id}`);
                if (el == null) {
                    console.warn(`DOM node '${node}-${id}' could not be found. Cannot render children.`);
                    return;
                }
                for (const child of children)
                    this._render_child(child, el);
            }
        }
        _render_children() {
            for (const node in this.model.children) {
                let children = this.model.children[node];
                if (typeof children == "string") {
                    children = this.model.data[children];
                    if (!(0, types_1.isArray)(children))
                        children = [children];
                }
                this._render_node(node, children);
            }
        }
        _render_html(literal, state = {}) {
            let htm = literal;
            let callbacks = '';
            const methods = [];
            for (const elname in this.model.callbacks) {
                for (const callback of this.model.callbacks[elname]) {
                    const [cb, method] = callback;
                    let definition;
                    htm = htm.replaceAll('${' + method + '}', '$--{' + method + '}');
                    if (method.startsWith('script(')) {
                        const meth = (method
                            .replace("('", "_").replace("')", "")
                            .replace('("', "_").replace('")', "")
                            .replace('-', '_'));
                        const script_name = meth.replaceAll("script_", "");
                        htm = htm.replaceAll(method, meth);
                        definition = `
          const ${meth} = (event) => {
            view._state.event = event
            view.run_script("${script_name}")
            delete view._state.event
          }
          `;
                    }
                    else {
                        definition = `
          const ${method} = (event) => {
            let elname = "${elname}"
            if (RegExp("\{\{.*loop\.index.*\}\}").test(elname)) {
              const pattern = RegExp(elname.replace(/\{\{(.+?)\}\}/g, String.fromCharCode(92) + "d+"))
              for (const p of event.path) {
                if (pattern.exec(p.id) != null) {
                  elname = p.id.split("-").slice(null, -1).join("-")
                  break
                }
              }
            }
            view._send_event(elname, "${cb}", event)
          }
          `;
                    }
                    if (methods.indexOf(method) > -1)
                        continue;
                    methods.push(method);
                    callbacks = callbacks + definition;
                }
            }
            htm = (htm
                .replaceAll('${model.', '$-{model.')
                .replaceAll('${', '${data.')
                .replaceAll('$-{model.', '${model.')
                .replaceAll('$--{', '${'));
            return new Function("view, model, data, state, html, useCallback", callbacks + "return html`" + htm + "`;")(this, this.model, this.model.data, state, preact_2.html, hooks_1.useCallback);
        }
        _render_script(literal, id) {
            const scripts = [];
            for (const elname of this.model.nodes) {
                const elvar = elname.replace('-', '_');
                if (literal.indexOf(elvar) === -1)
                    continue;
                const script = `
      const ${elvar} = document.getElementById('${elname}-${id}')
      if (${elvar} == null) {
        console.warn("DOM node '${elname}' could not be found. Cannot execute callback.")
        return
      }
      `;
                scripts.push(script);
            }
            const event = `
    if (state.event !== undefined) {
      const event = state.event
    }
    `;
            scripts.push(event);
            scripts.push(literal);
            return new Function("model, data, state, view, script, self", scripts.join('\n'));
        }
        _remove_mutation_observers() {
            for (const observer of this._mutation_observers)
                observer.disconnect();
            this._mutation_observers = [];
        }
        _setup_mutation_observers() {
            const id = this.model.data.id;
            for (const name in this.model.attrs) {
                const el = document.getElementById(`${name}-${id}`);
                if (el == null) {
                    console.warn(`DOM node '${name}-${id}' could not be found. Cannot set up MutationObserver.`);
                    continue;
                }
                const observer = new MutationObserver(() => {
                    this._update_model(el, name);
                });
                observer.observe(el, { attributes: true });
                this._mutation_observers.push(observer);
            }
        }
        _remove_event_listeners() {
            const id = this.model.data.id;
            for (const node in this._event_listeners) {
                const el = document.getElementById(`${node}-${id}`);
                if (el == null)
                    continue;
                for (const event_name in this._event_listeners[node]) {
                    const event_callback = this._event_listeners[node][event_name];
                    el.removeEventListener(event_name, event_callback);
                }
            }
            this._event_listeners = {};
        }
        _setup_event_listeners() {
            const id = this.model.data.id;
            for (const node in this.model.events) {
                const el = document.getElementById(`${node}-${id}`);
                if (el == null) {
                    console.warn(`DOM node '${node}-${id}' could not be found. Cannot subscribe to DOM events.`);
                    continue;
                }
                const node_events = this.model.events[node];
                for (const event_name in node_events) {
                    const event_callback = (event) => {
                        this._send_event(node, event_name, event);
                        if (node in this.model.attrs && node_events[event_name])
                            this._update_model(el, node);
                    };
                    el.addEventListener(event_name, event_callback);
                    if (!(node in this._event_listeners))
                        this._event_listeners[node] = {};
                    this._event_listeners[node][event_name] = event_callback;
                }
            }
        }
        _update(property = null) {
            if (property == null || (this.html.indexOf(`\${${property}}`) > -1)) {
                const rendered = this._render_html(this.html);
                try {
                    this._changing = true;
                    (0, preact_1.render)(rendered, this.el);
                }
                finally {
                    this._changing = false;
                }
            }
        }
        _update_model(el, name) {
            if (this._changing)
                return;
            const attrs = {};
            for (const attr_info of this.model.attrs[name]) {
                const [attr, tokens, template] = attr_info;
                let value = attr === 'children' ? el.innerHTML : el[attr];
                if (tokens.length === 1 && (`{${tokens[0]}}` === template))
                    attrs[tokens[0]] = value;
                else if (typeof value === 'string') {
                    value = extractToken(template, value, tokens);
                    if (value == null)
                        console.warn(`Could not resolve parameters in ${name} element ${attr} attribute value ${value}.`);
                    else {
                        for (const param in value) {
                            if (value[param] === undefined)
                                console.warn(`Could not resolve ${param} in ${name} element ${attr} attribute value ${value}.`);
                            else
                                attrs[param] = value[param];
                        }
                    }
                }
            }
            try {
                this._changing = true;
                this.model.data.setv(serialize_attrs(attrs));
            }
            catch (_a) {
                console.log('Could not serialize', attrs);
            }
            finally {
                this._changing = false;
            }
        }
    }
    exports.ReactiveHTMLView = ReactiveHTMLView;
    ReactiveHTMLView.__name__ = "ReactiveHTMLView";
    class ReactiveHTML extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_ReactiveHTML() {
            this.prototype.default_view = ReactiveHTMLView;
            this.define(({ Array, Any, String }) => ({
                attrs: [Any, {}],
                callbacks: [Any, {}],
                children: [Any, {}],
                data: [Any,],
                events: [Any, {}],
                html: [String, ""],
                looped: [Array(String), []],
                nodes: [Array(String), []],
                scripts: [Any, {}],
            }));
        }
    }
    exports.ReactiveHTML = ReactiveHTML;
    ReactiveHTML.__name__ = "ReactiveHTML";
    ReactiveHTML.__module__ = "panel.models.reactive_html";
    ReactiveHTML.init_ReactiveHTML();
},
"ab54efe08a": /* models/singleselect.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const dom_1 = require("@bokehjs/core/dom");
    const types_1 = require("@bokehjs/core/util/types");
    const input_widget_1 = require("@bokehjs/models/widgets/input_widget");
    const inputs = (0, tslib_1.__importStar)(require("@bokehjs/styles/widgets/inputs.css"));
    class SingleSelectView extends input_widget_1.InputWidgetView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.value.change, () => this.render_selection());
            this.connect(this.model.properties.options.change, () => this.render());
            this.connect(this.model.properties.disabled_options.change, () => this.render());
            this.connect(this.model.properties.name.change, () => this.render());
            this.connect(this.model.properties.title.change, () => this.render());
            this.connect(this.model.properties.size.change, () => this.render());
            this.connect(this.model.properties.disabled.change, () => this.render());
        }
        render() {
            super.render();
            const options = this.model.options.map((opt) => {
                let value, _label;
                if ((0, types_1.isString)(opt))
                    value = _label = opt;
                else
                    [value, _label] = opt;
                let disabled = this.model.disabled_options.includes(value);
                return (0, dom_1.option)({ value: value, disabled: disabled }, _label);
            });
            this.select_el = (0, dom_1.select)({
                multiple: false,
                class: inputs.input,
                name: this.model.name,
                disabled: this.model.disabled,
            }, options);
            this.select_el.style.backgroundImage = 'none';
            this.select_el.addEventListener("change", () => this.change_input());
            this.group_el.appendChild(this.select_el);
            this.render_selection();
        }
        render_selection() {
            const selected = this.model.value;
            for (const el of this.el.querySelectorAll('option'))
                if (el.value === selected)
                    el.selected = true;
            // Note that some browser implementations might not reduce
            // the number of visible options for size <= 3.
            this.select_el.size = this.model.size;
        }
        change_input() {
            const is_focused = this.el.querySelector('select:focus') != null;
            let value = null;
            for (const el of this.el.querySelectorAll('option')) {
                if (el.selected) {
                    value = el.value;
                    break;
                }
            }
            this.model.value = value;
            super.change_input();
            // Restore focus back to the <select> afterwards,
            // so that even if python on_change callback is invoked,
            // focus remains on <select> and one can seamlessly scroll
            // up/down.
            if (is_focused)
                this.select_el.focus();
        }
    }
    exports.SingleSelectView = SingleSelectView;
    SingleSelectView.__name__ = "SingleSelectView";
    class SingleSelect extends input_widget_1.InputWidget {
        constructor(attrs) {
            super(attrs);
        }
        static init_SingleSelect() {
            this.prototype.default_view = SingleSelectView;
            this.define(({ Any, Array, Int, String }) => ({
                disabled_options: [Array(String), []],
                options: [Array(Any), []],
                size: [Int, 4],
                value: [String, ""],
            }));
        }
    }
    exports.SingleSelect = SingleSelect;
    SingleSelect.__name__ = "SingleSelect";
    SingleSelect.__module__ = "panel.models.widgets";
    SingleSelect.init_SingleSelect();
},
"a96be0bcc9": /* models/speech_to_text.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const iconStarted = `<svg xmlns="http://www.w3.org/2000/svg" height="22px" style="vertical-align: middle;" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
  <path fill-rule="evenodd" d="M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
</svg>`;
    const iconNotStarted = `<svg xmlns="http://www.w3.org/2000/svg" height="22px" style="vertical-align: middle;" fill="currentColor" class="bi bi-mic-mute" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M12.734 9.613A4.995 4.995 0 0 0 13 8V7a.5.5 0 0 0-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 0 1 4 8V7a.5.5 0 0 0-1 0v1a5 5 0 0 0 4.5 4.975V15h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2.025a4.973 4.973 0 0 0 2.43-.923l-.718-.719zM11 7.88V3a3 3 0 0 0-5.842-.963l.845.845A2 2 0 0 1 10 3v3.879l1 1zM8.738 9.86l.748.748A3 3 0 0 1 5 8V6.121l1 1V8a2 2 0 0 0 2.738 1.86zm4.908 3.494l-12-12 .708-.708 12 12-.708.707z"/>
</svg>`;
    const titleStarted = "Click to STOP the speech recognition.";
    const titleNotStarted = "Click to START the speech recognition.";
    const { webkitSpeechRecognition } = window;
    const { webkitSpeechGrammarList } = window;
    function htmlToElement(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }
    function deserializeGrammars(grammars) {
        if (grammars) {
            var speechRecognitionList = new webkitSpeechGrammarList();
            for (let grammar of grammars) {
                if (grammar.src)
                    speechRecognitionList.addFromString(grammar.src, grammar.weight);
                else if (grammar.uri)
                    speechRecognitionList.addFromURI(grammar.uri, grammar.weight);
            }
            return speechRecognitionList;
        }
        else
            return null;
    }
    function round(value) {
        return Math.round((value + Number.EPSILON) * 100) / 100;
    }
    function serializeResults(results_) {
        const results = [];
        for (let result of results_) {
            let alternatives = [];
            let item = { is_final: result.isFinal, alternatives: alternatives };
            for (let i = 0; i < result.length; i++) {
                let alternative = {
                    confidence: round(result[i].confidence),
                    transcript: result[i].transcript
                };
                alternatives.push(alternative);
            }
            item.alternatives = alternatives;
            results.push(item);
        }
        return results;
    }
    class SpeechToTextView extends html_box_1.HTMLBoxView {
        initialize() {
            super.initialize();
            this.recognition = new webkitSpeechRecognition();
            this.recognition.lang = this.model.lang;
            this.recognition.continuous = this.model.continuous;
            this.recognition.interimResults = this.model.interim_results;
            this.recognition.maxAlternatives = this.model.max_alternatives;
            this.recognition.serviceURI = this.model.service_uri;
            this.setGrammars();
            this.recognition.onresult = (event) => {
                this.model.results = serializeResults(event.results);
            };
            this.recognition.onerror = (event) => {
                console.log("SpeechToText Error");
                console.log(event);
            };
            this.recognition.onnomatch = (event) => {
                console.log("SpeechToText No Match");
                console.log(event);
            };
            this.recognition.onaudiostart = () => this.model.audio_started = true;
            this.recognition.onaudioend = () => this.model.audio_started = false;
            this.recognition.onsoundstart = () => this.model.sound_started = true;
            this.recognition.onsoundend = () => this.model.sound_started = false;
            this.recognition.onspeechstart = () => this.model.speech_started = true;
            this.recognition.onspeechend = () => this.model.speech_started = false;
            this.recognition.onstart = () => {
                this.buttonEl.onclick = () => { this.recognition.stop(); };
                this.buttonEl.innerHTML = this.iconStarted();
                this.buttonEl.setAttribute("title", titleStarted);
                this.model.started = true;
            };
            this.recognition.onend = () => {
                this.buttonEl.onclick = () => { this.recognition.start(); };
                this.buttonEl.innerHTML = this.iconNotStarted();
                this.buttonEl.setAttribute("title", titleNotStarted);
                this.model.started = false;
            };
            this.buttonEl = htmlToElement(`<button class="bk bk-btn bk-btn-${this.model.button_type}" type="button" title="${titleNotStarted}"></button>`);
            this.buttonEl.innerHTML = this.iconNotStarted();
            this.buttonEl.onclick = () => this.recognition.start();
        }
        iconStarted() {
            if (this.model.button_started !== '')
                return this.model.button_started;
            else
                return iconStarted;
        }
        iconNotStarted() {
            if (this.model.button_not_started !== '')
                return this.model.button_not_started;
            else
                return iconNotStarted;
        }
        setIcon() {
            if (this.model.started)
                this.buttonEl.innerHTML = this.iconStarted();
            else
                this.buttonEl.innerHTML = this.iconNotStarted();
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.start.change, () => {
                this.model.start = false;
                this.recognition.start();
            });
            this.connect(this.model.properties.stop.change, () => {
                this.model.stop = false;
                this.recognition.stop();
            });
            this.connect(this.model.properties.abort.change, () => {
                this.model.abort = false;
                this.recognition.abort();
            });
            this.connect(this.model.properties.grammars.change, () => this.setGrammars());
            this.connect(this.model.properties.lang.change, () => this.recognition.lang = this.model.lang);
            this.connect(this.model.properties.continuous.change, () => this.recognition.continuous = this.model.continuous);
            this.connect(this.model.properties.interim_results.change, () => this.recognition.interimResults = this.model.interim_results);
            this.connect(this.model.properties.max_alternatives.change, () => this.recognition.maxAlternatives = this.model.max_alternatives);
            this.connect(this.model.properties.service_uri.change, () => this.recognition.serviceURI = this.model.service_uri);
            this.connect(this.model.properties.button_type.change, () => this.buttonEl.className = `bk bk-btn bk-btn-${this.model.button_type}`);
            this.connect(this.model.properties.button_hide.change, () => this.render());
            const { button_not_started, button_started } = this.model.properties;
            this.on_change([button_not_started, button_started], () => this.setIcon());
        }
        setGrammars() {
            this.recognition.grammars = deserializeGrammars(this.model.grammars);
        }
        render() {
            super.render();
            if (!this.model.button_hide)
                this.el.appendChild(this.buttonEl);
        }
    }
    exports.SpeechToTextView = SpeechToTextView;
    SpeechToTextView.__name__ = "SpeechToTextView";
    class SpeechToText extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_SpeechToText() {
            this.prototype.default_view = SpeechToTextView;
            this.define(({ Array, Boolean, Number, String }) => ({
                start: [Boolean, false],
                stop: [Boolean, false],
                abort: [Boolean, false],
                grammars: [Array(String), []],
                lang: [String, ""],
                continuous: [Boolean, false],
                interim_results: [Boolean, false],
                max_alternatives: [Number, 1],
                service_uri: [String,],
                started: [Boolean, false],
                audio_started: [Boolean, false],
                sound_started: [Boolean, false],
                speech_started: [Boolean, false],
                button_type: [String, 'light'],
                button_hide: [Boolean, false],
                button_not_started: [String, ''],
                button_started: [String, ''],
                results: [Array(String), []],
            }));
        }
    }
    exports.SpeechToText = SpeechToText;
    SpeechToText.__name__ = "SpeechToText";
    SpeechToText.__module__ = "panel.models.speech_to_text";
    SpeechToText.init_SpeechToText();
},
"bfa46a5f19": /* models/state.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const view_1 = require("@bokehjs/core/view");
    const array_1 = require("@bokehjs/core/util/array");
    const model_1 = require("@bokehjs/model");
    const receiver_1 = require("@bokehjs/protocol/receiver");
    function get_json(file, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', file, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == 200) {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }
    class StateView extends view_1.View {
        renderTo() {
        }
    }
    exports.StateView = StateView;
    StateView.__name__ = "StateView";
    class State extends model_1.Model {
        constructor(attrs) {
            super(attrs);
            this._receiver = new receiver_1.Receiver();
            this._cache = {};
        }
        apply_state(state) {
            this._receiver.consume(state.header);
            this._receiver.consume(state.metadata);
            this._receiver.consume(state.content);
            if (this._receiver.message && this.document) {
                this.document.apply_json_patch(this._receiver.message.content);
            }
        }
        _receive_json(result, path) {
            const state = JSON.parse(result);
            this._cache[path] = state;
            let current = this.state;
            for (const i of this.values) {
                current = current[i];
            }
            if (current === path)
                this.apply_state(state);
            else if (this._cache[current])
                this.apply_state(this._cache[current]);
        }
        set_state(widget, value) {
            let values = (0, array_1.copy)(this.values);
            const index = this.widgets[widget.id];
            values[index] = value;
            let state = this.state;
            for (const i of values) {
                state = state[i];
            }
            this.values = values;
            if (this.json) {
                if (this._cache[state]) {
                    this.apply_state(this._cache[state]);
                }
                else {
                    get_json(state, (result) => this._receive_json(result, state));
                }
            }
            else {
                this.apply_state(state);
            }
        }
        static init_State() {
            this.prototype.default_view = StateView;
            this.define(({ Any, Boolean }) => ({
                json: [Boolean, false],
                state: [Any, {}],
                widgets: [Any, {}],
                values: [Any, []],
            }));
        }
    }
    exports.State = State;
    State.__name__ = "State";
    State.__module__ = "panel.models.state";
    State.init_State();
},
"ab17724bd6": /* models/tabs.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const layout_1 = require("@bokehjs/core/layout");
    const dom_1 = require("@bokehjs/core/dom");
    const array_1 = require("@bokehjs/core/util/array");
    const tabs_1 = require("@bokehjs/models/layouts/tabs");
    const layout_dom_1 = require("@bokehjs/models/layouts/layout_dom");
    const tabs = (0, tslib_1.__importStar)(require("@bokehjs/styles/tabs.css"));
    const buttons = (0, tslib_1.__importStar)(require("@bokehjs/styles/buttons.css"));
    const menus = (0, tslib_1.__importStar)(require("@bokehjs/styles/menus.css"));
    function show(element) {
        element.style.visibility = "";
        element.style.opacity = "";
    }
    function hide(element) {
        element.style.visibility = "hidden";
        element.style.opacity = "0";
    }
    class TabsView extends tabs_1.TabsView {
        connect_signals() {
            super.connect_signals();
            let view = this;
            while (view != null) {
                if (view.model.type.endsWith('Tabs')) {
                    view.connect(view.model.properties.active.change, () => this.update_zindex());
                }
                view = view.parent || view._parent; // Handle ReactiveHTML
            }
        }
        get is_visible() {
            let parent = this.parent;
            let current_view = this;
            while (parent != null) {
                if (parent.model.type.endsWith('Tabs')) {
                    if (parent.child_views.indexOf(current_view) !== parent.model.active) {
                        return false;
                    }
                }
                current_view = parent;
                parent = parent.parent || parent._parent; // Handle ReactiveHTML
            }
            return true;
        }
        _update_layout() {
            const loc = this.model.tabs_location;
            const vertical = loc == "above" || loc == "below";
            // XXX: this is a hack, this should be handled by "fit" policy in grid layout
            const { scroll_el, headers_el } = this;
            this.header = new class extends layout_1.ContentBox {
                _measure(viewport) {
                    const min_headers = 3;
                    const scroll = (0, dom_1.size)(scroll_el);
                    const headers = (0, dom_1.children)(headers_el).slice(0, min_headers).map((el) => (0, dom_1.size)(el));
                    const { width, height } = super._measure(viewport);
                    if (vertical) {
                        const min_width = scroll.width + (0, array_1.sum)(headers.map((size) => size.width));
                        return { width: viewport.width != Infinity ? viewport.width : min_width, height };
                    }
                    else {
                        const min_height = scroll.height + (0, array_1.sum)(headers.map((size) => size.height));
                        return { width, height: viewport.height != Infinity ? viewport.height : min_height };
                    }
                }
            }(this.header_el);
            let { width_policy, height_policy } = this.model;
            if (width_policy == "auto")
                width_policy = this._width_policy();
            if (height_policy == "auto")
                height_policy = this._height_policy();
            const { sizing_mode } = this.model;
            if (sizing_mode != null) {
                if (sizing_mode == "fixed")
                    width_policy = height_policy = "fixed";
                else if (sizing_mode == "stretch_both")
                    width_policy = height_policy = "max";
                else if (sizing_mode == "stretch_width")
                    width_policy = "max";
                else if (sizing_mode == "stretch_height")
                    height_policy = "max";
            }
            if (vertical)
                this.header.set_sizing({ width_policy: width_policy, height_policy: "fixed" });
            else
                this.header.set_sizing({ width_policy: "fixed", height_policy: height_policy });
            let row = 1;
            let col = 1;
            switch (loc) {
                case "above":
                    row -= 1;
                    break;
                case "below":
                    row += 1;
                    break;
                case "left":
                    col -= 1;
                    break;
                case "right":
                    col += 1;
                    break;
            }
            const header = { layout: this.header, row, col };
            const panels = this.child_views.map((child_view) => {
                return { layout: child_view.layout, row: 1, col: 1 };
            });
            this.layout = new layout_1.Grid([header, ...panels]);
            this.layout.set_sizing(this.box_sizing());
        }
        update_zindex() {
            const { child_views } = this;
            for (const child_view of child_views) {
                if (child_view != null && child_view.el != null)
                    child_view.el.style.zIndex = "";
            }
            if (this.is_visible) {
                const active = child_views[this.model.active];
                if (active != null && active.el != null)
                    active.el.style.zIndex = "1";
            }
        }
        update_position() {
            super.update_position();
            this.header_el.style.position = "absolute"; // XXX: do it in position()
            (0, dom_1.position)(this.header_el, this.header.bbox);
            const loc = this.model.tabs_location;
            const vertical = loc == "above" || loc == "below";
            const scroll_el_size = (0, dom_1.size)(this.scroll_el);
            const headers = [...this.headers_el.children];
            if (vertical) {
                const headers_el_width = (0, array_1.sum)(headers.map((el) => (0, dom_1.scroll_size)(el).width));
                const { width } = this.header.bbox;
                if (headers_el_width > width) {
                    this.wrapper_el.style.maxWidth = `${width - scroll_el_size.width}px`;
                    (0, dom_1.display)(this.scroll_el);
                    this.do_scroll(this.model.active);
                }
                else {
                    this.headers_el.style.left = '0px';
                    this.wrapper_el.style.maxWidth = "";
                    (0, dom_1.undisplay)(this.scroll_el);
                }
            }
            else {
                const headers_el_height = (0, array_1.sum)(headers.map((el) => (0, dom_1.scroll_size)(el).height));
                const { height } = this.header.bbox;
                if (headers_el_height > height) {
                    this.wrapper_el.style.maxHeight = `${height - scroll_el_size.height}px`;
                    (0, dom_1.display)(this.scroll_el);
                    this.do_scroll(this.model.active);
                }
                else {
                    this.headers_el.style.top = '0px';
                    this.wrapper_el.style.maxHeight = "";
                    (0, dom_1.undisplay)(this.scroll_el);
                }
            }
            const { child_views } = this;
            for (const child_view of child_views) {
                hide(child_view.el);
                child_view.el.style.removeProperty('zIndex');
            }
            const tab = child_views[this.model.active];
            if (tab != null)
                show(tab.el);
        }
        render() {
            layout_dom_1.LayoutDOMView.prototype.render.call(this);
            let { active } = this.model;
            const headers = this.model.tabs.map((tab, i) => {
                const el = (0, dom_1.div)({ class: [tabs.tab, i == active ? tabs.active : null] }, tab.title);
                el.addEventListener("click", (event) => {
                    if (this.model.disabled)
                        return;
                    if (event.target == event.currentTarget)
                        this.change_active(i);
                });
                if (tab.closable) {
                    const close_el = (0, dom_1.div)({ class: tabs.close });
                    close_el.addEventListener("click", (event) => {
                        if (event.target == event.currentTarget) {
                            this.model.tabs = (0, array_1.remove_at)(this.model.tabs, i);
                            const ntabs = this.model.tabs.length;
                            if (this.model.active > ntabs - 1)
                                this.model.active = ntabs - 1;
                        }
                    });
                    el.appendChild(close_el);
                }
                if (this.model.disabled || tab.disabled) {
                    el.classList.add(tabs.disabled);
                }
                return el;
            });
            this.headers_el = (0, dom_1.div)({ class: [tabs.headers] }, headers);
            this.wrapper_el = (0, dom_1.div)({ class: tabs.headers_wrapper }, this.headers_el);
            this.left_el = (0, dom_1.div)({ class: [buttons.btn, buttons.btn_default], disabled: "" }, (0, dom_1.div)({ class: [menus.caret, tabs.left] }));
            this.right_el = (0, dom_1.div)({ class: [buttons.btn, buttons.btn_default] }, (0, dom_1.div)({ class: [menus.caret, tabs.right] }));
            this.left_el.addEventListener("click", () => this.do_scroll("left"));
            this.right_el.addEventListener("click", () => this.do_scroll("right"));
            this.scroll_el = (0, dom_1.div)({ class: buttons.btn_group }, this.left_el, this.right_el);
            const loc = this.model.tabs_location;
            this.header_el = (0, dom_1.div)({ class: [tabs.tabs_header, tabs[loc]] }, this.scroll_el, this.wrapper_el);
            this.el.appendChild(this.header_el);
            this.update_zindex();
            if (active === -1 && this.model.tabs.length)
                this.model.active = 0;
        }
        on_active_change() {
            const i = this.model.active;
            const headers = (0, dom_1.children)(this.headers_el);
            for (const el of headers)
                el.classList.remove(tabs.active);
            headers[i].classList.add(tabs.active);
            const { child_views } = this;
            for (const child_view of child_views) {
                hide(child_view.el);
            }
            show(child_views[i].el);
        }
    }
    exports.TabsView = TabsView;
    TabsView.__name__ = "TabsView";
    class Tabs extends tabs_1.Tabs {
        constructor(attrs) {
            super(attrs);
        }
        static init_Tabs() {
            this.prototype.default_view = TabsView;
            this.define(({}) => ({}));
        }
    }
    exports.Tabs = Tabs;
    Tabs.__name__ = "Tabs";
    Tabs.__module__ = "panel.models.tabs";
    Tabs.init_Tabs();
},
"3ea011fa55": /* models/terminal.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const dom_1 = require("@bokehjs/core/dom");
    const bokeh_events_1 = require("@bokehjs/core/bokeh_events");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class KeystrokeEvent extends bokeh_events_1.ModelEvent {
        constructor(key) {
            super();
            this.key = key;
            this.event_name = "keystroke";
        }
        _to_json() {
            return { model: this.origin, key: this.key };
        }
    }
    exports.KeystrokeEvent = KeystrokeEvent;
    KeystrokeEvent.__name__ = "KeystrokeEvent";
    class TerminalView extends layout_1.PanelHTMLBoxView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.output.change, this.write);
            this.connect(this.model.properties._clears.change, this.clear);
        }
        render() {
            super.render();
            this.container = (0, dom_1.div)({ class: "terminal-container" });
            (0, layout_1.set_size)(this.container, this.model);
            this.term = this.getNewTerminal();
            this.term.onData((value) => {
                this.handleOnData(value);
            });
            this.webLinksAddon = this.getNewWebLinksAddon();
            this.term.loadAddon(this.webLinksAddon);
            this.term.open(this.container);
            this.term.onRender(() => {
                if (!this._rendered)
                    this.fit();
            });
            this.write();
            this.el.appendChild(this.container);
        }
        getNewTerminal() {
            const wn = window;
            if (wn.Terminal)
                return new wn.Terminal(this.model.options);
            else
                return new wn.xtermjs.Terminal(this.model.options);
        }
        getNewWebLinksAddon() {
            const wn = window;
            return new wn.WebLinksAddon.WebLinksAddon();
        }
        handleOnData(value) {
            this.model.trigger_event(new KeystrokeEvent(value));
        }
        write() {
            const text = this.model.output;
            if (text == null || !text.length)
                return;
            // https://stackoverflow.com/questions/65367607/how-to-handle-new-line-in-xterm-js-while-writing-data-into-the-terminal
            const cleaned = text.replace(/\r?\n/g, "\r\n");
            // var text = Array.from(cleaned, (x) => x.charCodeAt(0))
            this.term.write(cleaned);
        }
        clear() {
            this.term.clear();
        }
        fit() {
            const sizing = this.box_sizing();
            const vert_margin = sizing.margin == null ? 0 : sizing.margin.top + sizing.margin.bottom;
            const horz_margin = sizing.margin == null ? 0 : sizing.margin.left + sizing.margin.right;
            const width = (this.layout.inner_bbox.width || this.model.width || 0) - horz_margin;
            const height = (this.layout.inner_bbox.height || this.model.height || 0) - vert_margin;
            const renderer = this.term._core._renderService;
            const cell_width = renderer.dimensions.actualCellWidth || 9;
            const cell_height = renderer.dimensions.actualCellHeight || 18;
            if (width == null || height == null || width <= 0 || height <= 0)
                return;
            const cols = Math.max(2, Math.floor(width / cell_width));
            const rows = Math.max(1, Math.floor(height / cell_height));
            if (this.term.rows !== rows || this.term.cols !== cols)
                this.term.resize(cols, rows);
            this.model.ncols = cols;
            this.model.nrows = rows;
            this._rendered = true;
        }
        after_layout() {
            super.after_layout();
            this.fit();
        }
        resize_layout() {
            super.resize_layout();
            this.fit();
        }
    }
    exports.TerminalView = TerminalView;
    TerminalView.__name__ = "TerminalView";
    // The Bokeh .ts model corresponding to the Bokeh .py model
    class Terminal extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_Terminal() {
            this.prototype.default_view = TerminalView;
            this.define(({ Any, Int, String }) => ({
                _clears: [Int, 0],
                options: [Any, {}],
                output: [String,],
                ncols: [Int],
                nrows: [Int],
            }));
        }
    }
    exports.Terminal = Terminal;
    Terminal.__name__ = "Terminal";
    Terminal.__module__ = "panel.models.terminal";
    Terminal.init_Terminal();
},
"33cd2c254e": /* models/text_to_speech.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    function toVoicesList(voices) {
        var voicesList = [];
        for (let voice of voices) {
            var item = {
                default: voice.default,
                lang: voice.lang,
                local_service: voice.localService,
                name: voice.name,
                voice_uri: voice.voiceURI,
            };
            voicesList.push(item);
        }
        return voicesList;
    }
    class TextToSpeechView extends html_box_1.HTMLBoxView {
        initialize() {
            super.initialize();
            this.model.paused = speechSynthesis.paused;
            this.model.pending = speechSynthesis.pending;
            this.model.speaking = speechSynthesis.speaking;
            // Hack: Keeps speeking for longer texts
            // https://stackoverflow.com/questions/21947730/chrome-speech-synthesis-with-longer-texts
            this._callback = window.setInterval(function () {
                if (!speechSynthesis.paused && speechSynthesis.speaking) {
                    window.speechSynthesis.resume();
                }
            }, 10000);
            const populateVoiceList = () => {
                if (typeof speechSynthesis === 'undefined')
                    return;
                // According to https://talkrapp.com/speechSynthesis.html not all voices are available
                // The article includes code for ios to handle this. Might be useful.
                this.voices = speechSynthesis.getVoices();
                if (!this.voices)
                    return;
                this.model.voices = toVoicesList(this.voices);
            };
            populateVoiceList();
            if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined)
                speechSynthesis.onvoiceschanged = populateVoiceList;
        }
        remove() {
            if (this._callback != null)
                clearInterval(this._callback);
            speechSynthesis.cancel();
            super.remove();
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.speak.change, () => {
                this.speak();
            });
            this.connect(this.model.properties.pause.change, () => {
                this.model.pause = false;
                speechSynthesis.pause();
            });
            this.connect(this.model.properties.resume.change, () => {
                this.model.resume = false;
                speechSynthesis.resume();
            });
            this.connect(this.model.properties.cancel.change, () => {
                this.model.cancel = false;
                speechSynthesis.cancel();
            });
        }
        speak() {
            let utterance = new SpeechSynthesisUtterance(this.model.speak.text);
            utterance.pitch = this.model.speak.pitch;
            utterance.volume = this.model.speak.volume;
            utterance.rate = this.model.speak.rate;
            if (this.model.voices) {
                for (let voice of this.voices) {
                    if (voice.name === this.model.speak.voice)
                        utterance.voice = voice;
                }
            }
            utterance.onpause = () => this.model.paused = true;
            utterance.onstart = () => {
                this.model.speaking = true;
                this.model.paused = false;
                this.model.pending = speechSynthesis.pending;
            };
            utterance.onresume = () => this.model.paused = false;
            utterance.onend = () => {
                this.model.speaking = false;
                this.model.paused = false;
                this.model.pending = speechSynthesis.pending;
            };
            speechSynthesis.speak(utterance);
            this.model.paused = speechSynthesis.paused;
            this.model.pending = speechSynthesis.pending;
        }
        render() {
            super.render();
            // Hack: This will make sure voices are assigned when
            // Bokeh/ Panel is served first time with --show option.
            if (!this.model.voices)
                this.model.voices = toVoicesList(this.voices);
            if (this.model.speak != null && this.model.speak.text)
                this.speak();
        }
    }
    exports.TextToSpeechView = TextToSpeechView;
    TextToSpeechView.__name__ = "TextToSpeechView";
    class TextToSpeech extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_TextToSpeech() {
            this.prototype.default_view = TextToSpeechView;
            this.define(({ Any, Array, Boolean }) => ({
                paused: [Boolean, false],
                pending: [Boolean, false],
                speaking: [Boolean, false],
                voices: [Array(Any), []],
                cancel: [Boolean, false],
                pause: [Boolean, false],
                resume: [Boolean, false],
                speak: [Any, {}],
            }));
        }
    }
    exports.TextToSpeech = TextToSpeech;
    TextToSpeech.__name__ = "TextToSpeech";
    TextToSpeech.__module__ = "panel.models.text_to_speech";
    TextToSpeech.init_TextToSpeech();
},
"effe070807": /* models/trend.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const build_views_1 = require("@bokehjs/core/build_views");
    const plots_1 = require("@bokehjs/models/plots");
    const glyphs_1 = require("@bokehjs/models/glyphs");
    const dom_1 = require("@bokehjs/core/dom");
    const column_data_source_1 = require("@bokehjs/models/sources/column_data_source");
    const formatters_1 = require("@bokehjs/models/formatters");
    const red = "#d9534f";
    const green = "#5cb85c";
    const blue = "#428bca";
    class TrendIndicatorView extends html_box_1.HTMLBoxView {
        initialize() {
            super.initialize();
            this.containerDiv = (0, dom_1.div)({ style: "height:100%; width:100%;" });
            this.titleDiv = (0, dom_1.div)({ style: "font-size: 1em; word-wrap: break-word;" });
            this.valueDiv = (0, dom_1.div)({ style: "font-size: 2em" });
            this.value2Div = (0, dom_1.div)({ style: "font-size: 1em; opacity: 0.5; display: inline" });
            this.changeDiv = (0, dom_1.div)({ style: "font-size: 1em; opacity: 0.5; display: inline" });
            this.textDiv = (0, dom_1.div)({}, this.titleDiv, this.valueDiv, (0, dom_1.div)({}, this.changeDiv, this.value2Div));
            this.updateTitle();
            this.updateValue();
            this.updateValue2();
            this.updateValueChange();
            this.updateTextFontSize();
            this.plotDiv = (0, dom_1.div)({});
            this.containerDiv = (0, dom_1.div)({ style: "height:100%; width:100%" }, this.textDiv, this.plotDiv);
            this.updateLayout();
        }
        connect_signals() {
            super.connect_signals();
            const { pos_color, neg_color } = this.model.properties;
            this.on_change([pos_color, neg_color], () => this.updateValueChange());
            const { plot_color, plot_type, width, height, sizing_mode } = this.model.properties;
            this.on_change([plot_color, plot_type, width, height, sizing_mode], () => this.render());
            this.connect(this.model.properties.title.change, () => this.updateTitle(true));
            this.connect(this.model.properties.value.change, () => this.updateValue(true));
            this.connect(this.model.properties.value_change.change, () => this.updateValue2(true));
            this.connect(this.model.properties.layout.change, () => this.updateLayout());
        }
        async render() {
            super.render();
            this.el.appendChild(this.containerDiv);
            await this.setPlot();
        }
        async setPlot() {
            this.plot = new plots_1.Plot({
                background_fill_color: null,
                border_fill_color: null,
                outline_line_color: null,
                min_border: 0,
                sizing_mode: "stretch_both",
                toolbar_location: null,
            });
            var source = this.model.source;
            if (this.model.plot_type === "line") {
                var line = new glyphs_1.Line({
                    x: { field: this.model.plot_x },
                    y: { field: this.model.plot_y },
                    line_width: 4,
                    line_color: this.model.plot_color,
                });
                this.plot.add_glyph(line, source);
            }
            else if (this.model.plot_type === "step") {
                var step = new glyphs_1.Step({
                    x: { field: this.model.plot_x },
                    y: { field: this.model.plot_y },
                    line_width: 3,
                    line_color: this.model.plot_color,
                });
                this.plot.add_glyph(step, source);
            }
            else if (this.model.plot_type === "area") {
                var varea = new glyphs_1.VArea({
                    x: { field: this.model.plot_x },
                    y1: { field: this.model.plot_y },
                    y2: 0,
                    fill_color: this.model.plot_color,
                    fill_alpha: 0.5,
                });
                this.plot.add_glyph(varea, source);
                var line = new glyphs_1.Line({
                    x: { field: this.model.plot_x },
                    y: { field: this.model.plot_y },
                    line_width: 3,
                    line_color: this.model.plot_color,
                });
                this.plot.add_glyph(line, source);
            }
            else {
                var vbar = new glyphs_1.VBar({
                    x: { field: this.model.plot_x },
                    top: { field: this.model.plot_y },
                    width: 0.9,
                    line_color: null,
                    fill_color: this.model.plot_color
                });
                this.plot.add_glyph(vbar, source);
            }
            const view = await (0, build_views_1.build_view)(this.plot);
            this.plotDiv.innerHTML = "";
            view.renderTo(this.plotDiv);
        }
        after_layout() {
            super.after_layout();
            this.updateTextFontSize();
        }
        updateTextFontSize() {
            this.updateTextFontSizeColumn();
        }
        updateTextFontSizeColumn() {
            let elWidth = this.containerDiv.clientWidth;
            let elHeight = this.containerDiv.clientHeight;
            if (this.model.layout === "column")
                elHeight = Math.round(elHeight / 2);
            else
                elWidth = Math.round(elWidth / 2);
            const widthTitle = this.model.title.length;
            const widthValue = 2 * this._value_format.length;
            const widthValue2 = this._value_change_format.length + 1;
            const widthConstraint1 = elWidth / widthTitle * 2.0;
            const widthConstraint2 = elWidth / widthValue * 1.8;
            const widthConstraint3 = elWidth / widthValue2 * 2.0;
            const heightConstraint = elHeight / 6;
            const fontSize = Math.min(widthConstraint1, widthConstraint2, widthConstraint3, heightConstraint);
            this.textDiv.style.fontSize = Math.trunc(fontSize) + "px";
            this.textDiv.style.lineHeight = "1.3";
        }
        updateTitle(update_fontsize = false) {
            this.titleDiv.innerText = this.model.title;
            if (update_fontsize)
                this.updateTextFontSize();
        }
        updateValue(update_fontsize = false) {
            this._value_format = this.model.formatter.doFormat([this.model.value], { loc: 0 })[0];
            this.valueDiv.innerText = this._value_format;
            if (update_fontsize)
                this.updateTextFontSize();
        }
        updateValue2(update_fontsize = false) {
            this._value_change_format = this.model.change_formatter.doFormat([this.model.value_change], { loc: 0 })[0];
            this.value2Div.innerText = this._value_change_format;
            this.updateValueChange();
            if (update_fontsize)
                this.updateTextFontSize();
        }
        updateValueChange() {
            if (this.model.value_change > 0) {
                this.changeDiv.innerHTML = "&#9650;";
                this.changeDiv.style.color = this.model.pos_color;
            }
            else if (this.model.value_change < 0) {
                this.changeDiv.innerHTML = "&#9660;";
                this.changeDiv.style.color = this.model.neg_color;
            }
            else {
                this.changeDiv.innerHTML = "&nbsp;";
                this.changeDiv.style.color = "inherit";
            }
        }
        updateLayout() {
            if (this.model.layout === "column") {
                this.containerDiv.style.display = "block";
                this.textDiv.style.height = "50%";
                this.textDiv.style.width = "100%";
                this.plotDiv.style.height = "50%";
                this.plotDiv.style.width = "100%";
            }
            else {
                this.containerDiv.style.display = "flex";
                this.textDiv.style.height = "100%";
                this.textDiv.style.width = "";
                this.plotDiv.style.height = "100%";
                this.plotDiv.style.width = "";
                this.textDiv.style.flex = "1";
                this.plotDiv.style.flex = "1";
            }
            if (this._has_finished)
                this.invalidate_layout();
        }
    }
    exports.TrendIndicatorView = TrendIndicatorView;
    TrendIndicatorView.__name__ = "TrendIndicatorView";
    class TrendIndicator extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_TrendIndicator() {
            this.prototype.default_view = TrendIndicatorView;
            this.define(({ Number, String, Ref }) => ({
                description: [String, ""],
                formatter: [Ref(formatters_1.TickFormatter), () => new formatters_1.BasicTickFormatter()],
                change_formatter: [Ref(formatters_1.TickFormatter), () => new formatters_1.NumeralTickFormatter()],
                layout: [String, "column"],
                source: [Ref(column_data_source_1.ColumnDataSource)],
                plot_x: [String, "x"],
                plot_y: [String, "y"],
                plot_color: [String, blue],
                plot_type: [String, "bar"],
                pos_color: [String, green],
                neg_color: [String, red],
                title: [String, ""],
                value: [Number, 0],
                value_change: [Number, 0],
            }));
        }
    }
    exports.TrendIndicator = TrendIndicator;
    TrendIndicator.__name__ = "TrendIndicator";
    TrendIndicator.__module__ = "panel.models.trend";
    TrendIndicator.init_TrendIndicator();
},
"fea356270f": /* models/vega.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const bokeh_events_1 = require("@bokehjs/core/bokeh_events");
    const types_1 = require("@bokehjs/core/util/types");
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const debounce_1 = require("99a25e6992") /* debounce */;
    class VegaEvent extends bokeh_events_1.ModelEvent {
        constructor(data) {
            super();
            this.data = data;
            this.event_name = "vega_event";
        }
        _to_json() {
            return { model: this.origin, data: this.data };
        }
    }
    exports.VegaEvent = VegaEvent;
    VegaEvent.__name__ = "VegaEvent";
    class VegaPlotView extends html_box_1.HTMLBoxView {
        connect_signals() {
            super.connect_signals();
            const { data, show_actions, theme } = this.model.properties;
            this.on_change([data, show_actions, theme], () => {
                this._plot();
            });
            this.connect(this.model.properties.data_sources.change, () => this._connect_sources());
            this.connect(this.model.properties.events.change, () => {
                for (const event of this.model.events) {
                    if (this._callbacks.indexOf(event) > -1)
                        continue;
                    this._callbacks.push(event);
                    const callback = (name, value) => this._dispatch_event(name, value);
                    const timeout = this.model.throttle[event] || 20;
                    this.vega_view.addSignalListener(event, (0, debounce_1.debounce)(callback, timeout, false));
                }
            });
            this._connected = [];
            this._connect_sources();
        }
        _connect_sources() {
            for (const ds in this.model.data_sources) {
                const cds = this.model.data_sources[ds];
                if (this._connected.indexOf(ds) < 0) {
                    this.connect(cds.properties.data.change, this._plot);
                    this._connected.push(ds);
                }
            }
        }
        _dispatch_event(name, value) {
            if ('vlPoint' in value && value.vlPoint.or != null) {
                const indexes = [];
                for (const index of value.vlPoint.or)
                    indexes.push(index._vgsid_);
                value = indexes;
            }
            this.model.trigger_event(new VegaEvent({ type: name, value: value }));
        }
        _fetch_datasets() {
            const datasets = {};
            for (const ds in this.model.data_sources) {
                const cds = this.model.data_sources[ds];
                const data = [];
                const columns = cds.columns();
                for (let i = 0; i < cds.get_length(); i++) {
                    const item = {};
                    for (const column of columns) {
                        item[column] = cds.data[column][i];
                    }
                    data.push(item);
                }
                datasets[ds] = data;
            }
            return datasets;
        }
        render() {
            super.render();
            this._callbacks = [];
            this._plot();
        }
        _plot() {
            const data = this.model.data;
            if ((data == null) || !window.vegaEmbed)
                return;
            if (this.model.data_sources && (Object.keys(this.model.data_sources).length > 0)) {
                const datasets = this._fetch_datasets();
                if ('data' in datasets) {
                    data.data['values'] = datasets['data'];
                    delete datasets['data'];
                }
                if (data.data != null) {
                    const data_objs = (0, types_1.isArray)(data.data) ? data.data : [data.data];
                    for (const d of data_objs) {
                        if (d.name in datasets) {
                            d['values'] = datasets[d.name];
                            delete datasets[d.name];
                        }
                    }
                }
                this.model.data['datasets'] = datasets;
            }
            const config = { actions: this.model.show_actions, theme: this.model.theme };
            window.vegaEmbed(this.el, this.model.data, config).then((result) => {
                this.vega_view = result.view;
                this.relayout();
                if (this.vega_view._viewHeight <= 0 || this.vega_view._viewWidth <= 0) {
                    window.dispatchEvent(new Event('resize'));
                }
                const callback = (name, value) => this._dispatch_event(name, value);
                for (const event of this.model.events) {
                    this._callbacks.push(event);
                    const timeout = this.model.throttle[event] || 20;
                    this.vega_view.addSignalListener(event, (0, debounce_1.debounce)(callback, timeout, false));
                }
            });
        }
        relayout() {
            this.update_layout();
            this.compute_layout();
            if (this.root !== this)
                this.invalidate_layout();
            else if (this._parent != undefined) // HACK: Support ReactiveHTML
                this._parent.invalidate_layout();
        }
        box_sizing() {
            const sizing = super.box_sizing();
            if (this.vega_view != null) {
                if (sizing.height_policy === "fixed")
                    sizing.height = this.vega_view._viewHeight;
                if (sizing.width_policy === "fixed")
                    sizing.width = this.vega_view._viewWidth;
            }
            return sizing;
        }
    }
    exports.VegaPlotView = VegaPlotView;
    VegaPlotView.__name__ = "VegaPlotView";
    class VegaPlot extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_VegaPlot() {
            this.prototype.default_view = VegaPlotView;
            this.define(({ Any, Array, Boolean, String }) => ({
                data: [Any, {}],
                data_sources: [Any, {}],
                events: [Array(String), []],
                show_actions: [Boolean, false],
                theme: [String,],
                throttle: [Any, {}]
            }));
        }
    }
    exports.VegaPlot = VegaPlot;
    VegaPlot.__name__ = "VegaPlot";
    VegaPlot.__module__ = "panel.models.vega";
    VegaPlot.init_VegaPlot();
},
"1b46fd56a8": /* models/video.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class VideoView extends layout_1.PanelHTMLBoxView {
        initialize() {
            super.initialize();
            this._blocked = false;
            this._setting = false;
            this._time = Date.now();
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.loop.change, () => this.set_loop());
            this.connect(this.model.properties.paused.change, () => this.set_paused());
            this.connect(this.model.properties.muted.change, () => this.set_muted());
            this.connect(this.model.properties.autoplay.change, () => this.set_autoplay());
            this.connect(this.model.properties.time.change, () => this.set_time());
            this.connect(this.model.properties.value.change, () => this.set_value());
            this.connect(this.model.properties.volume.change, () => this.set_volume());
        }
        render() {
            super.render();
            this.videoEl = document.createElement('video');
            if (!this.model.sizing_mode || this.model.sizing_mode === 'fixed') {
                if (this.model.height)
                    this.videoEl.height = this.model.height;
                if (this.model.width)
                    this.videoEl.width = this.model.width;
            }
            this.videoEl.style.objectFit = 'fill';
            this.videoEl.style.minWidth = '100%';
            this.videoEl.style.minHeight = '100%';
            this.videoEl.controls = true;
            this.videoEl.src = this.model.value;
            this.videoEl.currentTime = this.model.time;
            this.videoEl.loop = this.model.loop;
            this.videoEl.muted = this.model.muted;
            this.videoEl.autoplay = this.model.autoplay;
            if (this.model.volume != null)
                this.videoEl.volume = this.model.volume / 100;
            else
                this.model.volume = this.videoEl.volume * 100;
            this.videoEl.onpause = () => this.model.paused = true;
            this.videoEl.onplay = () => this.model.paused = false;
            this.videoEl.ontimeupdate = () => this.update_time(this);
            this.videoEl.onvolumechange = () => this.update_volume(this);
            this.el.appendChild(this.videoEl);
            if (!this.model.paused)
                this.videoEl.play();
        }
        update_time(view) {
            if (view._setting) {
                view._setting = false;
                return;
            }
            if ((Date.now() - view._time) < view.model.throttle)
                return;
            view._blocked = true;
            view.model.time = view.videoEl.currentTime;
            view._time = Date.now();
        }
        update_volume(view) {
            if (view._setting) {
                view._setting = false;
                return;
            }
            view._blocked = true;
            view.model.volume = view.videoEl.volume * 100;
        }
        set_loop() {
            this.videoEl.loop = this.model.loop;
        }
        set_muted() {
            this.videoEl.muted = this.model.muted;
        }
        set_autoplay() {
            this.videoEl.autoplay = this.model.autoplay;
        }
        set_paused() {
            if (!this.videoEl.paused && this.model.paused)
                this.videoEl.pause();
            if (this.videoEl.paused && !this.model.paused)
                this.videoEl.play();
        }
        set_volume() {
            if (this._blocked) {
                this._blocked = false;
                return;
            }
            this._setting = true;
            if (this.model.volume != null)
                this.videoEl.volume = this.model.volume / 100;
        }
        set_time() {
            if (this._blocked) {
                this._blocked = false;
                return;
            }
            this._setting = true;
            this.videoEl.currentTime = this.model.time;
        }
        set_value() {
            this.videoEl.src = this.model.value;
        }
    }
    exports.VideoView = VideoView;
    VideoView.__name__ = "VideoView";
    class Video extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_Video() {
            this.prototype.default_view = VideoView;
            this.define(({ Any, Boolean, Int, Number }) => ({
                loop: [Boolean, false],
                paused: [Boolean, true],
                muted: [Boolean, false],
                autoplay: [Boolean, false],
                time: [Number, 0],
                throttle: [Int, 250],
                value: [Any, ''],
                volume: [Int],
            }));
        }
    }
    exports.Video = Video;
    Video.__name__ = "Video";
    Video.__module__ = "panel.models.widgets";
    Video.init_Video();
},
"e3e9b8e495": /* models/videostream.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const layout_1 = require("80a6464b1f") /* ./layout */;
    class VideoStreamView extends layout_1.PanelHTMLBoxView {
        constructor() {
            super(...arguments);
            this.constraints = {
                'audio': false,
                'video': true
            };
        }
        initialize() {
            super.initialize();
            if (this.model.timeout !== null)
                this.set_timeout();
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.timeout.change, () => this.set_timeout());
            this.connect(this.model.properties.snapshot.change, () => this.snapshot());
            this.connect(this.model.properties.paused.change, () => this.pause());
        }
        pause() {
            if (this.model.paused) {
                if (this.timer != null) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
                this.videoEl.pause();
            }
            else
                this.videoEl.play();
            this.set_timeout();
        }
        set_timeout() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
            if (this.model.timeout != null && this.model.timeout > 0)
                this.timer = setInterval(() => this.snapshot(), this.model.timeout);
        }
        snapshot() {
            this.canvasEl.width = this.videoEl.videoWidth;
            this.canvasEl.height = this.videoEl.videoHeight;
            const context = this.canvasEl.getContext('2d');
            if (context)
                context.drawImage(this.videoEl, 0, 0, this.canvasEl.width, this.canvasEl.height);
            this.model.value = this.canvasEl.toDataURL("image/" + this.model.format, 0.95);
        }
        remove() {
            super.remove();
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
        render() {
            super.render();
            if (this.videoEl)
                return;
            this.videoEl = document.createElement('video');
            if (!this.model.sizing_mode || this.model.sizing_mode === 'fixed') {
                if (this.model.height)
                    this.videoEl.height = this.model.height;
                if (this.model.width)
                    this.videoEl.width = this.model.width;
            }
            this.videoEl.style.objectFit = 'fill';
            this.videoEl.style.minWidth = '100%';
            this.videoEl.style.minHeight = '100%';
            this.canvasEl = document.createElement('canvas');
            this.el.appendChild(this.videoEl);
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia(this.constraints)
                    .then(stream => {
                    this.videoEl.srcObject = stream;
                    if (!this.model.paused) {
                        this.videoEl.play();
                    }
                })
                    .catch(console.error);
            }
        }
    }
    exports.VideoStreamView = VideoStreamView;
    VideoStreamView.__name__ = "VideoStreamView";
    class VideoStream extends html_box_1.HTMLBox {
        constructor(attrs) {
            super(attrs);
        }
        static init_VideoStream() {
            this.prototype.default_view = VideoStreamView;
            this.define(({ Any, Boolean, Int, Nullable, String }) => ({
                format: [String, 'png'],
                paused: [Boolean, false],
                snapshot: [Boolean, false],
                timeout: [Nullable(Int), null],
                value: [Any]
            }));
            this.override({
                height: 240,
                width: 320
            });
        }
    }
    exports.VideoStream = VideoStream;
    VideoStream.__name__ = "VideoStream";
    VideoStream.__module__ = "panel.models.widgets";
    VideoStream.init_VideoStream();
},
"c51f25e2a7": /* models/vtk/index.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    var vtkjs_1 = require("b6d9199d03") /* ./vtkjs */;
    __esExport("VTKJSPlot", vtkjs_1.VTKJSPlot);
    var vtkvolume_1 = require("7785475bdd") /* ./vtkvolume */;
    __esExport("VTKVolumePlot", vtkvolume_1.VTKVolumePlot);
    var vtkaxes_1 = require("ab478186ba") /* ./vtkaxes */;
    __esExport("VTKAxes", vtkaxes_1.VTKAxes);
    var vtksynchronized_1 = require("0a57062475") /* ./vtksynchronized */;
    __esExport("VTKSynchronizedPlot", vtksynchronized_1.VTKSynchronizedPlot);
},
"b6d9199d03": /* models/vtk/vtkjs.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const vtklayout_1 = require("e13c143c7d") /* ./vtklayout */;
    const util_1 = require("993f3118b2") /* ./util */;
    class VTKJSPlotView extends vtklayout_1.AbstractVTKView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.data.change, () => {
                this.invalidate_render();
            });
        }
        render() {
            super.render();
            this._create_orientation_widget();
            this._set_axes();
        }
        invalidate_render() {
            this._vtk_renwin = null;
            super.invalidate_render();
        }
        init_vtk_renwin() {
            this._vtk_renwin = util_1.vtkns.FullScreenRenderWindow.newInstance({
                rootContainer: this.el,
                container: this._vtk_container,
            });
        }
        plot() {
            if (!this.model.data) {
                this._vtk_renwin.getRenderWindow().render();
                return;
            }
            const dataAccessHelper = util_1.vtkns.DataAccessHelper.get("zip", {
                zipContent: atob(this.model.data),
                callback: (_zip) => {
                    const sceneImporter = util_1.vtkns.HttpSceneLoader.newInstance({
                        renderer: this._vtk_renwin.getRenderer(),
                        dataAccessHelper,
                    });
                    const fn = window.vtk.macro.debounce(() => setTimeout(() => {
                        if (this._axes == null && this.model.axes)
                            this._set_axes();
                        this._set_camera_state();
                        this._get_camera_state();
                    }, 100), 100);
                    sceneImporter.setUrl("index.json");
                    sceneImporter.onReady(fn);
                },
            });
        }
    }
    exports.VTKJSPlotView = VTKJSPlotView;
    VTKJSPlotView.__name__ = "VTKJSPlotView";
    class VTKJSPlot extends vtklayout_1.AbstractVTKPlot {
        static init_VTKJSPlot() {
            this.prototype.default_view = VTKJSPlotView;
            this.define(({ Boolean, Nullable, String }) => ({
                data: [Nullable(String)],
                enable_keybindings: [Boolean, false],
            }));
        }
    }
    exports.VTKJSPlot = VTKJSPlot;
    VTKJSPlot.__name__ = "VTKJSPlot";
    VTKJSPlot.init_VTKJSPlot();
},
"e13c143c7d": /* models/vtk/vtklayout.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const dom_1 = require("@bokehjs/core/dom");
    const html_box_1 = require("@bokehjs/models/layouts/html_box");
    const object_1 = require("@bokehjs/core/util/object");
    const color_mapper_1 = require("@bokehjs/models/mappers/color_mapper");
    const kinds_1 = require("@bokehjs/core/kinds");
    const layout_1 = require("80a6464b1f") /* ../layout */;
    const util_1 = require("993f3118b2") /* ./util */;
    const vtkcolorbar_1 = require("c010237f8b") /* ./vtkcolorbar */;
    const vtkaxes_1 = require("ab478186ba") /* ./vtkaxes */;
    const INFO_DIV_STYLE = {
        padding: "0px 2px 0px 2px",
        maxHeight: "150px",
        height: "auto",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: "10px",
        margin: "2px",
        boxSizing: "border-box",
        overflow: "hidden",
        overflowY: "auto",
        transition: "width 0.1s linear",
        bottom: "0px",
        position: "absolute",
    };
    const textPositions = (0, kinds_1.Enum)("LowerLeft", "LowerRight", "UpperLeft", "UpperRight", "LowerEdge", "RightEdge", "LeftEdge", "UpperEdge");
    class AbstractVTKView extends layout_1.PanelHTMLBoxView {
        initialize() {
            super.initialize();
            this._camera_callbacks = [];
            this._renderable = true;
            this._setting_camera = false;
        }
        _add_colorbars() {
            //construct colorbars
            const old_info_div = this.el.querySelector(".vtk_info");
            if (old_info_div)
                this.el.removeChild(old_info_div);
            if (this.model.color_mappers.length < 1)
                return;
            const info_div = document.createElement("div");
            const expand_width = "350px";
            const collapsed_width = "30px";
            info_div.classList.add('vtk_info');
            (0, util_1.applyStyle)(info_div, INFO_DIV_STYLE);
            (0, util_1.applyStyle)(info_div, { width: expand_width });
            this.el.appendChild(info_div);
            //construct colorbars
            const colorbars = [];
            this.model.color_mappers.forEach((mapper) => {
                const cb = new vtkcolorbar_1.VTKColorBar(info_div, mapper);
                colorbars.push(cb);
            });
            //content when collapsed
            const dots = document.createElement('div');
            (0, util_1.applyStyle)(dots, { textAlign: "center", fontSize: "20px" });
            dots.innerText = "...";
            info_div.addEventListener('click', () => {
                if (info_div.style.width === collapsed_width) {
                    info_div.removeChild(dots);
                    (0, util_1.applyStyle)(info_div, { height: "auto", width: expand_width });
                    colorbars.forEach((cb) => info_div.appendChild(cb.canvas));
                }
                else {
                    colorbars.forEach((cb) => info_div.removeChild(cb.canvas));
                    (0, util_1.applyStyle)(info_div, { height: collapsed_width, width: collapsed_width });
                    info_div.appendChild(dots);
                }
            });
            info_div.click();
        }
        _init_annotations_container() {
            if (!this._annotations_container) {
                this._annotations_container = document.createElement("div");
                this._annotations_container.style.position = "absolute";
                this._annotations_container.style.width = "100%";
                this._annotations_container.style.height = "100%";
                this._annotations_container.style.top = "0";
                this._annotations_container.style.left = "0";
                this._annotations_container.style.pointerEvents = "none";
            }
        }
        _clean_annotations() {
            if (this._annotations_container) {
                while (this._annotations_container.firstElementChild) {
                    this._annotations_container.firstElementChild.remove();
                }
            }
        }
        _add_annotations() {
            this._clean_annotations();
            const { annotations } = this.model;
            if (annotations != null) {
                for (let annotation of annotations) {
                    const { viewport, color, fontSize, fontFamily } = annotation;
                    textPositions.values.forEach((pos) => {
                        const text = annotation[pos];
                        if (text) {
                            const div = document.createElement("div");
                            div.textContent = text;
                            const { style } = div;
                            style.position = "absolute";
                            style.color = `rgb(${color.map((val) => 255 * val).join(",")})`;
                            style.fontSize = `${fontSize}px`;
                            style.padding = "5px";
                            style.fontFamily = fontFamily;
                            style.width = "fit-content";
                            if (pos == "UpperLeft") {
                                style.top = `${(1 - viewport[3]) * 100}%`;
                                style.left = `${viewport[0] * 100}%`;
                            }
                            if (pos == "UpperRight") {
                                style.top = `${(1 - viewport[3]) * 100}%`;
                                style.right = `${(1 - viewport[2]) * 100}%`;
                            }
                            if (pos == "LowerLeft") {
                                style.bottom = `${viewport[1] * 100}%`;
                                style.left = `${viewport[0] * 100}%`;
                            }
                            if (pos == "LowerRight") {
                                style.bottom = `${viewport[1] * 100}%`;
                                style.right = `${(1 - viewport[2]) * 100}%`;
                            }
                            if (pos == "UpperEdge") {
                                style.top = `${(1 - viewport[3]) * 100}%`;
                                style.left = `${(viewport[0] + (viewport[2] - viewport[0]) / 2) * 100}%`;
                                style.transform = "translateX(-50%)";
                            }
                            if (pos == "LowerEdge") {
                                style.bottom = `${viewport[1] * 100}%`;
                                style.left = `${(viewport[0] + (viewport[2] - viewport[0]) / 2) * 100}%`;
                                style.transform = "translateX(-50%)";
                            }
                            if (pos == "LeftEdge") {
                                style.left = `${viewport[0] * 100}%`;
                                style.top = `${(1 - viewport[3] + (viewport[3] - viewport[1]) / 2) * 100}%`;
                                style.transform = "translateY(-50%)";
                            }
                            if (pos == "RightEdge") {
                                style.right = `${(1 - viewport[2]) * 100}%`;
                                style.top = `${(1 - viewport[3] + (viewport[3] - viewport[1]) / 2) * 100}%`;
                                style.transform = "translateY(-50%)";
                            }
                            this._annotations_container.appendChild(div);
                        }
                    });
                }
            }
        }
        connect_signals() {
            super.connect_signals();
            this.on_change(this.model.properties.orientation_widget, () => {
                this._orientation_widget_visibility(this.model.orientation_widget);
            });
            this.on_change(this.model.properties.camera, () => this._set_camera_state());
            this.on_change(this.model.properties.axes, () => {
                this._delete_axes();
                if (this.model.axes)
                    this._set_axes();
                this._vtk_render();
            });
            this.on_change(this.model.properties.color_mappers, () => this._add_colorbars());
            this.on_change(this.model.properties.annotations, () => this._add_annotations());
        }
        render() {
            super.render();
            if (!this._vtk_renwin || !this._vtk_container) {
                this._orientationWidget = null;
                this._axes = null;
                this._vtk_container = (0, dom_1.div)();
                this.init_vtk_renwin();
                this._init_annotations_container();
                (0, layout_1.set_size)(this._vtk_container, this.model);
                this.el.appendChild(this._vtk_container);
                // update camera model state only at the end of the interaction
                // with the scene (avoid bouncing events and large amount of events)
                this._vtk_renwin.getInteractor().onEndAnimation(() => this._get_camera_state());
                this._remove_default_key_binding();
                this._bind_key_events();
                this.plot();
                this._add_colorbars();
                this._add_annotations();
                this.model.renderer_el = this._vtk_renwin;
            }
            else {
                (0, layout_1.set_size)(this._vtk_container, this.model);
                // warning if _vtk_renwin contain controllers or other elements
                // we must attach them to the new el
                this.el.appendChild(this._vtk_container);
            }
            this.el.appendChild(this._annotations_container);
        }
        after_layout() {
            super.after_layout();
            if (this._renderable)
                this._vtk_renwin.resize(); // resize call render method
            this._vtk_render();
        }
        invalidate_render() {
            this._unsubscribe_camera_cb();
            super.invalidate_render();
        }
        resize_layout() {
            if (!this.layout) {
                return;
            }
            super.resize_layout();
        }
        remove() {
            this._unsubscribe_camera_cb();
            window.removeEventListener("resize", this._vtk_renwin.resize);
            if (this._orientationWidget != null)
                this._orientationWidget.delete();
            this._vtk_renwin.getRenderWindow().getInteractor().delete();
            this._vtk_renwin.delete();
            super.remove();
        }
        get _vtk_camera_state() {
            const vtk_camera = this._vtk_renwin.getRenderer().getActiveCamera();
            let state;
            if (vtk_camera) {
                state = (0, object_1.clone)(vtk_camera.get());
                delete state.classHierarchy;
                delete state.vtkObject;
                delete state.vtkCamera;
                delete state.viewPlaneNormal;
                delete state.flattenedDepIds;
                delete state.managedInstanceId;
                delete state.directionOfProjection;
            }
            return state;
        }
        get _axes_canvas() {
            let axes_canvas = this._vtk_container.querySelector(".axes-canvas");
            if (!axes_canvas) {
                axes_canvas = (0, dom_1.canvas)({
                    style: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                    },
                });
                axes_canvas.classList.add("axes-canvas");
                this._vtk_container.appendChild(axes_canvas);
                this._vtk_renwin.setResizeCallback(() => {
                    if (this._axes_canvas) {
                        const dims = this._vtk_container.getBoundingClientRect();
                        const width = Math.floor(dims.width * window.devicePixelRatio);
                        const height = Math.floor(dims.height * window.devicePixelRatio);
                        this._axes_canvas.setAttribute("width", width.toFixed());
                        this._axes_canvas.setAttribute("height", height.toFixed());
                    }
                });
            }
            return axes_canvas;
        }
        _bind_key_events() {
            this.el.addEventListener("mouseenter", () => {
                const interactor = this._vtk_renwin.getInteractor();
                if (this.model.enable_keybindings) {
                    document
                        .querySelector("body")
                        .addEventListener("keypress", interactor.handleKeyPress);
                    document
                        .querySelector("body")
                        .addEventListener("keydown", interactor.handleKeyDown);
                    document
                        .querySelector("body")
                        .addEventListener("keyup", interactor.handleKeyUp);
                }
            });
            this.el.addEventListener("mouseleave", () => {
                const interactor = this._vtk_renwin.getInteractor();
                document
                    .querySelector("body")
                    .removeEventListener("keypress", interactor.handleKeyPress);
                document
                    .querySelector("body")
                    .removeEventListener("keydown", interactor.handleKeyDown);
                document
                    .querySelector("body")
                    .removeEventListener("keyup", interactor.handleKeyUp);
            });
        }
        _create_orientation_widget() {
            const axes = util_1.vtkns.AxesActor.newInstance();
            // add orientation widget
            this._orientationWidget = util_1.vtkns.OrientationMarkerWidget.newInstance({
                actor: axes,
                interactor: this._vtk_renwin.getInteractor(),
            });
            this._orientationWidget.setEnabled(true);
            this._orientationWidget.setViewportCorner(util_1.vtkns.OrientationMarkerWidget.Corners.BOTTOM_RIGHT);
            this._orientationWidget.setViewportSize(0.15);
            this._orientationWidget.setMinPixelSize(75);
            this._orientationWidget.setMaxPixelSize(300);
            if (this.model.interactive_orientation_widget)
                this._make_orientation_widget_interactive();
            this._orientation_widget_visibility(this.model.orientation_widget);
        }
        _make_orientation_widget_interactive() {
            this._widgetManager = util_1.vtkns.WidgetManager.newInstance();
            this._widgetManager.setRenderer(this._orientationWidget.getRenderer());
            const axes = this._orientationWidget.getActor();
            const widget = util_1.vtkns.InteractiveOrientationWidget.newInstance();
            widget.placeWidget(axes.getBounds());
            widget.setBounds(axes.getBounds());
            widget.setPlaceFactor(1);
            const vw = this._widgetManager.addWidget(widget);
            // Manage user interaction
            vw.onOrientationChange(({ direction }) => {
                const camera = this._vtk_renwin.getRenderer().getActiveCamera();
                const focalPoint = camera.getFocalPoint();
                const position = camera.getPosition();
                const viewUp = camera.getViewUp();
                const distance = Math.sqrt(Math.pow(position[0] - focalPoint[0], 2) +
                    Math.pow(position[1] - focalPoint[1], 2) +
                    Math.pow(position[2] - focalPoint[2], 2));
                camera.setPosition(focalPoint[0] + direction[0] * distance, focalPoint[1] + direction[1] * distance, focalPoint[2] + direction[2] * distance);
                if (direction[0])
                    camera.setViewUp((0, util_1.majorAxis)(viewUp, 1, 2));
                if (direction[1])
                    camera.setViewUp((0, util_1.majorAxis)(viewUp, 0, 2));
                if (direction[2])
                    camera.setViewUp((0, util_1.majorAxis)(viewUp, 0, 1));
                this._vtk_renwin.getRenderer().resetCameraClippingRange();
                this._vtk_render();
                this._get_camera_state();
            });
        }
        _delete_axes() {
            if (this._axes) {
                Object.keys(this._axes).forEach((key) => this._vtk_renwin.getRenderer().removeActor(this._axes[key]));
                this._axes = null;
                const textCtx = this._axes_canvas.getContext("2d");
                if (textCtx)
                    textCtx.clearRect(0, 0, this._axes_canvas.clientWidth * window.devicePixelRatio, this._axes_canvas.clientHeight * window.devicePixelRatio);
            }
        }
        _get_camera_state() {
            if (!this._setting_camera) {
                this._setting_camera = true;
                this.model.camera = this._vtk_camera_state;
                this._setting_camera = false;
            }
        }
        _orientation_widget_visibility(visibility) {
            this._orientationWidget.setEnabled(visibility);
            if (this._widgetManager != null) {
                if (visibility)
                    this._widgetManager.enablePicking();
                else
                    this._widgetManager.disablePicking();
            }
            this._vtk_render();
        }
        _remove_default_key_binding() {
            const interactor = this._vtk_renwin.getInteractor();
            document
                .querySelector("body")
                .removeEventListener("keypress", interactor.handleKeyPress);
            document
                .querySelector("body")
                .removeEventListener("keydown", interactor.handleKeyDown);
            document
                .querySelector("body")
                .removeEventListener("keyup", interactor.handleKeyUp);
        }
        _set_axes() {
            if (this.model.axes && this._vtk_renwin.getRenderer()) {
                const { psActor, axesActor, gridActor } = this.model.axes.create_axes(this._axes_canvas);
                this._axes = { psActor, axesActor, gridActor };
                if (psActor)
                    this._vtk_renwin.getRenderer().addActor(psActor);
                if (axesActor)
                    this._vtk_renwin.getRenderer().addActor(axesActor);
                if (gridActor)
                    this._vtk_renwin.getRenderer().addActor(gridActor);
            }
        }
        _set_camera_state() {
            if (!this._setting_camera && this._vtk_renwin.getRenderer() !== undefined) {
                this._setting_camera = true;
                if (this.model.camera &&
                    JSON.stringify(this.model.camera) != JSON.stringify(this._vtk_camera_state))
                    this._vtk_renwin
                        .getRenderer()
                        .getActiveCamera()
                        .set(this.model.camera);
                this._vtk_renwin.getRenderer().resetCameraClippingRange();
                this._vtk_render();
                this._setting_camera = false;
            }
        }
        _unsubscribe_camera_cb() {
            this._camera_callbacks
                .splice(0, this._camera_callbacks.length)
                .map((cb) => cb.unsubscribe());
        }
        _vtk_render() {
            if (this._renderable) {
                if (this._orientationWidget)
                    this._orientationWidget.updateMarkerOrientation();
                this._vtk_renwin.getRenderWindow().render();
            }
        }
    }
    exports.AbstractVTKView = AbstractVTKView;
    AbstractVTKView.__name__ = "AbstractVTKView";
    class AbstractVTKPlot extends html_box_1.HTMLBox {
        constructor(attrs) {
            (0, util_1.setup_vtkns)();
            super(attrs);
        }
        getActors() {
            return this.renderer_el.getRenderer().getActors();
        }
        static init_AbstractVTKPlot() {
            this.define(({ Any, Ref, Array, Boolean, Nullable }) => ({
                axes: [Nullable(Ref(vtkaxes_1.VTKAxes)), null],
                camera: [Any],
                color_mappers: [Array(Ref(color_mapper_1.ColorMapper)), []],
                orientation_widget: [Boolean, false],
                interactive_orientation_widget: [Boolean, false],
                annotations: [Nullable(Array(Any)), null],
            }));
            this.override({
                height: 300,
                width: 300,
            });
        }
    }
    exports.AbstractVTKPlot = AbstractVTKPlot;
    AbstractVTKPlot.__name__ = "AbstractVTKPlot";
    AbstractVTKPlot.__module__ = "panel.models.vtk";
    AbstractVTKPlot.init_AbstractVTKPlot();
},
"993f3118b2": /* models/vtk/util.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const array_1 = require("@bokehjs/core/util/array");
    const kinds_1 = require("@bokehjs/core/kinds");
    exports.ARRAY_TYPES = {
        uint8: Uint8Array,
        int8: Int8Array,
        uint16: Uint16Array,
        int16: Int16Array,
        uint32: Uint32Array,
        int32: Int32Array,
        float32: Float32Array,
        float64: Float64Array,
    };
    exports.vtkns = {};
    function setup_vtkns() {
        if (exports.vtkns.Actor != null)
            return;
        const vtk = window.vtk;
        exports.vtkns["Actor"] = vtk.Rendering.Core.vtkActor;
        exports.vtkns["AxesActor"] = vtk.Rendering.Core.vtkAxesActor;
        exports.vtkns["Base64"] = vtk.Common.Core.vtkBase64;
        exports.vtkns["BoundingBox"] = vtk.Common.DataModel.vtkBoundingBox;
        exports.vtkns["Camera"] = vtk.Rendering.Core.vtkCamera;
        exports.vtkns["ColorTransferFunction"] = vtk.Rendering.Core.vtkColorTransferFunction;
        exports.vtkns["CubeSource"] = vtk.Filters.Sources.vtkCubeSource;
        exports.vtkns["DataAccessHelper"] = vtk.IO.Core.DataAccessHelper;
        exports.vtkns["DataArray"] = vtk.Common.Core.vtkDataArray;
        exports.vtkns["Follower"] = vtk.Rendering.Core.vtkFollower;
        exports.vtkns["FullScreenRenderWindow"] = vtk.Rendering.Misc.vtkFullScreenRenderWindow;
        exports.vtkns["Glyph3DMapper"] = vtk.Rendering.Core.vtkGlyph3DMapper;
        exports.vtkns["HttpSceneLoader"] = vtk.IO.Core.vtkHttpSceneLoader;
        exports.vtkns["ImageData"] = vtk.Common.DataModel.vtkImageData;
        exports.vtkns["ImageMapper"] = vtk.Rendering.Core.vtkImageMapper;
        exports.vtkns["ImageProperty"] = vtk.Rendering.Core.vtkImageProperty;
        exports.vtkns["ImageSlice"] = vtk.Rendering.Core.vtkImageSlice;
        exports.vtkns["InteractiveOrientationWidget"] =
            vtk.Widgets.Widgets3D.vtkInteractiveOrientationWidget;
        exports.vtkns["InteractorStyleTrackballCamera"] =
            vtk.Interaction.Style.vtkInteractorStyleTrackballCamera;
        exports.vtkns["Light"] = vtk.Rendering.Core.vtkLight;
        exports.vtkns["LineSource"] = vtk.Filters.Sources.vtkLineSource;
        exports.vtkns["LookupTable"] = vtk.Common.Core.vtkLookupTable;
        exports.vtkns["macro"] = vtk.macro;
        exports.vtkns["Mapper"] = vtk.Rendering.Core.vtkMapper;
        exports.vtkns["OpenGLRenderWindow"] = vtk.Rendering.OpenGL.vtkRenderWindow;
        exports.vtkns["OrientationMarkerWidget"] =
            vtk.Interaction.Widgets.vtkOrientationMarkerWidget;
        exports.vtkns["OutlineFilter"] = vtk.Filters.General.vtkOutlineFilter;
        exports.vtkns["PiecewiseFunction"] = vtk.Common.DataModel.vtkPiecewiseFunction;
        exports.vtkns["PixelSpaceCallbackMapper"] =
            vtk.Rendering.Core.vtkPixelSpaceCallbackMapper;
        exports.vtkns["PlaneSource"] = vtk.Filters.Sources.vtkPlaneSource;
        exports.vtkns["PointSource"] = vtk.Filters.Sources.vtkPointSource;
        exports.vtkns["PolyData"] = vtk.Common.DataModel.vtkPolyData;
        exports.vtkns["Property"] = vtk.Rendering.Core.vtkProperty;
        exports.vtkns["Renderer"] = vtk.Rendering.Core.vtkRenderer;
        exports.vtkns["RenderWindow"] = vtk.Rendering.Core.vtkRenderWindow;
        exports.vtkns["RenderWindowInteractor"] = vtk.Rendering.Core.vtkRenderWindowInteractor;
        exports.vtkns["SphereMapper"] = vtk.Rendering.Core.vtkSphereMapper;
        exports.vtkns["SynchronizableRenderWindow"] =
            vtk.Rendering.Misc.vtkSynchronizableRenderWindow;
        exports.vtkns["ThirdParty"] = vtk.ThirdParty;
        exports.vtkns["Texture"] = vtk.Rendering.Core.vtkTexture;
        exports.vtkns["Volume"] = vtk.Rendering.Core.vtkVolume;
        exports.vtkns["VolumeController"] = vtk.Interaction.UI.vtkVolumeController;
        exports.vtkns["VolumeMapper"] = vtk.Rendering.Core.vtkVolumeMapper;
        exports.vtkns["VolumeProperty"] = vtk.Rendering.Core.vtkVolumeProperty;
        exports.vtkns["WidgetManager"] = vtk.Widgets.Core.vtkWidgetManager;
        const { vtkObjectManager } = exports.vtkns.SynchronizableRenderWindow;
        vtkObjectManager.setTypeMapping("vtkVolumeMapper", exports.vtkns.VolumeMapper.newInstance, vtkObjectManager.oneTimeGenericUpdater);
        vtkObjectManager.setTypeMapping("vtkSmartVolumeMapper", exports.vtkns.VolumeMapper.newInstance, vtkObjectManager.oneTimeGenericUpdater);
        vtkObjectManager.setTypeMapping("vtkFollower", exports.vtkns.Follower.newInstance, vtkObjectManager.genericUpdater);
        vtkObjectManager.setTypeMapping("vtkOpenGLGlyph3DMapper", exports.vtkns.Glyph3DMapper.newInstance, vtkObjectManager.genericUpdater);
    }
    exports.setup_vtkns = setup_vtkns;
    if (window.vtk)
        setup_vtkns();
    exports.Interpolation = (0, kinds_1.Enum)("fast_linear", "linear", "nearest");
    function applyStyle(el, style) {
        Object.keys(style).forEach((key) => {
            el.style[key] = style[key];
        });
    }
    exports.applyStyle = applyStyle;
    function hexToRGB(color) {
        return [
            parseInt(color.slice(1, 3), 16) / 255,
            parseInt(color.slice(3, 5), 16) / 255,
            parseInt(color.slice(5, 7), 16) / 255,
        ];
    }
    exports.hexToRGB = hexToRGB;
    function valToHex(val) {
        const hex = Math.min(Math.max(Math.round(val), 0), 255).toString(16);
        return hex.length == 2 ? hex : "0" + hex;
    }
    function rgbToHex(r, g, b) {
        return "#" + valToHex(r) + valToHex(g) + valToHex(b);
    }
    exports.rgbToHex = rgbToHex;
    function vtkLutToMapper(vtk_lut) {
        //For the moment only linear colormapper are handle
        const { scale, nodes } = vtk_lut.get("scale", "nodes");
        if (scale !== exports.vtkns.ColorTransferFunction.Scale.LINEAR)
            throw "Error transfer function scale not handle";
        const x = nodes.map((a) => a.x);
        const low = Math.min(...x);
        const high = Math.max(...x);
        const vals = (0, array_1.linspace)(low, high, 255);
        const rgb = [0, 0, 0];
        const palette = vals.map((val) => {
            vtk_lut.getColor(val, rgb);
            return rgbToHex(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
        });
        return { low, high, palette };
    }
    exports.vtkLutToMapper = vtkLutToMapper;
    function utf8ToAB(utf8_str) {
        var buf = new ArrayBuffer(utf8_str.length); // 2 bytes for each char
        var bufView = new Uint8Array(buf);
        for (var i = 0, strLen = utf8_str.length; i < strLen; i++) {
            bufView[i] = utf8_str.charCodeAt(i);
        }
        return buf;
    }
    function data2VTKImageData(data) {
        const source = exports.vtkns.ImageData.newInstance({
            spacing: data.spacing,
        });
        source.setDimensions(data.dims);
        source.setOrigin(data.origin != null ? data.origin : data.dims.map((v) => v / 2));
        const dataArray = exports.vtkns.DataArray.newInstance({
            name: "scalars",
            numberOfComponents: 1,
            values: new exports.ARRAY_TYPES[data.dtype](utf8ToAB(atob(data.buffer))),
        });
        source.getPointData().setScalars(dataArray);
        return source;
    }
    exports.data2VTKImageData = data2VTKImageData;
    function majorAxis(vec3, idxA, idxB) {
        const axis = [0, 0, 0];
        const idx = Math.abs(vec3[idxA]) > Math.abs(vec3[idxB]) ? idxA : idxB;
        const value = vec3[idx] > 0 ? 1 : -1;
        axis[idx] = value;
        return axis;
    }
    exports.majorAxis = majorAxis;
    function cartesian_product(...arrays) {
        return arrays.reduce((acc, curr) => acc.flatMap((c) => curr.map((n) => [].concat(c, n))));
    }
    exports.cartesian_product = cartesian_product;
},
"c010237f8b": /* models/vtk/vtkcolorbar.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const mappers_1 = require("@bokehjs/models/mappers");
    const array_1 = require("@bokehjs/core/util/array");
    class VTKColorBar {
        constructor(parent, mapper, options = {}) {
            this.parent = parent;
            this.mapper = mapper;
            this.options = options;
            if (!options.ticksNum)
                options.ticksNum = 5;
            if (!options.fontFamily)
                options.fontFamily = "Arial";
            if (!options.fontSize)
                options.fontSize = "12px";
            if (!options.ticksSize)
                options.ticksSize = 2;
            this.canvas = document.createElement("canvas");
            this.canvas.style.width = "100%";
            this.parent.appendChild(this.canvas);
            this.ctx = this.canvas.getContext("2d");
            this.ctx.font = `${this.options.fontSize} ${this.options.fontFamily}`;
            this.ctx.lineWidth = options.ticksSize;
            if (!options.height)
                options.height = `${(this.font_height + 1) * 4}px`; //title/ticks/colorbar
            this.canvas.style.height = options.height;
            this.draw_colorbar();
        }
        get values() {
            const { min, max } = this.mapper.metrics;
            return (0, array_1.linspace)(min, max, this.options.ticksNum);
        }
        get ticks() {
            return this.values.map((v) => v.toExponential(3));
        }
        get title() {
            return this.mapper.name ? this.mapper.name : "scalars";
        }
        get font_height() {
            let font_height = 0;
            this.values.forEach((val) => {
                const { actualBoundingBoxAscent, actualBoundingBoxDescent, } = this.ctx.measureText(`${val}`);
                const height = actualBoundingBoxAscent + actualBoundingBoxDescent;
                if (font_height < height)
                    font_height = height;
            });
            return font_height;
        }
        draw_colorbar() {
            this.canvas.width = this.canvas.clientWidth;
            this.canvas.height = this.canvas.clientHeight;
            const { palette } = this.mapper;
            this.ctx.font = `${this.options.fontSize} ${this.options.fontFamily}`;
            const font_height = this.font_height;
            this.ctx.save();
            //colorbar
            const image = document.createElement("canvas");
            const h = 1;
            const w = palette.length;
            image.width = w;
            image.height = h;
            const image_ctx = image.getContext("2d");
            const image_data = image_ctx.getImageData(0, 0, w, h);
            const cmap = new mappers_1.LinearColorMapper({ palette }).rgba_mapper;
            const buf8 = cmap.v_compute((0, array_1.range)(0, palette.length));
            image_data.data.set(buf8);
            image_ctx.putImageData(image_data, 0, 0);
            this.ctx.drawImage(image, 0, 2 * (this.font_height + 1) + 1, this.canvas.width, this.canvas.height);
            this.ctx.restore();
            this.ctx.save();
            //title
            this.ctx.textAlign = 'center';
            this.ctx.fillText(this.title, this.canvas.width / 2, font_height + 1);
            this.ctx.restore();
            this.ctx.save();
            //ticks
            const tick_x_positions = (0, array_1.linspace)(0, this.canvas.width, 5);
            tick_x_positions.forEach((xpos, idx) => {
                let xpos_tick = xpos;
                if (idx == 0) {
                    xpos_tick = xpos + Math.ceil(this.ctx.lineWidth / 2);
                    this.ctx.textAlign = "left";
                }
                else if (idx == tick_x_positions.length - 1) {
                    xpos_tick = xpos - Math.ceil(this.ctx.lineWidth / 2);
                    this.ctx.textAlign = "right";
                }
                else {
                    this.ctx.textAlign = "center";
                }
                this.ctx.moveTo(xpos_tick, 2 * (font_height + 1));
                this.ctx.lineTo(xpos_tick, 2 * (font_height + 1) + 5);
                this.ctx.stroke();
                this.ctx.fillText(`${this.ticks[idx]}`, xpos, 2 * (font_height + 1));
            });
            this.ctx.restore();
        }
    }
    exports.VTKColorBar = VTKColorBar;
    VTKColorBar.__name__ = "VTKColorBar";
},
"ab478186ba": /* models/vtk/vtkaxes.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const model_1 = require("@bokehjs/model");
    const gl_matrix_1 = require("2f3fd5db07") /* gl-matrix */;
    const util_1 = require("993f3118b2") /* ./util */;
    class VTKAxes extends model_1.Model {
        constructor(attrs) {
            super(attrs);
        }
        static init_VTKAxes() {
            this.define(({ Any, Array, Boolean, Number }) => ({
                origin: [Array(Number)],
                xticker: [Any],
                yticker: [Any],
                zticker: [Any],
                digits: [Number, 1],
                show_grid: [Boolean, true],
                grid_opacity: [Number, 0.1],
                axes_opacity: [Number, 1],
                fontsize: [Number, 12]
            }));
        }
        get xticks() {
            if (this.xticker)
                return this.xticker.ticks;
            else
                return [];
        }
        get yticks() {
            if (this.yticker)
                return this.yticker.ticks;
            else
                return [];
        }
        get zticks() {
            if (this.zticker)
                return this.zticker.ticks;
            else
                return [];
        }
        get xlabels() {
            return this.xticker.labels
                ? this.xticker.labels
                : this.xticks.map((elem) => elem.toFixed(this.digits));
        }
        get ylabels() {
            return this.yticker.labels
                ? this.yticker.labels
                : this.yticks.map((elem) => elem.toFixed(this.digits));
        }
        get zlabels() {
            return this.zticker.labels
                ? this.zticker.labels
                : this.zticks.map((elem) => elem.toFixed(this.digits));
        }
        _make_grid_lines(n, m, offset) {
            const out = [];
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < m - 1; j++) {
                    const v0 = i * m + j + offset;
                    const v1 = i * m + j + 1 + offset;
                    const v2 = (i + 1) * m + j + 1 + offset;
                    const v3 = (i + 1) * m + j + offset;
                    const line = [5, v0, v1, v2, v3, v0];
                    out.push(line);
                }
            }
            return out;
        }
        _create_grid_axes() {
            const pts = [];
            pts.push((0, util_1.cartesian_product)(this.xticks, this.yticks, [this.origin[2]])); //xy
            pts.push((0, util_1.cartesian_product)([this.origin[0]], this.yticks, this.zticks)); //yz
            pts.push((0, util_1.cartesian_product)(this.xticks, [this.origin[1]], this.zticks)); //xz
            const polys = [];
            let offset = 0;
            polys.push(this._make_grid_lines(this.xticks.length, this.yticks.length, offset)); //xy
            offset += this.xticks.length * this.yticks.length;
            polys.push(this._make_grid_lines(this.yticks.length, this.zticks.length, offset)); //yz
            offset += this.yticks.length * this.zticks.length;
            polys.push(this._make_grid_lines(this.xticks.length, this.zticks.length, offset)); //xz
            const gridPolyData = window.vtk({
                vtkClass: "vtkPolyData",
                points: {
                    vtkClass: "vtkPoints",
                    dataType: "Float32Array",
                    numberOfComponents: 3,
                    values: pts.flat(2),
                },
                lines: {
                    vtkClass: "vtkCellArray",
                    dataType: "Uint32Array",
                    values: polys.flat(2),
                },
            });
            const gridMapper = util_1.vtkns.Mapper.newInstance();
            const gridActor = util_1.vtkns.Actor.newInstance();
            gridMapper.setInputData(gridPolyData);
            gridActor.setMapper(gridMapper);
            gridActor.getProperty().setOpacity(this.grid_opacity);
            gridActor.setVisibility(this.show_grid);
            return gridActor;
        }
        create_axes(canvas) {
            if (this.origin == null)
                return { psActor: null, axesActor: null, gridActor: null };
            const points = [this.xticks, this.yticks, this.zticks].map((arr, axis) => {
                let coords = null;
                switch (axis) {
                    case 0:
                        coords = (0, util_1.cartesian_product)(arr, [this.origin[1]], [this.origin[2]]);
                        break;
                    case 1:
                        coords = (0, util_1.cartesian_product)([this.origin[0]], arr, [this.origin[2]]);
                        break;
                    case 2:
                        coords = (0, util_1.cartesian_product)([this.origin[0]], [this.origin[1]], arr);
                        break;
                }
                return coords;
            }).flat(2);
            const axesPolyData = window.vtk({
                vtkClass: "vtkPolyData",
                points: {
                    vtkClass: "vtkPoints",
                    dataType: "Float32Array",
                    numberOfComponents: 3,
                    values: points,
                },
                lines: {
                    vtkClass: "vtkCellArray",
                    dataType: "Uint32Array",
                    values: [
                        2,
                        0,
                        this.xticks.length - 1,
                        2,
                        this.xticks.length,
                        this.xticks.length + this.yticks.length - 1,
                        2,
                        this.xticks.length + this.yticks.length,
                        this.xticks.length + this.yticks.length + this.zticks.length - 1,
                    ],
                },
            });
            const psMapper = util_1.vtkns.PixelSpaceCallbackMapper.newInstance();
            psMapper.setInputData(axesPolyData);
            psMapper.setUseZValues(true);
            psMapper.setCallback((coordsList, camera, aspect) => {
                const textCtx = canvas.getContext("2d");
                if (textCtx) {
                    const dims = {
                        height: canvas.clientHeight * window.devicePixelRatio,
                        width: canvas.clientWidth * window.devicePixelRatio,
                    };
                    const dataPoints = psMapper.getInputData().getPoints();
                    const viewMatrix = camera.getViewMatrix();
                    gl_matrix_1.mat4.transpose(viewMatrix, viewMatrix);
                    const projMatrix = camera.getProjectionMatrix(aspect, -1, 1);
                    gl_matrix_1.mat4.transpose(projMatrix, projMatrix);
                    textCtx.clearRect(0, 0, dims.width, dims.height);
                    coordsList.forEach((xy, idx) => {
                        const pdPoint = dataPoints.getPoint(idx);
                        const vc = gl_matrix_1.vec3.fromValues(pdPoint[0], pdPoint[1], pdPoint[2]);
                        gl_matrix_1.vec3.transformMat4(vc, vc, viewMatrix);
                        vc[2] += 0.05; // sensibility
                        gl_matrix_1.vec3.transformMat4(vc, vc, projMatrix);
                        if (vc[2] - 0.001 < xy[3]) {
                            textCtx.font = "30px serif";
                            textCtx.textAlign = "center";
                            textCtx.textBaseline = "alphabetic";
                            textCtx.fillText(`.`, xy[0], dims.height - xy[1] + 2);
                            textCtx.font = `${this.fontsize * window.devicePixelRatio}px serif`;
                            textCtx.textAlign = "right";
                            textCtx.textBaseline = "top";
                            let label;
                            if (idx < this.xticks.length)
                                label = this.xlabels[idx];
                            else if (idx >= this.xticks.length &&
                                idx < this.xticks.length + this.yticks.length)
                                label = this.ylabels[idx - this.xticks.length];
                            else
                                label = this.zlabels[idx - (this.xticks.length + this.yticks.length)];
                            textCtx.fillText(`${label}`, xy[0], dims.height - xy[1]);
                        }
                    });
                }
            });
            const psActor = util_1.vtkns.Actor.newInstance(); //PixelSpace
            psActor.setMapper(psMapper);
            const axesMapper = util_1.vtkns.Mapper.newInstance();
            axesMapper.setInputData(axesPolyData);
            const axesActor = util_1.vtkns.Actor.newInstance();
            axesActor.setMapper(axesMapper);
            axesActor.getProperty().setOpacity(this.axes_opacity);
            const gridActor = this._create_grid_axes();
            return { psActor, axesActor, gridActor };
        }
    }
    exports.VTKAxes = VTKAxes;
    VTKAxes.__name__ = "VTKAxes";
    VTKAxes.__module__ = "panel.models.vtk";
    VTKAxes.init_VTKAxes();
},
"2f3fd5db07": /* gl-matrix/esm/index.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const glMatrix = (0, tslib_1.__importStar)(require("68ca94c15c") /* ./common.js */);
    exports.glMatrix = glMatrix;
    const mat2 = (0, tslib_1.__importStar)(require("7c0b8e6048") /* ./mat2.js */);
    exports.mat2 = mat2;
    const mat2d = (0, tslib_1.__importStar)(require("dc03f0a621") /* ./mat2d.js */);
    exports.mat2d = mat2d;
    const mat3 = (0, tslib_1.__importStar)(require("0285c50a7e") /* ./mat3.js */);
    exports.mat3 = mat3;
    const mat4 = (0, tslib_1.__importStar)(require("a427635f32") /* ./mat4.js */);
    exports.mat4 = mat4;
    const quat = (0, tslib_1.__importStar)(require("eb06fc032a") /* ./quat.js */);
    exports.quat = quat;
    const quat2 = (0, tslib_1.__importStar)(require("277615c682") /* ./quat2.js */);
    exports.quat2 = quat2;
    const vec2 = (0, tslib_1.__importStar)(require("c56d9ff837") /* ./vec2.js */);
    exports.vec2 = vec2;
    const vec3 = (0, tslib_1.__importStar)(require("2c5eb22089") /* ./vec3.js */);
    exports.vec3 = vec3;
    const vec4 = (0, tslib_1.__importStar)(require("c1aa33d719") /* ./vec4.js */);
    exports.vec4 = vec4;
},
"68ca94c15c": /* gl-matrix/esm/common.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    /**
     * Common utilities
     * @module glMatrix
     */
    // Configuration Constants
    exports.EPSILON = 0.000001;
    exports.ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
    exports.RANDOM = Math.random;
    /**
     * Sets the type of array used when creating new vectors and matrices
     *
     * @param {Type} type Array type, such as Float32Array or Array
     */
    function setMatrixArrayType(type) {
        exports.ARRAY_TYPE = type;
    }
    exports.setMatrixArrayType = setMatrixArrayType;
    var degree = Math.PI / 180;
    /**
     * Convert Degree To Radian
     *
     * @param {Number} a Angle in Degrees
     */
    function toRadian(a) {
        return a * degree;
    }
    exports.toRadian = toRadian;
    /**
     * Tests whether or not the arguments have approximately the same value, within an absolute
     * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
     * than or equal to 1.0, and a relative tolerance is used for larger values)
     *
     * @param {Number} a The first number to test.
     * @param {Number} b The second number to test.
     * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
     */
    function equals(a, b) {
        return Math.abs(a - b) <= exports.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
    }
    exports.equals = equals;
    if (!Math.hypot)
        Math.hypot = function () {
            var y = 0, i = arguments.length;
            while (i--) {
                y += arguments[i] * arguments[i];
            }
            return Math.sqrt(y);
        };
},
"7c0b8e6048": /* gl-matrix/esm/mat2.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const glMatrix = (0, tslib_1.__importStar)(require("68ca94c15c") /* ./common.js */);
    /**
     * 2x2 Matrix
     * @module mat2
     */
    /**
     * Creates a new identity mat2
     *
     * @returns {mat2} a new 2x2 matrix
     */
    function create() {
        var out = new glMatrix.ARRAY_TYPE(4);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
            out[1] = 0;
            out[2] = 0;
        }
        out[0] = 1;
        out[3] = 1;
        return out;
    }
    exports.create = create;
    /**
     * Creates a new mat2 initialized with values from an existing matrix
     *
     * @param {mat2} a matrix to clone
     * @returns {mat2} a new 2x2 matrix
     */
    function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(4);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }
    exports.clone = clone;
    /**
     * Copy the values from one mat2 to another
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the source matrix
     * @returns {mat2} out
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }
    exports.copy = copy;
    /**
     * Set a mat2 to the identity matrix
     *
     * @param {mat2} out the receiving matrix
     * @returns {mat2} out
     */
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
    }
    exports.identity = identity;
    /**
     * Create a new mat2 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m10 Component in column 1, row 0 position (index 2)
     * @param {Number} m11 Component in column 1, row 1 position (index 3)
     * @returns {mat2} out A new 2x2 matrix
     */
    function fromValues(m00, m01, m10, m11) {
        var out = new glMatrix.ARRAY_TYPE(4);
        out[0] = m00;
        out[1] = m01;
        out[2] = m10;
        out[3] = m11;
        return out;
    }
    exports.fromValues = fromValues;
    /**
     * Set the components of a mat2 to the given values
     *
     * @param {mat2} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m10 Component in column 1, row 0 position (index 2)
     * @param {Number} m11 Component in column 1, row 1 position (index 3)
     * @returns {mat2} out
     */
    function set(out, m00, m01, m10, m11) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m10;
        out[3] = m11;
        return out;
    }
    exports.set = set;
    /**
     * Transpose the values of a mat2
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the source matrix
     * @returns {mat2} out
     */
    function transpose(out, a) {
        // If we are transposing ourselves we can skip a few steps but have to cache
        // some values
        if (out === a) {
            var a1 = a[1];
            out[1] = a[2];
            out[2] = a1;
        }
        else {
            out[0] = a[0];
            out[1] = a[2];
            out[2] = a[1];
            out[3] = a[3];
        }
        return out;
    }
    exports.transpose = transpose;
    /**
     * Inverts a mat2
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the source matrix
     * @returns {mat2} out
     */
    function invert(out, a) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3]; // Calculate the determinant
        var det = a0 * a3 - a2 * a1;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = a3 * det;
        out[1] = -a1 * det;
        out[2] = -a2 * det;
        out[3] = a0 * det;
        return out;
    }
    exports.invert = invert;
    /**
     * Calculates the adjugate of a mat2
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the source matrix
     * @returns {mat2} out
     */
    function adjoint(out, a) {
        // Caching this value is nessecary if out == a
        var a0 = a[0];
        out[0] = a[3];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a0;
        return out;
    }
    exports.adjoint = adjoint;
    /**
     * Calculates the determinant of a mat2
     *
     * @param {mat2} a the source matrix
     * @returns {Number} determinant of a
     */
    function determinant(a) {
        return a[0] * a[3] - a[2] * a[1];
    }
    exports.determinant = determinant;
    /**
     * Multiplies two mat2's
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the first operand
     * @param {mat2} b the second operand
     * @returns {mat2} out
     */
    function multiply(out, a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        out[0] = a0 * b0 + a2 * b1;
        out[1] = a1 * b0 + a3 * b1;
        out[2] = a0 * b2 + a2 * b3;
        out[3] = a1 * b2 + a3 * b3;
        return out;
    }
    exports.multiply = multiply;
    /**
     * Rotates a mat2 by the given angle
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat2} out
     */
    function rotate(out, a, rad) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = a0 * c + a2 * s;
        out[1] = a1 * c + a3 * s;
        out[2] = a0 * -s + a2 * c;
        out[3] = a1 * -s + a3 * c;
        return out;
    }
    exports.rotate = rotate;
    /**
     * Scales the mat2 by the dimensions in the given vec2
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the matrix to rotate
     * @param {vec2} v the vec2 to scale the matrix by
     * @returns {mat2} out
     **/
    function scale(out, a, v) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        var v0 = v[0], v1 = v[1];
        out[0] = a0 * v0;
        out[1] = a1 * v0;
        out[2] = a2 * v1;
        out[3] = a3 * v1;
        return out;
    }
    exports.scale = scale;
    /**
     * Creates a matrix from a given angle
     * This is equivalent to (but much faster than):
     *
     *     mat2.identity(dest);
     *     mat2.rotate(dest, dest, rad);
     *
     * @param {mat2} out mat2 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat2} out
     */
    function fromRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = -s;
        out[3] = c;
        return out;
    }
    exports.fromRotation = fromRotation;
    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat2.identity(dest);
     *     mat2.scale(dest, dest, vec);
     *
     * @param {mat2} out mat2 receiving operation result
     * @param {vec2} v Scaling vector
     * @returns {mat2} out
     */
    function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = v[1];
        return out;
    }
    exports.fromScaling = fromScaling;
    /**
     * Returns a string representation of a mat2
     *
     * @param {mat2} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    function str(a) {
        return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
    }
    exports.str = str;
    /**
     * Returns Frobenius norm of a mat2
     *
     * @param {mat2} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    function frob(a) {
        return Math.hypot(a[0], a[1], a[2], a[3]);
    }
    exports.frob = frob;
    /**
     * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
     * @param {mat2} L the lower triangular matrix
     * @param {mat2} D the diagonal matrix
     * @param {mat2} U the upper triangular matrix
     * @param {mat2} a the input matrix to factorize
     */
    function LDU(L, D, U, a) {
        L[2] = a[2] / a[0];
        U[0] = a[0];
        U[1] = a[1];
        U[3] = a[3] - L[2] * U[1];
        return [L, D, U];
    }
    exports.LDU = LDU;
    /**
     * Adds two mat2's
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the first operand
     * @param {mat2} b the second operand
     * @returns {mat2} out
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        return out;
    }
    exports.add = add;
    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the first operand
     * @param {mat2} b the second operand
     * @returns {mat2} out
     */
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
    }
    exports.subtract = subtract;
    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat2} a The first matrix.
     * @param {mat2} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    exports.exactEquals = exactEquals;
    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat2} a The first matrix.
     * @param {mat2} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
    }
    exports.equals = equals;
    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {mat2} out
     */
    function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        return out;
    }
    exports.multiplyScalar = multiplyScalar;
    /**
     * Adds two mat2's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat2} out the receiving vector
     * @param {mat2} a the first operand
     * @param {mat2} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {mat2} out
     */
    function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        return out;
    }
    exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
    /**
     * Alias for {@link mat2.multiply}
     * @function
     */
    exports.mul = multiply;
    /**
     * Alias for {@link mat2.subtract}
     * @function
     */
    exports.sub = subtract;
},
"dc03f0a621": /* gl-matrix/esm/mat2d.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const glMatrix = (0, tslib_1.__importStar)(require("68ca94c15c") /* ./common.js */);
    /**
     * 2x3 Matrix
     * @module mat2d
     * @description
     * A mat2d contains six elements defined as:
     * <pre>
     * [a, b,
     *  c, d,
     *  tx, ty]
     * </pre>
     * This is a short form for the 3x3 matrix:
     * <pre>
     * [a, b, 0,
     *  c, d, 0,
     *  tx, ty, 1]
     * </pre>
     * The last column is ignored so the array is shorter and operations are faster.
     */
    /**
     * Creates a new identity mat2d
     *
     * @returns {mat2d} a new 2x3 matrix
     */
    function create() {
        var out = new glMatrix.ARRAY_TYPE(6);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
            out[1] = 0;
            out[2] = 0;
            out[4] = 0;
            out[5] = 0;
        }
        out[0] = 1;
        out[3] = 1;
        return out;
    }
    exports.create = create;
    /**
     * Creates a new mat2d initialized with values from an existing matrix
     *
     * @param {mat2d} a matrix to clone
     * @returns {mat2d} a new 2x3 matrix
     */
    function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(6);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        return out;
    }
    exports.clone = clone;
    /**
     * Copy the values from one mat2d to another
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the source matrix
     * @returns {mat2d} out
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        return out;
    }
    exports.copy = copy;
    /**
     * Set a mat2d to the identity matrix
     *
     * @param {mat2d} out the receiving matrix
     * @returns {mat2d} out
     */
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = 0;
        out[5] = 0;
        return out;
    }
    exports.identity = identity;
    /**
     * Create a new mat2d with the given values
     *
     * @param {Number} a Component A (index 0)
     * @param {Number} b Component B (index 1)
     * @param {Number} c Component C (index 2)
     * @param {Number} d Component D (index 3)
     * @param {Number} tx Component TX (index 4)
     * @param {Number} ty Component TY (index 5)
     * @returns {mat2d} A new mat2d
     */
    function fromValues(a, b, c, d, tx, ty) {
        var out = new glMatrix.ARRAY_TYPE(6);
        out[0] = a;
        out[1] = b;
        out[2] = c;
        out[3] = d;
        out[4] = tx;
        out[5] = ty;
        return out;
    }
    exports.fromValues = fromValues;
    /**
     * Set the components of a mat2d to the given values
     *
     * @param {mat2d} out the receiving matrix
     * @param {Number} a Component A (index 0)
     * @param {Number} b Component B (index 1)
     * @param {Number} c Component C (index 2)
     * @param {Number} d Component D (index 3)
     * @param {Number} tx Component TX (index 4)
     * @param {Number} ty Component TY (index 5)
     * @returns {mat2d} out
     */
    function set(out, a, b, c, d, tx, ty) {
        out[0] = a;
        out[1] = b;
        out[2] = c;
        out[3] = d;
        out[4] = tx;
        out[5] = ty;
        return out;
    }
    exports.set = set;
    /**
     * Inverts a mat2d
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the source matrix
     * @returns {mat2d} out
     */
    function invert(out, a) {
        var aa = a[0], ab = a[1], ac = a[2], ad = a[3];
        var atx = a[4], aty = a[5];
        var det = aa * ad - ab * ac;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = ad * det;
        out[1] = -ab * det;
        out[2] = -ac * det;
        out[3] = aa * det;
        out[4] = (ac * aty - ad * atx) * det;
        out[5] = (ab * atx - aa * aty) * det;
        return out;
    }
    exports.invert = invert;
    /**
     * Calculates the determinant of a mat2d
     *
     * @param {mat2d} a the source matrix
     * @returns {Number} determinant of a
     */
    function determinant(a) {
        return a[0] * a[3] - a[1] * a[2];
    }
    exports.determinant = determinant;
    /**
     * Multiplies two mat2d's
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the first operand
     * @param {mat2d} b the second operand
     * @returns {mat2d} out
     */
    function multiply(out, a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
        out[0] = a0 * b0 + a2 * b1;
        out[1] = a1 * b0 + a3 * b1;
        out[2] = a0 * b2 + a2 * b3;
        out[3] = a1 * b2 + a3 * b3;
        out[4] = a0 * b4 + a2 * b5 + a4;
        out[5] = a1 * b4 + a3 * b5 + a5;
        return out;
    }
    exports.multiply = multiply;
    /**
     * Rotates a mat2d by the given angle
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat2d} out
     */
    function rotate(out, a, rad) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = a0 * c + a2 * s;
        out[1] = a1 * c + a3 * s;
        out[2] = a0 * -s + a2 * c;
        out[3] = a1 * -s + a3 * c;
        out[4] = a4;
        out[5] = a5;
        return out;
    }
    exports.rotate = rotate;
    /**
     * Scales the mat2d by the dimensions in the given vec2
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the matrix to translate
     * @param {vec2} v the vec2 to scale the matrix by
     * @returns {mat2d} out
     **/
    function scale(out, a, v) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        var v0 = v[0], v1 = v[1];
        out[0] = a0 * v0;
        out[1] = a1 * v0;
        out[2] = a2 * v1;
        out[3] = a3 * v1;
        out[4] = a4;
        out[5] = a5;
        return out;
    }
    exports.scale = scale;
    /**
     * Translates the mat2d by the dimensions in the given vec2
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the matrix to translate
     * @param {vec2} v the vec2 to translate the matrix by
     * @returns {mat2d} out
     **/
    function translate(out, a, v) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        var v0 = v[0], v1 = v[1];
        out[0] = a0;
        out[1] = a1;
        out[2] = a2;
        out[3] = a3;
        out[4] = a0 * v0 + a2 * v1 + a4;
        out[5] = a1 * v0 + a3 * v1 + a5;
        return out;
    }
    exports.translate = translate;
    /**
     * Creates a matrix from a given angle
     * This is equivalent to (but much faster than):
     *
     *     mat2d.identity(dest);
     *     mat2d.rotate(dest, dest, rad);
     *
     * @param {mat2d} out mat2d receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat2d} out
     */
    function fromRotation(out, rad) {
        var s = Math.sin(rad), c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = -s;
        out[3] = c;
        out[4] = 0;
        out[5] = 0;
        return out;
    }
    exports.fromRotation = fromRotation;
    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat2d.identity(dest);
     *     mat2d.scale(dest, dest, vec);
     *
     * @param {mat2d} out mat2d receiving operation result
     * @param {vec2} v Scaling vector
     * @returns {mat2d} out
     */
    function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = v[1];
        out[4] = 0;
        out[5] = 0;
        return out;
    }
    exports.fromScaling = fromScaling;
    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat2d.identity(dest);
     *     mat2d.translate(dest, dest, vec);
     *
     * @param {mat2d} out mat2d receiving operation result
     * @param {vec2} v Translation vector
     * @returns {mat2d} out
     */
    function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = v[0];
        out[5] = v[1];
        return out;
    }
    exports.fromTranslation = fromTranslation;
    /**
     * Returns a string representation of a mat2d
     *
     * @param {mat2d} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    function str(a) {
        return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
    }
    exports.str = str;
    /**
     * Returns Frobenius norm of a mat2d
     *
     * @param {mat2d} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    function frob(a) {
        return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
    }
    exports.frob = frob;
    /**
     * Adds two mat2d's
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the first operand
     * @param {mat2d} b the second operand
     * @returns {mat2d} out
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        return out;
    }
    exports.add = add;
    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the first operand
     * @param {mat2d} b the second operand
     * @returns {mat2d} out
     */
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        return out;
    }
    exports.subtract = subtract;
    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {mat2d} out
     */
    function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        return out;
    }
    exports.multiplyScalar = multiplyScalar;
    /**
     * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat2d} out the receiving vector
     * @param {mat2d} a the first operand
     * @param {mat2d} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {mat2d} out
     */
    function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        out[4] = a[4] + b[4] * scale;
        out[5] = a[5] + b[5] * scale;
        return out;
    }
    exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat2d} a The first matrix.
     * @param {mat2d} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
    }
    exports.exactEquals = exactEquals;
    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat2d} a The first matrix.
     * @param {mat2d} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
    }
    exports.equals = equals;
    /**
     * Alias for {@link mat2d.multiply}
     * @function
     */
    exports.mul = multiply;
    /**
     * Alias for {@link mat2d.subtract}
     * @function
     */
    exports.sub = subtract;
},
"0285c50a7e": /* gl-matrix/esm/mat3.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const glMatrix = (0, tslib_1.__importStar)(require("68ca94c15c") /* ./common.js */);
    /**
     * 3x3 Matrix
     * @module mat3
     */
    /**
     * Creates a new identity mat3
     *
     * @returns {mat3} a new 3x3 matrix
     */
    function create() {
        var out = new glMatrix.ARRAY_TYPE(9);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[5] = 0;
            out[6] = 0;
            out[7] = 0;
        }
        out[0] = 1;
        out[4] = 1;
        out[8] = 1;
        return out;
    }
    exports.create = create;
    /**
     * Copies the upper-left 3x3 values into the given mat3.
     *
     * @param {mat3} out the receiving 3x3 matrix
     * @param {mat4} a   the source 4x4 matrix
     * @returns {mat3} out
     */
    function fromMat4(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[4];
        out[4] = a[5];
        out[5] = a[6];
        out[6] = a[8];
        out[7] = a[9];
        out[8] = a[10];
        return out;
    }
    exports.fromMat4 = fromMat4;
    /**
     * Creates a new mat3 initialized with values from an existing matrix
     *
     * @param {mat3} a matrix to clone
     * @returns {mat3} a new 3x3 matrix
     */
    function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(9);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
    }
    exports.clone = clone;
    /**
     * Copy the values from one mat3 to another
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
    }
    exports.copy = copy;
    /**
     * Create a new mat3 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m10 Component in column 1, row 0 position (index 3)
     * @param {Number} m11 Component in column 1, row 1 position (index 4)
     * @param {Number} m12 Component in column 1, row 2 position (index 5)
     * @param {Number} m20 Component in column 2, row 0 position (index 6)
     * @param {Number} m21 Component in column 2, row 1 position (index 7)
     * @param {Number} m22 Component in column 2, row 2 position (index 8)
     * @returns {mat3} A new mat3
     */
    function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        var out = new glMatrix.ARRAY_TYPE(9);
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
    }
    exports.fromValues = fromValues;
    /**
     * Set the components of a mat3 to the given values
     *
     * @param {mat3} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m10 Component in column 1, row 0 position (index 3)
     * @param {Number} m11 Component in column 1, row 1 position (index 4)
     * @param {Number} m12 Component in column 1, row 2 position (index 5)
     * @param {Number} m20 Component in column 2, row 0 position (index 6)
     * @param {Number} m21 Component in column 2, row 1 position (index 7)
     * @param {Number} m22 Component in column 2, row 2 position (index 8)
     * @returns {mat3} out
     */
    function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
    }
    exports.set = set;
    /**
     * Set a mat3 to the identity matrix
     *
     * @param {mat3} out the receiving matrix
     * @returns {mat3} out
     */
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
    }
    exports.identity = identity;
    /**
     * Transpose the values of a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function transpose(out, a) {
        // If we are transposing ourselves we can skip a few steps but have to cache some values
        if (out === a) {
            var a01 = a[1], a02 = a[2], a12 = a[5];
            out[1] = a[3];
            out[2] = a[6];
            out[3] = a01;
            out[5] = a[7];
            out[6] = a02;
            out[7] = a12;
        }
        else {
            out[0] = a[0];
            out[1] = a[3];
            out[2] = a[6];
            out[3] = a[1];
            out[4] = a[4];
            out[5] = a[7];
            out[6] = a[2];
            out[7] = a[5];
            out[8] = a[8];
        }
        return out;
    }
    exports.transpose = transpose;
    /**
     * Inverts a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function invert(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2];
        var a10 = a[3], a11 = a[4], a12 = a[5];
        var a20 = a[6], a21 = a[7], a22 = a[8];
        var b01 = a22 * a11 - a12 * a21;
        var b11 = -a22 * a10 + a12 * a20;
        var b21 = a21 * a10 - a11 * a20; // Calculate the determinant
        var det = a00 * b01 + a01 * b11 + a02 * b21;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = b01 * det;
        out[1] = (-a22 * a01 + a02 * a21) * det;
        out[2] = (a12 * a01 - a02 * a11) * det;
        out[3] = b11 * det;
        out[4] = (a22 * a00 - a02 * a20) * det;
        out[5] = (-a12 * a00 + a02 * a10) * det;
        out[6] = b21 * det;
        out[7] = (-a21 * a00 + a01 * a20) * det;
        out[8] = (a11 * a00 - a01 * a10) * det;
        return out;
    }
    exports.invert = invert;
    /**
     * Calculates the adjugate of a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function adjoint(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2];
        var a10 = a[3], a11 = a[4], a12 = a[5];
        var a20 = a[6], a21 = a[7], a22 = a[8];
        out[0] = a11 * a22 - a12 * a21;
        out[1] = a02 * a21 - a01 * a22;
        out[2] = a01 * a12 - a02 * a11;
        out[3] = a12 * a20 - a10 * a22;
        out[4] = a00 * a22 - a02 * a20;
        out[5] = a02 * a10 - a00 * a12;
        out[6] = a10 * a21 - a11 * a20;
        out[7] = a01 * a20 - a00 * a21;
        out[8] = a00 * a11 - a01 * a10;
        return out;
    }
    exports.adjoint = adjoint;
    /**
     * Calculates the determinant of a mat3
     *
     * @param {mat3} a the source matrix
     * @returns {Number} determinant of a
     */
    function determinant(a) {
        var a00 = a[0], a01 = a[1], a02 = a[2];
        var a10 = a[3], a11 = a[4], a12 = a[5];
        var a20 = a[6], a21 = a[7], a22 = a[8];
        return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
    }
    exports.determinant = determinant;
    /**
     * Multiplies two mat3's
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    function multiply(out, a, b) {
        var a00 = a[0], a01 = a[1], a02 = a[2];
        var a10 = a[3], a11 = a[4], a12 = a[5];
        var a20 = a[6], a21 = a[7], a22 = a[8];
        var b00 = b[0], b01 = b[1], b02 = b[2];
        var b10 = b[3], b11 = b[4], b12 = b[5];
        var b20 = b[6], b21 = b[7], b22 = b[8];
        out[0] = b00 * a00 + b01 * a10 + b02 * a20;
        out[1] = b00 * a01 + b01 * a11 + b02 * a21;
        out[2] = b00 * a02 + b01 * a12 + b02 * a22;
        out[3] = b10 * a00 + b11 * a10 + b12 * a20;
        out[4] = b10 * a01 + b11 * a11 + b12 * a21;
        out[5] = b10 * a02 + b11 * a12 + b12 * a22;
        out[6] = b20 * a00 + b21 * a10 + b22 * a20;
        out[7] = b20 * a01 + b21 * a11 + b22 * a21;
        out[8] = b20 * a02 + b21 * a12 + b22 * a22;
        return out;
    }
    exports.multiply = multiply;
    /**
     * Translate a mat3 by the given vector
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to translate
     * @param {vec2} v vector to translate by
     * @returns {mat3} out
     */
    function translate(out, a, v) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a10;
        out[4] = a11;
        out[5] = a12;
        out[6] = x * a00 + y * a10 + a20;
        out[7] = x * a01 + y * a11 + a21;
        out[8] = x * a02 + y * a12 + a22;
        return out;
    }
    exports.translate = translate;
    /**
     * Rotates a mat3 by the given angle
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat3} out
     */
    function rotate(out, a, rad) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
        out[0] = c * a00 + s * a10;
        out[1] = c * a01 + s * a11;
        out[2] = c * a02 + s * a12;
        out[3] = c * a10 - s * a00;
        out[4] = c * a11 - s * a01;
        out[5] = c * a12 - s * a02;
        out[6] = a20;
        out[7] = a21;
        out[8] = a22;
        return out;
    }
    exports.rotate = rotate;
    /**
     * Scales the mat3 by the dimensions in the given vec2
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {vec2} v the vec2 to scale the matrix by
     * @returns {mat3} out
     **/
    function scale(out, a, v) {
        var x = v[0], y = v[1];
        out[0] = x * a[0];
        out[1] = x * a[1];
        out[2] = x * a[2];
        out[3] = y * a[3];
        out[4] = y * a[4];
        out[5] = y * a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
    }
    exports.scale = scale;
    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.translate(dest, dest, vec);
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {vec2} v Translation vector
     * @returns {mat3} out
     */
    function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = v[0];
        out[7] = v[1];
        out[8] = 1;
        return out;
    }
    exports.fromTranslation = fromTranslation;
    /**
     * Creates a matrix from a given angle
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.rotate(dest, dest, rad);
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat3} out
     */
    function fromRotation(out, rad) {
        var s = Math.sin(rad), c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = -s;
        out[4] = c;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
    }
    exports.fromRotation = fromRotation;
    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat3.identity(dest);
     *     mat3.scale(dest, dest, vec);
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {vec2} v Scaling vector
     * @returns {mat3} out
     */
    function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = v[1];
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
    }
    exports.fromScaling = fromScaling;
    /**
     * Copies the values from a mat2d into a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat2d} a the matrix to copy
     * @returns {mat3} out
     **/
    function fromMat2d(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = 0;
        out[3] = a[2];
        out[4] = a[3];
        out[5] = 0;
        out[6] = a[4];
        out[7] = a[5];
        out[8] = 1;
        return out;
    }
    exports.fromMat2d = fromMat2d;
    /**
     * Calculates a 3x3 matrix from the given quaternion
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat3} out
     */
    function fromQuat(out, q) {
        var x = q[0], y = q[1], z = q[2], w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var yx = y * x2;
        var yy = y * y2;
        var zx = z * x2;
        var zy = z * y2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - yy - zz;
        out[3] = yx - wz;
        out[6] = zx + wy;
        out[1] = yx + wz;
        out[4] = 1 - xx - zz;
        out[7] = zy - wx;
        out[2] = zx - wy;
        out[5] = zy + wx;
        out[8] = 1 - xx - yy;
        return out;
    }
    exports.fromQuat = fromQuat;
    /**
     * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {mat4} a Mat4 to derive the normal matrix from
     *
     * @returns {mat3} out
     */
    function normalFromMat4(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        return out;
    }
    exports.normalFromMat4 = normalFromMat4;
    /**
     * Generates a 2D projection matrix with the given bounds
     *
     * @param {mat3} out mat3 frustum matrix will be written into
     * @param {number} width Width of your gl context
     * @param {number} height Height of gl context
     * @returns {mat3} out
     */
    function projection(out, width, height) {
        out[0] = 2 / width;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = -2 / height;
        out[5] = 0;
        out[6] = -1;
        out[7] = 1;
        out[8] = 1;
        return out;
    }
    exports.projection = projection;
    /**
     * Returns a string representation of a mat3
     *
     * @param {mat3} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    function str(a) {
        return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
    }
    exports.str = str;
    /**
     * Returns Frobenius norm of a mat3
     *
     * @param {mat3} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    function frob(a) {
        return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
    }
    exports.frob = frob;
    /**
     * Adds two mat3's
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        return out;
    }
    exports.add = add;
    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        return out;
    }
    exports.subtract = subtract;
    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {mat3} out
     */
    function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        return out;
    }
    exports.multiplyScalar = multiplyScalar;
    /**
     * Adds two mat3's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat3} out the receiving vector
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {mat3} out
     */
    function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        out[4] = a[4] + b[4] * scale;
        out[5] = a[5] + b[5] * scale;
        out[6] = a[6] + b[6] * scale;
        out[7] = a[7] + b[7] * scale;
        out[8] = a[8] + b[8] * scale;
        return out;
    }
    exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat3} a The first matrix.
     * @param {mat3} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
    }
    exports.exactEquals = exactEquals;
    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat3} a The first matrix.
     * @param {mat3} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
    }
    exports.equals = equals;
    /**
     * Alias for {@link mat3.multiply}
     * @function
     */
    exports.mul = multiply;
    /**
     * Alias for {@link mat3.subtract}
     * @function
     */
    exports.sub = subtract;
},
"a427635f32": /* gl-matrix/esm/mat4.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const glMatrix = (0, tslib_1.__importStar)(require("68ca94c15c") /* ./common.js */);
    /**
     * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
     * @module mat4
     */
    /**
     * Creates a new identity mat4
     *
     * @returns {mat4} a new 4x4 matrix
     */
    function create() {
        var out = new glMatrix.ARRAY_TYPE(16);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
        }
        out[0] = 1;
        out[5] = 1;
        out[10] = 1;
        out[15] = 1;
        return out;
    }
    exports.create = create;
    /**
     * Creates a new mat4 initialized with values from an existing matrix
     *
     * @param {mat4} a matrix to clone
     * @returns {mat4} a new 4x4 matrix
     */
    function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(16);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }
    exports.clone = clone;
    /**
     * Copy the values from one mat4 to another
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }
    exports.copy = copy;
    /**
     * Create a new mat4 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} A new mat4
     */
    function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        var out = new glMatrix.ARRAY_TYPE(16);
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
    }
    exports.fromValues = fromValues;
    /**
     * Set the components of a mat4 to the given values
     *
     * @param {mat4} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} out
     */
    function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
    }
    exports.set = set;
    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    exports.identity = identity;
    /**
     * Transpose the values of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function transpose(out, a) {
        // If we are transposing ourselves we can skip a few steps but have to cache some values
        if (out === a) {
            var a01 = a[1], a02 = a[2], a03 = a[3];
            var a12 = a[6], a13 = a[7];
            var a23 = a[11];
            out[1] = a[4];
            out[2] = a[8];
            out[3] = a[12];
            out[4] = a01;
            out[6] = a[9];
            out[7] = a[13];
            out[8] = a02;
            out[9] = a12;
            out[11] = a[14];
            out[12] = a03;
            out[13] = a13;
            out[14] = a23;
        }
        else {
            out[0] = a[0];
            out[1] = a[4];
            out[2] = a[8];
            out[3] = a[12];
            out[4] = a[1];
            out[5] = a[5];
            out[6] = a[9];
            out[7] = a[13];
            out[8] = a[2];
            out[9] = a[6];
            out[10] = a[10];
            out[11] = a[14];
            out[12] = a[3];
            out[13] = a[7];
            out[14] = a[11];
            out[15] = a[15];
        }
        return out;
    }
    exports.transpose = transpose;
    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function invert(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return out;
    }
    exports.invert = invert;
    /**
     * Calculates the adjugate of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function adjoint(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
        out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
        out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
        out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
        out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
        out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
        out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
        out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
        out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
        out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
        out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
        out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
        out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
        out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
        out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
        out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
        return out;
    }
    exports.adjoint = adjoint;
    /**
     * Calculates the determinant of a mat4
     *
     * @param {mat4} a the source matrix
     * @returns {Number} determinant of a
     */
    function determinant(a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }
    exports.determinant = determinant;
    /**
     * Multiplies two mat4s
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function multiply(out, a, b) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]; // Cache only the current line of the second matrix
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        b3 = b[7];
        out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        b3 = b[11];
        out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        b3 = b[15];
        out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return out;
    }
    exports.multiply = multiply;
    /**
     * Translate a mat4 by the given vector
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to translate
     * @param {vec3} v vector to translate by
     * @returns {mat4} out
     */
    function translate(out, a, v) {
        var x = v[0], y = v[1], z = v[2];
        var a00, a01, a02, a03;
        var a10, a11, a12, a13;
        var a20, a21, a22, a23;
        if (a === out) {
            out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
            out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
            out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
            out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
        }
        else {
            a00 = a[0];
            a01 = a[1];
            a02 = a[2];
            a03 = a[3];
            a10 = a[4];
            a11 = a[5];
            a12 = a[6];
            a13 = a[7];
            a20 = a[8];
            a21 = a[9];
            a22 = a[10];
            a23 = a[11];
            out[0] = a00;
            out[1] = a01;
            out[2] = a02;
            out[3] = a03;
            out[4] = a10;
            out[5] = a11;
            out[6] = a12;
            out[7] = a13;
            out[8] = a20;
            out[9] = a21;
            out[10] = a22;
            out[11] = a23;
            out[12] = a00 * x + a10 * y + a20 * z + a[12];
            out[13] = a01 * x + a11 * y + a21 * z + a[13];
            out[14] = a02 * x + a12 * y + a22 * z + a[14];
            out[15] = a03 * x + a13 * y + a23 * z + a[15];
        }
        return out;
    }
    exports.translate = translate;
    /**
     * Scales the mat4 by the dimensions in the given vec3 not using vectorization
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {vec3} v the vec3 to scale the matrix by
     * @returns {mat4} out
     **/
    function scale(out, a, v) {
        var x = v[0], y = v[1], z = v[2];
        out[0] = a[0] * x;
        out[1] = a[1] * x;
        out[2] = a[2] * x;
        out[3] = a[3] * x;
        out[4] = a[4] * y;
        out[5] = a[5] * y;
        out[6] = a[6] * y;
        out[7] = a[7] * y;
        out[8] = a[8] * z;
        out[9] = a[9] * z;
        out[10] = a[10] * z;
        out[11] = a[11] * z;
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }
    exports.scale = scale;
    /**
     * Rotates a mat4 by the given angle around the given axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function rotate(out, a, rad, axis) {
        var x = axis[0], y = axis[1], z = axis[2];
        var len = Math.hypot(x, y, z);
        var s, c, t;
        var a00, a01, a02, a03;
        var a10, a11, a12, a13;
        var a20, a21, a22, a23;
        var b00, b01, b02;
        var b10, b11, b12;
        var b20, b21, b22;
        if (len < glMatrix.EPSILON) {
            return null;
        }
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c;
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11]; // Construct the elements of the rotation matrix
        b00 = x * x * t + c;
        b01 = y * x * t + z * s;
        b02 = z * x * t - y * s;
        b10 = x * y * t - z * s;
        b11 = y * y * t + c;
        b12 = z * y * t + x * s;
        b20 = x * z * t + y * s;
        b21 = y * z * t - x * s;
        b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;
        if (a !== out) {
            // If the source and destination differ, copy the unchanged last row
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }
        return out;
    }
    exports.rotate = rotate;
    /**
     * Rotates a matrix by the given angle around the X axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateX(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];
        if (a !== out) {
            // If the source and destination differ, copy the unchanged rows
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        } // Perform axis-specific matrix multiplication
        out[4] = a10 * c + a20 * s;
        out[5] = a11 * c + a21 * s;
        out[6] = a12 * c + a22 * s;
        out[7] = a13 * c + a23 * s;
        out[8] = a20 * c - a10 * s;
        out[9] = a21 * c - a11 * s;
        out[10] = a22 * c - a12 * s;
        out[11] = a23 * c - a13 * s;
        return out;
    }
    exports.rotateX = rotateX;
    /**
     * Rotates a matrix by the given angle around the Y axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateY(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];
        if (a !== out) {
            // If the source and destination differ, copy the unchanged rows
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        } // Perform axis-specific matrix multiplication
        out[0] = a00 * c - a20 * s;
        out[1] = a01 * c - a21 * s;
        out[2] = a02 * c - a22 * s;
        out[3] = a03 * c - a23 * s;
        out[8] = a00 * s + a20 * c;
        out[9] = a01 * s + a21 * c;
        out[10] = a02 * s + a22 * c;
        out[11] = a03 * s + a23 * c;
        return out;
    }
    exports.rotateY = rotateY;
    /**
     * Rotates a matrix by the given angle around the Z axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateZ(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        if (a !== out) {
            // If the source and destination differ, copy the unchanged last row
            out[8] = a[8];
            out[9] = a[9];
            out[10] = a[10];
            out[11] = a[11];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        } // Perform axis-specific matrix multiplication
        out[0] = a00 * c + a10 * s;
        out[1] = a01 * c + a11 * s;
        out[2] = a02 * c + a12 * s;
        out[3] = a03 * c + a13 * s;
        out[4] = a10 * c - a00 * s;
        out[5] = a11 * c - a01 * s;
        out[6] = a12 * c - a02 * s;
        out[7] = a13 * c - a03 * s;
        return out;
    }
    exports.rotateZ = rotateZ;
    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */
    function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
    }
    exports.fromTranslation = fromTranslation;
    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.scale(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Scaling vector
     * @returns {mat4} out
     */
    function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = v[1];
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = v[2];
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    exports.fromScaling = fromScaling;
    /**
     * Creates a matrix from a given angle around a given axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotate(dest, dest, rad, axis);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function fromRotation(out, rad, axis) {
        var x = axis[0], y = axis[1], z = axis[2];
        var len = Math.hypot(x, y, z);
        var s, c, t;
        if (len < glMatrix.EPSILON) {
            return null;
        }
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c; // Perform rotation-specific matrix multiplication
        out[0] = x * x * t + c;
        out[1] = y * x * t + z * s;
        out[2] = z * x * t - y * s;
        out[3] = 0;
        out[4] = x * y * t - z * s;
        out[5] = y * y * t + c;
        out[6] = z * y * t + x * s;
        out[7] = 0;
        out[8] = x * z * t + y * s;
        out[9] = y * z * t - x * s;
        out[10] = z * z * t + c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    exports.fromRotation = fromRotation;
    /**
     * Creates a matrix from the given angle around the X axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateX(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromXRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad); // Perform axis-specific matrix multiplication
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = c;
        out[6] = s;
        out[7] = 0;
        out[8] = 0;
        out[9] = -s;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    exports.fromXRotation = fromXRotation;
    /**
     * Creates a matrix from the given angle around the Y axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateY(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromYRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad); // Perform axis-specific matrix multiplication
        out[0] = c;
        out[1] = 0;
        out[2] = -s;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = s;
        out[9] = 0;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    exports.fromYRotation = fromYRotation;
    /**
     * Creates a matrix from the given angle around the Z axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateZ(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromZRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad); // Perform axis-specific matrix multiplication
        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = 0;
        out[4] = -s;
        out[5] = c;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    exports.fromZRotation = fromZRotation;
    /**
     * Creates a matrix from a quaternion rotation and vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */
    function fromRotationTranslation(out, q, v) {
        // Quaternion math
        var x = q[0], y = q[1], z = q[2], w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - (yy + zz);
        out[1] = xy + wz;
        out[2] = xz - wy;
        out[3] = 0;
        out[4] = xy - wz;
        out[5] = 1 - (xx + zz);
        out[6] = yz + wx;
        out[7] = 0;
        out[8] = xz + wy;
        out[9] = yz - wx;
        out[10] = 1 - (xx + yy);
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
    }
    exports.fromRotationTranslation = fromRotationTranslation;
    /**
     * Creates a new mat4 from a dual quat.
     *
     * @param {mat4} out Matrix
     * @param {quat2} a Dual Quaternion
     * @returns {mat4} mat4 receiving operation result
     */
    function fromQuat2(out, a) {
        var translation = new glMatrix.ARRAY_TYPE(3);
        var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
        var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense
        if (magnitude > 0) {
            translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
            translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
            translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
        }
        else {
            translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
            translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
            translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
        }
        fromRotationTranslation(out, a, translation);
        return out;
    }
    exports.fromQuat2 = fromQuat2;
    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive translation component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    function getTranslation(out, mat) {
        out[0] = mat[12];
        out[1] = mat[13];
        out[2] = mat[14];
        return out;
    }
    exports.getTranslation = getTranslation;
    /**
     * Returns the scaling factor component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslationScale
     *  with a normalized Quaternion paramter, the returned vector will be
     *  the same as the scaling vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive scaling factor component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    function getScaling(out, mat) {
        var m11 = mat[0];
        var m12 = mat[1];
        var m13 = mat[2];
        var m21 = mat[4];
        var m22 = mat[5];
        var m23 = mat[6];
        var m31 = mat[8];
        var m32 = mat[9];
        var m33 = mat[10];
        out[0] = Math.hypot(m11, m12, m13);
        out[1] = Math.hypot(m21, m22, m23);
        out[2] = Math.hypot(m31, m32, m33);
        return out;
    }
    exports.getScaling = getScaling;
    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {quat} out Quaternion to receive the rotation component
     * @param {mat4} mat Matrix to be decomposed (input)
     * @return {quat} out
     */
    function getRotation(out, mat) {
        var scaling = new glMatrix.ARRAY_TYPE(3);
        getScaling(scaling, mat);
        var is1 = 1 / scaling[0];
        var is2 = 1 / scaling[1];
        var is3 = 1 / scaling[2];
        var sm11 = mat[0] * is1;
        var sm12 = mat[1] * is2;
        var sm13 = mat[2] * is3;
        var sm21 = mat[4] * is1;
        var sm22 = mat[5] * is2;
        var sm23 = mat[6] * is3;
        var sm31 = mat[8] * is1;
        var sm32 = mat[9] * is2;
        var sm33 = mat[10] * is3;
        var trace = sm11 + sm22 + sm33;
        var S = 0;
        if (trace > 0) {
            S = Math.sqrt(trace + 1.0) * 2;
            out[3] = 0.25 * S;
            out[0] = (sm23 - sm32) / S;
            out[1] = (sm31 - sm13) / S;
            out[2] = (sm12 - sm21) / S;
        }
        else if (sm11 > sm22 && sm11 > sm33) {
            S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
            out[3] = (sm23 - sm32) / S;
            out[0] = 0.25 * S;
            out[1] = (sm12 + sm21) / S;
            out[2] = (sm31 + sm13) / S;
        }
        else if (sm22 > sm33) {
            S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
            out[3] = (sm31 - sm13) / S;
            out[0] = (sm12 + sm21) / S;
            out[1] = 0.25 * S;
            out[2] = (sm23 + sm32) / S;
        }
        else {
            S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
            out[3] = (sm12 - sm21) / S;
            out[0] = (sm31 + sm13) / S;
            out[1] = (sm23 + sm32) / S;
            out[2] = 0.25 * S;
        }
        return out;
    }
    exports.getRotation = getRotation;
    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @returns {mat4} out
     */
    function fromRotationTranslationScale(out, q, v, s) {
        // Quaternion math
        var x = q[0], y = q[1], z = q[2], w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        var sx = s[0];
        var sy = s[1];
        var sz = s[2];
        out[0] = (1 - (yy + zz)) * sx;
        out[1] = (xy + wz) * sx;
        out[2] = (xz - wy) * sx;
        out[3] = 0;
        out[4] = (xy - wz) * sy;
        out[5] = (1 - (xx + zz)) * sy;
        out[6] = (yz + wx) * sy;
        out[7] = 0;
        out[8] = (xz + wy) * sz;
        out[9] = (yz - wx) * sz;
        out[10] = (1 - (xx + yy)) * sz;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
    }
    exports.fromRotationTranslationScale = fromRotationTranslationScale;
    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     mat4.translate(dest, origin);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *     mat4.translate(dest, negativeOrigin);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @param {vec3} o The origin vector around which to scale and rotate
     * @returns {mat4} out
     */
    function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
        // Quaternion math
        var x = q[0], y = q[1], z = q[2], w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        var sx = s[0];
        var sy = s[1];
        var sz = s[2];
        var ox = o[0];
        var oy = o[1];
        var oz = o[2];
        var out0 = (1 - (yy + zz)) * sx;
        var out1 = (xy + wz) * sx;
        var out2 = (xz - wy) * sx;
        var out4 = (xy - wz) * sy;
        var out5 = (1 - (xx + zz)) * sy;
        var out6 = (yz + wx) * sy;
        var out8 = (xz + wy) * sz;
        var out9 = (yz - wx) * sz;
        var out10 = (1 - (xx + yy)) * sz;
        out[0] = out0;
        out[1] = out1;
        out[2] = out2;
        out[3] = 0;
        out[4] = out4;
        out[5] = out5;
        out[6] = out6;
        out[7] = 0;
        out[8] = out8;
        out[9] = out9;
        out[10] = out10;
        out[11] = 0;
        out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
        out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
        out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
        out[15] = 1;
        return out;
    }
    exports.fromRotationTranslationScaleOrigin = fromRotationTranslationScaleOrigin;
    /**
     * Calculates a 4x4 matrix from the given quaternion
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat4} out
     */
    function fromQuat(out, q) {
        var x = q[0], y = q[1], z = q[2], w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var yx = y * x2;
        var yy = y * y2;
        var zx = z * x2;
        var zy = z * y2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - yy - zz;
        out[1] = yx + wz;
        out[2] = zx - wy;
        out[3] = 0;
        out[4] = yx - wz;
        out[5] = 1 - xx - zz;
        out[6] = zy + wx;
        out[7] = 0;
        out[8] = zx + wy;
        out[9] = zy - wx;
        out[10] = 1 - xx - yy;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    exports.fromQuat = fromQuat;
    /**
     * Generates a frustum matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Number} left Left bound of the frustum
     * @param {Number} right Right bound of the frustum
     * @param {Number} bottom Bottom bound of the frustum
     * @param {Number} top Top bound of the frustum
     * @param {Number} near Near bound of the frustum
     * @param {Number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function frustum(out, left, right, bottom, top, near, far) {
        var rl = 1 / (right - left);
        var tb = 1 / (top - bottom);
        var nf = 1 / (near - far);
        out[0] = near * 2 * rl;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = near * 2 * tb;
        out[6] = 0;
        out[7] = 0;
        out[8] = (right + left) * rl;
        out[9] = (top + bottom) * tb;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = far * near * 2 * nf;
        out[15] = 0;
        return out;
    }
    exports.frustum = frustum;
    /**
     * Generates a perspective projection matrix with the given bounds.
     * Passing null/undefined/no value for far will generate infinite projection matrix.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum, can be null or Infinity
     * @returns {mat4} out
     */
    function perspective(out, fovy, aspect, near, far) {
        var f = 1.0 / Math.tan(fovy / 2), nf;
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[15] = 0;
        if (far != null && far !== Infinity) {
            nf = 1 / (near - far);
            out[10] = (far + near) * nf;
            out[14] = 2 * far * near * nf;
        }
        else {
            out[10] = -1;
            out[14] = -2 * near;
        }
        return out;
    }
    exports.perspective = perspective;
    /**
     * Generates a perspective projection matrix with the given field of view.
     * This is primarily useful for generating projection matrices to be used
     * with the still experiemental WebVR API.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function perspectiveFromFieldOfView(out, fov, near, far) {
        var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
        var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
        var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
        var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
        var xScale = 2.0 / (leftTan + rightTan);
        var yScale = 2.0 / (upTan + downTan);
        out[0] = xScale;
        out[1] = 0.0;
        out[2] = 0.0;
        out[3] = 0.0;
        out[4] = 0.0;
        out[5] = yScale;
        out[6] = 0.0;
        out[7] = 0.0;
        out[8] = -((leftTan - rightTan) * xScale * 0.5);
        out[9] = (upTan - downTan) * yScale * 0.5;
        out[10] = far / (near - far);
        out[11] = -1.0;
        out[12] = 0.0;
        out[13] = 0.0;
        out[14] = far * near / (near - far);
        out[15] = 0.0;
        return out;
    }
    exports.perspectiveFromFieldOfView = perspectiveFromFieldOfView;
    /**
     * Generates a orthogonal projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function ortho(out, left, right, bottom, top, near, far) {
        var lr = 1 / (left - right);
        var bt = 1 / (bottom - top);
        var nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
        return out;
    }
    exports.ortho = ortho;
    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis.
     * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */
    function lookAt(out, eye, center, up) {
        var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
        var eyex = eye[0];
        var eyey = eye[1];
        var eyez = eye[2];
        var upx = up[0];
        var upy = up[1];
        var upz = up[2];
        var centerx = center[0];
        var centery = center[1];
        var centerz = center[2];
        if (Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON) {
            return identity(out);
        }
        z0 = eyex - centerx;
        z1 = eyey - centery;
        z2 = eyez - centerz;
        len = 1 / Math.hypot(z0, z1, z2);
        z0 *= len;
        z1 *= len;
        z2 *= len;
        x0 = upy * z2 - upz * z1;
        x1 = upz * z0 - upx * z2;
        x2 = upx * z1 - upy * z0;
        len = Math.hypot(x0, x1, x2);
        if (!len) {
            x0 = 0;
            x1 = 0;
            x2 = 0;
        }
        else {
            len = 1 / len;
            x0 *= len;
            x1 *= len;
            x2 *= len;
        }
        y0 = z1 * x2 - z2 * x1;
        y1 = z2 * x0 - z0 * x2;
        y2 = z0 * x1 - z1 * x0;
        len = Math.hypot(y0, y1, y2);
        if (!len) {
            y0 = 0;
            y1 = 0;
            y2 = 0;
        }
        else {
            len = 1 / len;
            y0 *= len;
            y1 *= len;
            y2 *= len;
        }
        out[0] = x0;
        out[1] = y0;
        out[2] = z0;
        out[3] = 0;
        out[4] = x1;
        out[5] = y1;
        out[6] = z1;
        out[7] = 0;
        out[8] = x2;
        out[9] = y2;
        out[10] = z2;
        out[11] = 0;
        out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
        out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
        out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
        out[15] = 1;
        return out;
    }
    exports.lookAt = lookAt;
    /**
     * Generates a matrix that makes something look at something else.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */
    function targetTo(out, eye, target, up) {
        var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
        var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
        var len = z0 * z0 + z1 * z1 + z2 * z2;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
            z0 *= len;
            z1 *= len;
            z2 *= len;
        }
        var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
        len = x0 * x0 + x1 * x1 + x2 * x2;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
            x0 *= len;
            x1 *= len;
            x2 *= len;
        }
        out[0] = x0;
        out[1] = x1;
        out[2] = x2;
        out[3] = 0;
        out[4] = z1 * x2 - z2 * x1;
        out[5] = z2 * x0 - z0 * x2;
        out[6] = z0 * x1 - z1 * x0;
        out[7] = 0;
        out[8] = z0;
        out[9] = z1;
        out[10] = z2;
        out[11] = 0;
        out[12] = eyex;
        out[13] = eyey;
        out[14] = eyez;
        out[15] = 1;
        return out;
    }
    exports.targetTo = targetTo;
    /**
     * Returns a string representation of a mat4
     *
     * @param {mat4} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    function str(a) {
        return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
    }
    exports.str = str;
    /**
     * Returns Frobenius norm of a mat4
     *
     * @param {mat4} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    function frob(a) {
        return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
    }
    exports.frob = frob;
    /**
     * Adds two mat4's
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        out[9] = a[9] + b[9];
        out[10] = a[10] + b[10];
        out[11] = a[11] + b[11];
        out[12] = a[12] + b[12];
        out[13] = a[13] + b[13];
        out[14] = a[14] + b[14];
        out[15] = a[15] + b[15];
        return out;
    }
    exports.add = add;
    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        out[9] = a[9] - b[9];
        out[10] = a[10] - b[10];
        out[11] = a[11] - b[11];
        out[12] = a[12] - b[12];
        out[13] = a[13] - b[13];
        out[14] = a[14] - b[14];
        out[15] = a[15] - b[15];
        return out;
    }
    exports.subtract = subtract;
    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {mat4} out
     */
    function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        out[9] = a[9] * b;
        out[10] = a[10] * b;
        out[11] = a[11] * b;
        out[12] = a[12] * b;
        out[13] = a[13] * b;
        out[14] = a[14] * b;
        out[15] = a[15] * b;
        return out;
    }
    exports.multiplyScalar = multiplyScalar;
    /**
     * Adds two mat4's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat4} out the receiving vector
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {mat4} out
     */
    function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        out[4] = a[4] + b[4] * scale;
        out[5] = a[5] + b[5] * scale;
        out[6] = a[6] + b[6] * scale;
        out[7] = a[7] + b[7] * scale;
        out[8] = a[8] + b[8] * scale;
        out[9] = a[9] + b[9] * scale;
        out[10] = a[10] + b[10] * scale;
        out[11] = a[11] + b[11] * scale;
        out[12] = a[12] + b[12] * scale;
        out[13] = a[13] + b[13] * scale;
        out[14] = a[14] + b[14] * scale;
        out[15] = a[15] + b[15] * scale;
        return out;
    }
    exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat4} a The first matrix.
     * @param {mat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
    }
    exports.exactEquals = exactEquals;
    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat4} a The first matrix.
     * @param {mat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
        var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
        var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
        var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
        var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
    }
    exports.equals = equals;
    /**
     * Alias for {@link mat4.multiply}
     * @function
     */
    exports.mul = multiply;
    /**
     * Alias for {@link mat4.subtract}
     * @function
     */
    exports.sub = subtract;
},
"eb06fc032a": /* gl-matrix/esm/quat.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const glMatrix = (0, tslib_1.__importStar)(require("68ca94c15c") /* ./common.js */);
    const mat3 = (0, tslib_1.__importStar)(require("0285c50a7e") /* ./mat3.js */);
    const vec3 = (0, tslib_1.__importStar)(require("2c5eb22089") /* ./vec3.js */);
    const vec4 = (0, tslib_1.__importStar)(require("c1aa33d719") /* ./vec4.js */);
    /**
     * Quaternion
     * @module quat
     */
    /**
     * Creates a new identity quat
     *
     * @returns {quat} a new quaternion
     */
    function create() {
        var out = new glMatrix.ARRAY_TYPE(4);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
        }
        out[3] = 1;
        return out;
    }
    exports.create = create;
    /**
     * Set a quat to the identity quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */
    function identity(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
    }
    exports.identity = identity;
    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @returns {quat} out
     **/
    function setAxisAngle(out, axis, rad) {
        rad = rad * 0.5;
        var s = Math.sin(rad);
        out[0] = s * axis[0];
        out[1] = s * axis[1];
        out[2] = s * axis[2];
        out[3] = Math.cos(rad);
        return out;
    }
    exports.setAxisAngle = setAxisAngle;
    /**
     * Gets the rotation axis and angle for a given
     *  quaternion. If a quaternion is created with
     *  setAxisAngle, this method will return the same
     *  values as providied in the original parameter list
     *  OR functionally equivalent values.
     * Example: The quaternion formed by axis [0, 0, 1] and
     *  angle -90 is the same as the quaternion formed by
     *  [0, 0, 1] and 270. This method favors the latter.
     * @param  {vec3} out_axis  Vector receiving the axis of rotation
     * @param  {quat} q     Quaternion to be decomposed
     * @return {Number}     Angle, in radians, of the rotation
     */
    function getAxisAngle(out_axis, q) {
        var rad = Math.acos(q[3]) * 2.0;
        var s = Math.sin(rad / 2.0);
        if (s > glMatrix.EPSILON) {
            out_axis[0] = q[0] / s;
            out_axis[1] = q[1] / s;
            out_axis[2] = q[2] / s;
        }
        else {
            // If s is zero, return any axis (no rotation - axis does not matter)
            out_axis[0] = 1;
            out_axis[1] = 0;
            out_axis[2] = 0;
        }
        return rad;
    }
    exports.getAxisAngle = getAxisAngle;
    /**
     * Gets the angular distance between two unit quaternions
     *
     * @param  {quat} a     Origin unit quaternion
     * @param  {quat} b     Destination unit quaternion
     * @return {Number}     Angle, in radians, between the two quaternions
     */
    function getAngle(a, b) {
        var dotproduct = (0, exports.dot)(a, b);
        return Math.acos(2 * dotproduct * dotproduct - 1);
    }
    exports.getAngle = getAngle;
    /**
     * Multiplies two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     */
    function multiply(out, a, b) {
        var ax = a[0], ay = a[1], az = a[2], aw = a[3];
        var bx = b[0], by = b[1], bz = b[2], bw = b[3];
        out[0] = ax * bw + aw * bx + ay * bz - az * by;
        out[1] = ay * bw + aw * by + az * bx - ax * bz;
        out[2] = az * bw + aw * bz + ax * by - ay * bx;
        out[3] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
    }
    exports.multiply = multiply;
    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateX(out, a, rad) {
        rad *= 0.5;
        var ax = a[0], ay = a[1], az = a[2], aw = a[3];
        var bx = Math.sin(rad), bw = Math.cos(rad);
        out[0] = ax * bw + aw * bx;
        out[1] = ay * bw + az * bx;
        out[2] = az * bw - ay * bx;
        out[3] = aw * bw - ax * bx;
        return out;
    }
    exports.rotateX = rotateX;
    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateY(out, a, rad) {
        rad *= 0.5;
        var ax = a[0], ay = a[1], az = a[2], aw = a[3];
        var by = Math.sin(rad), bw = Math.cos(rad);
        out[0] = ax * bw - az * by;
        out[1] = ay * bw + aw * by;
        out[2] = az * bw + ax * by;
        out[3] = aw * bw - ay * by;
        return out;
    }
    exports.rotateY = rotateY;
    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateZ(out, a, rad) {
        rad *= 0.5;
        var ax = a[0], ay = a[1], az = a[2], aw = a[3];
        var bz = Math.sin(rad), bw = Math.cos(rad);
        out[0] = ax * bw + ay * bz;
        out[1] = ay * bw - ax * bz;
        out[2] = az * bw + aw * bz;
        out[3] = aw * bw - az * bz;
        return out;
    }
    exports.rotateZ = rotateZ;
    /**
     * Calculates the W component of a quat from the X, Y, and Z components.
     * Assumes that quaternion is 1 unit in length.
     * Any existing W component will be ignored.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate W component of
     * @returns {quat} out
     */
    function calculateW(out, a) {
        var x = a[0], y = a[1], z = a[2];
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
        return out;
    }
    exports.calculateW = calculateW;
    /**
     * Calculate the exponential of a unit quaternion.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate the exponential of
     * @returns {quat} out
     */
    function exp(out, a) {
        var x = a[0], y = a[1], z = a[2], w = a[3];
        var r = Math.sqrt(x * x + y * y + z * z);
        var et = Math.exp(w);
        var s = r > 0 ? et * Math.sin(r) / r : 0;
        out[0] = x * s;
        out[1] = y * s;
        out[2] = z * s;
        out[3] = et * Math.cos(r);
        return out;
    }
    exports.exp = exp;
    /**
     * Calculate the natural logarithm of a unit quaternion.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate the exponential of
     * @returns {quat} out
     */
    function ln(out, a) {
        var x = a[0], y = a[1], z = a[2], w = a[3];
        var r = Math.sqrt(x * x + y * y + z * z);
        var t = r > 0 ? Math.atan2(r, w) / r : 0;
        out[0] = x * t;
        out[1] = y * t;
        out[2] = z * t;
        out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
        return out;
    }
    exports.ln = ln;
    /**
     * Calculate the scalar power of a unit quaternion.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate the exponential of
     * @param {Number} b amount to scale the quaternion by
     * @returns {quat} out
     */
    function pow(out, a, b) {
        ln(out, a);
        (0, exports.scale)(out, out, b);
        exp(out, out);
        return out;
    }
    exports.pow = pow;
    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     */
    function slerp(out, a, b, t) {
        // benchmarks:
        //    http://jsperf.com/quaternion-slerp-implementations
        var ax = a[0], ay = a[1], az = a[2], aw = a[3];
        var bx = b[0], by = b[1], bz = b[2], bw = b[3];
        var omega, cosom, sinom, scale0, scale1; // calc cosine
        cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)
        if (cosom < 0.0) {
            cosom = -cosom;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
        } // calculate coefficients
        if (1.0 - cosom > glMatrix.EPSILON) {
            // standard case (slerp)
            omega = Math.acos(cosom);
            sinom = Math.sin(omega);
            scale0 = Math.sin((1.0 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
        }
        else {
            // "from" and "to" quaternions are very close
            //  ... so we can do a linear interpolation
            scale0 = 1.0 - t;
            scale1 = t;
        } // calculate final values
        out[0] = scale0 * ax + scale1 * bx;
        out[1] = scale0 * ay + scale1 * by;
        out[2] = scale0 * az + scale1 * bz;
        out[3] = scale0 * aw + scale1 * bw;
        return out;
    }
    exports.slerp = slerp;
    /**
     * Generates a random unit quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */
    function random(out) {
        // Implementation of http://planning.cs.uiuc.edu/node198.html
        // TODO: Calling random 3 times is probably not the fastest solution
        var u1 = glMatrix.RANDOM();
        var u2 = glMatrix.RANDOM();
        var u3 = glMatrix.RANDOM();
        var sqrt1MinusU1 = Math.sqrt(1 - u1);
        var sqrtU1 = Math.sqrt(u1);
        out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
        out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
        out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
        out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
        return out;
    }
    exports.random = random;
    /**
     * Calculates the inverse of a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate inverse of
     * @returns {quat} out
     */
    function invert(out, a) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
        out[0] = -a0 * invDot;
        out[1] = -a1 * invDot;
        out[2] = -a2 * invDot;
        out[3] = a3 * invDot;
        return out;
    }
    exports.invert = invert;
    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate conjugate of
     * @returns {quat} out
     */
    function conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        return out;
    }
    exports.conjugate = conjugate;
    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {quat} out the receiving quaternion
     * @param {mat3} m rotation matrix
     * @returns {quat} out
     * @function
     */
    function fromMat3(out, m) {
        // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
        // article "Quaternion Calculus and Fast Animation".
        var fTrace = m[0] + m[4] + m[8];
        var fRoot;
        if (fTrace > 0.0) {
            // |w| > 1/2, may as well choose w > 1/2
            fRoot = Math.sqrt(fTrace + 1.0); // 2w
            out[3] = 0.5 * fRoot;
            fRoot = 0.5 / fRoot; // 1/(4w)
            out[0] = (m[5] - m[7]) * fRoot;
            out[1] = (m[6] - m[2]) * fRoot;
            out[2] = (m[1] - m[3]) * fRoot;
        }
        else {
            // |w| <= 1/2
            var i = 0;
            if (m[4] > m[0])
                i = 1;
            if (m[8] > m[i * 3 + i])
                i = 2;
            var j = (i + 1) % 3;
            var k = (i + 2) % 3;
            fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
            out[i] = 0.5 * fRoot;
            fRoot = 0.5 / fRoot;
            out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
            out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
            out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
        }
        return out;
    }
    exports.fromMat3 = fromMat3;
    /**
     * Creates a quaternion from the given euler angle x, y, z.
     *
     * @param {quat} out the receiving quaternion
     * @param {x} Angle to rotate around X axis in degrees.
     * @param {y} Angle to rotate around Y axis in degrees.
     * @param {z} Angle to rotate around Z axis in degrees.
     * @returns {quat} out
     * @function
     */
    function fromEuler(out, x, y, z) {
        var halfToRad = 0.5 * Math.PI / 180.0;
        x *= halfToRad;
        y *= halfToRad;
        z *= halfToRad;
        var sx = Math.sin(x);
        var cx = Math.cos(x);
        var sy = Math.sin(y);
        var cy = Math.cos(y);
        var sz = Math.sin(z);
        var cz = Math.cos(z);
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
        return out;
    }
    exports.fromEuler = fromEuler;
    /**
     * Returns a string representation of a quatenion
     *
     * @param {quat} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str(a) {
        return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
    }
    exports.str = str;
    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param {quat} a quaternion to clone
     * @returns {quat} a new quaternion
     * @function
     */
    exports.clone = vec4.clone;
    /**
     * Creates a new quat initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} a new quaternion
     * @function
     */
    exports.fromValues = vec4.fromValues;
    /**
     * Copy the values from one quat to another
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the source quaternion
     * @returns {quat} out
     * @function
     */
    exports.copy = vec4.copy;
    /**
     * Set the components of a quat to the given values
     *
     * @param {quat} out the receiving quaternion
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} out
     * @function
     */
    exports.set = vec4.set;
    /**
     * Adds two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     * @function
     */
    exports.add = vec4.add;
    /**
     * Alias for {@link quat.multiply}
     * @function
     */
    exports.mul = multiply;
    /**
     * Scales a quat by a scalar number
     *
     * @param {quat} out the receiving vector
     * @param {quat} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {quat} out
     * @function
     */
    exports.scale = vec4.scale;
    /**
     * Calculates the dot product of two quat's
     *
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */
    exports.dot = vec4.dot;
    /**
     * Performs a linear interpolation between two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     * @function
     */
    exports.lerp = vec4.lerp;
    /**
     * Calculates the length of a quat
     *
     * @param {quat} a vector to calculate length of
     * @returns {Number} length of a
     */
    exports.length = vec4.length;
    /**
     * Alias for {@link quat.length}
     * @function
     */
    exports.len = exports.length;
    /**
     * Calculates the squared length of a quat
     *
     * @param {quat} a vector to calculate squared length of
     * @returns {Number} squared length of a
     * @function
     */
    exports.squaredLength = vec4.squaredLength;
    /**
     * Alias for {@link quat.squaredLength}
     * @function
     */
    exports.sqrLen = exports.squaredLength;
    /**
     * Normalize a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quaternion to normalize
     * @returns {quat} out
     * @function
     */
    exports.normalize = vec4.normalize;
    /**
     * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
     *
     * @param {quat} a The first quaternion.
     * @param {quat} b The second quaternion.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    exports.exactEquals = vec4.exactEquals;
    /**
     * Returns whether or not the quaternions have approximately the same elements in the same position.
     *
     * @param {quat} a The first vector.
     * @param {quat} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    exports.equals = vec4.equals;
    /**
     * Sets a quaternion to represent the shortest rotation from one
     * vector to another.
     *
     * Both vectors are assumed to be unit length.
     *
     * @param {quat} out the receiving quaternion.
     * @param {vec3} a the initial vector
     * @param {vec3} b the destination vector
     * @returns {quat} out
     */
    exports.rotationTo = function () {
        var tmpvec3 = vec3.create();
        var xUnitVec3 = vec3.fromValues(1, 0, 0);
        var yUnitVec3 = vec3.fromValues(0, 1, 0);
        return function (out, a, b) {
            var dot = vec3.dot(a, b);
            if (dot < -0.999999) {
                vec3.cross(tmpvec3, xUnitVec3, a);
                if (vec3.len(tmpvec3) < 0.000001)
                    vec3.cross(tmpvec3, yUnitVec3, a);
                vec3.normalize(tmpvec3, tmpvec3);
                setAxisAngle(out, tmpvec3, Math.PI);
                return out;
            }
            else if (dot > 0.999999) {
                out[0] = 0;
                out[1] = 0;
                out[2] = 0;
                out[3] = 1;
                return out;
            }
            else {
                vec3.cross(tmpvec3, a, b);
                out[0] = tmpvec3[0];
                out[1] = tmpvec3[1];
                out[2] = tmpvec3[2];
                out[3] = 1 + dot;
                return (0, exports.normalize)(out, out);
            }
        };
    }();
    /**
     * Performs a spherical linear interpolation with two control points
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {quat} c the third operand
     * @param {quat} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     */
    exports.sqlerp = function () {
        var temp1 = create();
        var temp2 = create();
        return function (out, a, b, c, d, t) {
            slerp(temp1, a, d, t);
            slerp(temp2, b, c, t);
            slerp(out, temp1, temp2, 2 * t * (1 - t));
            return out;
        };
    }();
    /**
     * Sets the specified quaternion with values corresponding to the given
     * axes. Each axis is a vec3 and is expected to be unit length and
     * perpendicular to all other specified axes.
     *
     * @param {vec3} view  the vector representing the viewing direction
     * @param {vec3} right the vector representing the local "right" direction
     * @param {vec3} up    the vector representing the local "up" direction
     * @returns {quat} out
     */
    exports.setAxes = function () {
        var matr = mat3.create();
        return function (out, view, right, up) {
            matr[0] = right[0];
            matr[3] = right[1];
            matr[6] = right[2];
            matr[1] = up[0];
            matr[4] = up[1];
            matr[7] = up[2];
            matr[2] = -view[0];
            matr[5] = -view[1];
            matr[8] = -view[2];
            return (0, exports.normalize)(out, fromMat3(out, matr));
        };
    }();
},
"2c5eb22089": /* gl-matrix/esm/vec3.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const glMatrix = (0, tslib_1.__importStar)(require("68ca94c15c") /* ./common.js */);
    /**
     * 3 Dimensional Vector
     * @module vec3
     */
    /**
     * Creates a new, empty vec3
     *
     * @returns {vec3} a new 3D vector
     */
    function create() {
        var out = new glMatrix.ARRAY_TYPE(3);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
        }
        return out;
    }
    exports.create = create;
    /**
     * Creates a new vec3 initialized with values from an existing vector
     *
     * @param {vec3} a vector to clone
     * @returns {vec3} a new 3D vector
     */
    function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(3);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
    }
    exports.clone = clone;
    /**
     * Calculates the length of a vec3
     *
     * @param {vec3} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        return Math.hypot(x, y, z);
    }
    exports.length = length;
    /**
     * Creates a new vec3 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} a new 3D vector
     */
    function fromValues(x, y, z) {
        var out = new glMatrix.ARRAY_TYPE(3);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
    }
    exports.fromValues = fromValues;
    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the source vector
     * @returns {vec3} out
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
    }
    exports.copy = copy;
    /**
     * Set the components of a vec3 to the given values
     *
     * @param {vec3} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} out
     */
    function set(out, x, y, z) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
    }
    exports.set = set;
    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
    }
    exports.add = add;
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
    }
    exports.subtract = subtract;
    /**
     * Multiplies two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
    }
    exports.multiply = multiply;
    /**
     * Divides two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
    }
    exports.divide = divide;
    /**
     * Math.ceil the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to ceil
     * @returns {vec3} out
     */
    function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        return out;
    }
    exports.ceil = ceil;
    /**
     * Math.floor the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to floor
     * @returns {vec3} out
     */
    function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        return out;
    }
    exports.floor = floor;
    /**
     * Returns the minimum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        return out;
    }
    exports.min = min;
    /**
     * Returns the maximum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        return out;
    }
    exports.max = max;
    /**
     * Math.round the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to round
     * @returns {vec3} out
     */
    function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        return out;
    }
    exports.round = round;
    /**
     * Scales a vec3 by a scalar number
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec3} out
     */
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out;
    }
    exports.scale = scale;
    /**
     * Adds two vec3's after scaling the second operand by a scalar value
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec3} out
     */
    function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        return out;
    }
    exports.scaleAndAdd = scaleAndAdd;
    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        return Math.hypot(x, y, z);
    }
    exports.distance = distance;
    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        return x * x + y * y + z * z;
    }
    exports.squaredDistance = squaredDistance;
    /**
     * Calculates the squared length of a vec3
     *
     * @param {vec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        return x * x + y * y + z * z;
    }
    exports.squaredLength = squaredLength;
    /**
     * Negates the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to negate
     * @returns {vec3} out
     */
    function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
    }
    exports.negate = negate;
    /**
     * Returns the inverse of the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to invert
     * @returns {vec3} out
     */
    function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        return out;
    }
    exports.inverse = inverse;
    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to normalize
     * @returns {vec3} out
     */
    function normalize(out, a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var len = x * x + y * y + z * z;
        if (len > 0) {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        return out;
    }
    exports.normalize = normalize;
    /**
     * Calculates the dot product of two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    exports.dot = dot;
    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function cross(out, a, b) {
        var ax = a[0], ay = a[1], az = a[2];
        var bx = b[0], by = b[1], bz = b[2];
        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
    }
    exports.cross = cross;
    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */
    function lerp(out, a, b, t) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out;
    }
    exports.lerp = lerp;
    /**
     * Performs a hermite interpolation with two control points
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {vec3} c the third operand
     * @param {vec3} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */
    function hermite(out, a, b, c, d, t) {
        var factorTimes2 = t * t;
        var factor1 = factorTimes2 * (2 * t - 3) + 1;
        var factor2 = factorTimes2 * (t - 2) + t;
        var factor3 = factorTimes2 * (t - 1);
        var factor4 = factorTimes2 * (3 - 2 * t);
        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
        return out;
    }
    exports.hermite = hermite;
    /**
     * Performs a bezier interpolation with two control points
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {vec3} c the third operand
     * @param {vec3} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */
    function bezier(out, a, b, c, d, t) {
        var inverseFactor = 1 - t;
        var inverseFactorTimesTwo = inverseFactor * inverseFactor;
        var factorTimes2 = t * t;
        var factor1 = inverseFactorTimesTwo * inverseFactor;
        var factor2 = 3 * t * inverseFactorTimesTwo;
        var factor3 = 3 * factorTimes2 * inverseFactor;
        var factor4 = factorTimes2 * t;
        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
        return out;
    }
    exports.bezier = bezier;
    /**
     * Generates a random vector with the given scale
     *
     * @param {vec3} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec3} out
     */
    function random(out, scale) {
        scale = scale || 1.0;
        var r = glMatrix.RANDOM() * 2.0 * Math.PI;
        var z = glMatrix.RANDOM() * 2.0 - 1.0;
        var zScale = Math.sqrt(1.0 - z * z) * scale;
        out[0] = Math.cos(r) * zScale;
        out[1] = Math.sin(r) * zScale;
        out[2] = z * scale;
        return out;
    }
    exports.random = random;
    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec3} out
     */
    function transformMat4(out, a, m) {
        var x = a[0], y = a[1], z = a[2];
        var w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
    }
    exports.transformMat4 = transformMat4;
    /**
     * Transforms the vec3 with a mat3.
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat3} m the 3x3 matrix to transform with
     * @returns {vec3} out
     */
    function transformMat3(out, a, m) {
        var x = a[0], y = a[1], z = a[2];
        out[0] = x * m[0] + y * m[3] + z * m[6];
        out[1] = x * m[1] + y * m[4] + z * m[7];
        out[2] = x * m[2] + y * m[5] + z * m[8];
        return out;
    }
    exports.transformMat3 = transformMat3;
    /**
     * Transforms the vec3 with a quat
     * Can also be used for dual quaternions. (Multiply it with the real part)
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec3} out
     */
    function transformQuat(out, a, q) {
        // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
        var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
        var x = a[0], y = a[1], z = a[2]; // var qvec = [qx, qy, qz];
        // var uv = vec3.cross([], qvec, a);
        var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);
        var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);
        var w2 = qw * 2;
        uvx *= w2;
        uvy *= w2;
        uvz *= w2; // vec3.scale(uuv, uuv, 2);
        uuvx *= 2;
        uuvy *= 2;
        uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));
        out[0] = x + uvx + uuvx;
        out[1] = y + uvy + uuvy;
        out[2] = z + uvz + uuvz;
        return out;
    }
    exports.transformQuat = transformQuat;
    /**
     * Rotate a 3D vector around the x-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {vec3} out
     */
    function rotateX(out, a, b, rad) {
        var p = [], r = []; //Translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2]; //perform rotation
        r[0] = p[0];
        r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
        r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
    }
    exports.rotateX = rotateX;
    /**
     * Rotate a 3D vector around the y-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {vec3} out
     */
    function rotateY(out, a, b, rad) {
        var p = [], r = []; //Translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2]; //perform rotation
        r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
        r[1] = p[1];
        r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
    }
    exports.rotateY = rotateY;
    /**
     * Rotate a 3D vector around the z-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {vec3} out
     */
    function rotateZ(out, a, b, rad) {
        var p = [], r = []; //Translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2]; //perform rotation
        r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
        r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
        r[2] = p[2]; //translate to correct position
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
    }
    exports.rotateZ = rotateZ;
    /**
     * Get the angle between two 3D vectors
     * @param {vec3} a The first operand
     * @param {vec3} b The second operand
     * @returns {Number} The angle in radians
     */
    function angle(a, b) {
        var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
        return Math.acos(Math.min(Math.max(cosine, -1), 1));
    }
    exports.angle = angle;
    /**
     * Set the components of a vec3 to zero
     *
     * @param {vec3} out the receiving vector
     * @returns {vec3} out
     */
    function zero(out) {
        out[0] = 0.0;
        out[1] = 0.0;
        out[2] = 0.0;
        return out;
    }
    exports.zero = zero;
    /**
     * Returns a string representation of a vector
     *
     * @param {vec3} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str(a) {
        return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
    }
    exports.str = str;
    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }
    exports.exactEquals = exactEquals;
    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2];
        var b0 = b[0], b1 = b[1], b2 = b[2];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
    }
    exports.equals = equals;
    /**
     * Alias for {@link vec3.subtract}
     * @function
     */
    exports.sub = subtract;
    /**
     * Alias for {@link vec3.multiply}
     * @function
     */
    exports.mul = multiply;
    /**
     * Alias for {@link vec3.divide}
     * @function
     */
    exports.div = divide;
    /**
     * Alias for {@link vec3.distance}
     * @function
     */
    exports.dist = distance;
    /**
     * Alias for {@link vec3.squaredDistance}
     * @function
     */
    exports.sqrDist = squaredDistance;
    /**
     * Alias for {@link vec3.length}
     * @function
     */
    exports.len = length;
    /**
     * Alias for {@link vec3.squaredLength}
     * @function
     */
    exports.sqrLen = squaredLength;
    /**
     * Perform some operation over an array of vec3s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    exports.forEach = function () {
        var vec = create();
        return function (a, stride, offset, count, fn, arg) {
            var i, l;
            if (!stride) {
                stride = 3;
            }
            if (!offset) {
                offset = 0;
            }
            if (count) {
                l = Math.min(count * stride + offset, a.length);
            }
            else {
                l = a.length;
            }
            for (i = offset; i < l; i += stride) {
                vec[0] = a[i];
                vec[1] = a[i + 1];
                vec[2] = a[i + 2];
                fn(vec, vec, arg);
                a[i] = vec[0];
                a[i + 1] = vec[1];
                a[i + 2] = vec[2];
            }
            return a;
        };
    }();
},
"c1aa33d719": /* gl-matrix/esm/vec4.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const glMatrix = (0, tslib_1.__importStar)(require("68ca94c15c") /* ./common.js */);
    /**
     * 4 Dimensional Vector
     * @module vec4
     */
    /**
     * Creates a new, empty vec4
     *
     * @returns {vec4} a new 4D vector
     */
    function create() {
        var out = new glMatrix.ARRAY_TYPE(4);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
        }
        return out;
    }
    exports.create = create;
    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param {vec4} a vector to clone
     * @returns {vec4} a new 4D vector
     */
    function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(4);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }
    exports.clone = clone;
    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} a new 4D vector
     */
    function fromValues(x, y, z, w) {
        var out = new glMatrix.ARRAY_TYPE(4);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    }
    exports.fromValues = fromValues;
    /**
     * Copy the values from one vec4 to another
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the source vector
     * @returns {vec4} out
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }
    exports.copy = copy;
    /**
     * Set the components of a vec4 to the given values
     *
     * @param {vec4} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} out
     */
    function set(out, x, y, z, w) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    }
    exports.set = set;
    /**
     * Adds two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        return out;
    }
    exports.add = add;
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
    }
    exports.subtract = subtract;
    /**
     * Multiplies two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        out[3] = a[3] * b[3];
        return out;
    }
    exports.multiply = multiply;
    /**
     * Divides two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        out[3] = a[3] / b[3];
        return out;
    }
    exports.divide = divide;
    /**
     * Math.ceil the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to ceil
     * @returns {vec4} out
     */
    function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        out[3] = Math.ceil(a[3]);
        return out;
    }
    exports.ceil = ceil;
    /**
     * Math.floor the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to floor
     * @returns {vec4} out
     */
    function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        out[3] = Math.floor(a[3]);
        return out;
    }
    exports.floor = floor;
    /**
     * Returns the minimum of two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        out[3] = Math.min(a[3], b[3]);
        return out;
    }
    exports.min = min;
    /**
     * Returns the maximum of two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        out[3] = Math.max(a[3], b[3]);
        return out;
    }
    exports.max = max;
    /**
     * Math.round the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to round
     * @returns {vec4} out
     */
    function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        out[3] = Math.round(a[3]);
        return out;
    }
    exports.round = round;
    /**
     * Scales a vec4 by a scalar number
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec4} out
     */
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        return out;
    }
    exports.scale = scale;
    /**
     * Adds two vec4's after scaling the second operand by a scalar value
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec4} out
     */
    function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        return out;
    }
    exports.scaleAndAdd = scaleAndAdd;
    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        var w = b[3] - a[3];
        return Math.hypot(x, y, z, w);
    }
    exports.distance = distance;
    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        var w = b[3] - a[3];
        return x * x + y * y + z * z + w * w;
    }
    exports.squaredDistance = squaredDistance;
    /**
     * Calculates the length of a vec4
     *
     * @param {vec4} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        return Math.hypot(x, y, z, w);
    }
    exports.length = length;
    /**
     * Calculates the squared length of a vec4
     *
     * @param {vec4} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        return x * x + y * y + z * z + w * w;
    }
    exports.squaredLength = squaredLength;
    /**
     * Negates the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to negate
     * @returns {vec4} out
     */
    function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = -a[3];
        return out;
    }
    exports.negate = negate;
    /**
     * Returns the inverse of the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to invert
     * @returns {vec4} out
     */
    function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        out[3] = 1.0 / a[3];
        return out;
    }
    exports.inverse = inverse;
    /**
     * Normalize a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to normalize
     * @returns {vec4} out
     */
    function normalize(out, a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        var len = x * x + y * y + z * z + w * w;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
        }
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
        return out;
    }
    exports.normalize = normalize;
    /**
     * Calculates the dot product of two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    exports.dot = dot;
    /**
     * Returns the cross-product of three vectors in a 4-dimensional space
     *
     * @param {vec4} result the receiving vector
     * @param {vec4} U the first vector
     * @param {vec4} V the second vector
     * @param {vec4} W the third vector
     * @returns {vec4} result
     */
    function cross(out, u, v, w) {
        var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
        var G = u[0];
        var H = u[1];
        var I = u[2];
        var J = u[3];
        out[0] = H * F - I * E + J * D;
        out[1] = -(G * F) + I * C - J * B;
        out[2] = G * E - H * C + J * A;
        out[3] = -(G * D) + H * B - I * A;
        return out;
    }
    exports.cross = cross;
    /**
     * Performs a linear interpolation between two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec4} out
     */
    function lerp(out, a, b, t) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var aw = a[3];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        out[3] = aw + t * (b[3] - aw);
        return out;
    }
    exports.lerp = lerp;
    /**
     * Generates a random vector with the given scale
     *
     * @param {vec4} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec4} out
     */
    function random(out, scale) {
        scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
        // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
        // http://projecteuclid.org/euclid.aoms/1177692644;
        var v1, v2, v3, v4;
        var s1, s2;
        do {
            v1 = glMatrix.RANDOM() * 2 - 1;
            v2 = glMatrix.RANDOM() * 2 - 1;
            s1 = v1 * v1 + v2 * v2;
        } while (s1 >= 1);
        do {
            v3 = glMatrix.RANDOM() * 2 - 1;
            v4 = glMatrix.RANDOM() * 2 - 1;
            s2 = v3 * v3 + v4 * v4;
        } while (s2 >= 1);
        var d = Math.sqrt((1 - s1) / s2);
        out[0] = scale * v1;
        out[1] = scale * v2;
        out[2] = scale * v3 * d;
        out[3] = scale * v4 * d;
        return out;
    }
    exports.random = random;
    /**
     * Transforms the vec4 with a mat4.
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec4} out
     */
    function transformMat4(out, a, m) {
        var x = a[0], y = a[1], z = a[2], w = a[3];
        out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
        out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
        out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
        out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
        return out;
    }
    exports.transformMat4 = transformMat4;
    /**
     * Transforms the vec4 with a quat
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec4} out
     */
    function transformQuat(out, a, q) {
        var x = a[0], y = a[1], z = a[2];
        var qx = q[0], qy = q[1], qz = q[2], qw = q[3]; // calculate quat * vec
        var ix = qw * x + qy * z - qz * y;
        var iy = qw * y + qz * x - qx * z;
        var iz = qw * z + qx * y - qy * x;
        var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat
        out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        out[3] = a[3];
        return out;
    }
    exports.transformQuat = transformQuat;
    /**
     * Set the components of a vec4 to zero
     *
     * @param {vec4} out the receiving vector
     * @returns {vec4} out
     */
    function zero(out) {
        out[0] = 0.0;
        out[1] = 0.0;
        out[2] = 0.0;
        out[3] = 0.0;
        return out;
    }
    exports.zero = zero;
    /**
     * Returns a string representation of a vector
     *
     * @param {vec4} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str(a) {
        return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
    }
    exports.str = str;
    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec4} a The first vector.
     * @param {vec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    exports.exactEquals = exactEquals;
    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec4} a The first vector.
     * @param {vec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
    }
    exports.equals = equals;
    /**
     * Alias for {@link vec4.subtract}
     * @function
     */
    exports.sub = subtract;
    /**
     * Alias for {@link vec4.multiply}
     * @function
     */
    exports.mul = multiply;
    /**
     * Alias for {@link vec4.divide}
     * @function
     */
    exports.div = divide;
    /**
     * Alias for {@link vec4.distance}
     * @function
     */
    exports.dist = distance;
    /**
     * Alias for {@link vec4.squaredDistance}
     * @function
     */
    exports.sqrDist = squaredDistance;
    /**
     * Alias for {@link vec4.length}
     * @function
     */
    exports.len = length;
    /**
     * Alias for {@link vec4.squaredLength}
     * @function
     */
    exports.sqrLen = squaredLength;
    /**
     * Perform some operation over an array of vec4s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    exports.forEach = function () {
        var vec = create();
        return function (a, stride, offset, count, fn, arg) {
            var i, l;
            if (!stride) {
                stride = 4;
            }
            if (!offset) {
                offset = 0;
            }
            if (count) {
                l = Math.min(count * stride + offset, a.length);
            }
            else {
                l = a.length;
            }
            for (i = offset; i < l; i += stride) {
                vec[0] = a[i];
                vec[1] = a[i + 1];
                vec[2] = a[i + 2];
                vec[3] = a[i + 3];
                fn(vec, vec, arg);
                a[i] = vec[0];
                a[i + 1] = vec[1];
                a[i + 2] = vec[2];
                a[i + 3] = vec[3];
            }
            return a;
        };
    }();
},
"277615c682": /* gl-matrix/esm/quat2.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const glMatrix = (0, tslib_1.__importStar)(require("68ca94c15c") /* ./common.js */);
    const quat = (0, tslib_1.__importStar)(require("eb06fc032a") /* ./quat.js */);
    const mat4 = (0, tslib_1.__importStar)(require("a427635f32") /* ./mat4.js */);
    /**
     * Dual Quaternion<br>
     * Format: [real, dual]<br>
     * Quaternion format: XYZW<br>
     * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
     * @module quat2
     */
    /**
     * Creates a new identity dual quat
     *
     * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
     */
    function create() {
        var dq = new glMatrix.ARRAY_TYPE(8);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
            dq[0] = 0;
            dq[1] = 0;
            dq[2] = 0;
            dq[4] = 0;
            dq[5] = 0;
            dq[6] = 0;
            dq[7] = 0;
        }
        dq[3] = 1;
        return dq;
    }
    exports.create = create;
    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param {quat2} a dual quaternion to clone
     * @returns {quat2} new dual quaternion
     * @function
     */
    function clone(a) {
        var dq = new glMatrix.ARRAY_TYPE(8);
        dq[0] = a[0];
        dq[1] = a[1];
        dq[2] = a[2];
        dq[3] = a[3];
        dq[4] = a[4];
        dq[5] = a[5];
        dq[6] = a[6];
        dq[7] = a[7];
        return dq;
    }
    exports.clone = clone;
    /**
     * Creates a new dual quat initialized with the given values
     *
     * @param {Number} x1 X component
     * @param {Number} y1 Y component
     * @param {Number} z1 Z component
     * @param {Number} w1 W component
     * @param {Number} x2 X component
     * @param {Number} y2 Y component
     * @param {Number} z2 Z component
     * @param {Number} w2 W component
     * @returns {quat2} new dual quaternion
     * @function
     */
    function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
        var dq = new glMatrix.ARRAY_TYPE(8);
        dq[0] = x1;
        dq[1] = y1;
        dq[2] = z1;
        dq[3] = w1;
        dq[4] = x2;
        dq[5] = y2;
        dq[6] = z2;
        dq[7] = w2;
        return dq;
    }
    exports.fromValues = fromValues;
    /**
     * Creates a new dual quat from the given values (quat and translation)
     *
     * @param {Number} x1 X component
     * @param {Number} y1 Y component
     * @param {Number} z1 Z component
     * @param {Number} w1 W component
     * @param {Number} x2 X component (translation)
     * @param {Number} y2 Y component (translation)
     * @param {Number} z2 Z component (translation)
     * @returns {quat2} new dual quaternion
     * @function
     */
    function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
        var dq = new glMatrix.ARRAY_TYPE(8);
        dq[0] = x1;
        dq[1] = y1;
        dq[2] = z1;
        dq[3] = w1;
        var ax = x2 * 0.5, ay = y2 * 0.5, az = z2 * 0.5;
        dq[4] = ax * w1 + ay * z1 - az * y1;
        dq[5] = ay * w1 + az * x1 - ax * z1;
        dq[6] = az * w1 + ax * y1 - ay * x1;
        dq[7] = -ax * x1 - ay * y1 - az * z1;
        return dq;
    }
    exports.fromRotationTranslationValues = fromRotationTranslationValues;
    /**
     * Creates a dual quat from a quaternion and a translation
     *
     * @param {quat2} dual quaternion receiving operation result
     * @param {quat} q a normalized quaternion
     * @param {vec3} t tranlation vector
     * @returns {quat2} dual quaternion receiving operation result
     * @function
     */
    function fromRotationTranslation(out, q, t) {
        var ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5, bx = q[0], by = q[1], bz = q[2], bw = q[3];
        out[0] = bx;
        out[1] = by;
        out[2] = bz;
        out[3] = bw;
        out[4] = ax * bw + ay * bz - az * by;
        out[5] = ay * bw + az * bx - ax * bz;
        out[6] = az * bw + ax * by - ay * bx;
        out[7] = -ax * bx - ay * by - az * bz;
        return out;
    }
    exports.fromRotationTranslation = fromRotationTranslation;
    /**
     * Creates a dual quat from a translation
     *
     * @param {quat2} dual quaternion receiving operation result
     * @param {vec3} t translation vector
     * @returns {quat2} dual quaternion receiving operation result
     * @function
     */
    function fromTranslation(out, t) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = t[0] * 0.5;
        out[5] = t[1] * 0.5;
        out[6] = t[2] * 0.5;
        out[7] = 0;
        return out;
    }
    exports.fromTranslation = fromTranslation;
    /**
     * Creates a dual quat from a quaternion
     *
     * @param {quat2} dual quaternion receiving operation result
     * @param {quat} q the quaternion
     * @returns {quat2} dual quaternion receiving operation result
     * @function
     */
    function fromRotation(out, q) {
        out[0] = q[0];
        out[1] = q[1];
        out[2] = q[2];
        out[3] = q[3];
        out[4] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        return out;
    }
    exports.fromRotation = fromRotation;
    /**
     * Creates a new dual quat from a matrix (4x4)
     *
     * @param {quat2} out the dual quaternion
     * @param {mat4} a the matrix
     * @returns {quat2} dual quat receiving operation result
     * @function
     */
    function fromMat4(out, a) {
        //TODO Optimize this
        var outer = quat.create();
        mat4.getRotation(outer, a);
        var t = new glMatrix.ARRAY_TYPE(3);
        mat4.getTranslation(t, a);
        fromRotationTranslation(out, outer, t);
        return out;
    }
    exports.fromMat4 = fromMat4;
    /**
     * Copy the values from one dual quat to another
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a the source dual quaternion
     * @returns {quat2} out
     * @function
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        return out;
    }
    exports.copy = copy;
    /**
     * Set a dual quat to the identity dual quaternion
     *
     * @param {quat2} out the receiving quaternion
     * @returns {quat2} out
     */
    function identity(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        return out;
    }
    exports.identity = identity;
    /**
     * Set the components of a dual quat to the given values
     *
     * @param {quat2} out the receiving quaternion
     * @param {Number} x1 X component
     * @param {Number} y1 Y component
     * @param {Number} z1 Z component
     * @param {Number} w1 W component
     * @param {Number} x2 X component
     * @param {Number} y2 Y component
     * @param {Number} z2 Z component
     * @param {Number} w2 W component
     * @returns {quat2} out
     * @function
     */
    function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
        out[0] = x1;
        out[1] = y1;
        out[2] = z1;
        out[3] = w1;
        out[4] = x2;
        out[5] = y2;
        out[6] = z2;
        out[7] = w2;
        return out;
    }
    exports.set = set;
    /**
     * Gets the real part of a dual quat
     * @param  {quat} out real part
     * @param  {quat2} a Dual Quaternion
     * @return {quat} real part
     */
    exports.getReal = quat.copy;
    /**
     * Gets the dual part of a dual quat
     * @param  {quat} out dual part
     * @param  {quat2} a Dual Quaternion
     * @return {quat} dual part
     */
    function getDual(out, a) {
        out[0] = a[4];
        out[1] = a[5];
        out[2] = a[6];
        out[3] = a[7];
        return out;
    }
    exports.getDual = getDual;
    /**
     * Set the real component of a dual quat to the given quaternion
     *
     * @param {quat2} out the receiving quaternion
     * @param {quat} q a quaternion representing the real part
     * @returns {quat2} out
     * @function
     */
    exports.setReal = quat.copy;
    /**
     * Set the dual component of a dual quat to the given quaternion
     *
     * @param {quat2} out the receiving quaternion
     * @param {quat} q a quaternion representing the dual part
     * @returns {quat2} out
     * @function
     */
    function setDual(out, q) {
        out[4] = q[0];
        out[5] = q[1];
        out[6] = q[2];
        out[7] = q[3];
        return out;
    }
    exports.setDual = setDual;
    /**
     * Gets the translation of a normalized dual quat
     * @param  {vec3} out translation
     * @param  {quat2} a Dual Quaternion to be decomposed
     * @return {vec3} translation
     */
    function getTranslation(out, a) {
        var ax = a[4], ay = a[5], az = a[6], aw = a[7], bx = -a[0], by = -a[1], bz = -a[2], bw = a[3];
        out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
        return out;
    }
    exports.getTranslation = getTranslation;
    /**
     * Translates a dual quat by the given vector
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a the dual quaternion to translate
     * @param {vec3} v vector to translate by
     * @returns {quat2} out
     */
    function translate(out, a, v) {
        var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3], bx1 = v[0] * 0.5, by1 = v[1] * 0.5, bz1 = v[2] * 0.5, ax2 = a[4], ay2 = a[5], az2 = a[6], aw2 = a[7];
        out[0] = ax1;
        out[1] = ay1;
        out[2] = az1;
        out[3] = aw1;
        out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
        out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
        out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
        out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
        return out;
    }
    exports.translate = translate;
    /**
     * Rotates a dual quat around the X axis
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a the dual quaternion to rotate
     * @param {number} rad how far should the rotation be
     * @returns {quat2} out
     */
    function rotateX(out, a, rad) {
        var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
        quat.rotateX(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
    }
    exports.rotateX = rotateX;
    /**
     * Rotates a dual quat around the Y axis
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a the dual quaternion to rotate
     * @param {number} rad how far should the rotation be
     * @returns {quat2} out
     */
    function rotateY(out, a, rad) {
        var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
        quat.rotateY(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
    }
    exports.rotateY = rotateY;
    /**
     * Rotates a dual quat around the Z axis
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a the dual quaternion to rotate
     * @param {number} rad how far should the rotation be
     * @returns {quat2} out
     */
    function rotateZ(out, a, rad) {
        var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
        quat.rotateZ(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
    }
    exports.rotateZ = rotateZ;
    /**
     * Rotates a dual quat by a given quaternion (a * q)
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a the dual quaternion to rotate
     * @param {quat} q quaternion to rotate by
     * @returns {quat2} out
     */
    function rotateByQuatAppend(out, a, q) {
        var qx = q[0], qy = q[1], qz = q[2], qw = q[3], ax = a[0], ay = a[1], az = a[2], aw = a[3];
        out[0] = ax * qw + aw * qx + ay * qz - az * qy;
        out[1] = ay * qw + aw * qy + az * qx - ax * qz;
        out[2] = az * qw + aw * qz + ax * qy - ay * qx;
        out[3] = aw * qw - ax * qx - ay * qy - az * qz;
        ax = a[4];
        ay = a[5];
        az = a[6];
        aw = a[7];
        out[4] = ax * qw + aw * qx + ay * qz - az * qy;
        out[5] = ay * qw + aw * qy + az * qx - ax * qz;
        out[6] = az * qw + aw * qz + ax * qy - ay * qx;
        out[7] = aw * qw - ax * qx - ay * qy - az * qz;
        return out;
    }
    exports.rotateByQuatAppend = rotateByQuatAppend;
    /**
     * Rotates a dual quat by a given quaternion (q * a)
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat} q quaternion to rotate by
     * @param {quat2} a the dual quaternion to rotate
     * @returns {quat2} out
     */
    function rotateByQuatPrepend(out, q, a) {
        var qx = q[0], qy = q[1], qz = q[2], qw = q[3], bx = a[0], by = a[1], bz = a[2], bw = a[3];
        out[0] = qx * bw + qw * bx + qy * bz - qz * by;
        out[1] = qy * bw + qw * by + qz * bx - qx * bz;
        out[2] = qz * bw + qw * bz + qx * by - qy * bx;
        out[3] = qw * bw - qx * bx - qy * by - qz * bz;
        bx = a[4];
        by = a[5];
        bz = a[6];
        bw = a[7];
        out[4] = qx * bw + qw * bx + qy * bz - qz * by;
        out[5] = qy * bw + qw * by + qz * bx - qx * bz;
        out[6] = qz * bw + qw * bz + qx * by - qy * bx;
        out[7] = qw * bw - qx * bx - qy * by - qz * bz;
        return out;
    }
    exports.rotateByQuatPrepend = rotateByQuatPrepend;
    /**
     * Rotates a dual quat around a given axis. Does the normalisation automatically
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a the dual quaternion to rotate
     * @param {vec3} axis the axis to rotate around
     * @param {Number} rad how far the rotation should be
     * @returns {quat2} out
     */
    function rotateAroundAxis(out, a, axis, rad) {
        //Special case for rad = 0
        if (Math.abs(rad) < glMatrix.EPSILON) {
            return copy(out, a);
        }
        var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
        rad = rad * 0.5;
        var s = Math.sin(rad);
        var bx = s * axis[0] / axisLength;
        var by = s * axis[1] / axisLength;
        var bz = s * axis[2] / axisLength;
        var bw = Math.cos(rad);
        var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3];
        out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        var ax = a[4], ay = a[5], az = a[6], aw = a[7];
        out[4] = ax * bw + aw * bx + ay * bz - az * by;
        out[5] = ay * bw + aw * by + az * bx - ax * bz;
        out[6] = az * bw + aw * bz + ax * by - ay * bx;
        out[7] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
    }
    exports.rotateAroundAxis = rotateAroundAxis;
    /**
     * Adds two dual quat's
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a the first operand
     * @param {quat2} b the second operand
     * @returns {quat2} out
     * @function
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        return out;
    }
    exports.add = add;
    /**
     * Multiplies two dual quat's
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a the first operand
     * @param {quat2} b the second operand
     * @returns {quat2} out
     */
    function multiply(out, a, b) {
        var ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3], bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7], ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7], bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
        out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
        out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
        out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
        out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
        out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
        out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
        out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
        out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
        return out;
    }
    exports.multiply = multiply;
    /**
     * Alias for {@link quat2.multiply}
     * @function
     */
    exports.mul = multiply;
    /**
     * Scales a dual quat by a scalar number
     *
     * @param {quat2} out the receiving dual quat
     * @param {quat2} a the dual quat to scale
     * @param {Number} b amount to scale the dual quat by
     * @returns {quat2} out
     * @function
     */
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        return out;
    }
    exports.scale = scale;
    /**
     * Calculates the dot product of two dual quat's (The dot product of the real parts)
     *
     * @param {quat2} a the first operand
     * @param {quat2} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */
    exports.dot = quat.dot;
    /**
     * Performs a linear interpolation between two dual quats's
     * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
     *
     * @param {quat2} out the receiving dual quat
     * @param {quat2} a the first operand
     * @param {quat2} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat2} out
     */
    function lerp(out, a, b, t) {
        var mt = 1 - t;
        if ((0, exports.dot)(a, b) < 0)
            t = -t;
        out[0] = a[0] * mt + b[0] * t;
        out[1] = a[1] * mt + b[1] * t;
        out[2] = a[2] * mt + b[2] * t;
        out[3] = a[3] * mt + b[3] * t;
        out[4] = a[4] * mt + b[4] * t;
        out[5] = a[5] * mt + b[5] * t;
        out[6] = a[6] * mt + b[6] * t;
        out[7] = a[7] * mt + b[7] * t;
        return out;
    }
    exports.lerp = lerp;
    /**
     * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a dual quat to calculate inverse of
     * @returns {quat2} out
     */
    function invert(out, a) {
        var sqlen = (0, exports.squaredLength)(a);
        out[0] = -a[0] / sqlen;
        out[1] = -a[1] / sqlen;
        out[2] = -a[2] / sqlen;
        out[3] = a[3] / sqlen;
        out[4] = -a[4] / sqlen;
        out[5] = -a[5] / sqlen;
        out[6] = -a[6] / sqlen;
        out[7] = a[7] / sqlen;
        return out;
    }
    exports.invert = invert;
    /**
     * Calculates the conjugate of a dual quat
     * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
     *
     * @param {quat2} out the receiving quaternion
     * @param {quat2} a quat to calculate conjugate of
     * @returns {quat2} out
     */
    function conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        out[4] = -a[4];
        out[5] = -a[5];
        out[6] = -a[6];
        out[7] = a[7];
        return out;
    }
    exports.conjugate = conjugate;
    /**
     * Calculates the length of a dual quat
     *
     * @param {quat2} a dual quat to calculate length of
     * @returns {Number} length of a
     * @function
     */
    exports.length = quat.length;
    /**
     * Alias for {@link quat2.length}
     * @function
     */
    exports.len = exports.length;
    /**
     * Calculates the squared length of a dual quat
     *
     * @param {quat2} a dual quat to calculate squared length of
     * @returns {Number} squared length of a
     * @function
     */
    exports.squaredLength = quat.squaredLength;
    /**
     * Alias for {@link quat2.squaredLength}
     * @function
     */
    exports.sqrLen = exports.squaredLength;
    /**
     * Normalize a dual quat
     *
     * @param {quat2} out the receiving dual quaternion
     * @param {quat2} a dual quaternion to normalize
     * @returns {quat2} out
     * @function
     */
    function normalize(out, a) {
        var magnitude = (0, exports.squaredLength)(a);
        if (magnitude > 0) {
            magnitude = Math.sqrt(magnitude);
            var a0 = a[0] / magnitude;
            var a1 = a[1] / magnitude;
            var a2 = a[2] / magnitude;
            var a3 = a[3] / magnitude;
            var b0 = a[4];
            var b1 = a[5];
            var b2 = a[6];
            var b3 = a[7];
            var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
            out[0] = a0;
            out[1] = a1;
            out[2] = a2;
            out[3] = a3;
            out[4] = (b0 - a0 * a_dot_b) / magnitude;
            out[5] = (b1 - a1 * a_dot_b) / magnitude;
            out[6] = (b2 - a2 * a_dot_b) / magnitude;
            out[7] = (b3 - a3 * a_dot_b) / magnitude;
        }
        return out;
    }
    exports.normalize = normalize;
    /**
     * Returns a string representation of a dual quatenion
     *
     * @param {quat2} a dual quaternion to represent as a string
     * @returns {String} string representation of the dual quat
     */
    function str(a) {
        return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
    }
    exports.str = str;
    /**
     * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
     *
     * @param {quat2} a the first dual quaternion.
     * @param {quat2} b the second dual quaternion.
     * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
     */
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
    }
    exports.exactEquals = exactEquals;
    /**
     * Returns whether or not the dual quaternions have approximately the same elements in the same position.
     *
     * @param {quat2} a the first dual quat.
     * @param {quat2} b the second dual quat.
     * @returns {Boolean} true if the dual quats are equal, false otherwise.
     */
    function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
    }
    exports.equals = equals;
},
"c56d9ff837": /* gl-matrix/esm/vec2.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const tslib_1 = require("tslib");
    const glMatrix = (0, tslib_1.__importStar)(require("68ca94c15c") /* ./common.js */);
    /**
     * 2 Dimensional Vector
     * @module vec2
     */
    /**
     * Creates a new, empty vec2
     *
     * @returns {vec2} a new 2D vector
     */
    function create() {
        var out = new glMatrix.ARRAY_TYPE(2);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
            out[0] = 0;
            out[1] = 0;
        }
        return out;
    }
    exports.create = create;
    /**
     * Creates a new vec2 initialized with values from an existing vector
     *
     * @param {vec2} a vector to clone
     * @returns {vec2} a new 2D vector
     */
    function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(2);
        out[0] = a[0];
        out[1] = a[1];
        return out;
    }
    exports.clone = clone;
    /**
     * Creates a new vec2 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} a new 2D vector
     */
    function fromValues(x, y) {
        var out = new glMatrix.ARRAY_TYPE(2);
        out[0] = x;
        out[1] = y;
        return out;
    }
    exports.fromValues = fromValues;
    /**
     * Copy the values from one vec2 to another
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the source vector
     * @returns {vec2} out
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        return out;
    }
    exports.copy = copy;
    /**
     * Set the components of a vec2 to the given values
     *
     * @param {vec2} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} out
     */
    function set(out, x, y) {
        out[0] = x;
        out[1] = y;
        return out;
    }
    exports.set = set;
    /**
     * Adds two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
    }
    exports.add = add;
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
    }
    exports.subtract = subtract;
    /**
     * Multiplies two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
    }
    exports.multiply = multiply;
    /**
     * Divides two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
    }
    exports.divide = divide;
    /**
     * Math.ceil the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to ceil
     * @returns {vec2} out
     */
    function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        return out;
    }
    exports.ceil = ceil;
    /**
     * Math.floor the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to floor
     * @returns {vec2} out
     */
    function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        return out;
    }
    exports.floor = floor;
    /**
     * Returns the minimum of two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        return out;
    }
    exports.min = min;
    /**
     * Returns the maximum of two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */
    function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        return out;
    }
    exports.max = max;
    /**
     * Math.round the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to round
     * @returns {vec2} out
     */
    function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        return out;
    }
    exports.round = round;
    /**
     * Scales a vec2 by a scalar number
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec2} out
     */
    function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        return out;
    }
    exports.scale = scale;
    /**
     * Adds two vec2's after scaling the second operand by a scalar value
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec2} out
     */
    function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        return out;
    }
    exports.scaleAndAdd = scaleAndAdd;
    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance(a, b) {
        var x = b[0] - a[0], y = b[1] - a[1];
        return Math.hypot(x, y);
    }
    exports.distance = distance;
    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance(a, b) {
        var x = b[0] - a[0], y = b[1] - a[1];
        return x * x + y * y;
    }
    exports.squaredDistance = squaredDistance;
    /**
     * Calculates the length of a vec2
     *
     * @param {vec2} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length(a) {
        var x = a[0], y = a[1];
        return Math.hypot(x, y);
    }
    exports.length = length;
    /**
     * Calculates the squared length of a vec2
     *
     * @param {vec2} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength(a) {
        var x = a[0], y = a[1];
        return x * x + y * y;
    }
    exports.squaredLength = squaredLength;
    /**
     * Negates the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to negate
     * @returns {vec2} out
     */
    function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
    }
    exports.negate = negate;
    /**
     * Returns the inverse of the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to invert
     * @returns {vec2} out
     */
    function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        return out;
    }
    exports.inverse = inverse;
    /**
     * Normalize a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to normalize
     * @returns {vec2} out
     */
    function normalize(out, a) {
        var x = a[0], y = a[1];
        var len = x * x + y * y;
        if (len > 0) {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        return out;
    }
    exports.normalize = normalize;
    /**
     * Calculates the dot product of two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    }
    exports.dot = dot;
    /**
     * Computes the cross product of two vec2's
     * Note that the cross product must by definition produce a 3D vector
     *
     * @param {vec3} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec3} out
     */
    function cross(out, a, b) {
        var z = a[0] * b[1] - a[1] * b[0];
        out[0] = out[1] = 0;
        out[2] = z;
        return out;
    }
    exports.cross = cross;
    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec2} out
     */
    function lerp(out, a, b, t) {
        var ax = a[0], ay = a[1];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        return out;
    }
    exports.lerp = lerp;
    /**
     * Generates a random vector with the given scale
     *
     * @param {vec2} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec2} out
     */
    function random(out, scale) {
        scale = scale || 1.0;
        var r = glMatrix.RANDOM() * 2.0 * Math.PI;
        out[0] = Math.cos(r) * scale;
        out[1] = Math.sin(r) * scale;
        return out;
    }
    exports.random = random;
    /**
     * Transforms the vec2 with a mat2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat2} m matrix to transform with
     * @returns {vec2} out
     */
    function transformMat2(out, a, m) {
        var x = a[0], y = a[1];
        out[0] = m[0] * x + m[2] * y;
        out[1] = m[1] * x + m[3] * y;
        return out;
    }
    exports.transformMat2 = transformMat2;
    /**
     * Transforms the vec2 with a mat2d
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat2d} m matrix to transform with
     * @returns {vec2} out
     */
    function transformMat2d(out, a, m) {
        var x = a[0], y = a[1];
        out[0] = m[0] * x + m[2] * y + m[4];
        out[1] = m[1] * x + m[3] * y + m[5];
        return out;
    }
    exports.transformMat2d = transformMat2d;
    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat3} m matrix to transform with
     * @returns {vec2} out
     */
    function transformMat3(out, a, m) {
        var x = a[0], y = a[1];
        out[0] = m[0] * x + m[3] * y + m[6];
        out[1] = m[1] * x + m[4] * y + m[7];
        return out;
    }
    exports.transformMat3 = transformMat3;
    /**
     * Transforms the vec2 with a mat4
     * 3rd vector component is implicitly '0'
     * 4th vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec2} out
     */
    function transformMat4(out, a, m) {
        var x = a[0];
        var y = a[1];
        out[0] = m[0] * x + m[4] * y + m[12];
        out[1] = m[1] * x + m[5] * y + m[13];
        return out;
    }
    exports.transformMat4 = transformMat4;
    /**
     * Rotate a 2D vector
     * @param {vec2} out The receiving vec2
     * @param {vec2} a The vec2 point to rotate
     * @param {vec2} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @returns {vec2} out
     */
    function rotate(out, a, b, rad) {
        //Translate point to the origin
        var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad); //perform rotation and translate to correct position
        out[0] = p0 * cosC - p1 * sinC + b[0];
        out[1] = p0 * sinC + p1 * cosC + b[1];
        return out;
    }
    exports.rotate = rotate;
    /**
     * Get the angle between two 2D vectors
     * @param {vec2} a The first operand
     * @param {vec2} b The second operand
     * @returns {Number} The angle in radians
     */
    function angle(a, b) {
        var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], 
        // mag is the product of the magnitudes of a and b
        mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), 
        // mag &&.. short circuits if mag == 0
        cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1
        return Math.acos(Math.min(Math.max(cosine, -1), 1));
    }
    exports.angle = angle;
    /**
     * Set the components of a vec2 to zero
     *
     * @param {vec2} out the receiving vector
     * @returns {vec2} out
     */
    function zero(out) {
        out[0] = 0.0;
        out[1] = 0.0;
        return out;
    }
    exports.zero = zero;
    /**
     * Returns a string representation of a vector
     *
     * @param {vec2} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str(a) {
        return "vec2(" + a[0] + ", " + a[1] + ")";
    }
    exports.str = str;
    /**
     * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
     *
     * @param {vec2} a The first vector.
     * @param {vec2} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1];
    }
    exports.exactEquals = exactEquals;
    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec2} a The first vector.
     * @param {vec2} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function equals(a, b) {
        var a0 = a[0], a1 = a[1];
        var b0 = b[0], b1 = b[1];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
    }
    exports.equals = equals;
    /**
     * Alias for {@link vec2.length}
     * @function
     */
    exports.len = length;
    /**
     * Alias for {@link vec2.subtract}
     * @function
     */
    exports.sub = subtract;
    /**
     * Alias for {@link vec2.multiply}
     * @function
     */
    exports.mul = multiply;
    /**
     * Alias for {@link vec2.divide}
     * @function
     */
    exports.div = divide;
    /**
     * Alias for {@link vec2.distance}
     * @function
     */
    exports.dist = distance;
    /**
     * Alias for {@link vec2.squaredDistance}
     * @function
     */
    exports.sqrDist = squaredDistance;
    /**
     * Alias for {@link vec2.squaredLength}
     * @function
     */
    exports.sqrLen = squaredLength;
    /**
     * Perform some operation over an array of vec2s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    exports.forEach = function () {
        var vec = create();
        return function (a, stride, offset, count, fn, arg) {
            var i, l;
            if (!stride) {
                stride = 2;
            }
            if (!offset) {
                offset = 0;
            }
            if (count) {
                l = Math.min(count * stride + offset, a.length);
            }
            else {
                l = a.length;
            }
            for (i = offset; i < l; i += stride) {
                vec[0] = a[i];
                vec[1] = a[i + 1];
                fn(vec, vec, arg);
                a[i] = vec[0];
                a[i + 1] = vec[1];
            }
            return a;
        };
    }();
},
"7785475bdd": /* models/vtk/vtkvolume.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const vtklayout_1 = require("e13c143c7d") /* ./vtklayout */;
    const util_1 = require("993f3118b2") /* ./util */;
    class VTKVolumePlotView extends vtklayout_1.AbstractVTKView {
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.data.change, () => {
                this._vtk_image_data = (0, util_1.data2VTKImageData)(this.model.data);
                this.invalidate_render();
            });
            this.connect(this.model.properties.colormap.change, () => {
                this.colormap_selector.value = this.model.colormap;
                const event = new Event("change");
                this.colormap_selector.dispatchEvent(event);
            });
            this.connect(this.model.properties.shadow.change, () => {
                this.shadow_selector.value = this.model.shadow ? "1" : "0";
                const event = new Event("change");
                this.shadow_selector.dispatchEvent(event);
            });
            this.connect(this.model.properties.sampling.change, () => {
                this.sampling_slider.value = this.model.sampling.toFixed(2);
                const event = new Event("input");
                this.sampling_slider.dispatchEvent(event);
            });
            this.connect(this.model.properties.edge_gradient.change, () => {
                this.edge_gradient_slider.value = this.model.edge_gradient.toFixed(2);
                const event = new Event("input");
                this.edge_gradient_slider.dispatchEvent(event);
            });
            this.connect(this.model.properties.rescale.change, () => {
                this._controllerWidget.setRescaleColorMap(this.model.rescale);
                this._vtk_renwin.getRenderWindow().render();
            });
            this.connect(this.model.properties.ambient.change, () => {
                this.volume.getProperty().setAmbient(this.model.ambient);
                this._vtk_renwin.getRenderWindow().render();
            });
            this.connect(this.model.properties.diffuse.change, () => {
                this.volume.getProperty().setDiffuse(this.model.diffuse);
                this._vtk_renwin.getRenderWindow().render();
            });
            this.connect(this.model.properties.specular.change, () => {
                this.volume.getProperty().setSpecular(this.model.specular);
                this._vtk_renwin.getRenderWindow().render();
            });
            this.connect(this.model.properties.specular_power.change, () => {
                this.volume.getProperty().setSpecularPower(this.model.specular_power);
                this._vtk_renwin.getRenderWindow().render();
            });
            this.connect(this.model.properties.display_volume.change, () => {
                this._set_volume_visibility(this.model.display_volume);
                this._vtk_renwin.getRenderWindow().render();
            });
            this.connect(this.model.properties.display_slices.change, () => {
                this._set_slices_visibility(this.model.display_slices);
                this._vtk_renwin.getRenderWindow().render();
            });
            this.connect(this.model.properties.slice_i.change, () => {
                if (this.image_actor_i !== undefined) {
                    this.image_actor_i.getMapper().setISlice(this.model.slice_i);
                    this._vtk_renwin.getRenderWindow().render();
                }
            });
            this.connect(this.model.properties.slice_j.change, () => {
                if (this.image_actor_j !== undefined) {
                    this.image_actor_j.getMapper().setJSlice(this.model.slice_j);
                    this._vtk_renwin.getRenderWindow().render();
                }
            });
            this.connect(this.model.properties.slice_k.change, () => {
                if (this.image_actor_k !== undefined) {
                    this.image_actor_k.getMapper().setKSlice(this.model.slice_k);
                    this._vtk_renwin.getRenderWindow().render();
                }
            });
            this.connect(this.model.properties.render_background.change, () => {
                this._vtk_renwin
                    .getRenderer()
                    .setBackground(...(0, util_1.hexToRGB)(this.model.render_background));
                this._vtk_renwin.getRenderWindow().render();
            });
            this.connect(this.model.properties.interpolation.change, () => {
                this._set_interpolation(this.model.interpolation);
                this._vtk_renwin.getRenderWindow().render();
            });
            this.connect(this.model.properties.controller_expanded.change, () => {
                if (this._controllerWidget != null)
                    this._controllerWidget.setExpanded(this.model.controller_expanded);
            });
            this.connect(this.model.properties.nan_opacity.change, () => {
                const scalar_opacity = this.image_actor_i.getProperty().getScalarOpacity();
                scalar_opacity.get(["nodes"]).nodes[0].y = this.model.nan_opacity;
                scalar_opacity.modified();
                this._vtk_renwin.getRenderWindow().render();
            });
        }
        render() {
            this._vtk_renwin = null;
            this._orientationWidget = null;
            this._axes = null;
            super.render();
            this._create_orientation_widget();
            this._set_axes();
            if (!this.model.camera)
                this._vtk_renwin.getRenderer().resetCamera();
            else
                this._set_camera_state();
            this._get_camera_state();
        }
        invalidate_render() {
            this._vtk_renwin = null;
            super.invalidate_render();
        }
        init_vtk_renwin() {
            this._vtk_renwin = util_1.vtkns.FullScreenRenderWindow.newInstance({
                rootContainer: this.el,
                container: this._vtk_container,
            });
        }
        plot() {
            this._controllerWidget = util_1.vtkns.VolumeController.newInstance({
                size: [400, 150],
                rescaleColorMap: this.model.rescale,
            });
            this._plot_volume();
            this._plot_slices();
            this._controllerWidget.setupContent(this._vtk_renwin.getRenderWindow(), this.volume, true);
            this._controllerWidget.setContainer(this.el);
            this._controllerWidget.setExpanded(this.model.controller_expanded);
            this._connect_js_controls();
            this._vtk_renwin.getRenderWindow().getInteractor();
            this._vtk_renwin.getRenderWindow().getInteractor().setDesiredUpdateRate(45);
            this._set_volume_visibility(this.model.display_volume);
            this._set_slices_visibility(this.model.display_slices);
            this._vtk_renwin
                .getRenderer()
                .setBackground(...(0, util_1.hexToRGB)(this.model.render_background));
            this._set_interpolation(this.model.interpolation);
            this._set_camera_state();
        }
        get vtk_image_data() {
            if (!this._vtk_image_data)
                this._vtk_image_data = (0, util_1.data2VTKImageData)(this.model.data);
            return this._vtk_image_data;
        }
        get volume() {
            return this._vtk_renwin.getRenderer().getVolumes()[0];
        }
        get image_actor_i() {
            return this._vtk_renwin.getRenderer().getActors()[0];
        }
        get image_actor_j() {
            return this._vtk_renwin.getRenderer().getActors()[1];
        }
        get image_actor_k() {
            return this._vtk_renwin.getRenderer().getActors()[2];
        }
        get shadow_selector() {
            return this.el.querySelector(".js-shadow");
        }
        get edge_gradient_slider() {
            return this.el.querySelector(".js-edge");
        }
        get sampling_slider() {
            return this.el.querySelector(".js-spacing");
        }
        get colormap_selector() {
            return this.el.querySelector(".js-color-preset");
        }
        _connect_js_controls() {
            const { el: controller_el } = this._controllerWidget.get('el');
            if (controller_el !== undefined) {
                const controller_button = controller_el.querySelector('.js-button');
                controller_button.addEventListener('click', () => this.model.controller_expanded = this._controllerWidget.getExpanded());
            }
            // Colormap selector
            this.colormap_selector.addEventListener("change", () => {
                this.model.colormap = this.colormap_selector.value;
            });
            if (!this.model.colormap)
                this.model.colormap = this.colormap_selector.value;
            else
                this.model.properties.colormap.change.emit();
            // Shadow selector
            this.shadow_selector.addEventListener("change", () => {
                this.model.shadow = !!Number(this.shadow_selector.value);
            });
            if ((this.model.shadow = !!Number(this.shadow_selector.value)))
                this.model.properties.shadow.change.emit();
            // Sampling slider
            this.sampling_slider.addEventListener("input", () => {
                const js_sampling_value = Number(this.sampling_slider.value);
                if (Math.abs(this.model.sampling - js_sampling_value) >= 5e-3)
                    this.model.sampling = js_sampling_value;
            });
            if (Math.abs(this.model.sampling - Number(this.shadow_selector.value)) >= 5e-3)
                this.model.properties.sampling.change.emit();
            // Edge Gradient slider
            this.edge_gradient_slider.addEventListener("input", () => {
                const js_edge_gradient_value = Number(this.edge_gradient_slider.value);
                if (Math.abs(this.model.edge_gradient - js_edge_gradient_value) >= 5e-3)
                    this.model.edge_gradient = js_edge_gradient_value;
            });
            if (Math.abs(this.model.edge_gradient - Number(this.edge_gradient_slider.value)) >= 5e-3)
                this.model.properties.edge_gradient.change.emit();
        }
        _plot_slices() {
            const source = this._vtk_image_data;
            const image_actor_i = util_1.vtkns.ImageSlice.newInstance();
            const image_actor_j = util_1.vtkns.ImageSlice.newInstance();
            const image_actor_k = util_1.vtkns.ImageSlice.newInstance();
            const image_mapper_i = util_1.vtkns.ImageMapper.newInstance();
            const image_mapper_j = util_1.vtkns.ImageMapper.newInstance();
            const image_mapper_k = util_1.vtkns.ImageMapper.newInstance();
            image_mapper_i.setInputData(source);
            image_mapper_i.setISlice(this.model.slice_i);
            image_actor_i.setMapper(image_mapper_i);
            image_mapper_j.setInputData(source);
            image_mapper_j.setJSlice(this.model.slice_j);
            image_actor_j.setMapper(image_mapper_j);
            image_mapper_k.setInputData(source);
            image_mapper_k.setKSlice(this.model.slice_k);
            image_actor_k.setMapper(image_mapper_k);
            // set_color and opacity
            const piecewiseFunction = util_1.vtkns.PiecewiseFunction.newInstance();
            const lookupTable = this.volume.getProperty().getRGBTransferFunction(0);
            const range = this.volume.getMapper().getInputData().getPointData().getScalars().getRange();
            piecewiseFunction.removeAllPoints();
            piecewiseFunction.addPoint(range[0] - 1, this.model.nan_opacity);
            piecewiseFunction.addPoint(range[0], 1);
            piecewiseFunction.addPoint(range[1], 1);
            const property = image_actor_i.getProperty();
            image_actor_j.setProperty(property);
            image_actor_k.setProperty(property);
            property.setRGBTransferFunction(lookupTable);
            property.setScalarOpacity(piecewiseFunction);
            const renderer = this._vtk_renwin.getRenderer();
            renderer.addActor(image_actor_i);
            renderer.addActor(image_actor_j);
            renderer.addActor(image_actor_k);
        }
        _plot_volume() {
            //Create vtk volume and add it to the scene
            const source = this.vtk_image_data;
            const actor = util_1.vtkns.Volume.newInstance();
            const mapper = util_1.vtkns.VolumeMapper.newInstance();
            actor.setMapper(mapper);
            mapper.setInputData(source);
            const dataArray = source.getPointData().getScalars() || source.getPointData().getArrays()[0];
            const dataRange = dataArray.getRange();
            const lookupTable = util_1.vtkns.ColorTransferFunction.newInstance();
            lookupTable.onModified(() => (this.model.mapper = (0, util_1.vtkLutToMapper)(lookupTable)));
            const piecewiseFunction = util_1.vtkns.PiecewiseFunction.newInstance();
            const sampleDistance = 0.7 *
                Math.sqrt(source
                    .getSpacing()
                    .map((v) => v * v)
                    .reduce((a, b) => a + b, 0));
            mapper.setSampleDistance(sampleDistance);
            actor.getProperty().setRGBTransferFunction(0, lookupTable);
            actor.getProperty().setScalarOpacity(0, piecewiseFunction);
            actor.getProperty().setInterpolationTypeToFastLinear();
            // actor.getProperty().setInterpolationTypeToLinear();
            // For better looking volume rendering
            // - distance in world coordinates a scalar opacity of 1.0
            actor
                .getProperty()
                .setScalarOpacityUnitDistance(0, util_1.vtkns.BoundingBox.getDiagonalLength(source.getBounds()) /
                Math.max(...source.getDimensions()));
            // - control how we emphasize surface boundaries
            //  => max should be around the average gradient magnitude for the
            //     volume or maybe average plus one std dev of the gradient magnitude
            //     (adjusted for spacing, this is a world coordinate gradient, not a
            //     pixel gradient)
            //  => max hack: (dataRange[1] - dataRange[0]) * 0.05
            actor.getProperty().setGradientOpacityMinimumValue(0, 0);
            actor
                .getProperty()
                .setGradientOpacityMaximumValue(0, (dataRange[1] - dataRange[0]) * 0.05);
            // - Use shading based on gradient
            actor.getProperty().setShade(this.model.shadow);
            actor.getProperty().setUseGradientOpacity(0, true);
            // - generic good default
            actor.getProperty().setGradientOpacityMinimumOpacity(0, 0.0);
            actor.getProperty().setGradientOpacityMaximumOpacity(0, 1.0);
            actor.getProperty().setAmbient(this.model.ambient);
            actor.getProperty().setDiffuse(this.model.diffuse);
            actor.getProperty().setSpecular(this.model.specular);
            actor.getProperty().setSpecularPower(this.model.specular_power);
            this._vtk_renwin.getRenderer().addVolume(actor);
        }
        _set_interpolation(interpolation) {
            if (interpolation == "fast_linear") {
                this.volume.getProperty().setInterpolationTypeToFastLinear();
                this.image_actor_i.getProperty().setInterpolationTypeToLinear();
            }
            else if (interpolation == "linear") {
                this.volume.getProperty().setInterpolationTypeToLinear();
                this.image_actor_i.getProperty().setInterpolationTypeToLinear();
            }
            else {
                //nearest
                this.volume.getProperty().setInterpolationTypeToNearest();
                this.image_actor_i.getProperty().setInterpolationTypeToNearest();
            }
        }
        _set_slices_visibility(visibility) {
            this.image_actor_i.setVisibility(visibility);
            this.image_actor_j.setVisibility(visibility);
            this.image_actor_k.setVisibility(visibility);
        }
        _set_volume_visibility(visibility) {
            this.volume.setVisibility(visibility);
        }
    }
    exports.VTKVolumePlotView = VTKVolumePlotView;
    VTKVolumePlotView.__name__ = "VTKVolumePlotView";
    class VTKVolumePlot extends vtklayout_1.AbstractVTKPlot {
        constructor(attrs) {
            super(attrs);
        }
        static init_VTKVolumePlot() {
            this.prototype.default_view = VTKVolumePlotView;
            this.define(({ Any, Array, Boolean, Int, Number, String, Struct }) => ({
                ambient: [Number, 0.2],
                colormap: [String],
                data: [Any],
                diffuse: [Number, 0.7],
                display_slices: [Boolean, false],
                display_volume: [Boolean, true],
                edge_gradient: [Number, 0.2],
                interpolation: [util_1.Interpolation, 'fast_linear'],
                mapper: [Struct({ palette: Array(String), low: Number, high: Number })],
                nan_opacity: [Number, 1],
                render_background: [String, '#52576e'],
                rescale: [Boolean, false],
                sampling: [Number, 0.4],
                shadow: [Boolean, true],
                slice_i: [Int, 0],
                slice_j: [Int, 0],
                slice_k: [Int, 0],
                specular: [Number, 0.3],
                specular_power: [Number, 8.0],
                controller_expanded: [Boolean, true],
            }));
        }
    }
    exports.VTKVolumePlot = VTKVolumePlot;
    VTKVolumePlot.__name__ = "VTKVolumePlot";
    VTKVolumePlot.init_VTKVolumePlot();
},
"0a57062475": /* models/vtk/vtksynchronized.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const object_1 = require("@bokehjs/core/util/object");
    const vtklayout_1 = require("e13c143c7d") /* ./vtklayout */;
    const panel_fullscreen_renwin_sync_1 = require("877619fe71") /* ./panel_fullscreen_renwin_sync */;
    const util_1 = require("993f3118b2") /* ./util */;
    const CONTEXT_NAME = "panel";
    class VTKSynchronizedPlotView extends vtklayout_1.AbstractVTKView {
        initialize() {
            super.initialize();
            this._promises = [];
            this._renderable = false;
            this._arrays = {};
            this._decoded_arrays = {};
            this._pending_arrays = {};
            this.registerArray = (hash, array) => {
                this._arrays[hash] = array;
                if (this._pending_arrays[hash]) {
                    this._pending_arrays[hash].resolve(array);
                }
                return true;
            };
            // Context initialisation
            this._synchronizer_context = util_1.vtkns.SynchronizableRenderWindow.getSynchronizerContext(CONTEXT_NAME);
        }
        connect_signals() {
            super.connect_signals();
            this.connect(this.model.properties.arrays.change, () => this._decode_arrays());
            this.connect(this.model.properties.scene.change, () => {
                if (this.model.rebuild) {
                    this._vtk_renwin = null;
                    this.invalidate_render();
                }
                else {
                    const state = (0, object_1.clone)(this.model.scene);
                    Promise.all(this._promises).then(() => {
                        this._sync_plot(state, () => {
                            this._on_scene_ready();
                        });
                    });
                }
            });
            this.connect(this.model.properties.one_time_reset.change, () => {
                this._vtk_renwin.getRenderWindow().clearOneTimeUpdaters();
            });
        }
        init_vtk_renwin() {
            this._vtk_renwin = util_1.vtkns.FullScreenRenderWindowSynchronized.newInstance({
                rootContainer: this.el,
                container: this._vtk_container,
                synchronizerContext: this._synchronizer_context,
            });
        }
        plot() {
            this._vtk_renwin.getRenderWindow().clearOneTimeUpdaters();
            this._decode_arrays();
            const state = (0, object_1.clone)(this.model.scene);
            Promise.all(this._promises).then(() => {
                this._sync_plot(state, () => this._on_scene_ready()).then(() => {
                    this._set_camera_state();
                    this._get_camera_state();
                });
            });
        }
        _decode_arrays() {
            const jszip = new util_1.vtkns.ThirdParty.JSZip();
            const arrays = this.model.arrays;
            const registerArray = this.registerArray;
            const arrays_processed = this.model.arrays_processed;
            const model = this.model;
            function load(key) {
                return jszip
                    .loadAsync(atob(arrays[key]))
                    .then((zip) => zip.file("data/" + key))
                    .then((zipEntry) => zipEntry.async("arraybuffer"))
                    .then((arraybuffer) => registerArray(key, arraybuffer))
                    .then(() => {
                    arrays_processed.push(key);
                    model.properties.arrays_processed.change.emit();
                });
            }
            Object.keys(arrays).forEach((key) => {
                if (!this._decoded_arrays[key]) {
                    this._decoded_arrays[key] = true;
                    this._promises.push(load(key));
                }
            });
        }
        _on_scene_ready() {
            if (this._promises.length > 0)
                return;
            this._renderable = true;
            this._camera_callbacks.push(this._vtk_renwin
                .getRenderer()
                .getActiveCamera()
                .onModified(() => this._vtk_render()));
            if (!this._orientationWidget)
                this._create_orientation_widget();
            if (!this._axes)
                this._set_axes();
            this._vtk_renwin.resize();
            this._vtk_render();
        }
        _sync_plot(state, onSceneReady) {
            // Need to ensure all promises are resolved before calling this function
            this._renderable = false;
            this._promises = [];
            this._unsubscribe_camera_cb();
            this._synchronizer_context.setFetchArrayFunction((hash) => {
                return Promise.resolve(this._arrays[hash]);
            });
            const renderer = this._synchronizer_context.getInstance(this.model.scene.dependencies[0].id);
            if (renderer && !this._vtk_renwin.getRenderer())
                this._vtk_renwin.getRenderWindow().addRenderer(renderer);
            return this._vtk_renwin
                .getRenderWindow()
                .synchronize(state).then(onSceneReady);
        }
    }
    exports.VTKSynchronizedPlotView = VTKSynchronizedPlotView;
    VTKSynchronizedPlotView.__name__ = "VTKSynchronizedPlotView";
    class VTKSynchronizedPlot extends vtklayout_1.AbstractVTKPlot {
        constructor(attrs) {
            super(attrs);
            (0, panel_fullscreen_renwin_sync_1.initialize_fullscreen_render)();
            this.outline = util_1.vtkns.OutlineFilter.newInstance(); //use to display bouding box of a selected actor
            const mapper = util_1.vtkns.Mapper.newInstance();
            mapper.setInputConnection(this.outline.getOutputPort());
            this.outline_actor = util_1.vtkns.Actor.newInstance();
            this.outline_actor.setMapper(mapper);
        }
        getActors(ptr_ref) {
            let actors = this.renderer_el.getRenderer().getActors();
            if (ptr_ref) {
                const context = this.renderer_el.getSynchronizerContext(CONTEXT_NAME);
                actors = actors.filter((actor) => {
                    const id_actor = context.getInstanceId(actor);
                    return id_actor ? id_actor.slice(-16) == ptr_ref.slice(1, 17) : false;
                });
            }
            return actors;
        }
        static init_VTKSynchronizedPlot() {
            this.prototype.default_view = VTKSynchronizedPlotView;
            this.define(({ Any, Array, Boolean, String }) => ({
                arrays: [Any, {}],
                arrays_processed: [Array(String), []],
                enable_keybindings: [Boolean, false],
                one_time_reset: [Boolean],
                rebuild: [Boolean, false],
                scene: [Any, {}],
            }));
            this.override({
                height: 300,
                width: 300,
            });
        }
    }
    exports.VTKSynchronizedPlot = VTKSynchronizedPlot;
    VTKSynchronizedPlot.__name__ = "VTKSynchronizedPlot";
    VTKSynchronizedPlot.__module__ = "panel.models.vtk";
    VTKSynchronizedPlot.init_VTKSynchronizedPlot();
},
"877619fe71": /* models/vtk/panel_fullscreen_renwin_sync.js */ function _(require, module, exports, __esModule, __esExport) {
    __esModule();
    const util_1 = require("993f3118b2") /* ./util */;
    //------------------------//
    //Custom Extended Classes
    //------------------------//
    const DEFAULT_VALUES = {
        containerStyle: null,
        controlPanelStyle: null,
        listenWindowResize: true,
        resizeCallback: null,
        controllerVisibility: true,
        synchronizerContextName: "default",
    };
    const STYLE_CONTROL_PANEL = {
        position: "absolute",
        left: "25px",
        top: "25px",
        backgroundColor: "white",
        borderRadius: "5px",
        listStyle: "none",
        padding: "5px 10px",
        margin: "0",
        display: "block",
        border: "solid 1px black",
        maxWidth: "calc(100vw - 70px)",
        maxHeight: "calc(100vh - 60px)",
        overflow: "auto",
    };
    function panelFullScreenRenderWindowSynchronized(publicAPI, model) {
        // Panel (modification) synchronizable renderWindow
        model.renderWindow = util_1.vtkns.SynchronizableRenderWindow.newInstance({
            synchronizerContext: model.synchronizerContext,
        });
        // OpenGlRenderWindow
        model.openGLRenderWindow = util_1.vtkns.OpenGLRenderWindow.newInstance();
        model.openGLRenderWindow.setContainer(model.container);
        model.renderWindow.addView(model.openGLRenderWindow);
        // Interactor
        model.interactor = util_1.vtkns.RenderWindowInteractor.newInstance();
        model.interactor.setInteractorStyle(util_1.vtkns.InteractorStyleTrackballCamera.newInstance());
        model.interactor.setView(model.openGLRenderWindow);
        model.interactor.initialize();
        model.interactor.bindEvents(model.container);
        publicAPI.getRenderer = () => model.renderWindow.getRenderers()[0];
        publicAPI.removeController = () => {
            const el = model.controlContainer;
            if (el) {
                el.parentNode.removeChild(el);
            }
        };
        publicAPI.setControllerVisibility = (visible) => {
            model.controllerVisibility = visible;
            if (model.controlContainer) {
                if (visible) {
                    model.controlContainer.style.display = "block";
                }
                else {
                    model.controlContainer.style.display = "none";
                }
            }
        };
        publicAPI.toggleControllerVisibility = () => {
            publicAPI.setControllerVisibility(!model.controllerVisibility);
        };
        publicAPI.addController = (html) => {
            model.controlContainer = document.createElement("div");
            (0, util_1.applyStyle)(model.controlContainer, model.controlPanelStyle || STYLE_CONTROL_PANEL);
            model.rootContainer.appendChild(model.controlContainer);
            model.controlContainer.innerHTML = html;
            publicAPI.setControllerVisibility(model.controllerVisibility);
            model.rootContainer.addEventListener("keypress", (e) => {
                if (String.fromCharCode(e.charCode) === "c") {
                    publicAPI.toggleControllerVisibility();
                }
            });
        };
        // Properly release GL context
        publicAPI.delete = window.vtk.macro.chain(publicAPI.setContainer, model.openGLRenderWindow.delete, publicAPI.delete);
        // Handle window resize
        publicAPI.resize = () => {
            const dims = model.container.getBoundingClientRect();
            const devicePixelRatio = window.devicePixelRatio || 1;
            model.openGLRenderWindow.setSize(Math.floor(dims.width * devicePixelRatio), Math.floor(dims.height * devicePixelRatio));
            if (model.resizeCallback) {
                model.resizeCallback(dims);
            }
            model.renderWindow.render();
        };
        publicAPI.setResizeCallback = (cb) => {
            model.resizeCallback = cb;
            publicAPI.resize();
        };
        if (model.listenWindowResize) {
            window.addEventListener("resize", publicAPI.resize);
        }
        publicAPI.resize();
    }
    function initialize_fullscreen_render() {
        let FullScreenRenderWindowSynchronized = {
            newInstance: window.vtk.macro.newInstance((publicAPI, model, initialValues = {}) => {
                Object.assign(model, DEFAULT_VALUES, initialValues);
                // Object methods
                window.vtk.macro.obj(publicAPI, model);
                window.vtk.macro.get(publicAPI, model, [
                    "renderWindow",
                    "openGLRenderWindow",
                    "interactor",
                    "rootContainer",
                    "container",
                    "controlContainer",
                    "synchronizerContext",
                ]);
                // Object specific methods
                panelFullScreenRenderWindowSynchronized(publicAPI, model);
            }),
        };
        util_1.vtkns.FullScreenRenderWindowSynchronized = FullScreenRenderWindowSynchronized;
    }
    exports.initialize_fullscreen_render = initialize_fullscreen_render;
},
}, "4e90918c0a", {"index":"4e90918c0a","models/index":"5b284469f0","models/ace":"2e12ebdb23","models/layout":"80a6464b1f","models/audio":"33955cfa6f","models/card":"0972f6e77b","models/comm_manager":"754fbb1f55","models/customselect":"e258e515be","models/tabulator":"65f9efaf79","models/data":"7f7d9e0c6b","models/datetime_picker":"b843627155","models/deckgl":"0155f7af4d","models/tooltips":"6e04fbe567","models/echarts":"9d046c4720","models/html":"3d7593ca5a","models/event-to-object":"d92f7d4d2b","models/idom":"7d45bd3bc4","models/ipywidget":"5ad9f86156","models/json":"0d30bea0c8","models/jsoneditor":"5379466860","models/file_download":"1767172ffa","models/katex":"7b859fb3cf","models/location":"aca9ec82ba","models/mathjax":"0c21036737","models/perspective":"4ae96bd77b","models/player":"588a5ae70d","models/plotly":"42de27e56c","models/util":"990b5dd5c7","models/progress":"979633320f","models/quill":"d51a79a0a3","models/reactive_html":"ad426de39c","models/singleselect":"ab54efe08a","models/speech_to_text":"a96be0bcc9","models/state":"bfa46a5f19","models/tabs":"ab17724bd6","models/terminal":"3ea011fa55","models/text_to_speech":"33cd2c254e","models/trend":"effe070807","models/vega":"fea356270f","models/video":"1b46fd56a8","models/videostream":"e3e9b8e495","models/vtk/index":"c51f25e2a7","models/vtk/vtkjs":"b6d9199d03","models/vtk/vtklayout":"e13c143c7d","models/vtk/util":"993f3118b2","models/vtk/vtkcolorbar":"c010237f8b","models/vtk/vtkaxes":"ab478186ba","models/vtk/vtkvolume":"7785475bdd","models/vtk/vtksynchronized":"0a57062475","models/vtk/panel_fullscreen_renwin_sync":"877619fe71"}, {});});
//# sourceMappingURL=panel.js.map
