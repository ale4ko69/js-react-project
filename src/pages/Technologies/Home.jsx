import { NavLink }     from "react-router-dom";

import { useSelector } from "react-redux";

import { selectCount } from "../../store/slices/counterSlice";

function HomePage() {
	const counter = useSelector(selectCount); // Get counter value from Redux

	return (
		<div className="tech-info">
			<h2>Choose a Technology</h2>
			<p>
				Please select a technology from the list on the left to see detailed information about it.
			</p>
			<p>
				Here you see the value of Counter: <span className={"note-text"}>{counter}</span>, which
				changes to <NavLink to="/"> the main page</NavLink>.
			</p>
		</div>
	);
}

export default HomePage;
