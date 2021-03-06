export default (() => {
	if (!("floor" in Number)) {
		/**
		 * @description Returns the floor of the number.
		 * @return {Number}
		 * @example
		 * const number = 42.1;
		 * number.floor(); // 42
		 * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/floor.js)
		 * @since 0.1.0
		 */
		Number.prototype.floor = function(): Number {
			return Math.floor(this);
		};
	}
})();
