import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelector";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { ArticleSortField, ArticleType } from "entities/Article";
import { SortOrder } from "shared/types";

export const initArticlesPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkApi) => {
	const inited = getArticlesPageInited(thunkApi.getState());
	if (!inited) {
		const orderFromUrl = searchParams.get("order") as SortOrder;
		const searchFromUrl = searchParams.get("search");
		const sortFromUrl = searchParams.get("sort") as ArticleSortField;
		const typeFromUrl = searchParams.get("type") as ArticleType;

		if(orderFromUrl) {
			thunkApi.dispatch(articlesPageActions.setOrder(orderFromUrl))
		}

		if(searchFromUrl) {
			thunkApi.dispatch(articlesPageActions.setSearch(searchFromUrl))
		}

		if(sortFromUrl) {
			thunkApi.dispatch(articlesPageActions.setSort(sortFromUrl))
		}

		if(typeFromUrl) {
			thunkApi.dispatch(articlesPageActions.setType(typeFromUrl))
		}

		thunkApi.dispatch(articlesPageActions.initState());
		thunkApi.dispatch(
			fetchArticlesList({})
		);
	}
});
