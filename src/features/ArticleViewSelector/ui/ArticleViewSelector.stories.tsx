import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ArticleViewSelector } from "./ArticleViewSelector";

export default {
	title: "features/ArticleViewSelector",
	component: ArticleViewSelector,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof ArticleViewSelector>;

const Template: StoryFn<typeof ArticleViewSelector> = (
	args: React.ComponentProps<typeof ArticleViewSelector>
) => <ArticleViewSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
