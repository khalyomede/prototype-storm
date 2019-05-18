export default (() => {
	if (!("truncate" in Number)) {
		/**
		 * @description Truncates the number.
		 * @return {Number}
		 * @example
		 * const number = 42.123;
		 * number.truncate(); // 42
		 */
		Number.prototype.truncate = function(): Number {
			return Math.trunc(this);
		};
	}
})();
