import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBStudioContainerComponent } from './studio-container.component';

describe('DBStudioContainerComponent', () => {
    let component: DBStudioContainerComponent;
    let fixture: ComponentFixture<DBStudioContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DBStudioContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DBStudioContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
