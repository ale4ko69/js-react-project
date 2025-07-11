/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { Outlet, NavLink } from "react-router-dom";

function Layout() {
	return (
		<div className="app-container">
			<header className="app-header">
				<nav className="main-nav">
					<ul>
						<li>
							<NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/hooks" className={({ isActive }) => (isActive ? "active" : "")}>
								React Hooks
							</NavLink>
						</li>
						<li>
							<NavLink to="/technologies" className={({ isActive }) => (isActive ? "active" : "")}>
								Technologies
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>

			<main className="app-content">
				<Outlet />
			</main>

			<footer className="app-footer">
				<p>
					&copy; {new Date().getFullYear()} React Boilerplate. All rights reserved{" "}
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
