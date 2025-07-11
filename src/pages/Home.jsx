import { useDispatch, useSelector }                 from "react-redux";
import { increment, decrement, reset, selectCount } from "../store/slices/counterSlice";
import reactLogo                                    from "../assets/react.svg";
import viteLogo                                     from "/vite.svg";

function Home() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	return (
		<div className="container">
			<div className="centered-content">
				<div className="logo-container">
					<a href="https://vite.dev" target="_blank" rel="noreferrer">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank" rel="noreferrer">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1>Vite + React + SCSS + Redux</h1>
				<div className="card">
					<p>
						Redux count is: <strong>{count}</strong>
					</p>
					<div>
						<button className="button button--primary" onClick={() => dispatch(increment())}>
							Increment
						</button>
						<button className="button button--secondary" onClick={() => dispatch(decrement())}>
							Decrement
						</button>
						<button className="button button--secondary" onClick={() => dispatch(reset())}>
							Reset
						</button>
					</div>
					<p>
						Edit <code>src/pages/Home.jsx</code> and save to test HMR
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
