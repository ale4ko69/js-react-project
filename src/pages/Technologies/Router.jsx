/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:06:56         **/
/**  https://github.com/ale4ko69      **/
/***************************************/
import { useTranslation } from "react-i18next";


function RouterPage() {

	const { t } = useTranslation();

	document.title = `${t("technologies.title")} - React Router`;

	return (
		<div className="tech-info">
			<h2>{t("technologies.router")}</h2>
			<div className="tech-description">
				<p>
					{t("technologies.routerDescription")}
				</p>

				<h3>Key features:</h3>
				<ul>
					<li>
						<strong>Declarative routing</strong> — routes are described as React components
					</li>
					<li>
						<strong>Nested routes</strong> — support for hierarchical page structure
					</li>
					<li>
						<strong>Dynamic routes</strong> — ability to pass parameters through URL
					</li>
					<li>
						<strong>Programmatic navigation</strong> — ability to control browser history from code
					</li>
					<li>
						<strong>Lazy loading</strong> — support for code splitting to optimize
						performance
					</li>
				</ul>

				<p>
					React Router v6 represents a completely redesigned version with improved API,
					which makes routing in React applications even simpler and more flexible.
				</p>
			</div>
		</div>
	);
}

export default RouterPage;
