import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { Profile } from "../../types/profle";

export const fetchProfileData = createAsyncThunk<
Profile,
	void,
	ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkAPI) => {
	try {
		const response = await thunkAPI.extra.api.get<Profile>("/profile");

		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			i18n.t("The login or password is incorrect")
		);
	}
});
