import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
	Comment[],
	string | undefined,
	ThunkConfig<string>
>("commentsDetails/fetchCommentsByArticleId", async (articleId, thunkApi) => {
	try {
		const response = await thunkApi.extra.api.get<Comment[]>("/comments", {
			params: {
				articleId,
				_expand: "user",
			},
		});

		if (!articleId) {
			return thunkApi.rejectWithValue("Error");
		}

		if (!response.data) {
			throw new Error();
		}
		
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue("Error");
	}
});
