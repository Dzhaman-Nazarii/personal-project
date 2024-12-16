import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";

const initialState: AddCommentFormSchema = {
	text: "",
};

export const AddCommentFormSlice = createSlice({
	name: "AddCommentFormSlice",
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
});

export const { actions: addCommentFormActions } = AddCommentFormSlice;
export const { reducer: addCommentFormReducer } = AddCommentFormSlice;
