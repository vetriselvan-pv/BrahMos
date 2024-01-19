import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TadStepperComponent } from './tad-stepper.component';

describe('TadStepperComponent', () => {
    let component: TadStepperComponent;
    let fixture: ComponentFixture<TadStepperComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TadStepperComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TadStepperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
