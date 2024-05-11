import {
    CdkDragDrop,
    CdkDropList,
    copyArrayItem,
    moveItemInArray,
    transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { DynamicTemplateService } from '@brahmos/shared-directives';
import { IDesignElementConfig } from '@brahmos/studio-modal';

@Component({
    selector: 'db-studio-board',
    templateUrl: './studio-board.component.html',
    styleUrls: ['./studio-board.component.scss'],
})
export class StudioBoardComponent {
    @ViewChild(CdkDropList) doneList!: CdkDropList;

    boardData: IDesignElementConfig;

    constructor(protected _dynamicTemplateService: DynamicTemplateService) {
        this.boardData = {
            hoverText: '',
            icon: '',
            placeholder: '',
            tagName: 'div',
            uId: 'board_0',
            child: [],
        };
    }

    drop(event: CdkDragDrop<IDesignElementConfig[], IDesignElementConfig[]>) {
        console.log(event);
        if (
            event.previousContainer.id === 'board_0' &&
            event.container.id === 'board_0'
        ) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else if (
            event.previousContainer.id === 'board_0' &&
            !['0', 'menu_0', 'menu_1'].includes(event.container.id)
        ) {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            copyArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
        console.log(this.boardData);
    }
}
