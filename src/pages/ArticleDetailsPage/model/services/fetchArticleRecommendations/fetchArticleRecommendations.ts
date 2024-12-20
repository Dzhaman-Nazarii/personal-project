import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<
	Article[],
	void,
	ThunkConfig<string>
>("articlesDetailsPage/fetchArticlesList", async (_, thunkApi) => {
	try {
		const response = await thunkApi.extra.api.get<Article[]>("/articles", {
			params: {
				_limit: 4,
			},
		});

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue("Error");
	}
});
