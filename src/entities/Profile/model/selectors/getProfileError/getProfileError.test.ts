import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
	test("Should return value", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: "error"
			}
		}
		expect(getProfileError(state as StateSchema)).toEqual("error");
	});
	test("Work with empy state", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileError(state as StateSchema)).toEqual(undefined);
	});
});