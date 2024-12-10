import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import AvatarImg from "shared/assets/icons/avatar.jpg";

export default {
	title: "features/ProfileCard",
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof ProfileCard>;

const Template: StoryFn<typeof ProfileCard> = (
	args: React.ComponentProps<typeof ProfileCard>
) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	data: {
		firstname: "Nazarii",
		lastname: "Dzhaman",
		age: 20,
		city: "Lviv",
		country: Country.Ukraine,
		currency: Currency.UAH,
		username: "admin",
		avatar: AvatarImg,
	},
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
	error: "error",
};
