
import React, { useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import CounterContext from './CounterContext';


const CounterProvider = ({children}) => {
	const [numberOfClicks, setNumberOfClicks] = useState(0);
	const handleError = useErrorHandler();
	const increment = incrementBy => {
		try {
			setNumberOfClicks(numberOfClicks + incrementBy);
			if(numberOfClicks + incrementBy > 10)
				throw new Error("not loading");
		} catch (error) {
			handleError(error);
		}
	}

	return (
		<CounterContext.Provider value={{numberOfClicks, increment}}>
			{children}
		</CounterContext.Provider>
	)
}

export default CounterProvider;