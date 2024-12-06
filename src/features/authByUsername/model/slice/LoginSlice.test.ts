import { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./LoginSlice";

describe("LoginSlice", () => {
	test("test set username", () => {
		const state: DeepPartial<LoginSchema> = { username: "admin" };
		expect(
			loginReducer(
				state as LoginSchema,
				loginActions.setUsername("newAdmin")
			)
		).toEqual({ username: "newAdmin" });
	});

	test("test set password", () => {
		const state: DeepPartial<LoginSchema> = { password: "123" };
		expect(
			loginReducer(
				state as LoginSchema,
				loginActions.setPassword("123123")
			)
		).toEqual({ password: "123123" });
	});
});
