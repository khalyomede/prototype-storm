import { expect } from "chai";
import "../../lib/number/floor";

describe("floor", () => {
	it("should return the same integer if the number have a decimal greater than the half", () => {
		const number = 42.6;
		const expected = 42;
		const actual = number.floor();

		expect(actual).to.be.equal(expected);
	});

	it("should return the same integer if the number have a decimal lower than the half", () => {
		const number = 42.4;
		const expected = 42;
		const actual = number.floor();

		expect(actual).to.be.equal(expected);
	});

	it("should return the same integer if the number have a decimal exactly the half", () => {
		const number = 42.5;
		const expected = 42;
		const actual = number.floor();

		expect(actual).to.be.equal(expected);
	});
});
