import React, { ComponentProps } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CommentList } from "./CommentList";

export default {
	title: "entities/CommentList",
	component: CommentList,
	argTypes: {
		backgroundColor: {
			control: "color",
		},
	},
} as Meta<typeof CommentList>;

const Template: StoryFn<typeof CommentList> = (
	args: ComponentProps<typeof CommentList>
) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	comments: [
		{
			id: "1",
			text: "first comment",
			user: {
				id: "1",
				username: "Nazik"
			}
		},
		{
			id: "2",
			text: "Second comment",
			user: {
				id: "2",
				username: "Keterynka"
			}
		},
	]
};
Primary.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
	comments: [],
	isLoading: true,
};
Loading.decorators = [StoreDecorator({})];