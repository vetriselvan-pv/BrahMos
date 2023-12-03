import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../pipe/safe.pipe';

@Component({
    selector: 'cv-skills',
    standalone: true,
    imports: [CommonModule, SafePipe],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
    skillList = [
        {
            icon: `./assets/svg/javascript.svg`,
            title: 'Javascript',
        },
        {
            icon: `./assets/svg/typescript.svg`,
            title: 'Typescript',
        },
        {
            icon: `./assets/svg/html.svg`,
            title: 'Html',
        },
        {
            icon: `./assets/svg/css.svg`,
            title: 'Css',
        },
        {
            icon: `./assets/svg/rxjs.svg`,
            title: 'rxjs',
        },
        {
            icon: `./assets/svg/angular.svg`,
            title: 'Angular',
        },
        {
            icon: `./assets/svg/ngxs.svg`,
            title: 'ngxs',
        },
    ];
}
