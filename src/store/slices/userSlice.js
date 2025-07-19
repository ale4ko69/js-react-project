/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	/**
	 * Initial state for the user slice.
	 * Contains an empty array of users.
	 * This will be populated with user data fetched from an API.
	 */
	users: [],
};

export const userSlice = createSlice({
	/**
	 * Slice for managing user-related state in the Redux store.
	 * Contains actions and reducers for setting users, adding a user, and clearing users.
	 */
	name: "users",
	initialState,
	reducers: {
		setUsers: (state, action) =>{
			state.users = action.payload || [];
		},
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        clearUsers: (state) => {
            state.users = [];
        }
	},
});

export const { setUsers, addUser, clearUsers } = userSlice.actions;

// Selector for obtaining a meter value
export const selectUsers = state => state.users.users;

export default userSlice.reducer;
