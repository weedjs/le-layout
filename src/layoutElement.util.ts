export function _isS(type: any): boolean {
  return typeof type === "string" || type instanceof String ? true : false;
}

export function _isF(type: any): boolean {
  return typeof type === "function" || type instanceof Function ? true : false;
}

export function _isA(type: any): boolean {
  return Array.isArray(type) ? true : false;
}

export function _mapSetToArray(item: { [k: string]: any }, dsc: { [k: string]: any }) {
  for (let key in item) {
    if (dsc.hasOwnProperty(`${key}`)) {
      if (Array.isArray(dsc[key])) {
        dsc[key] = [
          ...dsc[key],
          ...(Array.isArray(item[key]) ? item[key] : [item[key]])
        ];
      } else {
        dsc[key] = [
          dsc[key],
          ...(Array.isArray(item[key]) ? item[key] : [item[key]])
        ];
      }
    } else {
      dsc[key] = item[key];
    }
  }
}
