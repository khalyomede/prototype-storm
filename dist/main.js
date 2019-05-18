(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var max_1 = require("./array/max");

exports.max = max_1["default"];

var absolute_1 = require("./number/absolute");

exports.absolute = absolute_1["default"];

var ceil_1 = require("./number/ceil");

exports.ceil = ceil_1["default"];

var degrees_1 = require("./number/degrees");

exports.degrees = degrees_1["default"];

var floor_1 = require("./number/floor");

exports.floor = floor_1["default"];

var is_positive_1 = require("./number/is-positive");

exports.isPositive = is_positive_1["default"];

var radians_1 = require("./number/radians");

exports.radians = radians_1["default"];

var round_1 = require("./number/round");

exports.round = round_1["default"];

var truncate_1 = require("./number/truncate");

exports.truncate = truncate_1["default"];

},{"./array/max":1,"./number/absolute":3,"./number/ceil":4,"./number/degrees":5,"./number/floor":6,"./number/is-positive":7,"./number/radians":8,"./number/round":9,"./number/truncate":10}],3:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {
  if (!("absolute" in Number)) {
    /**
     * @description Return the absolute value of the number.
     * @return {Number}
     * @example
     * const number = -42;
     * number.absolute(); // 42
     */
    Number.prototype.absolute = function () {
      return Math.abs(this);
    };
  }
}();

},{}],4:[function(require,module,exports){
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
     */
    Number.prototype.ceil = function () {
      return Math.ceil(this);
    };
  }
}();

},{}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {
  if (!("degrees" in Number)) {
    /**
     * @description Convert the number from radians to degrees.
     * @return {Number}
     * @example
     * const number = 1;
     * number.degrees(); // 57.2958
     */
    Number.prototype.degrees = function () {
      return this * 180 / Math.PI;
    };
  }
}();

},{}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {
  if (!("floor" in Number)) {
    /**
     * @description Returns the floor of the number.
     * @return {Number}
     * @example
     * const number = 42.1;
     * number.floor(); // 42
     */
    Number.prototype.floor = function () {
      return Math.floor(this);
    };
  }
}();

},{}],7:[function(require,module,exports){
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
     */
    Number.prototype.isPositive = function () {
      return [1, 0].includes(Math.sign(this));
    };
  }
}();

},{}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {
  if (!("radians" in Number)) {
    /**
     * @description Convert the number from degrees to radians.
     * @return {Number}
     * @example
     * const number = 1;
     * number.radians(); // 0.0174533
     */
    Number.prototype.radians = function () {
      return this * Math.PI / 180;
    };
  }
}();

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {
  if (!("truncate" in Number)) {
    /**
     * @description Truncates the number.
     * @return {Number}
     * @example
     * const number = 42.123;
     * number.truncate(); // 42
     */
    Number.prototype.truncate = function () {
      return Math.trunc(this);
    };
  }
}();

},{}]},{},[2]);
