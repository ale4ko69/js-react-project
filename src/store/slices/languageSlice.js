/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { createSlice } from "@reduxjs/toolkit";

import i18n from "../../i18n";

// Get initial language from localStorage or use default
const getInitialLanguage = () => {
	const savedLanguage = localStorage.getItem("i18nextLng");
	return savedLanguage || "en";
};

const initialState = {
	currentLanguage: getInitialLanguage(),
	supportedLanguages: ["en", "ru"],
};

export const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		setLanguage: (state, action) => {
			const language = action.payload;

			// Make sure the language is supported
			if (state.supportedLanguages.includes(language)) {
				// Update Redux state
				state.currentLanguage = language;

				// Update i18next language
				i18n.changeLanguage(language);

				// Save to localStorage
				localStorage.setItem("i18nextLng", language);

				// Log in development mode
				if (process.env.NODE_ENV === "development") {
					console.log(`[language] Changed to: ${language}`);
				}
			} else {
				console.warn(`Language ${language} is not supported`);
			}
		},
		initLanguage: state => {
			// Initialize language based on current state
			i18n.changeLanguage(state.currentLanguage);

			if (process.env.NODE_ENV === "development") {
				console.log(`[language] Initialized with: ${state.currentLanguage}`);
			}
		},
	},
});

export const { setLanguage, initLanguage } = languageSlice.actions;

// Selector for obtaining current language
export const selectCurrentLanguage = state => state.language.currentLanguage;
export const selectSupportedLanguages = state => state.language.supportedLanguages;

export default languageSlice.reducer;
