import { _isA, _isS, _isF, _mapSetToArray } from "./layoutElement.util";
import { LAYOUT_TYPE, layoutElement as LE } from "./layoutElement.type";

export function createElement(tag: any, ...appends: any[]): LE {
  let type: number;
  let properties: { [k: string]: any } = {};

  if (typeof tag === "undefined") {
    throw "TypeError: tag's type should be string Function or Array";
  }

  if (_isA(tag)) {
    type = LAYOUT_TYPE.LE_FRAGMENT_TYPE;

    console.log("FRAGMENT");
  }

  if (_isS(tag)) {
    type = LAYOUT_TYPE.LE_RE_TYPE;

    if (appends.length > 0) {
      appends.map((item) => {
        if (typeof item === "object" && !(Array.isArray(item))) {

          // get properties array
          // _mapSetToArray:layoutElement.util.ts
          _mapSetToArray(item, properties);
        }
      });
    }
  }

  if (_isF(tag)) {
    type = LAYOUT_TYPE.LE_FC_TYPE;

    if (appends.length > 0) {

      // order parameters
      properties.parameters = [...appends];
    }
  }

  console.log(properties);

  return LE.layoutElement(tag, properties, type);
}