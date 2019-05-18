export default (() => {
	if (!("unduplicate" in Array)) {
		Array.prototype.unduplicate = function() {
			return Array.from(new Set(this));
		};
	}
})();
