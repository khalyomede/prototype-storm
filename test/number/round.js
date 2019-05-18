import { expect } from "chai";
import "../../lib/number/round";

describe("round", () => {
	it("should return the rounded number", () => {
		const number = 42.3142128;
		const expected = 42.314;
		const actual = number.round(3);

		expect(actual).to.be.equal(expected);
	});
});
