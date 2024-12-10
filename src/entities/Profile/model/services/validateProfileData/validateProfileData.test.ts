import { validateProfileData } from "./validateProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "../../types/profle";

const data = {
	firstname: "Nazarii",
	lastname: "Dzhaman",
	age: 20,
	city: "Lviv",
	country: Country.Ukraine,
	currency: Currency.UAH,
	username: "admin",
};

describe("validateProfileData.test", () => {
	test("Success", async () => {
		const result = validateProfileData(data);

		expect(result).toEqual([]);
	});

	test("without first name ot last name", async () => {
		const result = validateProfileData({
			...data,
			firstname: "",
			lastname: "",
		});
		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
	});

	test("incorrect age", async () => {
		const result = validateProfileData({
			...data,
			age: undefined,
		});
		expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
	});

	test("incorrect country", async () => {
		const result = validateProfileData({
			...data,
			country: undefined,
		});
		expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
	});

	test("incorrect all", async () => {
		const result = validateProfileData({});
		expect(result).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
		]);
	});

	test("without data", async () => {
		const result = validateProfileData();
		expect(result).toEqual([ValidateProfileError.NO_DATA]);
	});
});
