import { expect } from "chai";
import "../../lib/number/is-positive";

describe("isPositive", () => {
	it("should return true if the number is positive", () => {
		const number = 42;
		const expected = true;
		const actual = number.isPositive();

		expect(actual).to.be.equal(expected);
	});

	it("should return false if the number is negative", () => {
		const number = -42;
		const expected = false;
		const actual = number.isPositive();

		expect(actual).to.be.equal(expected);
	});

	it("should return true if the number is equal to 0", () => {
		const number = 0;
		const expected = true;
		const actual = number.isPositive();

		expect(actual).to.be.equal(expected);
	});

	it("should return true if the number is equal to -0", () => {
		const number = -0;
		const expected = true;
		const actual = number.isPositive();

		expect(actual).to.be.equal(expected);
	});

	it("should return true if the number is infinite", () => {
		const number = Infinity;
		const expected = true;
		const actual = number.isPositive();

		expect(actual).to.be.equal(expected);
	});

	it("should return false if the number is -infinity", () => {
		const number = -Infinity;
		const expected = false;
		const actual = number.isPositive();

		expect(actual).to.be.equal(expected);
	});
});
