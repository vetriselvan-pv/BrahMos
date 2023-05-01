import { Component, Input } from '@angular/core';
import { IBoardData } from '@brahmos/studio-modal';
import { IDroppableEventObject } from '../zone-service/dropable.directive';

@Component({
    selector: 'db-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss'],
})
export class DBTemplateComponent {
    @Input() item!: IBoardData;
    id = '';

    onDrog(event: IDroppableEventObject) {
        event.event.preventDefault();
        event.event.stopPropagation();
        console.log('child', event);
    }
}
