/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:06:05         **/
/**  https://github.com/ale4ko69      **/
/***************************************/

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUsers, selectUsers } from "../store/slices/userSlice";
import { appendRandomData } from "../utils";

/**
 * Custom React hook to fetch data from a given URL.
 *
 * @param {string} url - The endpoint URL to fetch data from.
 * @param {any} reload - A dependency to trigger re-fetching when changed.
 * @returns {{ data: any, loading: boolean, error: Error|null }}
 *   An object containing the fetched data, loading state, and any error encountered.
 *
 * @example
 * const { data, loading, error } = useFetchData('/api/data', reloadFlag);
 */
function useFetchData(url, reload) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const users = useSelector(selectUsers);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			if (users?.length > 0) {
				// Change random data to the exiting users
				const newData = appendRandomData(users);
				dispatch(setUsers(newData));

				// If users are already fetched, set loading to false
				setLoading(false);
				// eslint-disable-next-line no-undef
				if (process.env.NODE_ENV !== "production") {
					console.log("Users already fetched:", users);
				}

				return;
			}

			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const json = await response.json();

				const newData = appendRandomData(json); // Append random data to the fetched users

				dispatch(setUsers(newData)); // Dispatch the action to set users in the Redux store

				// eslint-disable-next-line no-undef
				if (process.env.NODE_ENV !== "production") {
					console.log("Fetched users:", json);
				}

				setError(null);
			} catch (e) {
				setError(e);
				dispatch(setUsers([]));
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, reload]); // Re-fetch data when URL or reload changes

	return { users, loading, error };
}

export default useFetchData;
