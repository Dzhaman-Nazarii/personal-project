import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { NotFoundPage } from "./NotFoundPage";

export default {
	title: "pages/NotFoundPage",
	component: NotFoundPage,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof NotFoundPage>;

const Template: StoryFn<typeof NotFoundPage> = (
	args: React.ComponentProps<typeof NotFoundPage>
) => <NotFoundPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
