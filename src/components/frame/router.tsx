import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingOverlay from "../loading-overlay";

const App = lazy(() => import("../app"));

const Router = () => {
	return (
		<Routes>
			<Route path={"*"} element={
				<Suspense fallback={<LoadingOverlay />}>
					<App />
				</Suspense>
			} />
		</Routes>
	);
};

export default Router;
