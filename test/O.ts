import { Piece } from "../src";

const shape = [
	{ x: -1, y: 0 },
	{ x: 0, y: -1 },
	{ x: 0, y: 0 },
	{ x: -1, y: -1 },
];

export const O: Piece = {
	shapes: [shape, shape, shape, shape],
	kicks: [
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
		{ left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] },
	],
};
