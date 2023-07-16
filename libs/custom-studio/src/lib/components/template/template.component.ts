import { Component, Input } from '@angular/core';
import { IBoardData } from '@brahmos/studio-modal';
import { IDroppableEventObject } from '../..//directives/dropable.directive';
import { AddChildElement, IStudioTree } from '../../state';
import { Store } from '@ngxs/store';

@Component({
    selector: 'db-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss'],
})
export class DBTemplateComponent {
    @Input() item!: IBoardData;
    @Input() parentId!: string;
    id = '';

    constructor(private _store: Store) {}

    onDrop(e: IDroppableEventObject, elementIndex: number) {
        e.event.preventDefault();
        e.event.stopPropagation();
        console.log(e);
        const data: IStudioTree = {
            child: e.data.child,
            cssClass: e.data.cssClass,
            tagName: e.data.tagName,
            defaultValue: '',
            id: e.data.id,
            forName: e.data.forName,
            icon: '',
            hoverText: '',
            placeholder: '',
            parentId: `${this.parentId}_${elementIndex}`,
        };
        this._store.dispatch(new AddChildElement(data, this.parentId));
    }
}
