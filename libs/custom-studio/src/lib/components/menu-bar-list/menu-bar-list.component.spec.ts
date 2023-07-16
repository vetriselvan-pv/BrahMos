import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBMenuBarListComponent } from './menu-bar-list.component';

describe('DBMenuBarListComponent', () => {
    let component: DBMenuBarListComponent;
    let fixture: ComponentFixture<DBMenuBarListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DBMenuBarListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DBMenuBarListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
