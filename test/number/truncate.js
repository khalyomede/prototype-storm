import { expect } from "chai";
import "../../lib/number/truncate";

describe("truncate", () => {
	it("should return the number without its decimal part", () => {
		const number = 42.314;
		const expected = 42;
		const actual = number.truncate();

		expect(actual).to.be.equal(expected);
	});

	it("should return the number without its decimal part even if it is negative", () => {
		const number = -42;
		const expected = -42;
		const actual = number.truncate();

		expect(actual).to.be.equal(expected);
	});

	it("should return the exact same number if the number does not have any decimals", () => {
		const number = 42;
		const expected = 42;
		const actual = number.truncate();

		expect(actual).to.be.equal(expected);
	});
});
