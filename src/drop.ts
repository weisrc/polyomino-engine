import { Game, move, print } from ".";

export function drop(game: Game) {
	while (move(game, 0, 1)) continue;
	print(game);
}
