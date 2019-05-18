"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    if (!("max" in Array)) {
        /**
         * @description Returns the maximum among all the numbers of the array.
         * @return {Number}
         * @example
         * const array = [1, 2, 3];
         * array.max(); // 3
         * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/array/max.js)
         * @since 0.1.0
         */
        Array.prototype.max = function () {
            return Math.max(this.filter(function (item) { return typeof item === "number"; }));
        };
    }
})();
