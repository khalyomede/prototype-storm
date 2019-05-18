export default (() => {
	if (!("floor" in Number)) {
		/**
		 * @description Returns the floor of the number.
		 * @return {Number}
		 * @example
		 * const number = 42.1;
		 * number.floor(); // 42
		 */
		Number.prototype.floor = function(): Number {
			return Math.floor(this);
		};
	}
})();
