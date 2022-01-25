import { drop } from "../src";

import { monomio } from "./fixtures";

describe("drop", () => {
	it("should move the cursor down", () => {
		const game = monomio();
		drop(game);
		expect(game.cursor.y).toBe(1);
	});

	it("should print the piece", () => {
		const game = monomio();
		drop(game);
		expect(game.matrix[1][1]).toBe(0);
	});
});
