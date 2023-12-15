import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TadCoreComponent } from './tad-core.component';

describe('TadCoreComponent', () => {
    let component: TadCoreComponent;
    let fixture: ComponentFixture<TadCoreComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TadCoreComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TadCoreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
