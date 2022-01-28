import { Piece } from "../src";

export const JLTSZKicks: Piece["kicks"] = [
	// 0 >> ? intitial rotation
	{
		// if player wants to rotate left
		left: [
			// 0 >> 3
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
			{ x: 1, y: 1 },
			{ x: 0, y: -2 },
			{ x: 1, y: -2 },
		],
		// if player wants to rotate right
		right: [
			// 0 >> 1
			{ x: 0, y: 0 },
			{ x: -1, y: 0 },
			{ x: -1, y: 1 },
			{ x: 0, y: -2 },
			{ x: -1, y: -2 },
		],
	},
	// 1 >> ? after one rotation to the right
	{
		left: [
			// 1 >> 0
			{ x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: -1 },
            { x: 0, y: 2 },
            { x: 1, y: 2 },
		],
		right: [
			// 1 >> 2
			{ x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: -1 },
            { x: 0, y: 2 },
            { x: 1, y: 2 },
		],
	},
	// 2 >> ? after two rotation to the right
	{
		left: [
			// 2 >> 1
			{ x: 0, y: 0 },
			{ x: -1, y: 0 },
			{ x: -1, y: 1 },
			{ x: 0, y: -2 },
			{ x: -1, y: -2 },
		],
		right: [
			// 2 >> 3
			{ x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 0, y: -2 },
            { x: 1, y: -2 },
		],
	},
	// 3 >> ? after one ratation to the left
	{
		left: [
			// 3 >> 2
			{ x: 0, y: 0 },
            { x: -1, y: 0 },
            { x: -1, y: -1 },
            { x: 0, y: 2 },
            { x: -1, y: 2 },
		],
		right: [
			// 3 >> 0
			{ x: 0, y: 0 },
            { x: -1, y: 0 },
            { x: -1, y: -1 },
            { x: 0, y: 2 },
            { x: -1, y: 2 },
		],
	},
];
