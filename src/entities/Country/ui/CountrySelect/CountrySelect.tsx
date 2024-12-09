import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../../model/types/country";

const options = [
	{ value: Country.Ukraine, content: Country.Ukraine },
	{ value: Country.Poland, content: Country.Poland },
	{ value: Country.Germany, content: Country.Germany },
	{ value: Country.Sweden, content: Country.Sweden },
];

interface CountrySelectProps {
	className?: string;
	value?: Country;
	readonly?: boolean;
	onChange?: (value: Country) => void;
}

export const CountrySelect = memo(
	({ className, value, readonly, onChange }: CountrySelectProps) => {
		const { t } = useTranslation();

		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as Country);
			},
			[onChange]
		);

		return (
			<Select
				value={value}
				onChange={onChangeHandler}
				label={t("Specify country")}
				options={options}
				readonly={readonly}
				className={classNames("", {}, [className])}
			/>
		);
	}
);
