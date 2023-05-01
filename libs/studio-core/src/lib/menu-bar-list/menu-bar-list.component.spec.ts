import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarListComponent } from './menu-bar-list.component';

describe('MenuBarListComponent', () => {
    let component: MenuBarListComponent;
    let fixture: ComponentFixture<MenuBarListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuBarListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MenuBarListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
