import { move } from "../src";

import { monomio } from "./fixtures";

describe("move", () => {
	it("should move by (-1, 0)", () => {
		const game = monomio();
		expect(move(game, -1, 0)).toBe(true)
		expect(game.cursor.x).toBe(0);
		expect(game.cursor.y).toBe(0);
	});

	it("should move by (1, 0)", () => {
		const game = monomio();
		expect(move(game, 1, 0)).toBe(true)
		expect(game.cursor.x).toBe(2);
		expect(game.cursor.y).toBe(0);
	});

	it("should move by (0, 1)", () => {
		const game = monomio();
		expect(move(game, 0, 1)).toBe(true)
		expect(game.cursor.x).toBe(1);
		expect(game.cursor.y).toBe(1);
	});

	it("should not move by (0, -1)", () => {
		const game = monomio();
		expect(move(game, 0, -1)).toBe(false)
		expect(game.cursor.x).toBe(1);
		expect(game.cursor.y).toBe(0);
	});

	it("should not move by (-2, 0)", () => {
		const game = monomio();
		expect(move(game, -2, 0)).toBe(false)
		expect(game.cursor.x).toBe(1);
		expect(game.cursor.y).toBe(0);
	});

	it("should not move by (2, 0)", () => {
		const game = monomio();
		expect(move(game, 2, 0)).toBe(false)
		expect(game.cursor.x).toBe(1);
		expect(game.cursor.y).toBe(0);
	});

	it("should not move by (0, 2)", () => {
		const game = monomio();
		expect(move(game, 0, 2)).toBe(false)
		expect(game.cursor.x).toBe(1);
		expect(game.cursor.y).toBe(0);
	});
});
