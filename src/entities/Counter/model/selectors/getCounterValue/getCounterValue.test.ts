import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./GetCounterValue";

describe("getCounterValue", () => {
	test("Should return counter value", () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		};
		expect(getCounterValue(state as StateSchema)).toEqual(10);
	});
});
