import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioBoardComponent } from './studio-board.component';

describe('StudioBoardComponent', () => {
    let component: StudioBoardComponent;
    let fixture: ComponentFixture<StudioBoardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StudioBoardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StudioBoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
