import { tagType } from '@brahmos/studio-modal';

export interface IStudioTree {
    tagName: tagType;
    cssClass?: string | string[];
    defaultValue: string;
    value?: unknown;
    child?: IStudioTree[];
    id?: string;
    forName?: string;
    selector?: string;
    icon?: string;
    hoverText?: string;
    placeholder?: string;
    uId?: string;
}

export interface IStudio {
    parent: IStudioTree[];
}
