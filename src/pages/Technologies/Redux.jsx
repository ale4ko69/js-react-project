function ReduxPage() {
	return (
		<div className="tech-info">
			<h2>Redux</h2>
			<div className="tech-description">
				<p>
					Redux is a library for managing state in JavaScript applications. It helps
					write applications that behave predictably, are easy to test, and work in
					different environments.
				</p>

				<h3>Key features:</h3>
				<ul>
					<li>
						<strong>Single state store</strong> — all application state is stored in one
						object
					</li>
					<li>
						<strong>Immutable state</strong> — state is read-only,
						changes occur through pure functions
					</li>
					<li>
						<strong>Reducers</strong> — pure functions that determine how state
						changes in response to actions
					</li>
					<li>
						<strong>Actions</strong> — objects describing what happened in the application
					</li>
					<li>
						<strong>Redux DevTools</strong> — powerful tools for debugging application state
					</li>
				</ul>

				<h3>Redux Toolkit</h3>
				<p>
					Redux Toolkit is the official recommended approach for writing Redux logic. It
					simplifies the most common use cases of Redux, including store setup,
					creating reducers, immutable update logic, and even creating complete
					state "slices".
				</p>

				<p>
					Redux is especially useful in large applications with complex state that needs to be
					managed in a predictable way.
				</p>
			</div>
		</div>
	);
}

export default ReduxPage;
