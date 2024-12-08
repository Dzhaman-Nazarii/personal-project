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
	profileActions,
	ProfileCard,
	profileReducer,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import css from "./ProfilePage.module.scss";

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const dispatch = useAppDispatch();

	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

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
			<div className={classNames(css.ProfilePage, {}, [className])}>
				<ProfilePageHeader />
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
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
