import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("getProfileIsLoading", () => {
	test("Should return value", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true
			}
		}
		expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
	});
	test("Work with empy state", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
	});
});