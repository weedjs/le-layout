class layoutElement {
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

function createElement(tag?: string | Function, properties?: any, content: Array<any>) {
  return layoutElement.layoutElement();
}
