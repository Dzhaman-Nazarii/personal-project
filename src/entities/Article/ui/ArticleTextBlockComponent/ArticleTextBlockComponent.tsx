import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
	className?: string;
}

export const ArticleTextBlockComponent = ({
	className,
}: ArticleTextBlockComponentProps) => {
	return (
		<div
			className={classNames(css.ArticleTextBlockComponent, {}, [
				className,
			])}>
			<h1>ArticleTextBlockComponent</h1>
		</div>
	);
};
