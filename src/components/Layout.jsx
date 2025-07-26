/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { Outlet, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Layout() {
	const { t } = useTranslation();

	return (
		<div className="app-container">
			<header className="app-header">
				<nav className="main-nav">
					<ul>
						<li>
							<NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
								{t("header.home")}
							</NavLink>
						</li>
						<li>
							<NavLink to="/hooks" className={({ isActive }) => (isActive ? "active" : "")}>
								{t("header.reactHooks")}
							</NavLink>
						</li>
						<li>
							<NavLink to="/technologies" className={({ isActive }) => (isActive ? "active" : "")}>
								{t("header.technologies")}
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
								{t("header.contact")}
							</NavLink>
						</li>
					</ul>
					<LanguageSwitcher />
				</nav>
			</header>

			<main className="app-content">
				{/**
				 * <Outlet /> from react-router-dom is a placeholder component that renders the child route's
				 * element. In your Layout.jsx, it's where the content of the current page
				 * (Home, React Hooks, Technologies, or Contact) will be displayed within the main layout.
				 */}
				<Outlet />
			</main>

			<footer className="app-footer">
				<p>
					&copy; {new Date().getFullYear()} React Boilerplate. {t("footer.allRightsReserved")}{" "}
					<a href="https://github.com/ale4ko69" target="_blank">
						Alexey Kagansky
					</a>
					.
				</p>
			</footer>
		</div>
	);
}

export default Layout;
