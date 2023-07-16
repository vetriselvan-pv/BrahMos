import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddChildElement, AddElement } from './studio.actions';
import { IChildFn, IStudio } from './studio.model';
import { childOne, childTwo } from './childFn.function';

@State<IStudio>({
    name: 'Studio',
    defaults: {
        parent: [],
    },
})
@Injectable()
export class StudioState {
    childMap: { [k: number]: IChildFn } = {};

    constructor() {
        this.childMap = {
            1: childOne,
            2: childTwo,
        };
    }

    @Action(AddElement)
    addElement(ctx: StateContext<IStudio>, action: AddElement) {
        const state = ctx.getState();
        state.parent.push(action.element);
        console.log(state, action);
        ctx.setState({
            ...state,
        });
    }

    @Action(AddChildElement)
    addChildElement(ctx: StateContext<IStudio>, action: AddChildElement) {
        const state = ctx.getState();
        console.log(action);
        const parentIdIndex = action.parentId.split('_');
        this.childMap[parentIdIndex.length - 1](
            state.parent,
            action.element,
            parentIdIndex
        );
    }
}
