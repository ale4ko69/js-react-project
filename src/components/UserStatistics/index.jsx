/**
 * Copyright (c) 2025-07-11 Alexey Kagansky
 * https://github.com/ale4ko69
 */
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { selectUsers } from "../../store/slices/userSlice";
import "./UserStatistics.scss";

const defaultStatistics = {
	totalUsers: 0,
	genderStats: { male: 0, female: 0 },
	educationStats: {},
	ageStats: { male: 0, female: 0 },
};

function UserStatictics() {
	const { t, i18n } = useTranslation();
	const users = useSelector(selectUsers);
	const [statistics, setStatistics] = useState(defaultStatistics);

	// Calculate statistics when users data changes
	useEffect(() => {
		if (users && users.length > 0) {
			calculateStatistics(users);
		} else {
			// Reset statistics if no users are available
			setStatistics(defaultStatistics);
		}
	}, [users]);

	/**
	 * Calculates user statistics
	 * 1. Total number of users
	 * 2. The number of men and women
	 * 3. Education as a percentage of the total number of users
	 * 4. Average age for each gender
	 *
	 * @param {Array} usersData - Array of user data
	 */
	const calculateStatistics = usersData => {
		// 1. Total number of users
		const totalUsers = usersData.length;

		// 2. The number of men and women
		const genderStats = {
			male: usersData.filter(user => user.gender === "male").length,
			female: usersData.filter(user => user.gender === "female").length,
		};

		// 3. Education in percentages
		const educationCount = {};
		usersData.forEach(user => {
			if (user.education) {
				educationCount[user.education] = (educationCount[user.education] || 0) + 1;
			}
		});

		// Convert quantity to percentages
		const educationStats = {};
		Object.keys(educationCount).forEach(edu => {
			educationStats[edu] = Math.round((educationCount[edu] / totalUsers) * 100);
		});

		// 4. Average age for each gender
		const maleUsers = usersData.filter(user => user.gender === "male");
		const femaleUsers = usersData.filter(user => user.gender === "female");

		const maleAgeSum = maleUsers.reduce((sum, user) => sum + user.age, 0);
		const femaleAgeSum = femaleUsers.reduce((sum, user) => sum + user.age, 0);

		const ageStats = {
			male: maleUsers.length ? Math.round(maleAgeSum / maleUsers.length) : 0,
			female: femaleUsers.length ? Math.round(femaleAgeSum / femaleUsers.length) : 0,
		};

		setStatistics({
			totalUsers,
			genderStats,
			educationStats,
			ageStats,
		});
	};

	const cards = [
		{
			title: `${t("statistics.totalUsers")} \u{1F46B}`,
			content: <h2>{statistics.totalUsers}</h2>,
		},
		{
			title: t("statistics.genderDistribution"),
			content: (
				<>
					<div className="gender-chip male">
						<span className="chip-label">{t("statistics.male")}</span>
						<span className="chip-value">{statistics.genderStats.male}</span>
					</div>
					<div className="gender-chip female">
						<span className="chip-label">{t("statistics.female")}</span>
						<span className="chip-value">{statistics.genderStats.female}</span>
					</div>
				</>
			),
		},
		{
			title: t("statistics.averageAge"),
			content: (
				<>
					<div className="gender-chip male">
						<span className="chip-label">{t("statistics.male")}</span>
						<span className="chip-value">{statistics.ageStats.male}</span>
					</div>
					<div className="gender-chip female">
						<span className="chip-label">{t("statistics.female")}</span>
						<span className="chip-value">{statistics.ageStats.female}</span>
					</div>
				</>
			),
		},
		{
			title: t("statistics.educationLevels"),
			content: t("statistics.educationLevelsDescription"),
			footer: (
				<>
					{Object.entries(statistics.educationStats).map(([edu, percentage]) => (
						<div key={edu}>
							<strong>{edu}</strong> {percentage}%
						</div>
					))}
				</>
			),
		},
	];

	return (
		<div className="user-statistics-wrapper">
			<h2>{t("statistics.userStatistic")}</h2>
			{users.length > 0 ? (
				<CSSTransition key="statistics" timeout={500} classNames="fade">
					<div className="statistics-container">
						{cards.map((card, index) => (
							<div className="statistics-card" key={index}>
								<div>
									<div className="card-title">{card.title}</div>
									{card.content && <div className="card-content">{card.content}</div>}
								</div>
								{/* If the card has a footer, render it */}
								{card.footer && <div className="card-footer">{card.footer}</div>}
							</div>
						))}
					</div>
				</CSSTransition>
			) : (
				<CSSTransition key="noData" timeout={500} classNames="fade">
					<div className="statistics-container no-data">
						<h2>{t("statistics.noData")}</h2>
					</div>
				</CSSTransition>
			)}
		</div>
	);
}

UserStatictics.displayName = "UserStatictics";

export default UserStatictics;
