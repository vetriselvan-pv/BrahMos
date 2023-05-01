import { Component, Input } from '@angular/core';
import { ICoreHeaderConfig } from '@brahmos/shared-modal';

@Component({
    selector: 'brahmos-core-header',
    templateUrl: './core-header.component.html',
    styleUrls: ['./core-header.component.scss'],
})
export class CoreHeaderComponent {
    @Input() headerConfig: ICoreHeaderConfig = {};
}
