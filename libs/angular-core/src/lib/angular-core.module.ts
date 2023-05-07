import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHeaderComponent } from './components/core-header/core-header.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CoreHeaderComponent],
    exports: [CoreHeaderComponent],
})
export class AngularCoreModule {}
