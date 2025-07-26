/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:06:05         **/
/**  https://github.com/ale4ko69      **/
/***************************************/

import { useState, useEffect }      from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUsers, selectUsers }    from "../store/slices/userSlice";

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
				// If users are already fetched, set loading to false
				setLoading(false);
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

				dispatch(setUsers(json)); // Dispatch the action to set users in the Redux store

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
