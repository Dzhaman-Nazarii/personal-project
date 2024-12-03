import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args: React.ComponentProps<typeof Input>) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: "Type text",
	value: "qwerty123"
};
