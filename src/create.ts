import { Game, GameConfig } from ".";

export function create(config: GameConfig): Game {
	return {
		...config,
		angle: 0,
		which: -1,
		cursor: { x: 0, y: 0 },
		matrix: new Array(config.size.y)
			.fill(0)
			.map(() => new Array(config.size.x).fill(-1)),
	};
}
