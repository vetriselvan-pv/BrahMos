import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SampleComponent } from './sample/sample.component';

@NgModule({
    imports: [CommonModule, BrowserModule, SampleComponent],
    exports: [SampleComponent],
})
export class TadFormComponentsModule {}
