import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
	title: "widgets/Navbar",
	component: Navbar,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (
	args: React.ComponentProps<typeof Navbar>
) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [StoreDecorator({
    user: {authData: {}}
})];
