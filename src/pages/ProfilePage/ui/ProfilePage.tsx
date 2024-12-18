import React, { useCallback, useEffect } from "react";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { classNames } from "shared/lib/classNames/classNames";
import {
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileReadonly,
	getProfileValidateErrors,
	profileActions,
	ProfileCard,
	profileReducer,
	ValidateProfileError,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import css from "./ProfilePage.module.scss";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useParams } from "react-router-dom";
import { Page } from "shared/ui/Page/Page";

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const {id} = useParams<{id: string}>()

	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);

	const validateErrorTranslates = {
		[ValidateProfileError.INCORRECT_USER_DATA]: t(
			"Incorrect first name or last name"
		),
		[ValidateProfileError.INCORRECT_AGE]: t("Incorrect age"),
		[ValidateProfileError.INCORRECT_COUNTRY]: t("Incorrect country"),
		[ValidateProfileError.NO_DATA]: t("No data provided"),
		[ValidateProfileError.SERVER_ERROR]: t("Server error with saving data"),
	};

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}
	});

	const onChangeFirstname = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateProfile({
					firstname: value || "",
				})
			);
		},
		[dispatch]
	);

	const onChangeLastname = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateProfile({
					lastname: value || "",
				})
			);
		},
		[dispatch]
	);

	const onChangeAge = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateProfile({
					age: Number(value) || 0,
				})
			);
		},
		[dispatch]
	);

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateProfile({
					city: value || "",
				})
			);
		},
		[dispatch]
	);

	const onChangeAvatar = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateProfile({
					avatar: value || "",
				})
			);
		},
		[dispatch]
	);

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(
				profileActions.updateProfile({
					username: value || "",
				})
			);
		},
		[dispatch]
	);

	const onChangeCurrency = useCallback(
		(currency?: Currency) => {
			dispatch(
				profileActions.updateProfile({
					currency: currency,
				})
			);
		},
		[dispatch]
	);

	const onChangeCountry = useCallback(
		(country?: Country) => {
			dispatch(
				profileActions.updateProfile({
					country: country,
				})
			);
		},
		[dispatch]
	);

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount>
			<Page className={classNames(css.ProfilePage, {}, [className])}>
				<ProfilePageHeader />
				{validateErrors?.length &&
					validateErrors.map((error) => (
						<Text
							text={validateErrorTranslates[error]}
							theme={TextTheme.ERROR}
							key={error}
						/>
					))}
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeAvatar={onChangeAvatar}
					onChangeUsername={onChangeUsername}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
