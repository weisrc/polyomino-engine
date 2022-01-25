import { spawn, print } from "../src";

import { monomio } from "./fixtures";

describe("spawn", () => {
	it("should spawn", () => {
		const game = monomio();
		print(game);
		expect(spawn(game, 0)).toBe(true);
		expect(game.cursor.x).toBe(0);
		expect(game.cursor.y).toBe(0);
		print(game);
		expect(spawn(game, 0)).toBe(false);
	});
});
