import React, { useState, useCallback } from "react";
import useFetchData from "../../hooks/useFetchData";
import styles from "./ReactHooks.module.scss"; // Import the SCSS module

function ReactHook() {
	const [filter, setFilter] = useState("");
	const [reload, setReload] = useState(false); // State to trigger re-fetch
	const { data, loading, error } = useFetchData(
		"https://jsonplaceholder.typicode.com/users/",
		reload
	);

	// useCallback to memoize the toggle function
	const handleReload = useCallback(() => {
		setReload(prevReload => !prevReload); // Toggle the reload state
	}, []);

	const handleFilterChange = event => {
		setFilter(event.target.value);
	};

	const filteredUsers = data
		? data.filter(
				user =>
					user.name.toLowerCase().includes(filter.toLowerCase()) ||
					user.username.toLowerCase().includes(filter.toLowerCase()) ||
					user.email.toLowerCase().includes(filter.toLowerCase())
			)
		: [];

	if (loading) {
		return <p className={styles.loading}>Loading...</p>;
	}

	if (error) {
		return <p className={styles.error}>Error: {error.message}</p>;
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Users List</h2>
			<p className={styles.description}>
				This example demonstrates:
				<ul className={styles.featuresList}>
					<li>
						Custom React Hook (<code>useFetchData</code>): Fetches data from an API and manages
						loading and error states.
					</li>
					<li>
						State Management (<code>useState</code>): Manages the filter input value.
					</li>
					<li>Filtering Data: Filters a list of users based on user input.</li>
					<li>Conditional Rendering: Displays loading, error, or user data based on the state.</li>
					<li>SCSS Modules: Styles the component using SCSS modules for encapsulation.</li>
					<li>Table Display: Presents the filtered data in a table format.</li>
				</ul>
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
            autocomplete="off"
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
				</div>
			</div>

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
					{filteredUsers.map(user => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ReactHook;
