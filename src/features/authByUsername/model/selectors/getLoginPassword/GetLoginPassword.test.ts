import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { GetLoginPassword } from "./GetLoginPassword";

describe("GetLoginPassword", () => {
	test("Should return value", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: "123"
			}
		}
		expect(GetLoginPassword(state as StateSchema)).toEqual("123");
	});
	test("Work with empy state", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(GetLoginPassword(state as StateSchema)).toEqual("");
	});
});