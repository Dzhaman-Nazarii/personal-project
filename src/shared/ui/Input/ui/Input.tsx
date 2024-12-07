import { classNames, Mods } from "shared/lib/classNames/classNames";
import css from "./Input.module.scss";
import React, {
	ChangeEvent,
	EventHandler,
	InputHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from "react";

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange" | "readonly"
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = "text",
		placeholder,
		autofocus,
		readonly,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>(null);

	const [isFocusInput, setIsFocusInput] = useState(false);
	const [caretPosition, setCaretPosition] = useState(0);

	const isCaretVisible = isFocusInput && !readonly;

	useEffect(() => {
		if (autofocus) {
			setIsFocusInput(true);
		}
	}, [autofocus]);

	const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		onChange?.(evt.target.value);
		setCaretPosition(evt.target.value.length);
	};

	const onFocusHandler = () => {
		setIsFocusInput(true);
	};

	const onBlurHandler = () => {
		setIsFocusInput(false);
	};

	const onSelectHandler = (evt: any) => {
		setCaretPosition(evt?.target?.selectionStart || 0);
	};

	const mods: Mods = {
		[css.readonly]: readonly,
	};

	return (
		<div className={classNames(css.inputWrapper, mods, [className])}>
			{placeholder && (
				<div className={css.placeholder}>{`${placeholder}>`}</div>
			)}
			<div className={css.caretWrapper}>
				<input
					ref={ref}
					onFocus={onFocusHandler}
					onBlur={onBlurHandler}
					className={css.input}
					type={type}
					value={value}
					onChange={onChangeHandler}
					onSelect={onSelectHandler}
					readOnly={readonly}
					{...otherProps}
				/>
				{isCaretVisible && (
					<span
						className={css.caret}
						style={{ left: `${caretPosition * 9}px` }}
					/>
				)}
			</div>
		</div>
	);
});
