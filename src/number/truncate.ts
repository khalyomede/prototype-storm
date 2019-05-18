export default (() => {
	if (!("truncate" in Number)) {
		/**
		 * @description Truncates the number.
		 * @return {Number}
		 * @example
		 * const number = 42.123;
		 * number.truncate(); // 42
		 * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/truncate.js)
		 */
		Number.prototype.truncate = function(): Number {
			return Math.trunc(this);
		};
	}
})();
