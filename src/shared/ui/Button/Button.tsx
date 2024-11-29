import { classNames } from "shared/lib/classNames/classNames";
import css from "./Button.module.scss";
import React, { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
	CLEAR = "clear",
	OUTLINE = "outline",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "backgroundInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
	square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ThemeButton.OUTLINE,
		square,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[css[theme]]: true,
		[css.square]: true,
	};

	return (
		<button
			className={classNames(css.Button, mods , [className])}
			{...otherProps}>
			{children}
		</button>
	);
};
