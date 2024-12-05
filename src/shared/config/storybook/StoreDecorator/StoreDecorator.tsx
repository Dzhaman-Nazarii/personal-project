import React from "react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/authByUsername/model/slice/LoginSlice";
import { profileReducer } from "entities/Profile";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer,
	profile: profileReducer,
};

export const StoreDecorator =
	(
		state: DeepPartial<StateSchema>,
		asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
	) =>
	(StoryComponent: StoryFn) =>
		(
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
				<StoryComponent />
			</StoreProvider>
		);
