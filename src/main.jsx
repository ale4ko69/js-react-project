/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { StrictMode }     from "react";
import { createRoot }     from "react-dom/client";
import { Provider }       from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store }          from "./store";
import router             from "./routes";
import "./styles/main.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
