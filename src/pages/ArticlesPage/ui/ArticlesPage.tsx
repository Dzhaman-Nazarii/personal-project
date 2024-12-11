import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ArticlesPageProps {
	className?: string;
}

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(css.ArticlesPage, {}, [className])}>
			<h1>{t("Articles Page")}</h1>
		</div>
	);
};

export default memo(ArticlesPage);
