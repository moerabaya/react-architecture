import React, { useContext, useState } from "react";
import { InitialDataContext } from "./dataContext";

const useSSR = (resourceName, loadFunc) => {
	const context = useContext(InitialDataContext);
	const [data, setData] = useState(context._data[resourceName]);

	if(context._isServerSide) {
		context._requests.push(
			loadFunc().then(res => context._data[resourceName] = res)
		);
	} else if (!data) {
		loadFunc().then(res => {
			setData(res);
			context._data[resourceName] = res;
		})
	}

	return data;
}

export default useSSR;