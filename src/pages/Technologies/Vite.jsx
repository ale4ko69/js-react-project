/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:07:14         **/
/**  https://github.com/ale4ko69      **/
/***************************************/
import { useTranslation } from "react-i18next";

function VitePage() {
	const { t } = useTranslation();

	document.title = `${t("technologies.title")} - Vite`;

	return (
		<div className="tech-info">
			<h2>{t("technologies.vite")}</h2>
			<div className="tech-description">
				<p>{t("technologies.viteDescription")}</p>

				<h3>Key features:</h3>
				<ul>
					<li>
						<strong>Lightning-fast development server startup</strong> — thanks to the use of native
						ES modules
					</li>
					<li>
						<strong>Hot Module Replacement (HMR)</strong> — instant updates of changed parts of the
						application without page reload
					</li>
					<li>
						<strong>Optimized production builds</strong> — uses Rollup to create highly optimized
						bundles
					</li>
					<li>
						<strong>Built-in support for TypeScript, JSX, CSS and other preprocessors</strong> —
						without additional configuration
					</li>
					<li>
						<strong>Plugin system</strong> — allows easy extension of functionality
					</li>
				</ul>

				<p>
					Vite has become a popular choice for modern frontend projects due to its speed and ease of
					use, especially for projects with React, Vue, Svelte and other frameworks.
				</p>
			</div>
		</div>
	);
}

export default VitePage;
