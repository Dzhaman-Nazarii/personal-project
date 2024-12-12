import React, { memo, useCallback, useEffect } from "react";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/ArticleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from "entities/Article/model/selectors/articleDetails";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye.svg";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/articles";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleDetails.module.scss";

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

	const article = useSelector(getArticleDetailsData);
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);

	const blockContent = useCallback((block: ArticleBlock) => {
		switch (block.type) {
			case ArticleBlockType.CODE:
				return (
					<ArticleCodeBlockComponent
						block={block}
						key={block.id}
						className={css.block}
					/>
				);
			case ArticleBlockType.IMAGE:
				return (
					<ArticleImageBlockComponent
						block={block}
						key={block.id}
						className={css.block}
					/>
				);
			case ArticleBlockType.TEXT:
				return (
					<ArticleTextBlockComponent
						block={block}
						key={block.id}
						className={css.block}
					/>
				);
			default:
				return null;
		}
	}, []);

	useEffect(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(fetchArticleById(id));
		}
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
		content = (
			<>
				<div className={css.avatarWrapper}>
					<Avatar
						size={200}
						src={article?.img}
						className={css.avatar}
					/>
				</div>
				<Text
					className={css.title}
					title={article?.title}
					text={article?.subtitle}
					size={TextSize.L}
				/>
				<div className={css.articleInfo}>
					<Icon
						Svg={EyeIcon}
						className={css.icon}
					/>
					<Text title={String(article?.views)} />
				</div>
				<div className={css.articleInfo}>
					<Icon
						Svg={CalendarIcon}
						className={css.icon}
					/>
					<Text title={article?.createdAt} />
				</div>
				{article?.blocks.map((block) => (
					<div key={block.id}>{blockContent(block)}</div>
				))}
			</>
		);
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
