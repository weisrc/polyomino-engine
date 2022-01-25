import { predict } from "../src";

import { monomio } from "./fixtures";

describe("predict", () => {
	it("should predict cursor Y without moving cursor", () => {
		const game = monomio();
		expect(predict(game)).toBe(1);
		expect(game.cursor.x).toBe(1);
		expect(game.cursor.y).toBe(0);
	});
});
