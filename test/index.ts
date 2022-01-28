import { Engine, predict } from "../src";
import { I } from "./I";
import { L } from "./L";
import { J } from "./J";
import { O } from "./O";
import { S } from "./S";
import { T } from "./T";
import { Z } from "./Z";

const engine = new Engine(
	{
		size: { x: 10, y: 21 },
		pieces: [I, J, L, O, S, T, Z],
		spawns: [{ x: 5, y: 1 }],
	},
	{
		repeatTimeout: 200,
		repeatInterval: 0,
		softDropMultiplier: 1,
		repeatCutTimeout: 1,
		fallInterval: 1500,
		cancelRepeatOnTurn: true,
	}
);

engine.spawn(0);
engine.startFall();

// @ts-ignore
window.engine = engine;

const canvas = document.body.appendChild(document.createElement("canvas"));
canvas.style.border = "1px black solid";
const SIZE = 20;
canvas.width = SIZE * engine.game.size.x;
canvas.height = SIZE * engine.game.size.y;
const ctx = canvas.getContext("2d");

window.onkeydown = (e) => {
	e.preventDefault();
	switch (e.key) {
		case "ArrowLeft":
			engine.moveLeftPress();
			break;
		case "ArrowRight":
			engine.moveRightPress();
			break;
		case "x":
			engine.rotateLeft();
			break;
		case "z":
			engine.rotateRight();
			break;
		case " ":
			engine.hardDrop();
			break;
	}
};

window.onkeyup = (e) => {
	e.preventDefault();

	switch (e.key) {
		case "ArrowLeft":
			engine.moveLeftRelease();
			break;
		case "ArrowRight":
			engine.moveRightRelease();
			break;
	}
};

const color = (cell: number, s = 100) =>
	`hsl(${(cell / engine.game.pieces.length) * 360}, ${s}%, 50%)`;

function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let y = 0; y < engine.game.size.y; y++) {
		for (let x = 0; x < engine.game.size.x; x++) {
			const cell = engine.game.matrix[y][x];
			if (cell >= 0) {
				ctx.fillStyle = color(cell);
				ctx.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);
			}
		}
	}
	const py = predict(engine.game);
	for (let { x, y } of engine.game.pieces[engine.game.which].shapes[
		engine.game.angle
	]) {
		ctx.fillStyle = color(engine.game.which, 10);

		ctx.fillRect(
			(x + engine.game.cursor.x) * SIZE,
			(y + py) * SIZE,
			SIZE,
			SIZE
		);
		ctx.fillStyle = color(engine.game.which);
		ctx.fillRect(
			(x + engine.game.cursor.x) * SIZE,
			(y + engine.game.cursor.y) * SIZE,
			SIZE,
			SIZE
		);
	}
	requestAnimationFrame(render);
}

render();
