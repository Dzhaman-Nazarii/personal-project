import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profle";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProdileData/updateProfileData";

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	data: undefined,
	error: undefined,
};

export const ProfileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		canCancelEdit: (state) => {
			state.readonly = true;
			state.form = state.data;
		},
		updateProfile: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.data,
				...action.payload,
			};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProfileData.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(
			fetchProfileData.fulfilled,
			(state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
			}
		);
		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(updateProfileData.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(
			updateProfileData.fulfilled,
			(state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.form = action.payload;
				state.data = action.payload;
			}
		);
		builder.addCase(updateProfileData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
