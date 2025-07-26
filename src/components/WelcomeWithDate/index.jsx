/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import HtmlToTag from "../HtmlToTag";
import "./WelcomeWithDate.scss";

function WelcomeWithDate() {
	const { t, i18n } = useTranslation();
	const [currentDateTime, setCurrentDateTime] = useState(new Date());

	// Update date and time every second
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000); // Update every second

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="welcome-banner">
			<HtmlToTag
				className="welcome-message"
				tag="div"
				htmlContent={t("home.welcome", {
					date: currentDateTime,
					time: currentDateTime,
				}).replace(/(\d+:\d+:\d+)/, '<span class="time-display">$1</span>')}
			/>
			<div className="date-formats">
				<h3>{t("dateFormats.full")}: </h3>
				<p>
					{currentDateTime.toLocaleDateString(i18n.language === "ru" ? "ru-RU" : "en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>

				<h3>{t("dateFormats.short")}: </h3>
				<p>
					{currentDateTime.toLocaleDateString(i18n.language === "ru" ? "ru-RU" : "en-US", {
						year: "numeric",
						month: "numeric",
						day: "numeric",
					})}
				</p>

				<h3>{t("dateFormats.time")}: </h3>
				<p>
					{currentDateTime.toLocaleTimeString(i18n.language === "ru" ? "ru-RU" : "en-US", {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</p>

				<h3>{t("dateFormats.timeWithSeconds")}: </h3>
				<p>
					{currentDateTime.toLocaleTimeString(i18n.language === "ru" ? "ru-RU" : "en-US", {
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
					})}
				</p>
			</div>
		</div>
	);
}

WelcomeWithDate.displayName = "WelcomeWithDate";

export default WelcomeWithDate;
