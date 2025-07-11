import { Outlet, NavLink } from "react-router-dom";

function Technologies() {
	return (
		<div className="about-container">
			<h1>О проекте</h1>
			<p>
				Этот проект демонстрирует использование современных веб-технологий для разработки
				React-приложений.
			</p>

			{/* Добавляем обертку для контента и навигации */}
			<div className="about-layout">
				<div className="about-navigation">
					<h2>Технологии</h2>
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
