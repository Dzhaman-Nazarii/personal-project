import { StateSchema } from "app/providers/StoreProvider";

export const GetLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
