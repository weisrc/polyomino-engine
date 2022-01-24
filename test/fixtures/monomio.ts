import { Game } from "../../src";

const square = [{ x: 0, y: 0 }];
const kick = { left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] };

export const monomio = (): Game => ({
	size: { x: 3, y: 3 },
	matrix: [
		[-1, -1, -1],
		[-1, -1, -1],
		[-1, 99, -1],
	],
	cursor: { x: 1, y: 0 },
	which: 0,
	pieces: [
		{
			shapes: [square, square, square, square],
			kicks: [kick, kick, kick, kick],
		},
	],
	spawns: [
		{ x: 1, y: 0 },
		{ x: 0, y: 0 },
	],
	angle: 0,
});
