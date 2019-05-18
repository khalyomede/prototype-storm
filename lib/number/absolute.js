"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    if (!("absolute" in Number)) {
        /**
         * @description Return the absolute value of the number.
         * @return {Number}
         * @example
         * const number = -42;
         * number.absolute(); // 42
         */
        Number.prototype.absolute = function () {
            return Math.abs(this);
        };
    }
})();
