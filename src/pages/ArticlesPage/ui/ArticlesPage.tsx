import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticlesPage.module.scss";
import { memo } from "react";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { Article } from "entities/Article";
import {
	ArticleBlockType,
	ArticleType,
	ArticleView,
} from "entities/Article/model/types/articles";

interface ArticlesPageProps {
	className?: string;
}

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
		avatar: "https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3449.jpg?w=826"
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
			code: `<html>
						<body>
						<p id="message"></p>
						<script>
							document.getElementById("message").innerHTML = "Hello, world!";
						</script>
						</body>
					</html>`,
		},
		{
			id: "3",
			type: ArticleBlockType.IMAGE,
			src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
			title: "Figure 1 - Screenshot of a website",
		},
	],
};

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
	return (
		<div className={classNames(css.ArticlesPage, {}, [className])}>
			<ArticleList view={ArticleView.BIG} articles={[article]} />
		</div>
	);
};

export default memo(ArticlesPage);
