import { expect } from "chai";
import "../../lib/number/ceil";

describe("ceil", () => {
	it("should return the upper integer if the number has a decimal greater than the half", () => {
		const number = 41.9;
		const expected = 42;
		const actual = number.ceil();

		expect(actual).to.be.equal(expected);
	});

	it("should return the upper integer if the number has a decimal exactly the half", () => {
		const number = 41.5;
		const expected = 42;
		const actual = number.ceil();

		expect(actual).to.be.equal(expected);
	});

	it("should return the upper integer if the number has a decimal lower than the half", () => {
		const number = 41.1;
		const expected = 42;
		const actual = number.ceil();

		expect(actual).to.be.equal(expected);
	});

	it("should return the same number if the number has no decimal", () => {
		const number = 42;
		const expected = 42;
		const actual = number.ceil();

		expect(actual).to.be.equal(expected);
	});
});
