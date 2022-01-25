import { create } from "../src";

describe("create", () => {
	it("should create the matrix", () => {
		const game = create({
			size: { x: 3, y: 5 },
			pieces: [],
			spawns: [],
		});
		expect(game.matrix.length).toBe(5);
		for (const row of game.matrix) {
			expect(row.length).toBe(3);
		}
	});
});
