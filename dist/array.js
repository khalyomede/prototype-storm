(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var max_1 = require("./array/max");

exports.max = max_1["default"];

},{"./array/max":2}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {
  if (!("max" in Array)) {
    /**
     * @description Returns the maximum among all the numbers of the array.
     * @return {Number}
     * @example
     * const array = [1, 2, 3];
     * array.max(); // 3
     */
    Array.prototype.max = function () {
      return Math.max(this.filter(function (item) {
        return typeof item === "number";
      }));
    };
  }

  console.log("test");
}();

},{}]},{},[1]);
