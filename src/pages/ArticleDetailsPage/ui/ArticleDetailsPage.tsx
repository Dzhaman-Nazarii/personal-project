import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleDetailsPage.module.scss";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import {
	articleDetailsCommentsReducer,
	getArticleComments,
} from "../model/slices/ArticleDetailsCommentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId";

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { id } = useParams<{ id: string }>();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

	useInitialEffect(() => {
			dispatch(fetchCommentsByArticleId(id));
	});

	if (!id) {
		return (
			<div
				className={classNames(css.ArticleDetailsPage, {}, [className])}>
				<Text title={t("Article not found")} />
			</div>
		);
	}

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={true}>
			<div
				className={classNames(css.ArticleDetailsPage, {}, [className])}>
				<ArticleDetails id={id} />
				<Text
					title={t("Comments")}
					className={css.commentTitle}
				/>
				<CommentList
					comments={comments}
					isLoading={commentsIsLoading}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
