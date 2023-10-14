import {
    AfterContentInit,
    AfterViewInit,
    Directive,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Directive()
export class BaseTADControl
    implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit
{
    /** Public Varibales */
    public form!: FormGroup;

    /** injectable class  */
    private _angularFormBuilder: FormBuilder = inject(FormBuilder);
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes, 'onchange init');
        this.doChange();
    }
    ngOnInit(): void {
        console.log('onInit');
        this.doInit();
    }
    ngAfterViewInit(): void {
        console.log('after view init');
        this.doViewInit();

        /** register the valuechanges and status changes  */
    }
    ngAfterContentInit(): void {
        console.log('after content init');
        this.doContentInit();
    }
    ngOnDestroy(): void {
        console.log('ondestroy init');
        this.doDestroy();
    }

    /** override lifecycle hooks */
    protected doInit(): void {
        console.log('no override method is used base doInit called');
    }
    protected doViewInit(): void {
        console.log('no override method is used base doViewInit called');
    }
    protected doContentInit(): void {
        console.log('no override method is used base doContentInit called');
    }
    protected doChange(): void {
        console.log('no override method is used base doChanges called');
    }
    protected doDestroy(): void {
        console.log('no override method is used base doDestroy called');
    }

    /** method to create the form through api or static json */
}
