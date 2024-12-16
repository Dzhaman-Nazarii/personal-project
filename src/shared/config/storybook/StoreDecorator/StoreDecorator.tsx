import React from "react";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "entities/Profile";
import { ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { loginReducer } from "features/authByUsername/model/slice/LoginSlice";
import { articleDetailsReducer } from "entities/Article/model/slice/ArticleDetailsSlice";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/AddCommentFormSlice";
import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice";

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsComments: articleDetailsCommentsReducer
};

export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
	(StoryComponent: StoryFn) =>
		(
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
				<StoryComponent />
			</StoreProvider>
		);
