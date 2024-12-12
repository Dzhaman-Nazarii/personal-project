import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleDetailsPage.module.scss";
import { Text } from "shared/ui/Text/Text";

interface ArticleDetailsPageProps {
	className?: string;
	id?: string;
}

const ArticleDetailsPage = ({ className, id }: ArticleDetailsPageProps) => {
	const { t } = useTranslation();
	const params = useParams<{ id: string }>();
	const articleId = id || params?.id;

	if (!articleId) {
		return (
			<div
				className={classNames(css.ArticleDetailsPage, {}, [className])}>
				<Text title={t("Article not found")} />
			</div>
		);
	}

	return (
		<div className={classNames(css.ArticleDetailsPage, {}, [className])}>
			<ArticleDetails id={articleId} />
		</div>
	);
};

export default memo(ArticleDetailsPage);
