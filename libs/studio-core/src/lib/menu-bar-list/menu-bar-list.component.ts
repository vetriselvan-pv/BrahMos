import { CdkDragStart, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { IBoardData } from '@brahmos/studio-modal';
import { DynamicTemplateService } from '@brahmos/shared-directives';

@Component({
    selector: 'db-menu-bar-list',
    templateUrl: './menu-bar-list.component.html',
    styleUrls: ['./menu-bar-list.component.scss'],
})
export class MenuBarListComponent {
    @Input() optionlist: IBoardData[] = [];
    doneList!: CdkDropList<unknown>[];

    constructor(protected _templateService: DynamicTemplateService) {}

    transferringItem: IBoardData | undefined = undefined;

    noReturnPredicate() {
        return false;
    }
    entered() {
        this.transferringItem = undefined;
    }

    exited(e: CdkDragStart<IBoardData>) {
        this.transferringItem = e.source.data;
    }
}
