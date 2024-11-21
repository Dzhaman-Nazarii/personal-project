import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export const App: FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>Change theme</button>
			<Link to={"/"}>Main</Link>
			<Link to={"/about"}>About</Link>
			<AppRouter />
		</div>
	);
};
