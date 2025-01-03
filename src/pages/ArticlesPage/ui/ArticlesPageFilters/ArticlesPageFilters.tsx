import { ArticleViewSelector } from "features/ArticleViewSelector";
import { useCallback, useMemo } from "react";
import {
	ArticleSortField,
	ArticleSortSelector,
	ArticleType,
	ArticleTypeTabs,
	ArticleView,
} from "entities/Article";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { useSelector } from "react-redux";
import {
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageType,
	getArticlesPageView,
} from "../../model/selectors/articlesPageSelector";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/ui/Input";
import { SortOrder } from "shared/types";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticlesPageFilters.module.scss";

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
	const search = useSelector(getArticlesPageSearch);
	const tab = useSelector(getArticlesPageType);

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }));
	}, [dispatch]);

	const debounceFetchData = useDebounce(fetchData, 500);

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
		},
		[dispatch]
	);

	const onChangeSort = useCallback(
		(newSort: ArticleSortField) => {
			dispatch(articlesPageActions.setSort(newSort));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[dispatch, debounceFetchData]
	);

	const onChangeOrder = useCallback(
		(newOrder: SortOrder) => {
			dispatch(articlesPageActions.setOrder(newOrder));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[dispatch, debounceFetchData]
	);

	const onChangeSearch = useCallback(
		(newSearch: string) => {
			dispatch(articlesPageActions.setSearch(newSearch));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[dispatch, debounceFetchData]
	);

	const onChangeType = useCallback(
		(value: ArticleType) => {
			dispatch(articlesPageActions.setType(value));
			dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData]
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
				<Input
					value={search}
					onChange={onChangeSearch}
					placeholder={t("Search")}
				/>
			</Card>
			<ArticleTypeTabs
				className={css.tabs}
				value={tab}
				onChangeType={onChangeType}
			/>
		</div>
	);
};
