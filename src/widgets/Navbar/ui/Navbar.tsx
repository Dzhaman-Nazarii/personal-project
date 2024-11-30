import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import css from "./Navbar.module.scss";
import { useTranslation } from 'react-i18next';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
	const {t} = useTranslation();
  return (
	<div className={classNames(css.Navbar, {}, [className])}>
		<div className={css.links}>
			<AppLink theme={AppLinkTheme.SECONDARY} className={css.mainLink} to={"/"}>{t("Main page")}</AppLink>
			<AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>{t("About page")}</AppLink>
		</div>
	</div>
  )
}