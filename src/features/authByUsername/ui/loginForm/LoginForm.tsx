import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/ui/Input";
import { classNames } from "shared/lib/classNames/classNames";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/LoginSlice";
import { GetLoginState } from "../../model/selectors/getLoginState/GetLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import css from "./LoginForm.module.scss";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	const dispatch = useDispatch();

	const { username, password, isLoading, error } = useSelector(GetLoginState);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password]);

	return (
		<div className={classNames(css.LoginForm, {}, [className])}>
			<Text title={t("Authorization form")}/>
			{error && <Text text={error} theme={TextTheme.ERROR}/>}
			<Input
				value={username}
				onChange={onChangeUsername}
				autofocus={true}
				placeholder={t("Enter name")}
				type="text"
				className={css.input}></Input>
			<Input
				value={password}
				onChange={onChangePassword}
				placeholder={t("Enter password")}
				type="text"
				className={css.input}></Input>
			<Button
				disabled={isLoading}
				onClick={onLoginClick}
				theme={ButtonTheme.OUTLINE}
				className={css.loginBtn}>
				{t("Login")}
			</Button>
		</div>
	);
});
