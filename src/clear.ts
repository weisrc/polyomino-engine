import { Game } from ".";

export function clear(game: Game): number[] {
	const lines: number[] = [];
	game.matrix = game.matrix
		.map((row, i) => {
			if (row.every((v) => v >= 0)) {
				lines.push(i);
				return new Array(game.size.x).fill(-1);
			}
			return row;
		})
		.sort((a, b) => +b.every((v) => v === -1) - +a.every((v) => v === -1));

	return lines;
}
