import React, { FC, memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/authByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import css from "./Navbar.module.scss";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onOpenModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, []);

	if (authData) {
		return (
			<header className={classNames(css.Navbar, {}, [className])}>
				<Text
					theme={TextTheme.INVERTED}
					className={css.appName}
					title={t("Personal project")}
				/>
				<AppLink
					to={RoutePath.article_create}
					className={css.createBtn}
					theme={AppLinkTheme.SECONDARY}>
					{t("Create article")}
				</AppLink>
				<Button
					onClick={onLogout}
					theme={ButtonTheme.CLEAR_INVERTED}
					className={css.links}>
					{t("Logout")}
				</Button>
			</header>
		);
	}

	return (
		<header className={classNames(css.Navbar, {}, [className])}>
			<Button
				onClick={onOpenModal}
				theme={ButtonTheme.CLEAR_INVERTED}
				className={css.links}>
				{t("Login")}
			</Button>
			{isAuthModal && (
				<LoginModal
					isOpen={isAuthModal}
					onClose={onCloseModal}></LoginModal>
			)}
		</header>
	);
});
