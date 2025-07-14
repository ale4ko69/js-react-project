/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: userReducer,
	},
});
