"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    if (!("isPositive" in Number)) {
        /**
         * @description Returns true if the number is greater or equal to 0, else returns false.
         * @return {Boolean}
         * @example
         * const number = 42;
         * number.isPositive(); // true
         * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/is-positive.js)
         * @since 0.1.0
         */
        Number.prototype.isPositive = function () {
            return [1, 0].includes(Math.sign(this));
        };
    }
})();
