/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	users: [],
};

export const userSlice = createSlice({
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
