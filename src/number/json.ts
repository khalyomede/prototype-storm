export default (() => {
	if (!("json" in Number)) {
		/**
		 * @description Returns true if the number is greater or equal to 0, else returns false.
		 * @return {String}
		 * @example
		 * const number = 42;
		 * number.json(); // "42"
		 * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/number/json.js)
		 * @since 0.2.0
		 */
		Number.prototype.json = function(): String {
			return JSON.stringify(this);
		};
	}
})();
