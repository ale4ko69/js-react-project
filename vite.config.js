/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as sass from "sass";


// Получаем __dirname в ESM модуле
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
				// Добавляем normalize в начало каждого SCSS файла
				additionalData: `@use "./src/styles/_normalize.scss" as *;\n`,
			},
		},
		devSourcemap: true,
		// Настройки для CSS модулей
		modules: {
			// Используем camelCase для имен классов
			localsConvention: 'camelCaseOnly',
		},
		postcss: {
			plugins: [],
		},
	},
	build: {
		outDir: "dist",
		assetsDir: "assets",
		sourcemap: true,
		minify: "terser",
		cssCodeSplit: false, // Важно: все CSS в одном файле
		copyPublicDir: true,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "react-router-dom", "@reduxjs/toolkit", "react-redux"],
					i18n: [
						"i18next",
						"react-i18next",
						"i18next-browser-languagedetector",
						"i18next-http-backend",
						"i18next-icu",
					],
				},
				assetFileNames: assetInfo => {
					const info = assetInfo.name ? assetInfo.name.split(".") : [];
					const extType = info.length > 1 ? info[info.length - 1] : "";
					if (extType === "css") {
						return "assets/css/styles.[hash][extname]";
					}
					return "assets/[name]-[hash][extname]";
				},
			},
			input: {
				main: resolve(__dirname, "index.html"),
			},
		},
	},
	publicDir: "public",
});