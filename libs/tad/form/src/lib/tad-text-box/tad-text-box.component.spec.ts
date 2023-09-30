import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TadTextBoxComponent } from './tad-text-box.component';

describe('TadTextBoxComponent', () => {
    let component: TadTextBoxComponent;
    let fixture: ComponentFixture<TadTextBoxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TadTextBoxComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TadTextBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
