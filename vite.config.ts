import { defineConfig } from "vite";

module.exports = defineConfig({
	build: {
		lib: {
			entry: "src/index.ts",
			name: "PolyominoEngine",
			fileName: (format) => `polyomino-engine.${format}.js`,
		},
	},
});
