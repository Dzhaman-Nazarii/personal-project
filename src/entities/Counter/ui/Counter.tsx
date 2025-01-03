import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/CounterSlice";
import { useTranslation } from "react-i18next";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
	const {t} = useTranslation();
	const counterValue = useSelector(getCounterValue);
	const dispatch = useDispatch();
	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			<h1 data-testid="value-title">{counterValue}</h1>
			<Button data-testid="increment-btn" onClick={increment}>{t("Increment")}</Button>
			<Button data-testid="decrement-btn" onClick={decrement}>{t("Decrement")}</Button>
		</div>
	);
};
