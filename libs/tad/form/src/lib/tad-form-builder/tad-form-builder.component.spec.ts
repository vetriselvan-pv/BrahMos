import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TadFormBuilderComponent } from './tad-form-builder.component';

describe('TadFormBuilderComponent', () => {
    let component: TadFormBuilderComponent;
    let fixture: ComponentFixture<TadFormBuilderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TadFormBuilderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TadFormBuilderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
