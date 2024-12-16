import React, { ComponentProps } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CommentCard } from "./CommentCard";

export default {
	title: "entities/CommentCard",
	component: CommentCard,
	argTypes: {
		backgroundColor: {
			control: "color",
		},
	},
} as Meta<typeof CommentCard>;

const Template: StoryFn<typeof CommentCard> = (
	args: ComponentProps<typeof CommentCard>
) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	comment: {
		id: "1",
		text: "first comment",
		user: {
			id: "1",
			username: "Nazik",
		},
	},
};

export const Loading = Template.bind({});
Loading.args = {
	comment: {
		id: "1",
		text: "first comment",
		user: {
			id: "1",
			username: "Nazik",
		},
	},
	isLoading: true
};