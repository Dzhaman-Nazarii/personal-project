import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Tabs } from "./Tabs";
import { action } from "@storybook/addon-actions";

export default {
	title: "shared/Tabs",
	component: Tabs,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (
	args: React.ComponentProps<typeof Tabs>
) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	tabs: [
		{
			value: "tab 1",
			content: "There is tab 1",
		},
		{
			value: "tab 2",
			content: "There is tab 2",
		},
		{
			value: "tab 3",
			content: "There is tab 3",
		},
	],
	value: "tab 2",
	onTabClick: action("onTabClick"),
};
