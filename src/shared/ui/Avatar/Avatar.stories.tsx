import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from "../../assets/icons/avatar.jpg";

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
	args: {
		to: '/'
	}
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args: React.ComponentProps<typeof Avatar>) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	size: 150,
	src: AvatarImg
};

export const Small = Template.bind({});
Small.args = {
	size: 50,
	src: AvatarImg
};
