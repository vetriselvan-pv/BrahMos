import {
    AfterContentInit,
    AfterViewInit,
    Directive,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';

@Directive()
export class BaseTADControl
    implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit
{
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes, 'onchange init');
    }
    ngOnInit(): void {
        console.log('onInit');
    }
    ngAfterViewInit(): void {
        console.log('after view init');
    }
    ngAfterContentInit(): void {
        console.log('after content init');
    }
    ngOnDestroy(): void {
        console.log('ondestroy init');
    }
}
