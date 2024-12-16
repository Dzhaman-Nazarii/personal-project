import React from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import css from "./SidebarItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "widgets/Sidebar/model/types/sidebar";

interface SidebarItemProps {
	item?: SidebarItemType;
	collapsed?: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
	const { t } = useTranslation();

	const isAuth = useSelector(getUserAuthData);

	if (item?.authOnly && !isAuth) {
		return null;
	}

	return item ? (
		<AppLink
			className={classNames(css.item, { [css.collapsed]: collapsed })}
			theme={AppLinkTheme.SECONDARY}
			to={item.path}>
			<item.Icon className={css.icon} />
			<span className={css.link}>{t(item.text)}</span>
		</AppLink>
	) : null;
};
