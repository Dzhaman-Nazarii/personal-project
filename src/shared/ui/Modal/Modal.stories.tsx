import { Meta, StoryFn } from "@storybook/react";
import { Modal } from "./Modal";
import React from "react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
	title: "shared/Modal",
	component: Modal,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (
	args: React.ComponentProps<typeof Modal>
) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
	isOpen: true,
	children:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Perferendis similique dignissimos assumenda nesciunt quibusdamomnis hic temporibus tempore quas sapiente, modi non, doloremexpedita eius praesentium adipisci, voluptatem cumque aut.Ratione at quaerat, mollitia deleniti et molestiae dolorum.Aliquam ipsam nihil non dolorum dicta vitae esse molestiasplaceat iusto.",
};

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Perferendis similique dignissimos assumenda nesciunt quibusdamomnis hic temporibus tempore quas sapiente, modi non, doloremexpedita eius praesentium adipisci, voluptatem cumque aut.Ratione at quaerat, mollitia deleniti et molestiae dolorum.Aliquam ipsam nihil non dolorum dicta vitae esse molestiasplaceat iusto.",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];