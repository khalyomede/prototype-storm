export default (() => {
	if (!("ceil" in Number)) {
		/**
		 * @description Return the ceil of the number.
		 * @return {Number}
		 * @example
		 * const number = 41.1;
		 * number.ceil(); // 42
		 * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/ceil.js)
		 * @since 0.1.0
		 */
		Number.prototype.ceil = function(): Number {
			return Math.ceil(this);
		};
	}
})();
