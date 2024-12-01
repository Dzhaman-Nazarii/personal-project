import React, { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import css from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames(css.Navbar, {}, [className])}>
			<Button
				onClick={onToggleModal}
				theme={ButtonTheme.CLEAR_INVERTED}
				className={css.links}>
				{t("Login")}
			</Button>
			<Modal
				isOpen={isAuthModal}
				onClose={onToggleModal}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Perferendis similique dignissimos assumenda nesciunt quibusdam
				omnis hic temporibus tempore quas sapiente, modi non, dolorem
				expedita eius praesentium adipisci, voluptatem cumque aut.
				Ratione at quaerat, mollitia deleniti et molestiae dolorum.
				Aliquam ipsam nihil non dolorum dicta vitae esse molestias
				placeat iusto.
			</Modal>
		</div>
	);
};
