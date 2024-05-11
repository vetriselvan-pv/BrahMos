import {
    CdkDragDrop,
    moveItemInArray,
    copyArrayItem,
} from '@angular/cdk/drag-drop';
import {
    AfterViewInit,
    Component,
    QueryList,
    TemplateRef,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {
    DBDynamicTemplateDirective,
    DynamicTemplateService,
} from '@brahmos/shared-directives';
import { IDesignElementConfig } from '@brahmos/studio-modal';

@Component({
    selector: 'db-element',
    templateUrl: './element.component.html',
    styleUrls: ['./element.component.scss'],
})
export class ElementComponent implements AfterViewInit {
    @ViewChildren(DBDynamicTemplateDirective)
    templateRefs!: QueryList<DBDynamicTemplateDirective>;

    @ViewChild(ElementComponent) childDrag!: ElementComponent;

    childData: IDesignElementConfig[] = [];

    constructor(private _dynamicTemplateService: DynamicTemplateService) {}
    ngAfterViewInit(): void {
        this._dynamicTemplateService.templateRefs = this.templateRefs;
        // this._dynamicTemplateService.dragList.push(this.childDrag);
    }

    drop(event: CdkDragDrop<string[] | never[]>) {
        console.log('child', event);
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            copyArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
        console.log(this.childData);
    }

    getTemplate(tagName: string): TemplateRef<unknown> | null {
        return this._dynamicTemplateService.getTemplate(tagName);
    }
}
