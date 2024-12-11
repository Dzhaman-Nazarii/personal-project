import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(css.ArticleDetailsPage, {}, [className])}>
			<h1>{t("Article Details Page")}</h1>
		</div>
	);
};

export default memo(ArticleDetailsPage);
