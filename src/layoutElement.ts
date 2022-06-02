import { _isA, _isS, _isF } from "./le-utils";

export class layoutElement {
  tag?: any;
  properties: any;
  constructor(tag: string | Array<any> | Function) { }

  static layoutElement(tag: any, properties: object) {
    return new layoutElement(tag);
  }
}

export function createElement(tag: any, ...appends: Array<any>): layoutElement {
  let _$type: number;
  let properties: { [k: string]: any };

  if (typeof tag === "undefined") {
    throw "TypeError: tag's type should be string Function or Array";
  }

  if (_isA(tag)) {
    _$type = 0;
  }

  if (_isS(tag)) {
    _$type = 0;
    if (appends.length > 0) {
      appends.map((item) => { console.log(item); });
    }
  }

  if (_isF(tag)) {
    _$type = 1;
    if (appends.length > 0) {
    }
  }

  return layoutElement.layoutElement(tag, properties);
}

createElement(null);