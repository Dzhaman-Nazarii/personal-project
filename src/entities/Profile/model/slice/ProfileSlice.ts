import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profle";

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	data: undefined,
	error: undefined,
};

export const ProfileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {},
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
