export class layoutElement {
  tag?: string | Function;
  ref?: HTMLElement;
  
  // easy works for layoutParser
  _$type: number;
  
  // sets by mappingDOM with container_state_store
  _$vd: number | string | symbol;
  constructor() {
    this._$type = 0;
    this._$vd = 0;
  }
  
  static layoutElement() {
    return new layoutElement();
  }
}

export function createElement(
  tag: string | Function | null | Array<any>,
  
  // layoutParser: _isS using be properties Array using be content
  // layoutParser: _isF using be parameters (order)
  properties?: any
  ): layoutElement {
  if (tag === null) {
    throw "TypeError: tag's type should be string Function or Array";
  }
  
  // createDocumentFragment
  if (Array.isArray(tag)) {
    return;
  }
  
  return layoutElement.layoutElement();
}

// createElement([]); -> createDocumentFragment

createElement(null);
