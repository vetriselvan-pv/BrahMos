import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBDynamicTemplateDirective } from './dynamic-template/dynamic-template.directive';
@NgModule({
    imports: [CommonModule],
    declarations: [DBDynamicTemplateDirective],
    exports: [DBDynamicTemplateDirective],
})
export class SharedDirectivesModule {}
