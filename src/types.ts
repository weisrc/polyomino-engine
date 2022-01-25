export interface Vector {
	x: number;
	y: number;
}

export type Shape = Vector[];

export type Angle = 0 | 1 | 2 | 3;

export interface Kick {
	left: Vector[];
	right: Vector[];
}

export interface Piece {
	shapes: [Shape, Shape, Shape, Shape];
	kicks: [Kick, Kick, Kick, Kick];
}

export interface GameConfig {
	size: Vector;
	spawns: Vector[];
	pieces: Piece[];
}

export type Matrix = number[][];

export interface Game extends GameConfig {
	matrix: Matrix;
	cursor: Vector;
	angle: Angle;
	which: number;
}

export interface EngineConfig {
	fallInterval: number;
	// handling
	repeatTimeout: number; // delayed auto shift
	repeatInterval: number; // auto repeat rate
	softDropMultiplier: number; // soft drop fall multiplier
	repeatCutTimeout: number; // DAS cut delay
	cancelRepeatOnTurn: boolean; // cancel DAS on direction Change
}
