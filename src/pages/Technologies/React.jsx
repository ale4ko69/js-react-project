/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:06:41         **/
/**  https://github.com/ale4ko69      **/
/***************************************/

function ReactPage() {
	return (
		<div className="tech-info">
			<h2>React</h2>
			<div className="tech-description">
				<p>
					React is a JavaScript library for building user interfaces, developed by
					Facebook. It allows creating complex UIs from small and isolated pieces of code
					called "components".
				</p>

				<h3>Key features:</h3>
				<ul>
					<li>
						<strong>Component-based approach</strong> — UI is broken down into independent, reusable
						components
					</li>
					<li>
						<strong>Virtual DOM</strong> — efficiently updates only the parts of the DOM that have
						changed
					</li>
					<li>
						<strong>One-way data flow</strong> — makes code more predictable
					</li>
					<li>
						<strong>JSX</strong> — JavaScript syntax extension that allows writing
						HTML-like code in JavaScript
					</li>
					<li>
						<strong>Hooks</strong> — allow using state and other React features without
						writing classes
					</li>
				</ul>

				<p>
					React is actively developing and has a large community of developers, making it one
					of the most popular tools for creating modern web applications.
				</p>
			</div>
		</div>
	);
}

export default ReactPage;
