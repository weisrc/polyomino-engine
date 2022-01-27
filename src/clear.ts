import { Game } from ".";

export function clear(game: Game): number[] {
	const lines: number[] = [];
	let y = 0;
	while (y < game.size.y) {
		if (game.matrix[y].every((v) => v >= 0)) {
			game.matrix.splice(y, 1);
			game.matrix.unshift(new Array(game.size.x).fill(-1));
			lines.push(y);
			y += 2;
		} else {
			y++;
		}
	}
	for (let y = 0; y < game.size.y; y++) {
		if (game.matrix[y].every((v) => v >= 0)) {
			game.matrix[y].fill(-1);
			lines.push(y);
		}
	}
	return lines;
}
