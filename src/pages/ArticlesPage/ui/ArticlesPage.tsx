import { memo, useCallback } from "react";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { ArticleView } from "entities/Article/model/types/articles";
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
	getArticlesPageNum,
	getArticlesPageView,
} from "../model/selectors/articlesPageSelector";
import {
	articlesPageActions,
	articlesPageReducer,
	getArticles,
} from "../model/slices/articlesPageSlice";
import { ArticleViewSelector } from "features/ArticleViewSelector";
import { Page } from "widgets/Page/Page";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlePage/fetchNextArticlePage";
import { Text } from "shared/ui/Text/Text";
import { initArticlesPage } from "../model/services/initArticlesPage/initArticlesPage";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticlesPage.module.scss";

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
	const page = useSelector(getArticlesPageNum);

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
		},
		[dispatch, page]
	);

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage());
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
				<ArticleViewSelector
					view={view}
					onViewClick={onChangeView}
				/>
				<ArticleList
					isLoading={isLoading}
					view={view}
					articles={articles}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
