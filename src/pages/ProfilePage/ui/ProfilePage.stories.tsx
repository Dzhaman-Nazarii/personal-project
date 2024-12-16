import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
	title: "pages/ProfilePage",
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof ProfilePage>;

const Template: StoryFn<typeof ProfilePage> = (
	args: React.ComponentProps<typeof ProfilePage>
) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
	StoreDecorator({
		profile: {
			form: {
				firstname: "Nazarii",
				lastname: "Dzhaman",
				age: 20,
				city: "Lviv",
				country: Country.Ukraine,
				currency: Currency.UAH,
				username: "admin",
			},
		},
	}),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
	StoreDecorator({
		profile: {
			form: {
				firstname: "Nazarii",
				lastname: "Dzhaman",
				age: 20,
				city: "Lviv",
				country: Country.Ukraine,
				currency: Currency.UAH,
				username: "admin",
			},
		},
	}),
	ThemeDecorator(Theme.DARK),
];
