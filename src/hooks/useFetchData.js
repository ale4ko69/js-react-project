/***************************************/
/**  Created By (c) Kagansky Alexey   **/
/**       2025-07-12 16:06:05         **/
/**  https://github.com/ale4ko69      **/
/***************************************/

import { useState, useEffect } from "react";

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
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const json = await response.json();
				setData(json);
				setError(null);
			} catch (e) {
				setError(e);
				setData(null);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, reload]); // Re-fetch data when URL or reload changes

	return { data, loading, error };
}

export default useFetchData;
