import { Game } from ".";

export function print({
	pieces,
	which,
	angle,
	cursor: { x: cx, y: cy },
	matrix,
}: Game) {
	for (const { x: sx, y: sy } of pieces[which].shapes[angle]) {
		matrix[sy + cy][sx + cx] = which;
	}
}
