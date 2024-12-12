import React, { memo } from "react";
import { ArticleCodeBlock } from "../../model/types/articles";
import { Code } from "shared/ui/Code/Code";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
	className?: string;
	block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
	({ className, block }: ArticleCodeBlockComponentProps) => {
		return (
			<div
				className={classNames(css.ArticleCodeBlockComponent, {}, [
					className,
				])}>
				<Code text={block.code}/>
			</div>
		);
	}
);
