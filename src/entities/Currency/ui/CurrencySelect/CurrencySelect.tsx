import React, { memo, useCallback } from "react";
import { Currency } from "../../model/types/currency";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";

const options = [
	{ value: Currency.USD, content: Currency.USD },
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.UAH, content: Currency.UAH },
];

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	readonly?: boolean;
	onChange?: (value: Currency) => void;
}

export const CurrencySelect = memo(
	({ className, value, readonly, onChange }: CurrencySelectProps) => {
		const { t } = useTranslation();

		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as Currency);
			},
			[onChange]
		);

		return (
			<Select
				value={value}
				onChange={onChangeHandler}
				label={t("Specify currency")}
				options={options}
				readonly={readonly}
				className={classNames("", {}, [className])}
			/>
		);
	}
);
