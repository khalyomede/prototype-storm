import { expect } from "chai";
import { unduplicate } from "../../lib/main";

describe("unduplicate", () => {
	it("should return an empty array if the array is empty", () => {
		const array = [];
		const expected = [];
		const actual = array.unduplicate();

		expect(actual).to.be.deep.equal(expected);
	});

	it("should return the same array if the values are not duplicated", () => {
		const array = [1, 2, 3, 0, -1];
		const expected = array;
		const actual = array.unduplicate();

		expect(actual).to.be.deep.equal(expected);
	});

	it("should return the unduplicated array if it contains duplicates", () => {
		const array = [1, 2, 3, 1, 3, 2, 0, -1];
		const expected = [1, 2, 3, 0, -1];
		const actual = array.unduplicate();

		expect(actual).to.be.deep.equal(expected);
	});
});
