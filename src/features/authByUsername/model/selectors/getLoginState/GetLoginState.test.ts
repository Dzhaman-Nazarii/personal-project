import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { GetLoginState } from "./GetLoginState";

describe("GetLoginState", () => {
	test("Should return state", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: "admin",
				password: "123",
				isLoading: false,
				error: ""
			}
		}
		expect(GetLoginState(state as StateSchema)).toEqual({
			username: "admin",
			password: "123",
			isLoading: false,
			error: ""
		});
	});
	test("Work with empy state", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(GetLoginState(state as StateSchema)).toEqual(undefined)
	});
});