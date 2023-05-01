import { Component } from '@angular/core';

@Component({
    selector: 'brahmos-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
    menuList: MenuList[] = [
        {
            id: 'staff',
            title: 'Staff',
        },
        {
            id: 'students',
            title: 'Students',
        },
        {
            id: 'expenses',
            title: 'Expenses',
        },
        {
            id: 'reports',
            title: 'Reports',
        },
    ];
}

export interface MenuList {
    title: string;
    id: string;
    path?: string[];
    icon?: string;
    child?: MenuList;
}
