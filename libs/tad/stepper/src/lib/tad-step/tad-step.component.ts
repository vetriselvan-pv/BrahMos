import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
    selector: 'tad-step',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tad-step.component.html',
    styleUrl: './tad-step.component.scss',
})
export class TadStepComponent {
    /**
     * @description to know the content inside the tab and it will be used in the tab-group looping
     */
    @ViewChild(TemplateRef, { static: true }) content: TemplateRef<unknown> =
        undefined as unknown as TemplateRef<unknown>;

    /**
     * @description this output event will notify the parent tab group whenever the tab is clicked based on this event the other tabs will display none
     */
    tabClick: Subject<MouseEvent> = new Subject<MouseEvent>();

    /**
     *  @Input to get the tab label and id
     */
    @Input() label: string = '';
    @Input() name: string = '';

    /**
     * @params
     * @description ontabClick event will be triggered when you click the tab and let the parent tab-group will know the tab is clicked
     *
     */
    onTabClick(e: MouseEvent): void {
        this.tabClick.next(e);
    }
}
