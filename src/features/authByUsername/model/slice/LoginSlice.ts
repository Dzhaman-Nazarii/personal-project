import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

const initialState: LoginSchema = {
	username: "",
	password: "",
	isLoading: false
};

export const LoginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginByUsername.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		})
		builder.addCase(loginByUsername.fulfilled, (state) => {
			state.isLoading = false;
		})
		builder.addCase(loginByUsername.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
	}
});

export const { actions: loginActions } = LoginSlice;
export const { reducer: loginReducer } = LoginSlice;
