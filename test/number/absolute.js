import { expect } from "chai";
import "../../lib/number/absolute";

describe("absolute", () => {
	it("should return 0 if converting 0", () => {
		const number = 0;
		const expected = 0;
		const actual = number.absolute();

		expect(actual).to.be.equal(expected);
	});

	it("should return the exact number if it is positive", () => {
		const number = 42;
		const expected = 42;
		const actual = number.absolute();

		expect(actual).to.be.equal(expected);
	});

	it("should return the positive number if it is a negative number", () => {
		const number = -42;
		const expected = 42;
		const actual = number.absolute();

		expect(actual).to.be.equal(expected);
	});

	it("should return infinity if it is -infinity", () => {
		const number = -Infinity;
		const expected = Infinity;
		const actual = number.absolute();

		expect(actual).to.be.equal(expected);
	});
});
