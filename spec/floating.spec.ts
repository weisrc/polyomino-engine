import { floating } from "../src";

import { monomio } from "./fixtures";

describe("floating", () => {
	it("should detect when piece is floating", () => {
		const game = monomio();
		expect(floating(game)).toBe(true);
	});

	it("should detect when piece is not floating", () => {
		const game = monomio();
		game.cursor.y = 2;
		expect(floating(game)).toBe(false);
	});
});
