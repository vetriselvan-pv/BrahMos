import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TadCheckboxComponent } from './tad-checkbox.component';

describe('TadCheckboxComponent', () => {
    let component: TadCheckboxComponent;
    let fixture: ComponentFixture<TadCheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TadCheckboxComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TadCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
