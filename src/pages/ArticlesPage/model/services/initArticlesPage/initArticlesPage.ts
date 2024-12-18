import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelector";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkApi) => {
	const inited = getArticlesPageInited(thunkApi.getState());
	if (!inited) {
		thunkApi.dispatch(articlesPageActions.initState());
		thunkApi.dispatch(
			fetchArticlesList({
				page: 1,
			})
		);
	}
});
