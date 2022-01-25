import { Engine } from "../src";

const kick = { left: [{ x: 0, y: 0 }], right: [{ x: 0, y: 0 }] };

const engine = new Engine(
	{
		size: { x: 10, y: 21 },
		pieces: [
			{
				shapes: [
					[
						{ x: 0, y: 0 },
						{ x: 1, y: 0 },
					],
					[
						{ x: 0, y: 0 },
						{ x: 0, y: 1 },
					],
					[
						{ x: 0, y: 0 },
						{ x: -1, y: 0 },
					],
					[
						{ x: 0, y: 0 },
						{ x: 0, y: -1 },
					],
				],
				kicks: [kick, kick, kick, kick],
			},
		],
		spawns: [{ x: 5, y: 1 }],
	},
	{
		repeatTimeout: 200,
		repeatInterval: 0,
		softDropMultiplier: 1,
		repeatCutTimeout: 1,
		fallInterval: 1000,
		cancelRepeatOnTurn: true,
	}
);

engine.spawn(0);
engine.startFall();

// @ts-ignore
window.engine = engine;

const canvas = document.body.appendChild(document.createElement("canvas"));
canvas.style.border = "1px black solid";
const SIZE = 25;
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

function render() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let y = 0; y < engine.game.size.y; y++) {
		for (let x = 0; x < engine.game.size.x; x++) {
			if (engine.game.matrix[y][x] >= 0) {
				ctx.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);
			}
		}
	}
	for (let { x, y } of engine.game.pieces[engine.game.which].shapes[
		engine.game.angle
	]) {
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
