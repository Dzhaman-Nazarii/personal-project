import React, { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Sidebar.module.scss";
import { useSelector } from "react-redux";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemList = useSelector(getSidebarItems);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	const itemsList = useMemo(
		() =>
			sidebarItemList.map((item) => (
				<SidebarItem
					item={item}
					collapsed={collapsed}
					key={item.path}
				/>
			)),
		[collapsed, sidebarItemList]
	);

	return (
		<div
			data-testid="sidebar"
			className={classNames(css.Sidebar, { [css.collapsed]: collapsed }, [
				className,
			])}>
			<Button
				size={ButtonSize.L}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				className={css.collapsedBtn}
				data-testid="sidebar-toggle"
				onClick={onToggle}>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={css.items}>{itemsList}</div>
			<div className={css.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					short={collapsed}
					className={css.lang}
				/>
			</div>
		</div>
	);
});
