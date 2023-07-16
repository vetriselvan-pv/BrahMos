import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBStudioBoardComponent } from './studio-board.component';

describe('DBStudioBoardComponent', () => {
    let component: DBStudioBoardComponent;
    let fixture: ComponentFixture<DBStudioBoardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DBStudioBoardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DBStudioBoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
