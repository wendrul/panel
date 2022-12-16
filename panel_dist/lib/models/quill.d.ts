import * as p from "@bokehjs/core/properties";
import { HTMLBox } from "@bokehjs/models/layouts/html_box";
import { PanelHTMLBoxView } from "./layout";
export declare class QuillInputView extends PanelHTMLBoxView {
    model: QuillInput;
    protected _container: HTMLDivElement;
    protected _editor: HTMLDivElement;
    protected _editing: boolean;
    protected _toolbar: HTMLDivElement | null;
    quill: any;
    initialize(): void;
    connect_signals(): void;
    _layout_toolbar(): void;
    render(): void;
    after_layout(): void;
}
export declare namespace QuillInput {
    type Attrs = p.AttrsOf<Props>;
    type Props = HTMLBox.Props & {
        mode: p.Property<string>;
        placeholder: p.Property<string>;
        text: p.Property<string>;
        toolbar: p.Property<any>;
    };
}
export interface QuillInput extends QuillInput.Attrs {
}
export declare class QuillInput extends HTMLBox {
    properties: QuillInput.Props;
    constructor(attrs?: Partial<QuillInput.Attrs>);
    static __module__: string;
    static init_QuillInput(): void;
}
