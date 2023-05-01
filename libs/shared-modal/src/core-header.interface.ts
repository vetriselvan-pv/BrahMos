export interface ICoreHeaderConfig {
    title?: string;
    logoPath?: string;
    cssClass?: string[];
    headerMenu?: IHeaderMenu[];
    headerOptions?: IHeaderOptions[];
}

export interface IHeaderMenu {
    title: string;
    iconPath: string;
    child: IHeaderMenu[];
    cssClass: string[];
}

export interface IHeaderOptions {
    title: string;
    iconPath: string;
    cssClass: string[];
}
