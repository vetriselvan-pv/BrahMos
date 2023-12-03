import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

export const appRoutes: Route[] = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'skills',
        component: SkillsComponent,
    },
    {
        path: 'experience',
        component: ExperienceComponent,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
