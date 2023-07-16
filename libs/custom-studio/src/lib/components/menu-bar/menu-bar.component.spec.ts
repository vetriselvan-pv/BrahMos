import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBMenuBarComponent } from './menu-bar.component';

describe('DBMenuBarComponent', () => {
    let component: DBMenuBarComponent;
    let fixture: ComponentFixture<DBMenuBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DBMenuBarComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DBMenuBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
