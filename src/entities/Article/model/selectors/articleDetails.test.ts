import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "./articleDetails";

describe("articleDetails tests", () => {
	test("Should return data", () => {
		const data = {
			id: "1",
			title: "Title",
		};
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data,
			},
		};
		expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
	});

	test("Work with empy data", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
	});

	test("Should return isLoading", () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: true,
			},
		};
		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
	});

	test("Work with empy isLoading", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
	});

	test("Should return error", () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				error: "Error"
			},
		};
		expect(getArticleDetailsError(state as StateSchema)).toEqual("Error");
	});

	test("Work with empy error", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
	});
});
