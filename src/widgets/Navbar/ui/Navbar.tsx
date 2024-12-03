import React, { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/authByUsername";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onOpenModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	return (
		<div className={classNames(css.Navbar, {}, [className])}>
			<Button
				onClick={onOpenModal}
				theme={ButtonTheme.CLEAR_INVERTED}
				className={css.links}>
				{t("Login")}
			</Button>
			<LoginModal
				isOpen={isAuthModal}
				onClose={onCloseModal}></LoginModal>
		</div>
	);
};
