/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { StrictMode, useEffect }     from "react";
import { createRoot }     from "react-dom/client";
import { Provider, useDispatch }       from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store }          from "./store";
import router             from "./routes";
import { initLanguage } from "./store/slices/languageSlice";

// Import i18n configuration
import "./i18n";
import "./styles/main.scss";

// App wrapper for initializing language
function AppWrapper() {
  const dispatch = useDispatch();
  
  // Initialize language on app start
  useEffect(() => {
    dispatch(initLanguage());
  }, [dispatch]);
  
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<AppWrapper />
		</Provider>
	</StrictMode>
);