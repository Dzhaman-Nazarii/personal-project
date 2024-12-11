import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/ArticleDetailsSlice";
import { memo, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from "entities/Article/model/selectors/articleDetails";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleDetails.module.scss";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleDetailsProps {
	className?: string;
	id: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const data = useSelector(getArticleDetailsData);
	// const isLoading = useSelector(getArticleDetailsIsLoading);
	const isLoading = true;
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		dispatch(fetchArticleById(id));
	}, [dispatch, id]);

	let content;

	if (isLoading) {
		content = (
			<>
				<Skeleton
					className={css.avatar}
					width={200}
					height={200}
					border={"50%"}
				/>
				<Skeleton
					className={css.title}
					width={300}
					height={32}
				/>
				<Skeleton
					className={css.skeleton}
					width={600}
					height={24}
				/>
				<Skeleton
					className={css.skeleton}
					width="100%"
					height={200}
				/>
				<Skeleton
					className={css.skeleton}
					width="100%"
					height={200}
				/>
			</>
		);
	} else if (error) {
		content = (
			<Text
				align={TextAlign.CENTER}
				title={t("Article not found")}
			/>
		);
	} else {
		content = <h1>ArticleDetails</h1>;
	}

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={true}>
			<div className={classNames(css.ArticleDetails, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	);
});
