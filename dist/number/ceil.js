(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {
  if (!("ceil" in Number)) {
    /**
     * @description Return the ceil of the number.
     * @return {Number}
     * @example
     * const number = 41.1;
     * number.ceil(); // 42
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/ceil.js)
     * @since 0.1.0
     */
    Number.prototype.ceil = function () {
      return Math.ceil(this);
    };
  }
}();

},{}]},{},[1]);
