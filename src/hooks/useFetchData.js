import { useState, useEffect } from "react";

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
