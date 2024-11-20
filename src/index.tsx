import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";

render(
	<BrowserRouter>
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
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
