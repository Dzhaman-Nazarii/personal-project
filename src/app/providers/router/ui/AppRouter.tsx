import { getUserAuthData } from "entities/User";
import { FC, memo, Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter: FC = memo(() => {
	const isAuth = useSelector(getUserAuthData);

	const routes = useMemo(() => {
		return Object.values(routeConfig).filter((route) => {
			if (route.authOnly && !isAuth) {
				return false;
			}
			return true;
		});
	}, [isAuth]);

	return (
		<Suspense fallback={<PageLoader />}>
			<div className="page-wrapper">
				<Routes>
					{routes.map(({ element, path }) => (
						<Route
							key={path}
							path={path}
							element={element}
						/>
					))}
				</Routes>
			</div>
		</Suspense>
	);
});
