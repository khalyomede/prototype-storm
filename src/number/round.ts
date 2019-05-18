export default (() => {
	if (!("round" in Number)) {
		/**
		 * @description Rounds the number to the number of desired digits.
		 * @return {Number}
		 * @example
		 * const number = 42.12345;
		 * number.round(3); // 42.123
		 */
		Number.prototype.round = function(digits: Number): Number {
			const typeOfDigits = typeof digits;

			if (typeOfDigits !== "number") {
				throw new Error(
					`expected digits to be a number (got: ${typeOfDigits})`
				);
			}

			return parseFloat(this.toFixed(digits));
		};
	}
})();
