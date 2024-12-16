import { classNames } from "shared/lib/classNames/classNames";
import css from "./CommentCard.module.scss";
import { Comment } from "entities/Comment/model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface CommentCardProps {
	className?: string;
	comment: Comment;
	isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
	const { className, comment, isLoading } = props;

	if (isLoading) {
		return (
			<div className={classNames(css.CommentCard, {}, [className])}>
				<div className={css.header}>
					<Skeleton
						width={30}
						height={30}
						border="50%"
					/>
					<Skeleton
						width={100}
						height={16}
						className={css.username}
					/>
				</div>
				<Skeleton
					className={css.text}
					width="100%"
					height={50}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(css.CommentCard, {}, [className])}>
			<AppLink to={`${RoutePath.profile}${comment.user.id}`} className={css.header}>
				{comment.user.avatar ? (
					<Avatar
						src={comment.user.avatar}
						size={30}
					/>
				) : null}
				<Text
					title={comment.user.username}
					className={css.username}
				/>
			</AppLink>
			<Text
				text={comment.text}
				className={css.text}
			/>
		</div>
	);
};
