import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/Article";
import {
	getArticlesPageLimit,
	getArticlesPageNum,
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageType,
} from "../../selectors/articlesPageSelector";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";

interface fetchArticlesListProps {
	replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
	Article[],
	fetchArticlesListProps,
	ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, thunkApi) => {
	const limit = getArticlesPageLimit(thunkApi.getState());
	const sort = getArticlesPageSort(thunkApi.getState());
	const order = getArticlesPageOrder(thunkApi.getState());
	const search = getArticlesPageSearch(thunkApi.getState());
	const page = getArticlesPageNum(thunkApi.getState());
	const type = getArticlesPageType(thunkApi.getState());

	try {
		addQueryParams({
			sort,
			order,
			search,
			type,
		});
		const response = await thunkApi.extra.api.get<Article[]>("/articles", {
			params: {
				_expand: "user",
				_limit: limit,
				_page: page,
				_sort: sort,
				_order: order,
				q: search,
				type: type === ArticleType.ALL ? undefined : type,
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
