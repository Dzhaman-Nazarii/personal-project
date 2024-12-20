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
import React, { HTMLAttributeAnchorTarget, useCallback } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
	const { className, article, view, target } = props;
	const { t } = useTranslation();

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
						<AppLink
							target={target}
							to={RoutePath.article_details + article.id}>
							<Button theme={ButtonTheme.OUTLINE}>
								{t("Read more...")}
							</Button>
						</AppLink>
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
		<AppLink
			target={target}
			to={RoutePath.article_details + article.id}
			className={classNames(css.ArticleListItem, {}, [
				className,
				css[view],
			])}>
			<Card className={css.card}>
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
				<Text
					text={article.title}
					className={css.title}
				/>
			</Card>
		</AppLink>
	);
};
