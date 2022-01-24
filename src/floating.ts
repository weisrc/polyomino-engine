import { Game, verify } from ".";

export function floating(game: Game): boolean {
	game.cursor.y += 1;
	const ok = verify(game);
	game.cursor.y -= 1;
	return ok;
}
