import { rotate } from "../src";

import { domino } from "./fixtures";

describe("rotate", () => {
	it("should rotate right", () => {
		const game = domino();
		expect(rotate(game, 1)).toBe(true);
		expect(game.angle).toBe(1);
	});

	it("should not rotate left", () => {
		const game = domino();
		expect(rotate(game, -1)).toBe(false);
		expect(game.angle).toBe(0);
	});
});
