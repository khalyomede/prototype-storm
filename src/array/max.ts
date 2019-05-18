export default (() => {
	if (!("max" in Array)) {
		/**
		 * @description Returns the maximum among all the numbers of the array.
		 * @return {Number}
		 * @example
		 * const array = [1, 2, 3];
		 * array.max(); // 3
		 */
		Array.prototype.max = function(): Number {
			return Math.max(this.filter(item => typeof item === "number"));
		};
	}

	console.log("test");
})();
