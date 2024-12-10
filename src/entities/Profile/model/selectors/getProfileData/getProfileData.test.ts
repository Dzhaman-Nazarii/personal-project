import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe("getProfileData", () => {
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
				data
			}
		}
		expect(getProfileData(state as StateSchema)).toEqual(data);
	});
	test("Work with empy state", () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});