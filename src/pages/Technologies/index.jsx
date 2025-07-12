import { Outlet, NavLink } from "react-router-dom";

function Technologies() {
	return (
		<div className="about-container">
			<h1>About Project</h1>
			<p>
				This project demonstrates the use of modern web technologies for development
				React applications.
			</p>

			{/* Adding a wrapper for content and navigation */}
			<div className="about-layout">
				<div className="about-navigation">
					<h2>Technology</h2>
					<ul>
						<li>
							<NavLink to="/technologies/react" className={({ isActive }) => (isActive ? "active" : "")}>
								React
							</NavLink>
						</li>
						<li>
							<NavLink to="/technologies/vite" className={({ isActive }) => (isActive ? "active" : "")}>
								Vite
							</NavLink>
						</li>
						<li>
							<NavLink to="/technologies/router" className={({ isActive }) => (isActive ? "active" : "")}>
								React Router
							</NavLink>
						</li>
						<li>
							<NavLink to="/technologies/redux" className={({ isActive }) => (isActive ? "active" : "")}>
								Redux
							</NavLink>
						</li>
						<li>
							<NavLink to="/technologies/scss" className={({ isActive }) => (isActive ? "active" : "")}>
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
