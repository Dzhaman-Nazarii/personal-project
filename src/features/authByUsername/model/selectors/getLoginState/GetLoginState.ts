import { StateSchema } from "app/providers/StoreProvider";

export const GetLoginState = (state: StateSchema) => state?.loginForm;
