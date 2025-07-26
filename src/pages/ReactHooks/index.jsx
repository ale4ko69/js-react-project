/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:04:28         **/
/**  https://github.com/ale4ko69      **/
/***************************************/

import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Trans, useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import { setUsers, clearUsers } from "../../store/slices/userSlice";

import useFetchData from "../../hooks/useFetchData";

import HtmlToTag from "../../components/HtmlToTag";

import styles from "./ReactHooks.module.scss"; // Import the SCSS module


/**
 * This React Hook component demonstrates:
 * - Fetching data from an API using a custom hook.
 * - API and manages loading and error states.
 *
 * Explain about TransitionGroup used in this code:
 * this a component from the react-transition-group library.
 * It manages a list of child components and enables animations when items are added, removed, or changed.
 * In your code, it wraps the conditional rendering of loading, error, and table states,
 * allowing smooth transitions (like fade-in/fade-out) between them using CSSTransition.
 * This improves user experience by animating content changes instead of switching abruptly.
 */

function ReactHooks() {
	const { t } = useTranslation();

	document.title = t("reactHooks.title");

	const [filter, setFilter] = useState("");
	const [reload, setReload] = useState(false); // State to trigger re-fetch
	const [showContent, setShowContent] = useState(false); // State to control animation
	const { users, loading, error } = useFetchData(
		"https://jsonplaceholder.typicode.com/users/",
		reload
	);

	const dispatch = useDispatch();

	const hasUsers = users && users.length > 0; // Check if users are available

	// useCallback to memoize the toggle function
	const handleReload = useCallback(() => {
		setReload(prevReload => !prevReload); // Toggle the reload state
	}, []);

	const handleFilterChange = event => {
		setFilter(event.target.value);
	};

	const handleClearUsers = () => {
		setFilter(""); // Reset the filter state
		dispatch(clearUsers()); // Clear users from the Redux store
	};

	const filteredUsers = useMemo(() => {
		return hasUsers
			? users?.filter(
					user =>
						user.name.toLowerCase().includes(filter.toLowerCase()) ||
						user.username.toLowerCase().includes(filter.toLowerCase()) ||
						user.email.toLowerCase().includes(filter.toLowerCase())
				)
			: [];
	}, [users, filter, hasUsers]);

	// Effect to control animation based on loading state
	useEffect(() => {
		if (!loading && hasUsers) {
			// If the download is complete and the data is there, we show the content
			setShowContent(true);
		} else if (loading) {
			// If the download has started, hide the content
			setShowContent(false);
		}
	}, [loading, hasUsers]);

	// Create refs for each transition
	const loadingRef = useRef(null);
	const errorRef = useRef(null);
	const tableRef = useRef(null);
	const inputRef = useRef(null);

	// Define transition classes once to reuse
	const transitionClasses = {
		enter: styles.fadeEnter,
		enterActive: styles.fadeEnterActive,
		exit: styles.fadeExit,
		exitActive: styles.fadeExitActive,
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{t("reactHooks.title")}</h2>
			<p className={styles.description}>
				{t("reactHooks.description")}
			</p>
			<ul className={styles.featuresList}>
				{t("reactHooks.featuresHtml", { returnObjects: true }).map((feature, index) => (
					<HtmlToTag key={index} htmlContent={feature} tag={"li"} />
				))}
			</ul>
			<p>
				{t("reactHooks.conclusion")}
			</p>
			<div className={styles.filterContainer}>
				<div className={styles.inputDiv}>
					<input
						type="text"
						className={styles.filterInput}
						placeholder={t("reactHooks.placeholder")}
						value={filter}
						onChange={handleFilterChange}
						autoComplete="off"
						name="filterInput"
						disabled={!hasUsers}
						ref={inputRef}
					/>
				</div>
				<div className={styles.buttonDiv}>
					<button
						name={"reloadData"}
						className={`${styles["button-reload"]} ${styles["primary-button"]}`}
						onClick={handleReload}
					>
						{t("reactHooks.btnReloadData")}
					</button>
					<button
						name={"clearData"}
						className={`${styles["button-reload"]} ${styles["primary-button"]}`}
						onClick={handleClearUsers}
					>
						{t("reactHooks.btnClearData")}
					</button>
				</div>
			</div>

			<div className={styles.contentContainer}>
				<TransitionGroup>
					{loading ? (
						<CSSTransition
							key="loading"
							timeout={500}
							nodeRef={loadingRef}
							classNames={transitionClasses}
						>
							<div className={styles.loadingContainer} ref={loadingRef}>
								<p className={styles.loading}>{t("reactHooks.loading")}</p>
							</div>
						</CSSTransition>
					) : error ? (
						<CSSTransition
							key="error"
							timeout={500}
							nodeRef={errorRef}
							classNames={transitionClasses}
						>
							<div ref={errorRef}>
								<p className={styles.error}>
									{t("reactHooks.error")}: {error.message}
								</p>
							</div>
						</CSSTransition>
					) : (
						<CSSTransition
							key="table"
							timeout={500}
							nodeRef={tableRef}
							classNames={transitionClasses}
						>
							<div className={styles.tableContainer} ref={tableRef}>
								<table className={styles.table}>
									<thead>
										<tr>
											<th>{t("reactHooks.table.id")}</th>
											<th>{t("reactHooks.table.name")}</th>
											<th>{t("reactHooks.table.username")}</th>
											<th>{t("reactHooks.table.email")}</th>
										</tr>
									</thead>
									<tbody>
										{filteredUsers.length > 0 ? (
											filteredUsers.map(user => (
												<tr key={user.id}>
													<td>{user.id}</td>
													<td>{user.name}</td>
													<td>{user.username}</td>
													<td>{user.email}</td>
												</tr>
											))
										) : (
											<tr>
												<td colSpan="4" className={styles.noData}>
													{t("reactHooks.noData")}
												</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</CSSTransition>
					)}
				</TransitionGroup>
			</div>
		</div>
	);
}

export default ReactHooks;
