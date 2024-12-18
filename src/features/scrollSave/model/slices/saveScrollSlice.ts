import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSaveSchema } from "../types/scrollSaveSchema";

const initialState: ScrollSaveSchema = {
	scroll: {},
};

export const saveScrollSlice = createSlice({
	name: "saveScroll",
	initialState,
	reducers: {
		setScrollPosition: (
			state,
			action: PayloadAction<{ path: string; position: number }>
		) => {
			state.scroll[action.payload.path] = action.payload.position;
		},
	},
});

export const { actions: saveScrollActions } = saveScrollSlice;
export const { reducer: saveScrollReducer } = saveScrollSlice;
