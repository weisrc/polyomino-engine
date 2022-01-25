import { Game } from "../../src";

const kick = { left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] };

export const domino = (): Game => ({
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
			shapes: [
				[
					{ x: 0, y: 0 },
					{ x: 1, y: 0 },
				],
				[
					{ x: 0, y: 0 },
					{ x: 0, y: 1 },
				],
				[
					{ x: 0, y: 0 },
					{ x: -1, y: 0 },
				],
				[
					{ x: 0, y: 0 },
					{ x: 0, y: -1 },
				],
			],
			kicks: [kick, kick, kick, kick],
		},
	],
	spawns: [],
	angle: 0,
});
