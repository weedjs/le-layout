import { _isA, _isS, _isF } from "./layoutElement.util";
import { LAYOUT_TYPE, layoutElement as LE } from "./layoutElement.type";

export function createElement(tag: any, ...appends: any[]): LE {
  let type: number;
  let properties: { [k: string]: any } = {};

  if (typeof tag === "undefined") {
    throw "TypeError: tag's type should be string Function or Array";
  }

  if (_isA(tag)) {
    type = LAYOUT_TYPE.LE_FRAGMENT_TYPE;

    console.log("FRAGMENT")
  }

  if (_isS(tag)) {
    type = LAYOUT_TYPE.LE_RE_TYPE;

    if (appends.length > 0) {
      appends.map((item) => {
        if (typeof item === "object" && !(Array.isArray(item))) {
          for (let key in item) {
            if (properties.hasOwnProperty(`${key}`)) {
              if (Array.isArray(properties[key])) {
                properties[key] = [
                  ...properties[key],
                  ...(Array.isArray(item[key]) ? item[key] : [item[key]])
                ];
              } else {
                properties[key] = [
                  properties[key],
                  ...(Array.isArray(item[key]) ? item[key] : [item[key]])
                ];
              }
            } else {
              properties[key] = item[key];
            }
          }
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