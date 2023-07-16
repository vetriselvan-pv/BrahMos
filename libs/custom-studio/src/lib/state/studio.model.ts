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
    parentId: string;
}

export interface IStudio {
    parent: IStudioTree[];
}

export interface IChildFn {
    (data: IStudioTree[], payload: unknown, args: Array<string>): void;
}

export type ElementProps = keyof IStudioTree;
