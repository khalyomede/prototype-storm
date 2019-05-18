"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    if (!("ceil" in Number)) {
        /**
         * @description Return the ceil of the number.
         * @return {Number}
         * @example
         * const number = 41.1;
         * number.ceil(); // 42
         */
        Number.prototype.ceil = function () {
            return Math.ceil(this);
        };
    }
})();
