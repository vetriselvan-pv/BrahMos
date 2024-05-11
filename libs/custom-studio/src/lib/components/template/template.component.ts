import { Component, Input } from '@angular/core';
import { IDesignElementConfig } from '@brahmos/studio-modal';
import { IDroppableEventObject } from '../..//directives/dropable.directive';
import { StudioStateService } from '../../services/studio-state.service';

@Component({
    selector: 'db-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss'],
})
export class DBTemplateComponent {
    @Input() item!: IDesignElementConfig;
    @Input() parentId!: string;
    id = '';

    constructor(private _studioState: StudioStateService) {}

    onDrop(e: IDroppableEventObject, elementIndex: number) {
        e.event.preventDefault();
        e.event.stopPropagation();
        console.log(e);
        const data: IDesignElementConfig = {
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
            zones: [],
        };
        this._studioState.addChildElement(
            data,
            `${this.parentId}_${elementIndex}`
        );
    }
}
