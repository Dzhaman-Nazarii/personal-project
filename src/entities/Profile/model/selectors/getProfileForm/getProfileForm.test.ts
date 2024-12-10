import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe("getProfileForm", () => {
	const data = {
		firstname: "Nazarii",
		lastname: "Dzhaman",
		age: 20,
		city: "Lviv",
		country: Country.Ukraine,
		currency: Currency.UAH,
		username: "admin",
	}
	test("Should return value", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				form: data
			}
		}
		expect(getProfileForm(state as StateSchema)).toEqual(data);
	});
	test("Work with empy state", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileForm(state as StateSchema)).toEqual(undefined);
	});
});