"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    if (!("degrees" in Number)) {
        /**
         * @description Convert the number from radians to degrees.
         * @return {Number}
         * @example
         * const number = 1;
         * number.degrees(); // 57.2958
         */
        Number.prototype.degrees = function () {
            return (this * 180) / Math.PI;
        };
    }
})();
