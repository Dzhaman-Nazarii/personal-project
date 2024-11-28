import { classNames } from "shared/lib/classNames/classNames";
import css from "./Button.module.scss";
import React, { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
	CLEAR = "clear",
	OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme = ThemeButton.OUTLINE, ...otherProps } = props;

	console.log( className);

	return (
		<button
			className={classNames(css.Button, {}, [className, css[theme]])}
			{...otherProps}>
			{children}
		</button>
	);
};