import { ChangeDetectorRef, Component } from '@angular/core';
import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import { IDesignElementConfig, IMenuList } from '@brahmos/studio-modal';
import { DynamicTemplateService } from '@brahmos/shared-directives';

@Component({
    selector: 'db-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
    transferringItem: IDesignElementConfig | undefined = undefined;
    menuList: IMenuList[] = [
        {
            heading: 'Components',
            options: [
                {
                    hoverText: 'Text Box',
                    icon: './assets/svg/Textbox.svg',
                    placeholder: 'Text Box',
                    tagName: 'textbox',
                },
                {
                    hoverText: 'Checkbox',
                    icon: './assets/svg/Checkbox.svg',
                    placeholder: 'Checkbox',
                    tagName: 'checkbox',
                },
                {
                    hoverText: 'Number',
                    icon: './assets/svg/Number.svg',
                    placeholder: 'Number',
                    tagName: 'number',
                },
                {
                    hoverText: 'Password',
                    icon: './assets/svg/Password.svg',
                    placeholder: 'Password',
                    tagName: 'password',
                },
                {
                    hoverText: 'Email',
                    icon: './assets/svg/Email.svg',
                    placeholder: 'Email',
                    tagName: 'email',
                },
                {
                    hoverText: 'Color',
                    icon: './assets/svg/Color.svg',
                    placeholder: 'Color',
                    tagName: 'color',
                },
            ],
        },
        {
            heading: 'Html Elements',
            options: [
                {
                    hoverText: 'Div',
                    icon: './assets/svg/Div.svg',
                    placeholder: 'Div',
                    tagName: 'div',

                    child: [],
                },
                {
                    hoverText: 'Heading 1',
                    icon: './assets/svg/Heading 1.svg',
                    placeholder: 'H1',
                    tagName: 'h1',
                },
                {
                    hoverText: 'Heading 2',
                    icon: './assets/svg/Heading 2.svg',
                    placeholder: 'H2',
                    tagName: 'h2',
                },
                {
                    hoverText: 'Heading 3',
                    icon: './assets/svg/Heading 3.svg',
                    placeholder: 'H3',
                    tagName: 'h3',
                },
                {
                    hoverText: 'Heading 4',
                    icon: './assets/svg/Heading 4.svg',
                    placeholder: 'H4',
                    tagName: 'h4',
                },
                {
                    hoverText: 'Heading 5',
                    icon: './assets/svg/Heading 5.svg',
                    placeholder: 'H5',
                    tagName: 'h5',
                },
                {
                    hoverText: 'Heading 6',
                    icon: './assets/svg/Heading 6.svg',
                    placeholder: 'H6',
                    tagName: 'h6',
                },
                {
                    hoverText: 'Span',
                    icon: './assets/svg/Span.svg',
                    placeholder: 'Span',
                    tagName: 'span',
                },
                {
                    hoverText: 'Paragraph',
                    icon: './assets/svg/Paragraph.svg',
                    placeholder: 'Paragraph',
                    tagName: 'paragraph',
                },
                {
                    hoverText: 'Break',
                    icon: './assets/svg/Break.svg',
                    placeholder: 'Break',
                    tagName: 'break',
                },
                // {
                //   hoverText : 'List',
                //   icon :'./assets/svg/list.svg',
                //   placeholder : 'List'
                // },
                // {
                //   hoverText : 'Image',
                //   icon : './assets/svg/image.svg',
                //   placeholder : 'Image'
                // },
                // {
                //   hoverText : 'Links',
                //   icon : './assets/svg/links.svg',
                //   placeholder : 'Links'
                // },
            ],
        },
    ];

    dragConnectedTo = ['board_0', 'menu_0', 'menu_1'];

    constructor(
        protected _templateService: DynamicTemplateService,
        private _cd: ChangeDetectorRef
    ) {
        this._templateService.dragConnectedTo$.asObservable().subscribe({
            next: (res: string) => {
                this.dragConnectedTo.push(res);
                this._cd.markForCheck();
                this._cd.detectChanges();
            },
        });
    }

    drop(event: CdkDragDrop<string[] | never[]>) {
        copyArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
        );
    }

    noReturnPredicate() {
        return false;
    }
}
