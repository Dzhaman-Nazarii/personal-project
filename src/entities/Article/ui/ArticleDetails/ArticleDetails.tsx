import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
	className?: string;
}

export const ArticleDetails = ({ className }: ArticleDetailsProps) => {
	return (
		<div className={classNames(css.ArticleDetails, {}, [className])}>
			<h1>ArticleDetails</h1>
		</div>
	);
};
