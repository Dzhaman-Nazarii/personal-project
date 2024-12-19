import { memo, useCallback } from "react";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";

import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from "../../model/selectors/articlesPageSelector";
import {
	articlesPageReducer,
	getArticles,
} from "../../model/slices/articlesPageSlice";
import { Page } from "widgets/Page/Page";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlePage/fetchNextArticlePage";
import { Text } from "shared/ui/Text/Text";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { classNames } from "shared/lib/classNames/classNames";
import { useSearchParams } from "react-router-dom";
import css from "./ArticlesPage.module.scss";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
};

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);

	let [searcParams] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage(searcParams));
	});

	if (error) {
		return <Text text="Something went wrong" />;
	}

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={false}>
			<Page
				onScrollEnd={onLoadNextPart}
				className={classNames(css.ArticlesPage, {}, [className])}>
				<ArticlesPageFilters />
				<ArticleList
					className={css.list}
					isLoading={isLoading}
					view={view}
					articles={articles}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
