import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    Input,
    QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TadStepComponent } from '../tad-step/tad-step.component';
import { TadStepHeaderComponent } from '../tad-step/tad-step-header';

@Component({
    selector: 'tad-stepper',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tad-stepper.component.html',
    styleUrl: './tad-stepper.component.scss',
})
export class TadStepperComponent implements AfterContentInit, AfterViewInit {
    /**
     * to know the alignment of the stepper
     */
    @Input() alignment: 'vertical' | 'horizontal' = 'vertical';

    /**
     * to get the children (custom step content) , its contains number of step content
     */
    @ContentChildren(TadStepComponent, { descendants: true })
    stepsContent: QueryList<TadStepComponent> =
        undefined as unknown as QueryList<TadStepComponent>;

    /**
     * to get the step header , its contains number of step header
     */
    @ContentChildren(TadStepHeaderComponent, { descendants: true })
    stepHeader: QueryList<TadStepHeaderComponent> =
        undefined as unknown as QueryList<TadStepHeaderComponent>;

    ngAfterContentInit(): void {
        console.log(this.stepsContent);
    }

    ngAfterViewInit(): void {
        console.log('After view init ', this.stepsContent);
    }
}
