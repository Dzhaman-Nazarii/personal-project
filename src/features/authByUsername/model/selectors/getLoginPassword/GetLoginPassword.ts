import { StateSchema } from "app/providers/StoreProvider";

export const GetLoginPassword = (state: StateSchema) => state?.loginForm?.password || "";
