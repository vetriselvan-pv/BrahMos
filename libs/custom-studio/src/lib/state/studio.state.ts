import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddElement } from './studio.actions';
import { IStudio } from './studio.model';

@State<IStudio>({
    name: 'Studio',
    defaults: {
        parent: [],
    },
})
@Injectable()
export class StudioState {
    @Action(AddElement)
    addElement(ctx: StateContext<IStudio>, action: AddElement) {
        const state = ctx.getState();
        state.parent.push(action.element);
        console.log(state, action);
        ctx.setState({
            ...state,
        });
    }
}
