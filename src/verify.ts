import { Game } from ".";

export function verify({
	pieces,
	which,
	angle,
	size: { x: w, y: h },
	cursor: { x: cx, y: cy },
	matrix,
}: Game): boolean {
	for (const { x: sx, y: sy } of pieces[which].shapes[angle]) {
		const x = sx + cx,
			y = sy + cy;
		if (x < 0 || y < 0 || x >= w || y >= h || matrix[y][x] >= 0) return false;
	}
	return true;
}
