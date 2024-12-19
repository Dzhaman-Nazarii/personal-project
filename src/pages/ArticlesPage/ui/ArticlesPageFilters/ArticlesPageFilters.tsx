import { ArticleViewSelector } from "features/ArticleViewSelector";
import { useCallback } from "react";
import {
	ArticleSortField,
	ArticleSortSelector,
	ArticleView,
} from "entities/Article";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { useSelector } from "react-redux";
import {
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageView,
} from "../../model/selectors/articlesPageSelector";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/ui/Input";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticlesPageFilters.module.scss";
import { SortOrder } from "shared/types";

interface ArticlesPageFiltersProps {
	className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const view = useSelector(getArticlesPageView);
	const sort = useSelector(getArticlesPageSort);
	const order = useSelector(getArticlesPageOrder);

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
		},
		[dispatch]
	);

	const onChangeSort = useCallback(
		(newSort: ArticleSortField) => {
			dispatch(articlesPageActions.setSort(newSort));
		},
		[dispatch]
	);

	const onChangeOrder = useCallback(
		(newOrder: SortOrder) => {
			dispatch(articlesPageActions.setOrder(newOrder));
		},
		[dispatch]
	);

	return (
		<div className={classNames(css.ArticlesPageFilters, {}, [className])}>
			<div className={css.sortWrapper}>
				<ArticleSortSelector
					sort={sort}
					order={order}
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
				/>
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
