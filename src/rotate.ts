import { Angle, Game, verify } from ".";

export function rotate(game: Game, d0: -1 | 1): boolean {
	const kick = game.pieces[game.which].kicks[game.angle];
	const vectors = d0 > 0 ? kick.right : kick.left;
	const { angle, cursor } = game;

	game.angle = ((game.angle + 4 + d0) % 4) as Angle;
	for (const { x, y } of vectors) {
		game.cursor = { x: x + cursor.x, y: y + cursor.y };
		if (verify(game)) return true;
	}
	game.angle = angle;
	game.cursor = cursor;

	return false;
}
