import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CurrencySelect } from "./CurrencySelect";

export default {
	title: "entities/CurrencySelect",
	component: CurrencySelect,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	args: {
		to: "/",
	},
} as Meta<typeof CurrencySelect>;

const Template: StoryFn<typeof CurrencySelect> = () => <CurrencySelect />;

export const Primary = Template.bind({});
Primary.args = {};
