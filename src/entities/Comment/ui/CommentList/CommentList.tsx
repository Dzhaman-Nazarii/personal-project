import React from "react";
import { Comment } from "entities/Comment/model/types/comment";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./CommentList.module.scss";
interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
	const { className, comments, isLoading } = props;
	const { t } = useTranslation();

	if(isLoading) {
		return (
			<div className={classNames(css.CommentList, {}, [className])}>
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
			</div>
		)
	}

	return (
		<div className={classNames(css.CommentList, {}, [className])}>
			{comments?.length ? (
				comments.map((comment) => (
					<CommentCard
						key={comment.id}
						isLoading={isLoading}
						comment={comment}
						className={css.comment}
					/>
				))
			) : (
				<Text title={t("No comments")} />
			)}
		</div>
	);
};
