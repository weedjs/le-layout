"use strict";
/**
 * index.js - le-render
 *
 * Copyright (c) 2022 Ryan Martin
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.render = exports.$ = void 0;
var layoutElement_1 = require("./src/layoutElement");
__createBinding(exports, layoutElement_1, "createElement", "$");
var le_render_1 = require("./src/le-render");
__createBinding(exports, le_render_1, "render");
