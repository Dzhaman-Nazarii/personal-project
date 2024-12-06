import { StateSchema } from "app/providers/StoreProvider";
import { GetLoginIsLoading } from "./GetLoginIsLoading";

describe("GetLoginIsLoading", () => {
	test("Should return true", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true
			}
		}
		expect(GetLoginIsLoading(state as StateSchema)).toEqual(true);
	});
	test("Work with empy state", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(GetLoginIsLoading(state as StateSchema)).toEqual(false);
	});
});