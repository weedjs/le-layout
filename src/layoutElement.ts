import { _isA, _isS, _isF } from "./le-utils";

/**
 * marker for layoutParser
 */
export enum LAYOUT {
  LE_ROOT_TYPE,
  LE_FC_TYPE,
  LE_FRAGMENT_TYPE
};

export class layoutElement {
  _$type: number;
  tag?: any;
  properties: any;
  vd: number | string | symbol;
  constructor(tag: string | Array<any> | Function, _$type: number) { }

  static layoutElement(tag: any, properties: object, type: number): layoutElement {
    return new layoutElement(tag, 0);
  }
}

export function createElement(tag: any, ...appends: Array<any>): layoutElement {
  let type: number;
  let properties: { [k: string]: any };

  if (typeof tag === "undefined") {
    throw "TypeError: tag's type should be string Function or Array";
  }

  if (_isA(tag)) {
    type = LAYOUT.LE_FRAGMENT_TYPE;
  }

  if (_isS(tag)) {
    type = LAYOUT.LE_ROOT_TYPE;

    if (appends.length > 0) {
      appends.map((item) => { });
    }
  }

  if (_isF(tag)) {
    type = LAYOUT.LE_FC_TYPE;

    if (appends.length > 0) {
    }
  }

  return layoutElement.layoutElement(tag, properties, type);
}