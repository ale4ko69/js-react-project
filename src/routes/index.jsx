/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { createBrowserRouter } from "react-router-dom";

// I import the components of the layout and pages
import Layout from "../components/Layout";
import Home from "../pages/Home";
import ReactHooks from "../pages/ReactHooks";
import Technologies from "../pages/Technologies";
import Contact from "../pages/Contact";

// I import invested pages for the ABOUT section
import HomePage from "../pages/Technologies/Home";
import ReactPage from "../pages/Technologies/React";
import VitePage from "../pages/Technologies/Vite";
import RouterPage from "../pages/Technologies/Router";
import ReduxPage from "../pages/Technologies/Redux";
import ScssPage from "../pages/Technologies/Scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "hooks",
				element: <ReactHooks />,
			},
			{
				path: "technologies",
				element: <Technologies />,
				children: [
					{
						index: true,
						element: <HomePage />, // We use homepage as a default component for ABOUT
					},
					{
						path: "react",
						element: <ReactPage />,
					},
					{
						path: "vite",
						element: <VitePage />,
					},
					{
						path: "router",
						element: <RouterPage />,
					},
					{
						path: "redux",
						element: <ReduxPage />,
					},
					{
						path: "scss",
						element: <ScssPage />,
					},
				],
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "*",
				element: (
					<div className="not-found">
						<h1>404</h1>
						<h2>The page is not found</h2>
						<p>Sorry, the requested page does not exist.</p>
					</div>
				),
			},
		],
	},
]);

export default router;
