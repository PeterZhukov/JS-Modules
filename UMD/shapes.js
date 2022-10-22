(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Square = exports.Circle = void 0;
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
    }
    exports.Circle = Circle;
    class Square {
        constructor(width) {
            this.width = width;
        }
    }
    exports.Square = Square;
});
//# sourceMappingURL=shapes.js.map