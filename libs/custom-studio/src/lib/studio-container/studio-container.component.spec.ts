import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioContainerComponent } from './studio-container.component';

describe('StudioContainerComponent', () => {
    let component: StudioContainerComponent;
    let fixture: ComponentFixture<StudioContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StudioContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StudioContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
