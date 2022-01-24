import { Game } from ".";

export function clear(game: Game): number[] {
	const lines: number[] = [];
	for (let y = 0; y < game.size.y; y++) {
		if (game.matrix[y].every((v) => v >= 0)) {
			game.matrix[y].fill(-1);
			lines.push(y);
		}
	}
	return lines;
}
