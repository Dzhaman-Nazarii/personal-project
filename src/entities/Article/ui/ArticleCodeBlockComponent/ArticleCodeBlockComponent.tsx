import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
	className?: string;
}

export const ArticleCodeBlockComponent = ({
	className,
}: ArticleCodeBlockComponentProps) => {
	return (
		<div
			className={classNames(css.ArticleCodeBlockComponent, {}, [
				className,
			])}>
			<h1>ArticleCodeBlockComponent</h1>
		</div>
	);
};
