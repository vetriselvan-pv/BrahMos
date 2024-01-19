import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TadBadgeComponent } from './tad-badge.component';

describe('TadBadgeComponent', () => {
    let component: TadBadgeComponent;
    let fixture: ComponentFixture<TadBadgeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TadBadgeComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TadBadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
