export default (() => {
	if (!("radians" in Number)) {
		/**
		 * @description Convert the number from degrees to radians.
		 * @return {Number}
		 * @example
		 * const number = 1;
		 * number.radians(); // 0.0174533
		 * @see [CDN link](https://unpkg.com/@khalyomede/prototype-storm@0.2.0/dist/number/radians.js)
		 * @since 0.1.0
		 */
		Number.prototype.radians = function(): Number {
			return (this * Math.PI) / 180;
		};
	}
})();
