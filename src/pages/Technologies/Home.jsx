/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:06:24         **/
/**  https://github.com/ale4ko69      **/
/***************************************/

import { NavLink }               from "react-router-dom";

import { Trans, useTranslation } from "react-i18next";
import { useSelector }           from "react-redux";

import { selectCount }           from "../../store/slices/counterSlice";


function HomePage() {
	const { t } = useTranslation();
	const counter = useSelector(selectCount); // Get counter value from Redux

	return (
		<div className="tech-info">
			<h2>{t("technologies.home.h2")}</h2>
			<p>
				{t("technologies.home.p1")}
			</p>
			<p>
				<Trans
					i18nKey="technologies.home.p2"
					values={{ counter: counter }}
					components={[
						<span className="note-text">{counter}</span>,
						<NavLink to="/">{t("the main page!")}</NavLink>,
					]}
				/>
			</p>
		</div>
	);
}

export default HomePage;
