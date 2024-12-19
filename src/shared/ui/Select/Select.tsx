import React, { ChangeEvent, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import css from "./Select.module.scss";

export interface SelectOption<T extends string> {
	value: T;
	content: string;
}

interface SelectProps<T extends string> {
	className?: string;
	label?: string;
	options?: SelectOption<T>[];
	value?: T;
	readonly?: boolean;
	onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
	const { className, label, options, value, readonly, onChange } = props;

	const onChangeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(evt.target.value as T);
	};

	const optionList = useMemo(
		() =>
			options?.map((optionsValue) => (
				<option
					disabled={false}
					key={optionsValue.value}
					className={css.option}
					value={optionsValue.value}>
					{optionsValue.content}
				</option>
			)),
		[options]
	);

	const mods: Mods = {};

	return (
		<div className={classNames(css.Wrapper, mods, [className])}>
			{label && <span className={css.label}>{`${label}>`}</span>}
			<select
				disabled={readonly}
				value={value}
				onChange={onChangeHandler}
				className={css.select}>
				{optionList}
			</select>
		</div>
	);
};
