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

export interface Config {
	size: Vector;
	spawns: Vector[];
	pieces: Piece[];
}

export type Matrix = number[][];

export interface Game extends Config {
	matrix: Matrix;
	cursor: Vector;
	angle: Angle;
	which: number;
}
