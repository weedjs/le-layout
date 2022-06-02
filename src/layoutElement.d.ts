declare type tagType = string | Function | Array<any>;
export declare class layoutElement {
    tag?: tagType;
    properties: any;
    constructor(tag: tagType);
    static layoutElement(tag: tagType, properties: object): layoutElement;
}
export declare function createElement(tag: tagType, ...appends: Array<any>): layoutElement;
export {};
