import { Game, verify } from ".";

export function spawn(game: Game, which: number): boolean {
	const { cursor, which: oldWhich, angle: oldAngle } = game;
	game.which = which;
	game.angle = 0;
	for (const { x, y } of game.spawns) {
		game.cursor = { x, y };
		if (verify(game)) return true;
	}
	game.cursor = cursor;
	game.which = oldWhich;
	game.angle = oldAngle;
	return false;
}
