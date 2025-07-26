/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:07:05         **/
/**  https://github.com/ale4ko69      **/
/***************************************/
import { useTranslation } from "react-i18next";

function ScssPage() {
	const { t } = useTranslation();

	document.title = `${t("technologies.title")} - SCSS`;

	return (
		<div className="tech-info">
			<h2>{t("technologies.scss")}</h2>
			<div className="tech-description">
				<p>{t("technologies.scssDescription")}</p>

				<h3>Key features:</h3>
				<ul>
					<li>
						<strong>Variables</strong> — allow storing colors, font sizes, and other values for
						reuse
					</li>
					<li>
						<strong>Nesting</strong> — simplifies writing nested selectors, making code more
						readable
					</li>
					<li>
						<strong>Mixins</strong> — reusable blocks of styles that can be included in other rules
					</li>
					<li>
						<strong>Functions</strong> — built-in functions for color manipulation, mathematical
						operations, and more
					</li>
					<li>
						<strong>Modules</strong> — ability to separate styles into individual files and import
						them
					</li>
					<li>
						<strong>Extensions</strong> — allow inheriting styles from one selector to another
					</li>
				</ul>

				<p>
					SCSS is fully compatible with CSS syntax, which means that any valid CSS file is also a
					valid SCSS file. This makes it an excellent choice for gradual implementation in existing
					projects.
				</p>

				<p>
					In modern frontend projects, SCSS is often used together with tools like Vite, which
					provides fast compilation of SCSS to CSS during development.
				</p>
			</div>
		</div>
	);
}

export default ScssPage;
