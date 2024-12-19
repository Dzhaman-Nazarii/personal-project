import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ArticleTypeTabs } from "./ArticleTypeTabs";

export default {
	title: "entities/Article/ArticleTypeTabs",
	component: ArticleTypeTabs,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof ArticleTypeTabs>;

const Template: StoryFn<typeof ArticleTypeTabs> = (
	args: React.ComponentProps<typeof ArticleTypeTabs>
) => <ArticleTypeTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
