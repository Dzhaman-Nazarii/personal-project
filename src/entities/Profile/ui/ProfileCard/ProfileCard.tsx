import React from "react";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/ui/Input";
import { Profile } from "../../model/types/profle";
import { Loader } from "widgets/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { CurrencySelect } from "entities/Currency/ui/CurrencySelect/CurrencySelect";
import { CountrySelect } from "entities/Country/ui/CountrySelect/CountrySelect";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import css from "./ProfileCard.module.scss";

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeCurrency?: (currency: Currency) => void;
	onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry,
	} = props;

	const { t } = useTranslation();

	if (isLoading) {
		return (
			<div
				className={classNames(css.ProfileCard, {}, [
					className,
					css.loading,
				])}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div
				className={classNames(css.ProfileCard, {}, [
					className,
					css.error,
				])}>
				<Text
					theme={TextTheme.ERROR}
					title={t("Something went wrong with loading profile")}
					text={t("Try to reload page")}
					align={TextAlign.CENTER}
				/>
			</div>
		);
	}

	const mods: Mods = {
		[css.editing]: !readonly,
	};

	return (
		<div className={classNames(css.ProfileCard, mods, [className])}>
			<div className={css.data}>
				{data?.avatar && (
					<div className={css.avatarWrapper}>
						<Avatar src={data?.avatar} />
					</div>
				)}
				<Input
					value={data?.firstname}
					placeholder={t("Your firstname")}
					className={css.input}
					onChange={onChangeFirstname}
					readonly={readonly}
				/>
				<Input
					value={data?.lastname}
					placeholder={t("Your lastname")}
					className={css.input}
					onChange={onChangeLastname}
					readonly={readonly}
				/>
				<Input
					value={data?.age}
					placeholder={t("Your age")}
					className={css.input}
					onChange={onChangeAge}
					readonly={readonly}
				/>
				<Input
					value={data?.city}
					placeholder={t("Your city")}
					className={css.input}
					onChange={onChangeCity}
					readonly={readonly}
				/>
				<Input
					value={data?.username}
					placeholder={t("Your username")}
					className={css.input}
					onChange={onChangeUsername}
					readonly={readonly}
				/>
				<Input
					value={data?.avatar}
					placeholder={t("Enter link avatar")}
					className={css.input}
					onChange={onChangeAvatar}
					readonly={readonly}
				/>
				<CurrencySelect
					className={css.input}
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
				<CountrySelect
					className={css.input}
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};
