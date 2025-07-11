/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { createBrowserRouter } from "react-router-dom";

// Импортируем компоненты макета и страниц
import Layout                  from "../components/Layout";
import Home                    from "../pages/Home";
import About                   from "../pages/About";
import Contact                 from "../pages/Contact";

// Импортируем вложенные страницы для раздела About
import HomePage                from "../pages/About/Home";
import ReactPage               from "../pages/About/React";
import VitePage                from "../pages/About/Vite";
import RouterPage              from "../pages/About/Router";
import ReduxPage               from "../pages/About/Redux";
import ScssPage                from "../pages/About/Scss";

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
				path: "about",
				element: <About />,
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
