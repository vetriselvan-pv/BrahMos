import { IStudioTree } from './studio.model';

/* eslint-disable no-unused-vars */
export class AddElement {
    static readonly type = '[Studio] Element added';
    constructor(public element: IStudioTree, public index: number) {}
}

export class ModifyElement {
    static readonly type = '[Studio] Element Modified';
    constructor(public element: IStudioTree, public index: number) {}
}
