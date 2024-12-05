import React from "react";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ProfilePage.module.scss";
import { profileReducer } from "entities/Profile";

const reducers: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation();

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(css.ProfilePage, {}, [className])}>
				{t("Profile page")}
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
