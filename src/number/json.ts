export default (() => {
	if (!("json" in Number)) {
		Number.prototype.json = function(): String {
			return JSON.stringify(this);
		};
	}
})();
