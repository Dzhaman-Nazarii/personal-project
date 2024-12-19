import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPageNum,
} from "../../selectors/articlesPageSelector";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../slices/articlesPageSlice";

export const fetchNextArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkApi) => {
	const hasMore = getArticlesPageHasMore(thunkApi.getState());
	const page = getArticlesPageNum(thunkApi.getState());
	const isLoading = getArticlesPageIsLoading(thunkApi.getState());

	if (hasMore && !isLoading) {
		thunkApi.dispatch(articlesPageActions.setPage(page + 1));
		thunkApi.dispatch(
			fetchArticlesList({})
		);
	}
});
