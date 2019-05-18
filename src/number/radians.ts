export default (() => {
	if (!("radians" in Number)) {
		/**
		 * @description Convert the number from degrees to radians.
		 * @return {Number}
		 * @example
		 * const number = 1;
		 * number.radians(); // 0.0174533
		 */
		Number.prototype.radians = function(): Number {
			return (this * Math.PI) / 180;
		};
	}
})();
