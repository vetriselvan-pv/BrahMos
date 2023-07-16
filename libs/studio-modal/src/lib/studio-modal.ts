export interface IBoardData {
    selector?: string;
    tagName: tagType;
    id?: string;
    icon: string;
    hoverText: string;
    placeholder: string;
    cssClass?: string[];
    defaultValue: string;
    value?: unknown;
    child: IBoardData[];
    uId?: string;
    zones: Array<string>;
    forName?: string;
    parentId: string;
}

export interface IMenuList {
    heading: string;
    options: IBoardData[];
}

export type tagType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'div'
    | 'break'
    | 'textbox'
    | 'checkbox'
    | 'radioButton'
    | 'color'
    | 'password'
    | 'number'
    | 'email'
    | 'paragraph';
