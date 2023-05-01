import { Component, Input } from '@angular/core';
import { MenuList } from '../menu-bar/menu-bar.component';

@Component({
    selector: 'brahmos-menu-bar-list',
    templateUrl: './menu-bar-list.component.html',
    styleUrls: ['./menu-bar-list.component.scss'],
})
export class MenuBarListComponent {
    @Input() menu: MenuList | undefined;
}
