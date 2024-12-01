import { FC, Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";
import { Modal } from "shared/ui/Modal/Modal";

export const App: FC = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="Loading...">
			<Navbar />
			<Modal/>
			<div className="content-page">
				<Sidebar />
				<AppRouter />
			</div>
			</Suspense>
		</div>
	);
};
