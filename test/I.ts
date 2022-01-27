import { Piece } from "../src";

export const I: Piece = {
	shapes: [
		[
			{ x: -1, y: 1 },
			{ x: 0, y: 1 },
			{ x: 1, y: 1 },
			{ x: 2, y: 1 },
		],
		[
			{ x: 1, y: -1 },
			{ x: 1, y: 0 },
			{ x: 1, y: 1 },
			{ x: 1, y: 2 },
		],
		[
			{ x: -1, y: 0 },
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
		],
		[
			{ x: 0, y: -1 },
			{ x: 0, y: 0 },
			{ x: 0, y: 1 },
			{ x: 0, y: 2 },
		],
	],
	kicks: [
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
	],
};
