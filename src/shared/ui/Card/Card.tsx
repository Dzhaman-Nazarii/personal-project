import React, { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Card.module.scss";

export enum CardTheme {
	NORMAL = "normal",
	OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
	const {
		className,
		children,
		theme = CardTheme.NORMAL,
		...otherProps
	} = props;

	return (
		<div
			className={classNames(css.Card, {}, [className, css[theme]])}
			{...otherProps}>
			{children}
		</div>
	);
});
