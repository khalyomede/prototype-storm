export default (() => {
	if (!("absolute" in Number)) {
		/**
		 * @description Return the absolute value of the number.
		 * @return {Number}
		 * @example
		 * const number = -42;
		 * number.absolute(); // 42
		 */
		Number.prototype.absolute = function(): Number {
			return Math.abs(this);
		};
	}
})();
