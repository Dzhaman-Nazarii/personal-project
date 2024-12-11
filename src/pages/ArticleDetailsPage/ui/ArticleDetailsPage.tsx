import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleDetailsPage.module.scss";
import { Text } from "shared/ui/Text/Text";

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation();
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return (
			<div
				className={classNames(css.ArticleDetailsPage, {}, [className])}>
				<Text title={t("Article not found")} />
			</div>
		);
	}

	return (
		<div className={classNames(css.ArticleDetailsPage, {}, [className])}>
			<ArticleDetails id={id} />
		</div>
	);
};

export default memo(ArticleDetailsPage);
