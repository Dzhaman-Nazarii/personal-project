import { StateSchema } from "app/providers/StoreProvider";

export const GetLoginError = (state: StateSchema) => state?.loginForm?.error;
