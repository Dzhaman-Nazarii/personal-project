import { updateProfileData } from "./updateProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncClass } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
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

describe("updateProfileData.test", () => {
	test("Success", async () => {
		const thunk = new TestAsyncClass(updateProfileData, {
			profile: {
				form: data,
			},
		});
		thunk.api.put.mockReturnValue(
			Promise.resolve({
				data,
			})
		);
		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(data);
	});

	test("Error", async () => {
		const thunk = new TestAsyncClass(updateProfileData, {
			profile: {
				form: data,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
	});

	test("Validate error", async () => {
		const thunk = new TestAsyncClass(updateProfileData, {
			profile: {
				form: {...data, lastname: ""},
			},
		});
		const result = await thunk.callThunk();
		expect(result.meta.requestStatus).toBe("rejected");
		expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
	});
});
