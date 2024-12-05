import React, { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/ui/Input";
import { classNames } from "shared/lib/classNames/classNames";
import { useDispatch, useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/LoginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { GetLoginUsername } from "../../model/selectors/getLoginUsername/GetLoginUsername";
import { GetLoginPassword } from "../../model/selectors/getLoginPassword/GetLoginPassword";
import { GetLoginIsLoading } from "../../model/selectors/getLoginIsLoading/GetLoginIsLoading";
import { GetLoginError } from "../../model/selectors/getLoginError/GetLoginError";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import css from "./LoginForm.module.scss";

export interface LoginFormProps {
	className?: string;
}

const initialReducer: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	const dispatch = useDispatch();

	const username = useSelector(GetLoginUsername);
	const password = useSelector(GetLoginPassword);
	const isLoading = useSelector(GetLoginIsLoading);
	const error = useSelector(GetLoginError);

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
		<DynamicModuleLoader
			reducers={initialReducer}
			removeAfterUnmount={true}>
			<div className={classNames(css.LoginForm, {}, [className])}>
				<Text title={t("Authorization form")} />
				{error && (
					<Text
						text={error}
						theme={TextTheme.ERROR}
					/>
				)}
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
		</DynamicModuleLoader>
	);
});

export default LoginForm;
