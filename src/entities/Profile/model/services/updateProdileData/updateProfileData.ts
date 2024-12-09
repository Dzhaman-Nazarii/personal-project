import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { Profile } from "../../types/profle";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<string>
>("profile/updateProfileData", async (_, thunkAPI) => {
	const formData = getProfileForm(thunkAPI.getState());
	try {
		const response = await thunkAPI.extra.api.put<Profile>("/profile", formData);

		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(
			i18n.t("The login or password is incorrect")
		);
	}
});
