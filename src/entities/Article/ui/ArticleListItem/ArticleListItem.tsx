import {
	Article,
	ArticleBlockType,
	ArticleTextBlock,
	ArticleView,
} from "../../model/types/articles";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye.svg";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleListItem.module.scss";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";
import React, { useCallback } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
	const { className, article, view } = props;
	const { t } = useTranslation();
	const navigate = useNavigate();

	const onOpenArticle = useCallback(() => {
		navigate(RoutePath.article_details + article.id);
	}, [navigate, article.id]);

	if (view === ArticleView.BIG) {
		let textBlock = article.blocks.find(
			(block) => block.type === ArticleBlockType.TEXT
		) as ArticleTextBlock;
		return (
			<div
				className={classNames(css.ArticleListItem, {}, [
					className,
					css[view],
				])}>
				<Card className={css.card}>
					<div className={css.header}>
						<Avatar
							size={30}
							src={article.user.avatar}
						/>
						<Text
							text={article.user.username}
							className={css.username}
						/>
						<Text
							text={article.createdAt}
							className={css.date}
						/>
					</div>
					<Text
						text={article.title}
						className={css.title}
					/>
					<Text
						text={article.type.join(", ")}
						className={css.types}
					/>
					<img
						src={article.img}
						alt={article.title}
						className={css.img}
					/>
					{textBlock && (
						<ArticleTextBlockComponent
							block={textBlock}
							className={css.textBlock}
						/>
					)}
					<div className={css.footer}>
						<Button
							onClick={onOpenArticle}
							theme={ButtonTheme.OUTLINE}>
							{t("Read more...")}
						</Button>
						<Text
							text={String(article.views)}
							className={css.views}
						/>
						<Icon Svg={EyeIcon} />
					</div>
				</Card>
			</div>
		);
	}
	return (
		<div
			className={classNames(css.ArticleListItem, {}, [
				className,
				css[view],
			])}>
			<Card
				className={css.card}
				onClick={onOpenArticle}>
				<div className={css.imageWrapper}>
					<img
						src={article.img}
						alt={article.title}
						className={css.img}
					/>
					<Text
						text={article.createdAt}
						className={css.date}
					/>
				</div>
				<div className={css.infoWrapper}>
					<Text
						text={article.type.join(", ")}
						className={css.types}
					/>
					<Text
						text={String(article.views)}
						className={css.views}
					/>
					<Icon Svg={EyeIcon} />
				</div>
			</Card>
			<Text
				text={article.title}
				className={css.title}
			/>
		</div>
	);
};
