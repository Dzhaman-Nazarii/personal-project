import { classNames, Mods } from "shared/lib/classNames/classNames";
import css from "./Text.module.scss";
import React, { memo } from "react";

export enum TextTheme {
	PRIMARY = "primary",
	ERROR = "error",
}

export enum TextAlign {
	RIGHT = "right",
	LEFT = "left",
	CENTER = "center",
}

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
	align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
	const {
		className,
		title,
		text,
		theme = TextTheme.PRIMARY,
		align = TextAlign.LEFT,
	} = props;

	const mods: Mods = {
		[css[theme]]: true,
		[css[align]]: true,
	};

	return (
		<div className={classNames(css.Text, mods, [className])}>
			{title && <p className={css.title}>{title}</p>}
			{text && <p className={css.text}>{text}</p>}
		</div>
	);
});
