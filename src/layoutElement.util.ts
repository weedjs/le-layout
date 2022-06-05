export function _isS(type: any): boolean {
  return typeof type === "string" || type instanceof String ? true : false;
}

export function _isF(type: any): boolean {
  return typeof type === "function" || type instanceof Function ? true : false;
}

export function _isA(type: any): boolean {
  return Array.isArray(type) ? true : false;
}