import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TadBadgeComponent } from '../tad-badge/tad-badge.component';

@Component({
    selector: 'tad-sample',
    standalone: true,
    imports: [CommonModule, TadBadgeComponent],
    templateUrl: './sample.component.html',
    styleUrl: './sample.component.scss',
})
export class SampleComponent {}
