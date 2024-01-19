import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TadBannerComponent } from './tad-banner.component';

describe('TadBannerComponent', () => {
    let component: TadBannerComponent;
    let fixture: ComponentFixture<TadBannerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TadBannerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TadBannerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
