import { Component, Input } from '@angular/core';
import { IDesignElementConfig } from '@brahmos/studio-modal';
import { DragService } from '../../services/drag.service';

@Component({
    selector: 'db-menu-bar-list',
    templateUrl: './menu-bar-list.component.html',
    styleUrls: ['./menu-bar-list.component.scss'],
})
export class DBMenuBarListComponent {
    @Input() optionlist: IDesignElementConfig[] = [];
    /**
     * @desc responsible for handling the zone drop event
     * @param {any} event - the event data specific to the implementation
     */
    //  public onZoneDrop(event: any) {

    // console.log(event)
    // Update your data here
    // Add the droppable to the new zone, with updated data
    // this.draggableObjects[event.zone.column].push({
    //   data: {
    //     id: event.data.id,
    //     payload: event.data.payload,
    //     name: event.data.name,
    //     currentColumn: event.zone.column
    //   },
    //   zones: this.generateZones(event.zone.column)
    // });

    // Find the ID and remove it
    // for (let i = 0; i < this.draggableObjects[event.data.currentColumn].length; i++) {
    //   if (event.data.id === this.draggableObjects[event.data.currentColumn][i].data.id) {
    //     // Remove the droppable from the old zone
    //     this.draggableObjects[event.data.currentColumn].splice(i, 1);
    //   }
    // }
    // }
    constructor(private dragService: DragService) {}
}
