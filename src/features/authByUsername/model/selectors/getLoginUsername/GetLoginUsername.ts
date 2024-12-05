import { StateSchema } from "app/providers/StoreProvider";

export const GetLoginUsername = (state: StateSchema) => state?.loginForm?.username || "";
