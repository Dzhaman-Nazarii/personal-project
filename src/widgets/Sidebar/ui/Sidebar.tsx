import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Sidebar.module.scss";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(css.Sidebar, { [css.collapsed]: collapsed }, [
				className,
			])}>
			<Button
			theme={ThemeButton.BACKGROUND_INVERTED}
				className={css.collapsedBtn}
				data-testid="sidebar-toggle"
				onClick={onToggle}>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={css.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={css.lang} />
			</div>
		</div>
	);
};
