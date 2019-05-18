"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    if (!("truncate" in Number)) {
        /**
         * @description Truncates the number.
         * @return {Number}
         * @example
         * const number = 42.123;
         * number.truncate(); // 42
         */
        Number.prototype.truncate = function () {
            return Math.trunc(this);
        };
    }
})();
