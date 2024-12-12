import React, { ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Code.module.scss";
import { Button, ButtonTheme } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import CopyIcon from "shared/assets/icons/copy.svg";

interface CodeProps {
	className?: string;
	text: string;
}

export const Code = ({ className, text }: CodeProps) => {
	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={classNames(css.Code, {}, [className])}>
			<Button
				onClick={onCopy}
				className={css.copyBtn}
				theme={ButtonTheme.CLEAR}>
				<CopyIcon className={css.copyIcon} />
			</Button>
			<code>{text}</code>
		</pre>
	);
};
