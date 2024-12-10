import React from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const useAxios = (keyInLs, baseUrl) => {
	const [responses, setResponses] = useLocalStorage(keyInLs);
	const addResponseData = async (formatter = (data) => data, urlEnd = "") => {
		try {
			const apiCall = urlEnd ? `${baseUrl}/${encodeURIComponent(urlEnd)}` : baseUrl;
			const response = await axios.get(apiCall);
			const formattedData = formatter(response.data);

			setResponses((data) => [...data, formattedData]);
		} catch (e) {
			console.error("Error fetching card data", e);
		}
	};
	const removeResponses = () => setResponses([]);
	return [responses, addResponseData, removeResponses];
};

export default useAxios;
