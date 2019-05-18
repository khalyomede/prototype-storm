export default (() => {
	if (!("ceil" in Number)) {
		/**
		 * @description Return the ceil of the number.
		 * @return {Number}
		 * @example
		 * const number = 41.1;
		 * number.ceil(); // 42
		 */
		Number.prototype.ceil = function(): Number {
			return Math.ceil(this);
		};
	}
})();
