function RouterPage() {
	return (
		<div className="tech-info">
			<h2>React Router</h2>
			<div className="tech-description">
				<p>
					React Router is the standard routing library for React. It allows creating
					multi-page applications with navigation without page reloading, which provides
					a smooth user experience.
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
