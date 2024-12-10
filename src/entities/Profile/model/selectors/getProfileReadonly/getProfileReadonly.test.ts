import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileReadonly", () => {
	test("Should return value", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: true,
			},
		};
		expect(getProfileReadonly(state as StateSchema)).toEqual(true);
	});
	test("Work with empy state", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
	});
});
