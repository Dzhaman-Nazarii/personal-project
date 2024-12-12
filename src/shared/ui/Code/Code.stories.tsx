import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Code } from "./Code";

export default {
	title: "shared/Code",
	component: Code,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	args: {
		to: "/",
	},
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = (
	args: React.ComponentProps<typeof Code>
) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'export default {\n'
        + '    title: \'shared/Code\',\n'
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as Meta<typeof Code>;\n'
        + '\n'
        + 'const Template: StoryFn<typeof Code> = (args: React.ComponentProps<typeof Code>) => <Code {...args} />;\n'
        + '\n'
        + 'export const Primary = Template.bind({});',
};
