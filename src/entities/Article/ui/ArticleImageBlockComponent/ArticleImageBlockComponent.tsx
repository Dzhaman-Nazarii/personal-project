import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
	className?: string;
}

export const ArticleImageBlockComponent = ({
	className,
}: ArticleImageBlockComponentProps) => {
	return (
		<div
			className={classNames(css.ArticleImageBlockComponent, {}, [
				className,
			])}>
			<h1>ArticleImageBlockComponentProps</h1>
		</div>
	);
};
