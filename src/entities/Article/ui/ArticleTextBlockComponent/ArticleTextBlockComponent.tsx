import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleTextBlockComponent.module.scss";
import { memo } from "react";
import { ArticleTextBlock } from "entities/Article/model/types/articles";
import { Text } from "shared/ui/Text/Text";
import { title } from "process";

interface ArticleTextBlockComponentProps {
	className?: string;
	block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(
	({ className, block }: ArticleTextBlockComponentProps) => {
		return (
			<div
				className={classNames(css.ArticleTextBlockComponent, {}, [
					className,
				])}>
				{block.title && (
					<Text title={title} className={css.title} />
				)}
				{block.paragraphs.map((paragraph, index) => (
					<Text key={index} text={paragraph} className={css.paragraph}/>
				))}
			</div>
		);
	}
);
