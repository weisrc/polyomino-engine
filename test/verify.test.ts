import { verify } from "../src";
import { monomio } from "./fixtures";

describe("print", () => {
	it("should fail if out of bounds", () => {
		const game = monomio();
		game.cursor.x = -1;
		expect(verify(game)).toBe(false);
	});
});
