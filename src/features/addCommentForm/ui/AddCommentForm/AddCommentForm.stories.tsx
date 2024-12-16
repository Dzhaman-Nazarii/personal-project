import React, { ComponentProps } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import AddCommentForm from "./AddCommentForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
	title: "features/AddCommentForm",
	component: AddCommentForm,
	argTypes: {
		backgroundColor: {
			control: "color",
		},
	},
} as Meta<typeof AddCommentForm>;

const Template: StoryFn<typeof AddCommentForm> = (
	args: ComponentProps<typeof AddCommentForm>
) => <AddCommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	onSendComment: action("onSendComment"),
};
Primary.decorators = [StoreDecorator({})];
