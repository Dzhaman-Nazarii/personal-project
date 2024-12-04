import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
	title: "shared/Text",
	component: Text,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (
	args: React.ComponentProps<typeof Text>
) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: "Something in title",
	text: "Something in text",
};

export const Error = Template.bind({});
Error.args = {
	title: "Something in title",
	text: "Something in text",
	theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
	title: "Something in title",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
	text: "Something in text",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	title: "Something in title",
	text: "Something in text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
	title: "Something in title",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
	text: "Something in text",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
