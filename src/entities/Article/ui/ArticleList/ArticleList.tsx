import React, { HTMLAttributeAnchorTarget } from "react";
import { Article, ArticleView } from "../../model/types/articles";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleList.module.scss";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
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
		));
};

export const ArticleList = (props: ArticleListProps) => {
	const { className, articles, isLoading, view = ArticleView.SMALL, target } = props;
	const { t } = useTranslation();

	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem
				className={css.card}
				target={target}
				key={article.id}
				article={article}
				view={view}
			/>
		);
	};

	if (!isLoading && !articles.length) {
		return (
			<div
				className={classNames(css.ArticleList, {}, [
					className,
					css[view],
				])}>
				<Text
					size={TextSize.L}
					title={t("Article not found")}
				/>
			</div>
		);
	}

	return (
		<div
			className={classNames(css.ArticleList, {}, [className, css[view]])}>
			{articles.length > 0 ? articles.map(renderArticle) : null}
			{isLoading && getSkeletons(view)}
		</div>
	);
};
