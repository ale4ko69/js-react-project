/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:04:03         **/
/**  https://github.com/ale4ko69      **/
/***************************************/
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { increment, decrement, reset, selectCount } from "../store/slices/counterSlice";
import WelcomeWithDate from "../components/WelcomeWithDate";
import reactLogo from "../assets/react.svg";
import scssLogo from "../assets/scss.svg";
import reduxLogo from "../assets/redux.svg";
import viteLogo from "/vite.svg";

function Home() {
	const { t } = useTranslation();

		// Set document title
	document.title = t("home.title");

	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	return (
		<div className="container">
			<div className="centered-content">
				<h1>{t('home.title')}</h1>
				{/* Welcome component with localized date/time */}
				<WelcomeWithDate />
				<div className="logo-container">
					<a href="https://vite.dev" target="_blank" rel="noreferrer">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank" rel="noreferrer">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
					<a href="https://sass-lang.com" target="_blank" rel="noreferrer">
						<img src={scssLogo} className="logo scss" alt="SCSS logo" />
					</a>
					<a href="https://redux.js.org" target="_blank" rel="noreferrer">
						<img src={reduxLogo} className="logo redux" alt="Redux logo" />
					</a>
				</div>
				<h1>Vite + React + SCSS + Redux</h1>
				<p>{t('home.description')}</p>

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
