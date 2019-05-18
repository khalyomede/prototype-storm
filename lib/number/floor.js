"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    if (!("floor" in Number)) {
        /**
         * @description Returns the floor of the number.
         * @return {Number}
         * @example
         * const number = 42.1;
         * number.floor(); // 42
         */
        Number.prototype.floor = function () {
            return Math.floor(this);
        };
    }
})();
