import "./styles/index.scss";
import { FC, Suspense} from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";

export const App: FC = () => {

	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Change theme</button>
			<Link to={"/"}>Main</Link>
			<Link to={"/about"}>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path={"/about"}
						element={<AboutPageAsync />}
					/>
					<Route
						path={"/"}
						element={<MainPageAsync />}
					/>
				</Routes>
			</Suspense>
		</div>
	);
};
