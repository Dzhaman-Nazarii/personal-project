import { FC, Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { classNames } from "shared/lib/classNames/classNames";
import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "entities/User";

export const App: FC = () => {
	const { theme } = useTheme();
	const dispatch = useDispatch();
	const inited = useSelector(getUserInited);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="Loading...">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					{inited && <AppRouter />}
				</div>
			</Suspense>
		</div>
	);
};
