import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article } from "../types/articles";

const initialState: ArticleDetailsSchema = {
	isLoading: false,
	error: undefined,
	data: undefined,
};

export const ArticleDetailsSlice = createSlice({
	name: "articleDetails",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchArticleById.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(
			fetchArticleById.fulfilled,
			(state, action: PayloadAction<Article>) => {
				state.isLoading = false;
				state.data = action.payload;
			}
		);
		builder.addCase(fetchArticleById.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export const { actions: articleDetailsActions } = ArticleDetailsSlice;
export const { reducer: articleDetailsReducer } = ArticleDetailsSlice;
