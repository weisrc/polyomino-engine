# Polyomino Engine

A very simple game engine for generic polyomino line clearning puzzle games.

## Installation

```ts
import * as poly from "polyomino-engine";
```

## Usage

- create: create a new a game instance
- drop: hard drop the cursor piece
- floating: detect if the cursor piece is floating or not
- move: moves the cursor piece, returns false if operation fails
- predict: predict the y of the cursor piece if it was dropped
- print: print the cursor piece onto the board
- rotate: rotate the cursor piece, returns false if operation fails
- spawn: spawns a piece using the available spawn locations, returns false if operation fails
- verify: verifies if the current board and cursor are valid
- clear: clears the filled lines and returns an array of line numbers

> Please refer to `src/types` for more information on the internal types or use intellisense.
