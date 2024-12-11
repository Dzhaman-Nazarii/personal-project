import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./Select";

export default {
	title: "shared/Select",
	component: Select,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	args: {
		to: "/",
	},
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (
	args: React.ComponentProps<typeof Select>
) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: "Specify currency",
	options: [
		{ value: "USD", content: "USD" },
		{ value: "EUR", content: "EUR" },
		{ value: "UAH", content: "UAH" },
	],
};
