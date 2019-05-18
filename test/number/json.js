import { expect } from "chai";
import { json } from "../../lib/main";

describe("json", () => {
	it("should return the exact number", () => {
		const number = 42;
		const expected = "42";
		const actual = number.json();

		expect(actual).to.be.equal(expected);
	});
});
