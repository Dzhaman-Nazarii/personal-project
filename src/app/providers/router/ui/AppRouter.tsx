import { FC, memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import {
	AppRoutesProps,
	routeConfig,
} from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";

export const AppRouter: FC = memo(() => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				<div className="csspage-wrapper">{route.element}</div>
			</Suspense>
		);

		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		);
	}, []);

	return (
		<Suspense fallback={<PageLoader />}>
			<div className="page-wrapper">
				<Routes>
					{Object.values(routeConfig).map(renderWithWrapper)}
				</Routes>
			</div>
		</Suspense>
	);
});
