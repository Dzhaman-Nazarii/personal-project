import { FC } from "react";
import css from "./Counter.module.scss";

export const Counter: FC = () => {
	return <h1 className={css.counter}>Counter</h1>;
};
