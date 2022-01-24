import { print } from "../src";

import { monomio } from "./fixtures";

describe("print", () => {
	it("should fill the matrix", () => {
		const game = monomio();
		print(game);
		expect(game.matrix[0][1]).toBe(0);
	});
});
