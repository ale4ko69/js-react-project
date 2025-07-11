import { NavLink }     from "react-router-dom";

import { useSelector } from "react-redux";

import { selectCount } from "../../store/slices/counterSlice";

function HomePage() {
	const counter = useSelector(selectCount); // Get counter value from Redux

	return (
		<div className="tech-info">
			<h2>Выберите технологию</h2>
			<p>
				Пожалуйста, выберите технологию из списка слева, чтобы увидеть подробную информацию о ней.
			</p>
			<p>
				Здесь вы видите значение Counter: <span className={"note-text"}>{counter}</span>, который
				изменяется на <NavLink to="/">главной странице</NavLink>.
			</p>
		</div>
	);
}

export default HomePage;
