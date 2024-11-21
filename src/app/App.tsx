import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";

export const App: FC = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<Navbar/>
			<AppRouter />
		</div>
	);
};
