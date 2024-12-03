import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/ui/Input";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./LoginForm.module.scss";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(css.LoginForm, {}, [className])}>
			<Input
				autofocus={true}
				placeholder={t("Enter name")}
				type="text"
				className={css.input}></Input>
			<Input
				placeholder={t("Enter password")}
				type="text"
				className={css.input}></Input>
			<Button className={css.loginBtn}>{t("Login")}</Button>
		</div>
	);
};
