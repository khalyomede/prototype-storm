import { expect } from "chai";
import "../../lib/number/radians";

describe("radians", () => {
	it("should return 0 when converting 0 degrees", () => {
		const degrees = 0;
		const expected = 0;
		const actual = degrees.radians();

		expect(actual).to.be.equal(expected);
	});

	it("should return infinity if converting infinity degrees", () => {
		const degrees = Infinity;
		const expected = Infinity;
		const actual = degrees.radians();

		expect(actual).to.be.equal(expected);
	});

	it("should return the result using the right calculus", () => {
		const degrees = 42;
		const expected = (42 * Math.PI) / 180;
		const actual = degrees.radians();

		expect(actual).to.be.equal(expected);
	});
});
