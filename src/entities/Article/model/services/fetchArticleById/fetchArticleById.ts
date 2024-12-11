import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { Article } from "../../types/articles";

export const fetchArticleById = createAsyncThunk<
	Article,
	string,
	ThunkConfig<string>
>("articleDetails/fetchArticleById", async (articleId, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`);

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			i18n.t("Error")
		);
	}
});
