import { TestAsyncClass } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { fetchNextArticlesPage } from "./fetchNextArticlePage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetchNextArticlesPage.test", () => {
	test("Success", async () => {
		const thunk = new TestAsyncClass(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: true,
			},
		});
		await thunk.callThunk();
		expect(thunk.dispatch).toBeCalledTimes(4);
		expect(fetchArticlesList).toBeCalledWith({ page: 3 });
	});
	test("fetchArticlesList not called", async () => {
		const thunk = new TestAsyncClass(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: false,
			},
		});
		await thunk.callThunk();
		expect(thunk.dispatch).toBeCalledTimes(2);
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});
});
