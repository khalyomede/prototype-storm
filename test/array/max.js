import { expect } from "chai";
import "../../lib/array/max";

describe("max", () => {
	it("should return 0 if there is not items", () => {
		const array = [];
		const expected = 0;
		const actual = array.max();

		expect(actual).to.be.equal(expected);
	});

	it("should return 0 if the array does not contains any number", () => {
		const array = [{}, new RegExp(), new Date()];
		const expected = 0;
		const actual = array.max();

		expect(actual).to.be.equal(expected);
	});

	it("should return the number if the array contains only one number", () => {
		const number = 42;
		const array = [number];
		const expected = number;
		const actual = array.max();

		expect(actual).to.be.equal(expected);
	});
});
