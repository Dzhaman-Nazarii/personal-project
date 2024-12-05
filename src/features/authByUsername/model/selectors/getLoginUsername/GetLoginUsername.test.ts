import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { GetLoginUsername } from "./GetLoginUsername";

describe("GetLoginUsername", () => {
	test("Should return value", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: "admin"
			}
		}
		expect(GetLoginUsername(state as StateSchema)).toEqual("admin");
	});
	test("Work with empy state", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(GetLoginUsername(state as StateSchema)).toEqual("");
	});
});