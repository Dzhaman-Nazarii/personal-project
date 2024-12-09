import React, { ChangeEvent, memo, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import css from "./Select.module.scss";

interface SelectOption {
	value: string;
	content: string;
}

interface SelectProps {
	className?: string;
	label?: string;
	options?: SelectOption[];
	value?: string;
	readonly?: boolean;
	onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
	const { className, label, options, value, readonly, onChange } = props;

	const onChangeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(evt.target.value);
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
});
