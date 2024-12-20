import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleDetailsPageHeader.module.scss";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selectors/article.";

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = (
	props: ArticleDetailsPageHeaderProps
) => {
	const { className } = props;

	const { t } = useTranslation();
	const navigate = useNavigate();
	const article = useSelector(getArticleDetailsData);
	const canEdit = useSelector(getCanEditArticle);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath.article_details}${article?.id}/edit`);
	}, [navigate, article?.id]);

	return (
		<div
			className={classNames(css.ArticleDetailsPageHeader, {}, [
				className,
			])}>
			<Button onClick={onBackToList}>{t("Back to list")}</Button>
			{canEdit && (
				<Button
					className={css.editBtn}
					onClick={onEditArticle}>
					{t("Edit")}
				</Button>
			)}
		</div>
	);
};
