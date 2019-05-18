(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {
  if (!("isPositive" in Number)) {
    /**
     * @description Returns true if the number is greater or equal to 0, else returns false.
     * @return {Boolean}
     * @example
     * const number = 42;
     * number.isPositive(); // true
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/is-positive.js)
     * @since 0.1.0
     */
    Number.prototype.isPositive = function () {
      return [1, 0].includes(Math.sign(this));
    };
  }
}();

},{}]},{},[1]);
