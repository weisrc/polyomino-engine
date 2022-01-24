import { Game, verify } from ".";

export function spawn(game: Game, which: number): boolean {
	const { cursor: oldCursor, which: oldWhich, angle: oldAngle } = game;
	game.which = which;
	game.angle = 0;
	for (const cursor of game.spawns) {
		game.cursor = cursor;
		if (verify(game)) return true;
	}
	game.cursor = oldCursor;
	game.which = oldWhich;
	game.angle = oldAngle;
	return false;
}
