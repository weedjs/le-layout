/**
 * marker for layoutParser
 */
 export enum LAYOUT {

  // root element
  LE_RE_TYPE,

  // function component
  LE_FC_TYPE,

  // fragement
  LE_FRAGMENT_TYPE
};

export class layoutElement {
  _$type: number;
  tag?: any;
  properties: any;
  vd: number | string | symbol;
  constructor(tag: any, _$type: number) { }

  static layoutElement(
    tag: any, properties: object, type: number): layoutElement {
    return new layoutElement(tag, 0);
  }
}