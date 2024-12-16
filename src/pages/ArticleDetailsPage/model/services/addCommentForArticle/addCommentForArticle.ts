import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getUserAuthData } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { getArticleDetailsData } from "entities/Article";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
	Comment,
	string,
	ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkApi) => {
	const userData = getUserAuthData(thunkApi.getState());
	const article = getArticleDetailsData(thunkApi.getState());

	if (!userData || !text || !article) {
		return thunkApi.rejectWithValue("No data");
	}
	try {
		const response = await thunkApi.extra.api.post<Comment>("/comments", {
			articleId: article?.id,
			userId: userData.id,
			text,
		});

		if (!response.data) {
			throw new Error("Error");
		}

		thunkApi.dispatch(fetchCommentsByArticleId(article.id));

		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue("No data");
	}
});
