import { Component } from '@angular/core';
import { IBoardData, IMenuList } from '@brahmos/studio-modal';

@Component({
    selector: 'db-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.scss'],
})
export class DBMenuBarComponent {
    transferringItem: IBoardData | undefined = undefined;
    menuList: IMenuList[] = [
        {
            heading: 'Components',
            options: [
                {
                    hoverText: 'Text Box',
                    icon: './assets/svg/Textbox.svg',
                    placeholder: 'Text Box',
                    tagName: 'textbox',
                    zones: ['dbZone'],
                    defaultValue: 'break',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Checkbox',
                    icon: './assets/svg/Checkbox.svg',
                    placeholder: 'Checkbox',
                    tagName: 'checkbox',
                    zones: ['dbZone'],
                    defaultValue: 'break',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Number',
                    icon: './assets/svg/Number.svg',
                    placeholder: 'Number',
                    tagName: 'number',
                    zones: ['dbZone'],
                    defaultValue: 'break',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Password',
                    icon: './assets/svg/Password.svg',
                    placeholder: 'Password',
                    tagName: 'password',
                    zones: ['dbZone'],
                    defaultValue: 'break',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Email',
                    icon: './assets/svg/Email.svg',
                    placeholder: 'Email',
                    tagName: 'email',
                    zones: ['dbZone'],
                    defaultValue: 'break',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Color',
                    icon: './assets/svg/Color.svg',
                    placeholder: 'Color',
                    tagName: 'color',
                    zones: ['dbZone'],
                    defaultValue: 'break',
                    child: [],
                    parentId: 'parent',
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
                    zones: ['dbZone'],
                    defaultValue: 'div',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Heading 1',
                    icon: './assets/svg/Heading 1.svg',
                    placeholder: 'H1',
                    tagName: 'h1',
                    zones: ['dbZone'],
                    defaultValue: 'Heading 1',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Heading 2',
                    icon: './assets/svg/Heading 2.svg',
                    placeholder: 'H2',
                    tagName: 'h2',
                    zones: ['dbZone'],
                    defaultValue: 'Heading 2',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Heading 3',
                    icon: './assets/svg/Heading 3.svg',
                    placeholder: 'H3',
                    tagName: 'h3',
                    zones: ['dbZone'],
                    defaultValue: 'Heading 3',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Heading 4',
                    icon: './assets/svg/Heading 4.svg',
                    placeholder: 'H4',
                    tagName: 'h4',
                    zones: ['dbZone'],
                    defaultValue: 'Heading 4',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Heading 5',
                    icon: './assets/svg/Heading 5.svg',
                    placeholder: 'H5',
                    tagName: 'h5',
                    zones: ['dbZone'],
                    defaultValue: 'Heading 5',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Heading 6',
                    icon: './assets/svg/Heading 6.svg',
                    placeholder: 'H6',
                    tagName: 'h6',
                    zones: ['dbZone'],
                    defaultValue: 'Heading 6',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Span',
                    icon: './assets/svg/Span.svg',
                    placeholder: 'Span',
                    tagName: 'span',
                    zones: ['dbZone'],
                    defaultValue: 'span',
                    child: [],
                    parentId: 'parent',
                },
                {
                    hoverText: 'Paragraph',
                    icon: './assets/svg/Paragraph.svg',
                    placeholder: 'Paragraph',
                    tagName: 'paragraph',
                    zones: ['dbZone'],
                    child: [],
                    parentId: 'parent',
                    defaultValue: 'paragraph',
                },
                {
                    hoverText: 'Break',
                    icon: './assets/svg/Break.svg',
                    placeholder: 'Break',
                    tagName: 'break',
                    zones: ['dbZone'],
                    child: [],
                    parentId: 'parent',
                    defaultValue: 'break',
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
}
