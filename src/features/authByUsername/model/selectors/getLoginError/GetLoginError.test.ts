import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { GetLoginError } from "./GetLoginError";

describe("GetLoginError", () => {
	test("Should return error", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: "Error"
			}
		}
		expect(GetLoginError(state as StateSchema)).toEqual("Error");
	});
	test("Work with empy state", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(GetLoginError(state as StateSchema)).toEqual(undefined);
	});
});