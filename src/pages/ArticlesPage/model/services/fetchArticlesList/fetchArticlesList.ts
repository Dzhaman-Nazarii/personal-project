import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/articlesPageSelector";

interface fetchArticlesListProps {
	page?: number;
}

export const fetchArticlesList = createAsyncThunk<
	Article[],
	fetchArticlesListProps,
	ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkApi) => {
	const { page = 1 } = props;
	const limit = getArticlesPageLimit(thunkApi.getState());
	try {
		const response = await thunkApi.extra.api.get<Article[]>("/articles", {
			params: {
				_expand: "user",
				_limit: limit,
				_page: page,
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
