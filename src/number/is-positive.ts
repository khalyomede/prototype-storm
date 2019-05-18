export default (() => {
	if (!("isPositive" in Number)) {
		/**
		 * @description Returns true if the number is greater or equal to 0, else returns false.
		 * @return {Boolean}
		 * @example
		 * const number = 42;
		 * number.isPositive(); // true
		 * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/is-positive.js)
		 */
		Number.prototype.isPositive = function(): Boolean {
			return [1, 0].includes(Math.sign(this));
		};
	}
})();
