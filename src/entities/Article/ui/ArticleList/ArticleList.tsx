import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/articles";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
	return new Array(view === ArticleView.SMALL ? 9 : 3)
	.fill(0)
	.map((item, index) => (
		<ArticleListItemSkeleton
			className={css.card}
			key={index}
			view={view}
		/>
	))
}

export const ArticleList = (props: ArticleListProps) => {
	const { className, articles, isLoading, view = ArticleView.SMALL } = props;

	if (isLoading) {
		return (
			<div
				className={classNames(css.ArticleList, {}, [
					className,
					css[view],
				])}>
				{getSkeletons(view)}
			</div>
		);
	}

	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem
				className={css.card}
				key={article.id}
				article={article}
				view={view}
			/>
		);
	};

	return (
		<div
			className={classNames(css.ArticleList, {}, [className, css[view]])}>
			{articles.length > 0 ? articles.map(renderArticle) : null}
		</div>
	);
};
