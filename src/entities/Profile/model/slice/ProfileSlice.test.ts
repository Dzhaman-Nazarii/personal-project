import { Country } from "entities/Country";
import { ProfileSchema, ValidateProfileError } from "../types/profle";
import { profileActions, profileReducer } from "./ProfileSlice";
import { Currency } from "entities/Currency";
import { updateProfileData } from "../services/updateProdileData/updateProfileData";

const data = {
	firstname: "Nazarii",
	lastname: "Dzhaman",
	age: 20,
	city: "Lviv",
	country: Country.Ukraine,
	currency: Currency.UAH,
	username: "admin",
};

describe("ProfileSlice.test", () => {
	test("test set readonly", () => {
		const state: DeepPartial<ProfileSchema> = { readonly: false };
		expect(
			profileReducer(
				state as ProfileSchema,
				profileActions.setReadonly(true)
			)
		).toEqual({ readonly: true });
	});

	test("test cancel edit", () => {
		const state: DeepPartial<ProfileSchema> = {
			data,
			form: { username: "" },
		};
		expect(
			profileReducer(
				state as ProfileSchema,
				profileActions.canCancelEdit()
			)
		).toEqual({
			readonly: true,
			validateErrors: undefined,
			data,
			form: data,
		});
	});

	test("test update profile", () => {
		const state: DeepPartial<ProfileSchema> = {
			form: { username: "Kateryna" },
		};
		expect(
			profileReducer(
				state as ProfileSchema,
				profileActions.updateProfile({ username: "Kateryna" })
			)
		).toEqual({ form: { username: "Kateryna" } });
	});

	test("test update profile service pending", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.SERVER_ERROR],
		};
		expect(
			profileReducer(state as ProfileSchema, updateProfileData.pending)
		).toEqual({ isLoading: true, validateErrors: undefined });
	});

	test("test update profile service fullfiled", () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
			validateErrors: [ValidateProfileError.SERVER_ERROR],
		};
		expect(
			profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))
		).toEqual({ isLoading: false, validateErrors: undefined, readonly: true, form: data, data });
	});
});
