/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:04:28         **/
/**  https://github.com/ale4ko69      **/
/***************************************/

import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useDispatch } from "react-redux";
import { setUsers, clearUsers } from "../../store/slices/userSlice";

import useFetchData from "../../hooks/useFetchData";

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

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>React Hook</h2>
			<p className={styles.description}>This example demonstrates for Users List:</p>
			<ul className={styles.featuresList}>
				<li>
					Custom React Hook (<code>useFetchData</code>): Fetches data from an API and manages
					loading and error states.
					<br />
					Data taken from{" "}
					<a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noopener noreferrer">
						project jsonplaceholder
					</a>
				</li>
				<li>
					State Management (<code>useState</code>): Manages the filter input value.
				</li>
				<li>Filtering Data: Filters a list of users based on user input.</li>
				<li>Conditional Rendering: Displays loading, error, or user data based on the state.</li>
				<li>SCSS Modules: Styles the component using SCSS modules for encapsulation.</li>
				<li>Table Display: Presents the filtered data in a table format.</li>
				<li>
					TransitionGroup: allowing smooth transitions (like fade-in/fade-out) between conditional
					rendering using CSSTransition.
				</li>
			</ul>
			<p>
				It showcases how to fetch data, handle loading and error states, filter data based on user
				input, and style a component using SCSS modules in a React application.
			</p>
			<div className={styles.filterContainer}>
				<div className={styles.inputDiv}>
					<input
						type="text"
						className={styles.filterInput}
						placeholder="Filter by name, username, or email"
						value={filter}
						onChange={handleFilterChange}
						autoComplete="off"
						name="filterInput"
						disabled={!hasUsers}
					/>
				</div>
				<div className={styles.buttonDiv}>
					<button
						name={"reloadData"}
						className={`${styles["button-reload"]} ${styles["primary-button"]}`}
						onClick={handleReload}
					>
						Reload Data
					</button>
					&nbsp;
					<button
						name={"clearData"}
						className={`${styles["button-reload"]} ${styles["primary-button"]}`}
						onClick={handleClearUsers}
					>
						Clear Users
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
							classNames={{
								enter: styles.fadeEnter,
								enterActive: styles.fadeEnterActive,
								exit: styles.fadeExit,
								exitActive: styles.fadeExitActive,
							}}
						>
							<div className={styles.loadingContainer}>
								<p className={styles.loading}>Loading...</p>
							</div>
						</CSSTransition>
					) : error ? (
						<CSSTransition
							key="error"
							timeout={500}
							nodeRef={errorRef}
							classNames={{
								enter: styles.fadeEnter,
								enterActive: styles.fadeEnterActive,
								exit: styles.fadeExit,
								exitActive: styles.fadeExitActive,
							}}
						>
							<div>
								<p className={styles.error}>Error: {error.message}</p>
							</div>
						</CSSTransition>
					) : (
						<CSSTransition
							key="table"
							timeout={500}
							nodeRef={tableRef}
							classNames={{
								enter: styles.fadeEnter,
								enterActive: styles.fadeEnterActive,
								exit: styles.fadeExit,
								exitActive: styles.fadeExitActive,
							}}
						>
							<div className={styles.tableContainer}>
								<table className={styles.table}>
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Username</th>
											<th>Email</th>
										</tr>
									</thead>
									<tbody>
										{filteredUsers.length > 0 ? filteredUsers.map(user => (
											<tr key={user.id}>
												<td>{user.id}</td>
												<td>{user.name}</td>
												<td>{user.username}</td>
												<td>{user.email}</td>
											</tr>
										)) : (
											<tr>
												<td colSpan="4" className={styles.noData}>
													No users found
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
