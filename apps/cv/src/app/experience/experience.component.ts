import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'cv-experience',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
    experienceList: Array<{
        role: string;
        duration: string;
        responsibility: Array<string>;
        companyName: string;
    }> = [
        {
            companyName: 'Intellect Design Arena ',
            role: 'Software Developer',
            duration: 'Sep-2023 - present',
            responsibility: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ],
        },
        {
            companyName: 'Newage Software and Solution',
            role: 'Software Developer',
            duration: 'Sep-2023 - present',
            responsibility: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ],
        },
        {
            companyName: 'Renault Nissan Automotive India Pvt Ltd',
            role: 'Software Developer',
            duration: 'Sep-2023 - present',
            responsibility: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ],
        },
    ];
}
