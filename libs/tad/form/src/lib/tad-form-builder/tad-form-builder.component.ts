import {
    AfterContentInit,
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import {
    AsyncValidatorFn,
    FormControl,
    FormControlOptions,
    FormGroup,
    ValidatorFn,
} from '@angular/forms';

@Component({
    selector: 'brahmos-tad-form-builder',
    templateUrl: './tad-form-builder.component.html',
    styleUrls: ['./tad-form-builder.component.scss'],
})
export class TadFormBuilderComponent
    implements OnInit, AfterViewInit, OnChanges, AfterContentInit, OnDestroy
{
    /** input and output method form  */
    @Input() form: ITaADForm | undefined;

    /** protected varibales need to access only inside the component  */
    protected formGroup: FormGroup = new FormGroup({});

    constructor() {
        console.info([' TadFormBuilderComponent constructor called']);
    }
    ngOnInit(): void {
        console.info([' TadFormBuilderComponent ngoninit called']);

        /**
         * form json is loaded by async in the parent component itself
         * no need to capture as observbale
         * load the form based on trhe json get from the form input
         */
        if (this.form) {
            const controls: { [K: string]: FormControl } = {};
            for (let i = 0; i < this.form.control.length; i++) {
                const formControl = this.form.control[i];
                controls[formControl.controlName] = new FormControl('');
                // {
                //     asyncValidators: formControl.asyncValidator,
                //     nonNullable: true,
                //     updateOn: formControl.updateOn,
                //     validators: formControl.syncValidtor,
                // }
            }
        }
    }
    ngAfterViewInit(): void {
        console.info([' TadFormBuilderComponent afterviewinit called']);
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes) {
            console.info([' TadFormBuilderComponent changes called']);
        }
    }
    ngAfterContentInit(): void {
        console.info([' TadFormBuilderComponent contentinit called']);
    }
    ngOnDestroy(): void {
        console.info([' TadFormBuilderComponent ondestroy called']);
    }
}

export interface ITaADForm {
    title: '';
    formType: 'group' | 'array';
    syncValidtor: '';
    asyncValidator: '';
    isDefaultDisable: 'boolean';
    control: [
        {
            controlName: '';
            updateOn: 'blur' | 'change';
            syncValidtor:
                | ValidatorFn
                | FormControlOptions
                | ValidatorFn[]
                | null
                | undefined;
            asyncValidator:
                | AsyncValidatorFn
                | FormControlOptions
                | AsyncValidatorFn[]
                | null
                | undefined;
            defaultValue: '';
            controlInterface:
                | 'string'
                | 'boolean'
                | 'object'
                | 'number'
                | 'date';
            controlType:
                | 'textbox'
                | 'checkbox'
                | 'textArea'
                | 'datePicker'
                | 'radioButton'
                | 'slider'
                | 'amountBox'
                | 'dropdown'
                | 'searchableDropdown'
                | 'multiSelwctDropdown';
        }
    ];
}
