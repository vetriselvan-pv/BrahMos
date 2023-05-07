import { Component } from '@angular/core';
import { DragService } from '../zone-service/drag.service';
import { IDroppableEventObject } from '../zone-service/dropable.directive';
import { IBoardData } from '@brahmos/studio-modal';

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

    constructor(protected dragService: DragService) {}

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
    }

    dragOver(event: Event) {
        event.preventDefault();
    }
}
