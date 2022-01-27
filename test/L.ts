import { Piece } from "../src";

export const L: Piece = {
	shapes: [
		[
			{ x: -1, y: 0 },
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: -1, y: 1 },
		],
		[
			{ x: 0, y: -1 },
			{ x: 0, y: 0 },
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
		],
		[
			{ x: -1, y: 0 },
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 1, y: -1 },
		],
		[
			{ x: 0, y: -1 },
			{ x: 0, y: 0 },
			{ x: 0, y: 1 },
			{ x: -1, y: -1 },
		],
	],
	kicks: [
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
	],
};
