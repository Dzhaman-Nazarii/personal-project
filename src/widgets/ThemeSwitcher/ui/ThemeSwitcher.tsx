import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "../../../shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ThemeSwitcher.module.scss";
import React from "react";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(css.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
