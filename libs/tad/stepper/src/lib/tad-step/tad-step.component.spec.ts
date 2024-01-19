import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TadStepComponent } from './tad-step.component';

describe('TadStepComponent', () => {
    let component: TadStepComponent;
    let fixture: ComponentFixture<TadStepComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TadStepComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TadStepComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
