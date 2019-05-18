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
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/array/max.js)
     */
    Array.prototype.max = function () {
      return Math.max(this.filter(function (item) {
        return typeof item === "number";
      }));
    };
  }
}();

},{}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {
  if (!("unduplicate" in Array)) {
    /**
     * @description Returns the array and removes any duplicates.
     * @return {Array}
     * @example
     * const array = [1, 1, 2, 3, 3, 0, -1];
     * array.unduplicate(); // [1, 2, 3, 0, -1]
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/array/unduplicate.js)
     */
    Array.prototype.unduplicate = function () {
      return Array.from(new Set(this));
    };
  }
}();

},{}],3:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var max_1 = require("./array/max");

exports.max = max_1["default"];

var unduplicate_1 = require("./array/unduplicate");

exports.unduplicate = unduplicate_1["default"];

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

var json_1 = require("./number/json");

exports.json = json_1["default"];

var radians_1 = require("./number/radians");

exports.radians = radians_1["default"];

var round_1 = require("./number/round");

exports.round = round_1["default"];

var truncate_1 = require("./number/truncate");

exports.truncate = truncate_1["default"];

},{"./array/max":1,"./array/unduplicate":2,"./number/absolute":4,"./number/ceil":5,"./number/degrees":6,"./number/floor":7,"./number/is-positive":8,"./number/json":9,"./number/radians":10,"./number/round":11,"./number/truncate":12}],4:[function(require,module,exports){
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
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/absolute.js)
     */
    Number.prototype.absolute = function () {
      return Math.abs(this);
    };
  }
}();

},{}],5:[function(require,module,exports){
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
     */
    Number.prototype.ceil = function () {
      return Math.ceil(this);
    };
  }
}();

},{}],6:[function(require,module,exports){
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
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/degrees.js)
     */
    Number.prototype.degrees = function () {
      return this * 180 / Math.PI;
    };
  }
}();

},{}],7:[function(require,module,exports){
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
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/floor.js)
     */
    Number.prototype.floor = function () {
      return Math.floor(this);
    };
  }
}();

},{}],8:[function(require,module,exports){
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
     */
    Number.prototype.isPositive = function () {
      return [1, 0].includes(Math.sign(this));
    };
  }
}();

},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {
  if (!("json" in Number)) {
    /**
     * @description Returns true if the number is greater or equal to 0, else returns false.
     * @return {String}
     * @example
     * const number = 42;
     * number.json(); // "42"
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/json.js)
     */
    Number.prototype.json = function () {
      return JSON.stringify(this);
    };
  }
}();

},{}],10:[function(require,module,exports){
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
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/radians.js)
     */
    Number.prototype.radians = function () {
      return this * Math.PI / 180;
    };
  }
}();

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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
     * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/truncate.js)
     */
    Number.prototype.truncate = function () {
      return Math.trunc(this);
    };
  }
}();

},{}]},{},[3]);
