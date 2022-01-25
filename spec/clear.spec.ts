import { clear } from "../src";
import { monomio } from "./fixtures";

describe("clear", () => {
	it("should clear nothing", () => {
		const game = monomio();
		expect(clear(game)).toEqual([]);
	});
	it("should clear bottom line", () => {
		const game = monomio();
		game.matrix[2] = [1, 1, 1];
		expect(clear(game)).toEqual([2]);
	});
});
