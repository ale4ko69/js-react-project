/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:06:33         **/
/**  https://github.com/ale4ko69      **/
/***************************************/

import { Outlet, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Technologies({ id }) {
	const { t } = useTranslation();
	// Set document title
	document.title = t("technologies.title");

	return (
		<div id={id} className="about-container">
			<h1>{t("technologies.title")}</h1>
			<p>{t("technologies.descriptionHome")}</p>

			{/* Adding a wrapper for content and navigation */}
			<div className="about-layout">
				<div className="about-navigation">
					<h2>{t("technologies.technologys")}</h2>
					<ul>
						<li>
							<NavLink
								to="/technologies/react"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								React
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/technologies/vite"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								Vite
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/technologies/router"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								React Router
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/technologies/redux"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								Redux
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/technologies/scss"
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								SCSS
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="about-content">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Technologies;
