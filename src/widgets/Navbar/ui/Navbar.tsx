import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import css from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  return (
	<div className={classNames(css.Navbar, {}, [className])}>
		<div className={css.links}>
			<AppLink theme={AppLinkTheme.SECONDARY} className={css.mainLink} to={"/"}>Main</AppLink>
			<AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>About</AppLink>
		</div>
	</div>
  )
}