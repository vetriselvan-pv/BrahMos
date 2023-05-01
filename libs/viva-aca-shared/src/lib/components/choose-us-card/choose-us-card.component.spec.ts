import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUsCardComponent } from './choose-us-card.component';

describe('ChooseUsCardComponent', () => {
    let component: ChooseUsCardComponent;
    let fixture: ComponentFixture<ChooseUsCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChooseUsCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ChooseUsCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
