import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddChildElement, AddElement } from './studio.actions';
import { IChildFn, IStudio } from './studio.model';
// import { StateOperator, patch, updateItem } from '@ngxs/store/operators';

@State<IStudio>({
    name: 'Studio',
    defaults: {
        parent: [],
    },
})
@Injectable()
export class StudioState {
    childMap: { [k: number]: IChildFn } = {};

    @Action(AddElement)
    addElement(ctx: StateContext<IStudio>, action: AddElement) {
        const state = ctx.getState();
        state.parent.push(action.element);
        console.log(state, action);
        ctx.setState({
            ...state,
        });
    }
    /**
     *
     *  note added just to remove the error it won't work
     */
    @Action(AddChildElement)
    addChildElement(ctx: StateContext<IStudio>, action: AddChildElement) {
        // const parentIdIndex = action.parentId.split('_').slice(1) as string[];
        const state = ctx.getState();
        state.parent.push(action.element);
        console.log(state, action);
        ctx.setState({
            ...state,
        });
        // ctx.patchState(
        //   patch<IStudio>({
        //     parent[Number(parentIdIndex[0])]: patch({
        //         child : action.element.child
        //     }
        //     )
        //   })
        // )
    }

    // patchElement(entity: IStudioTree): StateOperator<IStudioTree> {
    //     return (state: IStudio) => {
    //       console.log(entity)
    //         return {
    //           ...state.parent[0]
    //         };
    //     };
    // }
}
