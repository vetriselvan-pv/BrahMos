import { Component } from '@angular/core';
import { IBoardData } from '@brahmos/studio-modal';
import { DragService } from '../../services/drag.service';
import { IDroppableEventObject } from '../../directives/dropable.directive';
import { Store } from '@ngxs/store';
import { AddElement, IStudioTree } from '../../state';

@Component({
    selector: 'db-studio-board',
    templateUrl: './studio-board.component.html',
    styleUrls: ['./studio-board.component.scss'],
})
export class DBStudioBoardComponent {
    private draggableElements = 3;
    private zonePrefix = 'zone-';
    public droppableObjects: Array<IBoardData> = [];
    public draggableObjects: Array<Array<IBoardData>> = [[], [], []];

    constructor(protected dragService: DragService, private _store: Store) {}

    /**
     * @desc responsible for generating the zones that a draggable element can go too.
     * @param {number} zone - the zone that the draggable element is a part of
     * @returns Array<string> an array of zone IDs that the draggable element can be dropped into
     */
    private generateZones(zone: number): Array<string> {
        // Generate all available zones
        const zones: Array<string> = [];
        for (let i = 0; i < this.draggableElements; i++) {
            zones.push(this.zonePrefix + i);
        }
        // Remove the current zone
        zones.splice(zone, 1);
        return zones;
    }

    onDrop(e: IDroppableEventObject) {
        console.log(e);
        this.droppableObjects.push(e.data);
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
            parentId: `parent_${this.droppableObjects.length - 1}`,
        };
        this._store.dispatch(new AddElement(data, -1));
    }

    dragOver(event: Event) {
        event.preventDefault();
    }
}
