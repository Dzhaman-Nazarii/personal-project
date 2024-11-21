import { classNames } from "shared/lib/classNames/classNames";
import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import "./styles/index.scss";

export const App: FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>Change theme</button>
			<Link to={"/"}>Main</Link>
			<Link to={"/about"}>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path={"/about"}
						element={<AboutPage />}
					/>
					<Route
						path={"/"}
						element={<MainPage />}
					/>
				</Routes>
			</Suspense>
		</div>
	);
};
