import { Game, move } from ".";

export function predict(game: Game): number {
	const y = game.cursor.y;
	while (move(game, 0, 1)) continue;
	const py = game.cursor.y;
	game.cursor.y = y;
	return py;
}
