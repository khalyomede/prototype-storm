"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    if (!("json" in Number)) {
        Number.prototype.json = function () {
            return JSON.stringify(this);
        };
    }
})();
