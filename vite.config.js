/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as sass from "sass";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
        implementation: sass,
				// Here you can add global variables or Sass mixes.
				// additionalData: `@import "./src/styles/variables.scss";`
			},
		},
	},
});
