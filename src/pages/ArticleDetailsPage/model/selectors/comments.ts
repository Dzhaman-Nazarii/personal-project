import { StateSchema } from "app/providers/StoreProvider";

export const getArticleCommentsIds = (state: StateSchema) => state.articleDetailsComments?.ids;
export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
export const getArticleCommentsEntities = (state: StateSchema) => state.articleDetailsComments?.entities;