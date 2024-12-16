import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Text } from "shared/ui/Text/Text";
import { Card } from "./Card";

export default {
	title: "shared/Card",
	component: Card,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: (
		<Text
			title="test"
			text="Some text"
		/>
	),
};
