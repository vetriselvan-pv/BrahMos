/* eslint-disable no-unused-vars */
import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[dbDynamicTemplate]',
})
export class DBDynamicTemplateDirective {
    @Input('dbDynamicTemplate') name = '';
    constructor(public template: TemplateRef<unknown>) {}
}
