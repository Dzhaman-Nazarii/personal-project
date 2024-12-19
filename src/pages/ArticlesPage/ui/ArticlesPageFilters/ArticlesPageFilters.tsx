import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticlesPageFilters.module.scss";
import { ArticleViewSelector } from "features/ArticleViewSelector";
import { useCallback } from "react";
import { ArticleView } from "entities/Article";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articlesPageActions } from "pages/ArticlesPage/model/slices/articlesPageSlice";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "pages/ArticlesPage/model/selectors/articlesPageSelector";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/ui/Input";

interface ArticlesPageFiltersProps {
	className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const view = useSelector(getArticlesPageView);

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
		},
		[dispatch]
	);

	return (
		<div className={classNames(css.ArticlesPageFilters, {}, [className])}>
			<div className={css.sortWrapper}>
				<Select label={t("Sort by")} />
				<ArticleViewSelector
					view={view}
					onViewClick={onChangeView}
				/>
			</div>
			<Card className={css.search}>
				<Input placeholder={t("Search")} />
			</Card>
		</div>
	);
};
