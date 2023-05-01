import { Injectable, QueryList, TemplateRef } from '@angular/core';
import { DBDynamicTemplateDirective } from './dynamic-template.directive';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DynamicTemplateService {
    templateRefs!: QueryList<DBDynamicTemplateDirective>;

    dragList: CdkDropList<unknown>[] = [];

    dragConnectedTo: string[] = ['board_0', 'menu_0', 'menu_1'];

    dragConnectedTo$: Subject<unknown> = new Subject();

    makeid(length: number) {
        let result = '';
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
            counter += 1;
        }
        return result;
    }

    getTemplate(tagName: string): TemplateRef<unknown> | null {
        const template = this.templateRefs
            .toArray()
            .find(
                (x) => x.name.toLowerCase() === tagName.toLowerCase()
            )?.template;
        return template ? template : null;
    }
}
