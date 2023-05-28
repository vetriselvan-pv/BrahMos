import { Component, Input } from '@angular/core';
import { IBoardData } from '@brahmos/studio-modal';
import { IDroppableEventObject } from '../..//directives/dropable.directive';

@Component({
    selector: 'db-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss'],
})
export class DBTemplateComponent {
    @Input() item!: IBoardData;
    id = '';

    onDrop(event: IDroppableEventObject) {
        event.event.preventDefault();
        event.event.stopPropagation();
        console.log('child', event);
    }
}
