/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';

@Injectable()
export class DragService {
    private zoneIDs: Array<string> = [];
    private availableZones: { [k: string]: any } = {};

    /**
     * @desc responsible for storing the draggable elements
     * zone target.
     * @param {Array<string>} zoneIDs - the zoneIDs
     */
    public startDrag(zoneIDs: Array<string> | undefined) {
        if (zoneIDs) {
            this.zoneIDs = zoneIDs;
            this.highLightAvailableZones();
        }
    }

    /**
     * @desc responsible for matching the droppable element
     * with a draggable element
     * @param {string} zoneID - the zone ID to search for
     */
    public accepts(zoneID: string | undefined): boolean {
        return zoneID ? this.zoneIDs.indexOf(zoneID) > -1 : false;
    }

    /**
     * @desc responsible for removing highlighted available zones
     * that a draggable element can be added too.
     */
    public removeHighLightedAvailableZones(): void {
        this.zoneIDs.forEach((zone: string) => {
            this.availableZones[zone].end();
        });
    }

    /**
     * @desc responsible for adding an available zone
     * @param {{ begin: Function, end: Function }} zoneID - zone key from DroppableOptions
     * @param {string} obj - reference to a start and stop object
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    public addAvailableZone(
        zoneID: string | undefined,
        obj: { begin: Function; end: Function }
    ): void {
        if (zoneID) this.availableZones[zoneID] = obj;
    }

    /**
     * @desc responsible for removing an available zone
     * @param {string} zoneID - the zone ID to search for
     */
    public removeAvailableZone(zoneID: string | undefined): void {
        if (zoneID) delete this.availableZones[zoneID];
    }

    /**
     * @desc responsible for highlighting available zones
     * that a draggable element can be added too.
     */
    private highLightAvailableZones(): void {
        this.zoneIDs.forEach((zone: string) => {
            this.availableZones[zone].begin();
        });
    }
}
