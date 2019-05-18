export default (() => {
	if (!("unduplicate" in Array)) {
		/**
		 * @description Returns the array and removes any duplicates.
		 * @return {Array}
		 * @example
		 * const array = [1, 1, 2, 3, 3, 0, -1];
		 * array.unduplicate(); // [1, 2, 3, 0, -1]
		 * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.1.0/dist/array/unduplicate.js)
		 */
		Array.prototype.unduplicate = function(): Array {
			return Array.from(new Set(this));
		};
	}
})();
