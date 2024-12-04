import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
	title: "features/LoginForm",
	component: LoginForm,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (
	args: React.ComponentProps<typeof LoginForm>
) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
	StoreDecorator({
		loginForm: {
			username: "user",
			password: "123",
		},
	}),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
	StoreDecorator({
		loginForm: {
			isLoading: true,
		},
	}),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
	StoreDecorator({
		loginForm: {
			username: "user",
			password: "123",
			error: "Error",
		},
	}),
];
