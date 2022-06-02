import { _isA, _isS, _isF } from "./le-util";

type tagType = string | Function | Array<any>;

export class layoutElement {
  tag?: tagType;
  properties: any;
  constructor(tag: tagType) {
    this.tag = null;
    this.properties = null;
  }

  static layoutElement(tag: tagType, properties: object) {
    return new layoutElement(tag);
  }
}

export function createElement(

  // fragment
  tag: tagType,

  // object attributes on HTML elements
  // array content (childern)
  ...appends: Array<any>): layoutElement {
  let _$type: number;
  let properties: { [k: string]: any };

  if (typeof tag === "undefined") {
    throw "TypeError: tag's type should be string Function or Array";
  }

  if (_isA(tag)) {
    _$type = 0;

    // fragment
  }

  if (_isS(tag)) {
    _$type = 0;

    // .class
    // #id
    if (appends.length > 0) {
      appends.map((item) => { });
    }
  }

  if (_isF(tag)) {
    _$type = 1;
    if (appends.length > 0) { }
  }

  return layoutElement.layoutElement(tag, properties);
}

createElement(null);
