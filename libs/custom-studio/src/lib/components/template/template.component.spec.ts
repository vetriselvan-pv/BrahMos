import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBTemplateComponent } from './template.component';

describe('DBTemplateComponent', () => {
    let component: DBTemplateComponent;
    let fixture: ComponentFixture<DBTemplateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DBTemplateComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DBTemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
