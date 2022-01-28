import { Piece } from "../src";
import { JLTSZKicks } from "./JLTSZKicks";

export const J: Piece = {
	shapes: [
		[
			{ x: -1, y: 0 },
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 1, y: 1 },
		],
		[
			{ x: 0, y: -1 },
			{ x: 0, y: 0 },
			{ x: 0, y: 1 },
			{ x: 1, y: -1 },
		],
		[
			{ x: -1, y: 0 },
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: -1, y: -1 },
		],
		[
			{ x: 0, y: -1 },
			{ x: 0, y: 0 },
			{ x: 0, y: 1 },
			{ x: -1, y: 1 },
		],
	],
	kicks: JLTSZKicks
};
