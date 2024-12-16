import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ArticleDetails } from "./ArticleDetails";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {
	Article,
	ArticleBlockType,
	ArticleType,
} from "../../model/types/articles";

export default {
	title: "entities/ArticleDetails",
	component: ArticleDetails,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof ArticleDetails>;

const Template: StoryFn<typeof ArticleDetails> = (
	args: React.ComponentProps<typeof ArticleDetails>
) => <ArticleDetails {...args} />;

const article: Article = {
	id: "1",
	title: "The Rise of JavaScript Frameworks",
	subtitle: "What changed in JS in 2023?",
	img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
	views: 1450,
	createdAt: "12.10.2023",
	user: {
		id: "1",
		username: "Nazik",
	},
	type: [ArticleType.IT],
	blocks: [
		{
			id: "1",
			type: ArticleBlockType.TEXT,
			title: "Introduction",
			paragraphs: [
				"The traditional 'Hello, world!' program is very simple. It outputs the phrase 'Hello, world!' or a similar message using a specific programming language.",
				"JavaScript is a versatile language that can run in various environments. Typically, it is used in browsers and on server-side platforms like Node.js. If you're new to JavaScript and reading this in a browser, you're just moments away from writing your first JS program.",
				"There are other ways to execute JavaScript code in a browser. Generally, JS programs are loaded to enhance web pages. They are often included as separate .js files, but you can also embed the code directly into the webpage using the <script> tag. When the browser encounters such a tag, it executes the code inside. Detailed explanations about the <script> tag can be found on w3schools.com. Let's look at an example of JavaScript interacting with a webpage.",
			],
		},
		{
			id: "2",
			type: ArticleBlockType.CODE,
			code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="message"></p>\n\n    <script>\n      document.getElementById("message").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
		},
		{
			id: "3",
			type: ArticleBlockType.IMAGE,
			src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
			title: "Figure 1 - Screenshot of a website",
		},
	],
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
	StoreDecorator({
		articleDetails: {
			data: article,
		},
	}),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
	StoreDecorator({
		articleDetails: {
			isLoading: true,
		},
	}),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
	StoreDecorator({
		articleDetails: {
			error: "Error",
		},
	}),
];
