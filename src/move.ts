import { Game, verify } from ".";

export function move(game: Game, dx: number, dy: number): boolean {
	game.cursor.x += dx;
	game.cursor.y += dy;
	if (verify(game)) return true;
	game.cursor.x -= dx;
	game.cursor.y -= dy;
	return false;
}
