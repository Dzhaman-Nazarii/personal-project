import React, { memo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slices/ArticleDetailsCommentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "features/addCommentForm";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Page } from "widgets/Page/Page";
import { getArticleRecommendations } from "../../model/slices/ArticleDetailsRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/reccomendations";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slices";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleDetailsPage.module.scss";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { id } = useParams<{ id: string }>();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const recommendations = useSelector(getArticleRecommendations.selectAll);
	const recommendationsIsLoading = useSelector(
		getArticleRecommendationsIsLoading
	);

	const onSendComment = useCallback(
		(text: string) => {
			dispatch(addCommentForArticle(text));
		},
		[dispatch]
	);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
		dispatch(fetchArticleRecommendations());
	});

	if (!id) {
		return (
			<Page
				className={classNames(css.ArticleDetailsPage, {}, [className])}>
				<Text title={t("Article not found")} />
			</Page>
		);
	}

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={true}>
			<Page
				className={classNames(css.ArticleDetailsPage, {}, [className])}>
				<ArticleDetailsPageHeader />
				<ArticleDetails id={id} />
				<Text
					title={t("Recommend")}
					size={TextSize.L}
					className={css.sectionTitle}
				/>
				<ArticleList
					articles={recommendations}
					isLoading={recommendationsIsLoading}
					className={css.recommendations}
					target="_blank"
				/>
				<Text
					title={t("Comments")}
					size={TextSize.L}
					className={css.sectionTitle}
				/>
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList
					comments={comments}
					isLoading={commentsIsLoading}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
