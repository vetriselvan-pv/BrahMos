import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDesignElementConfig } from '@brahmos/studio-modal';

export interface IBoard {
    parent: IDesignElementConfig[];
}

@Injectable({ providedIn: 'root' })
export class StudioStateService {
    private _element: IBoard = {
        parent: [],
    };

    public onElementUpdate$: Subject<IDesignElementConfig[]> = new Subject();

    public get element(): IDesignElementConfig[] {
        return this._element.parent;
    }

    public addParentElement(element: IDesignElementConfig) {
        this._element['parent'].push(element);
        console.log(this._element);
    }

    public addChildElement(element: IDesignElementConfig, parentId: string) {
        const parentIdIndex = parentId.split('_').slice(1);
        this._identifyElement(parentIdIndex, this._element.parent, element);
        console.log(this._element);
    }

    private _identifyElement(
        parentIdIndex: string[],
        parentElement: IDesignElementConfig[],
        updatedElement: IDesignElementConfig
    ) {
        for (const _ele of parentIdIndex) {
            let filteredElement = parentElement[Number(_ele)].child;
            parentIdIndex = parentIdIndex.slice(1);
            if (parentIdIndex && parentIdIndex.length) {
                if (!filteredElement?.length) {
                    filteredElement = [];
                }
                if (parentIdIndex.length === 1) {
                    parentElement[Number(_ele)].child = filteredElement = [
                        ...filteredElement,
                        updatedElement,
                    ];
                    return 'done';
                } else {
                    const result = this._identifyElement(
                        parentIdIndex,
                        filteredElement,
                        updatedElement
                    );
                    if (result === 'done') {
                        return 'done';
                    }
                }
            } else {
                return 'done';
            }
        }
        return 'done';
    }
}
