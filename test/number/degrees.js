import { expect } from "chai";
import "../../lib/number/degrees";

describe("degrees", () => {
	it("should return 0 degrees", () => {
		const expected = 0;
		const actual = Number(0).degrees();

		expect(actual).to.be.equal(expected);
	});

	it("should use the right calculus", () => {
		const radians = 42;
		const expected = (radians * 180) / Math.PI;
		const actual = radians.degrees();

		expect(actual).to.be.equal(expected);
	});

	it("should return infinity if radians equal to infinity", () => {
		const radians = Infinity;
		const expected = Infinity;
		const actual = radians.degrees();

		expect(actual).to.be.equal(expected);
	});
});
