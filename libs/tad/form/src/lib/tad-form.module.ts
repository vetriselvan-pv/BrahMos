import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TadTextBoxComponent } from './tad-text-box/tad-text-box.component';
import { TadFormBuilderComponent } from './tad-form-builder/tad-form-builder.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TadTextBoxComponent, TadFormBuilderComponent],
})
export class TadFormModule {}
