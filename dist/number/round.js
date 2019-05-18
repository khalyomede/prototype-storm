(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

exports["default"] = function () {
  if (!("round" in Number)) {
    /**
     * @description Rounds the number to the number of desired digits.
     * @return {Number}
     * @example
     * const number = 42.12345;
     * number.round(3); // 42.123
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/round.js)
     */
    Number.prototype.round = function (digits) {
      var typeOfDigits = _typeof(digits);

      if (typeOfDigits !== "number") {
        throw new Error("expected digits to be a number (got: " + typeOfDigits + ")");
      }

      return parseFloat(this.toFixed(digits));
    };
  }
}();

},{}]},{},[1]);
