import React from "react";
import { Skeleton } from "./Skeleton";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
	title: "shared/Skeleton",
	component: Skeleton,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (
	args: React.ComponentProps<typeof Skeleton>
) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	width: "100%",
	height: 200,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	width: "100%",
	height: 200,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
	width: "100%",
	height: 200,
};
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Circle = Template.bind({});
Circle.args = {
	border: "50%",
	width: 100,
	height: 100,
};

export const CircleDark = Template.bind({});
CircleDark.args = {
	width: "100%",
	height: 200,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleOrange = Template.bind({});
CircleOrange.args = {
	width: "100%",
	height: 200,
};
CircleOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
