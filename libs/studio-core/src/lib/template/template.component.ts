import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { DynamicTemplateService } from '@brahmos/shared-directives';
import { IBoardData } from '@brahmos/studio-modal';

@Component({
    selector: 'db-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnChanges {
    @Input() item!: IBoardData;
    @Output() itemDrop: EventEmitter<CdkDragDrop<IBoardData>> =
        new EventEmitter<CdkDragDrop<IBoardData>>();
    id = '';
    constructor(protected _templateService: DynamicTemplateService) {}
    public onDragDrop(event: CdkDragDrop<IBoardData, IBoardData>): void {
        this.itemDrop.emit(event);
        console.log('child', event);
    }

    public get connectedTo(): string {
        const id = this._templateService.makeid(3);
        this._templateService.dragConnectedTo.push(id);
        this._templateService.dragConnectedTo$.next(id);
        return id;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (
            changes['item'].currentValue !== changes['item'].previousValue &&
            changes['item'].currentValue['tagName'] === 'div'
        ) {
            this.id = this.connectedTo;
        }
    }
}
