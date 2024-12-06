import React from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { SidebarItemType } from "../../model/items";
import css from "./SidebarItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarItemProps {
	item?: SidebarItemType;
	collapsed?: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
	const { t } = useTranslation();

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
