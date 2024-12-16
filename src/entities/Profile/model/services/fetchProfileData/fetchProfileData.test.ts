import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncClass } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const data = {
	firstname: "Nazarii",
	lastname: "Dzhaman",
	age: 20,
	city: "Lviv",
	country: Country.Ukraine,
	currency: Currency.UAH,
	username: "admin",
};

describe("fetchProfileData.test", () => {
	test("Success", async () => {
		const thunk = new TestAsyncClass(fetchProfileData);
		thunk.api.get.mockReturnValue(
			Promise.resolve({
				data,
			})
		);
		const result = await thunk.callThunk("1");

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(data);
	});

	test("Error", async () => {
		const thunk = new TestAsyncClass(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk("1");
		expect(result.meta.requestStatus).toBe("rejected");
	});
});
