import { ElementProps, IStudioTree } from './studio.model';

export const childOne = (
    data: IStudioTree[],
    payload: unknown,
    args: Array<string>
) => {
    changeProperties(data[Number(args[1])], 'child', payload);
};

export const childTwo = (
    data: IStudioTree[],
    payload: unknown,
    args: Array<string>
) => {
    changeProperties(data[Number(args[0])], 'child', payload);
};

export const changeProperties = (
    data: IStudioTree,
    property: ElementProps,
    payload: any
) => {
    data[property] = payload;
};
