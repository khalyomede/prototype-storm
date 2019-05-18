"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    if (!("unduplicate" in Array)) {
        Array.prototype.unduplicate = function () {
            return Array.from(new Set(this));
        };
    }
})();
