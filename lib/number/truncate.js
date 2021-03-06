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
         * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/truncate.js)
         * @since 0.1.0
         */
        Number.prototype.truncate = function () {
            return Math.trunc(this);
        };
    }
})();
