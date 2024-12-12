import React, { memo } from "react";
import { ArticleImageBlock } from "../../model/types/articles";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
	className?: string;
	block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
	({ className, block }: ArticleImageBlockComponentProps) => {
		return (
			<div
				className={classNames(css.ArticleImageBlockComponent, {}, [
					className,
				])}>
					<img src={block.src} alt={block.title} className={css.img} />
					{block.title && (
						<Text title={block.title} align={TextAlign.CENTER}/>
					)}
			</div>
		);
	}
);
