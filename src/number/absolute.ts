export default (() => {
	if (!("absolute" in Number)) {
		/**
		 * @description Return the absolute value of the number.
		 * @return {Number}
		 * @example
		 * const number = -42;
		 * number.absolute(); // 42
		 * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/absolute.js)
		 */
		Number.prototype.absolute = function(): Number {
			return Math.abs(this);
		};
	}
})();
