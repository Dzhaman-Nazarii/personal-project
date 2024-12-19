import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ArticleSortSelector } from "./ArticleSortSelector";

export default {
	title: "entities/Article/ArticleSortSelector",
	component: ArticleSortSelector,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof ArticleSortSelector>;

const Template: StoryFn<typeof ArticleSortSelector> = (
	args: React.ComponentProps<typeof ArticleSortSelector>
) => <ArticleSortSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
