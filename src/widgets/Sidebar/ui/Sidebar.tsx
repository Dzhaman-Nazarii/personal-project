import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Sidebar.module.scss";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainPageIcon from "shared/assets/icons/main-page.svg";
import AboutPageIcon from "shared/assets/icons/about-page.svg";

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation();
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
				size={ButtonSize.L}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				className={css.collapsedBtn}
				data-testid="sidebar-toggle"
				onClick={onToggle}>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={css.items}>
				<AppLink
					className={css.item}
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}>
					<MainPageIcon className={css.icon} />
					<span className={css.link}>{t("Main page")}</span>
				</AppLink>
				<AppLink
					className={css.item}
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}>
					<AboutPageIcon className={css.icon} />
					<span className={css.link}>{t("About page")}</span>
				</AppLink>
			</div>
			<div className={css.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					short={collapsed}
					className={css.lang}
				/>
			</div>
		</div>
	);
};
