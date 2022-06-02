"use strict";
exports.__esModule = true;
exports.createElement = void 0;
var layoutElement = /** @class */ (function () {
    function layoutElement() {
        this._$type = 0;
        this._$vd = 0;
    }
    layoutElement.layoutElement = function () {
        return new layoutElement();
    };
    return layoutElement;
}());
function createElement(tag, 
// layoutParser: _isS using be properties Array using be content
// layoutParser: _isF using be parameters (order)
properties) {
    if (tag === null) {
        throw "TypeError: tag's type should be string Function or Array";
    }
    // createDocumentFragment
    if (Array.isArray(tag)) {
        return;
    }
    return layoutElement.layoutElement();
}
exports.createElement = createElement;
// createElement([]); -> createDocumentFragment
createElement(null);
