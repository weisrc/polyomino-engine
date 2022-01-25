import {
	clear,
	create,
	drop,
	EngineConfig,
	Game,
	GameConfig,
	move,
	spawn,
} from ".";

const NO_TIMER = null as any;

export class Engine {
	game: Game;

	private keys = {
		moveLeft: false,
		moveRight: false,
	};
	private timers = {
		fallInterval: NO_TIMER,
		repeatTimeout: NO_TIMER,
		repeatInterval: NO_TIMER,
	};

	constructor(gameConfig: GameConfig, public config: EngineConfig) {
		this.game = create(gameConfig);
	}

	private fall() {
		move(this.game, 0, 1);
	}

	spawn(which: number) {
		return spawn(this.game, which);
	}

	startFall() {
		this.timers.fallInterval = setInterval(
			() => this.fall(),
			this.config.fallInterval
		);
	}
	stopFall() {
		clearInterval(this.timers.fallInterval);
	}
	setFallInterval(fallInterval: number) {
		this.stopFall();
		this.config.fallInterval = fallInterval;
		this.startFall();
	}

	onMove = () => {};
	onMoveFail = () => {};
	private moveX: -1 | 0 | 1 = 0;
	private move() {
		if (!this.moveX) return;
		if (move(this.game, this.moveX, 0)) this.onMove();
		else this.onMoveFail();
	}

	private clearTimers() {
		clearTimeout(this.timers.repeatTimeout);
		clearInterval(this.timers.repeatInterval);
		this.timers.repeatTimeout = NO_TIMER;
		this.timers.repeatInterval = NO_TIMER;
	}

	private movePress(x: -1 | 1) {
		this.moveX = x;
		this.move();

		if (this.config.cancelRepeatOnTurn) {
			this.clearTimers();
		}

		if (!this.timers.repeatInterval && !this.timers.repeatTimeout) {
			this.timers.repeatTimeout = setTimeout(() => {
				this.move();
				this.timers.repeatInterval = setInterval(() => {
					this.move();
				}, this.config.repeatInterval);
			}, this.config.repeatTimeout);
		}
	}

	moveLeftPress() {
		console.log("ok");
		if (this.keys.moveLeft) return;
		this.keys.moveLeft = true;
		this.movePress(-1);
	}
	moveRightPress() {
		if (this.keys.moveRight) return;
		this.keys.moveRight = true;
		this.movePress(1);
	}

	private moveRelease() {
		this.moveX = 0;
		if (this.keys.moveLeft || this.keys.moveRight) return;
		this.clearTimers();
	}

	moveLeftRelease() {
		this.keys.moveLeft = false;
		this.moveRelease();
	}
	moveRightRelease() {
		this.keys.moveRight = false;
		this.moveRelease();
	}
	hardDrop() {
		drop(this.game);
		this.spawn(0);
		clear(this.game);
		this.clearTimers();
		if (this.moveX) {
			this.movePress(this.moveX);
		}
	}
}
