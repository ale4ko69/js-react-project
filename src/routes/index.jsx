/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { createBrowserRouter } from "react-router-dom";

// Импортируем компоненты макета и страниц
import Layout from "../components/Layout";
import Home from "../pages/Home";
import ReactHooks from "../pages/ReactHooks";
import Technologies from "../pages/Technologies";
import Contact from "../pages/Contact";

// Импортируем вложенные страницы для раздела About
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
						element: <HomePage />, // Используем HomePage как компонент по умолчанию для About
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
						<h2>Страница не найдена</h2>
						<p>Извините, запрашиваемая страница не существует.</p>
					</div>
				),
			},
		],
	},
]);

export default router;
