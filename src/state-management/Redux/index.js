
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import CounterButton from '../components/CounterButton';
import { setNumberOfClicks } from './slices';
import { store } from './store';

const ReduxCounter = () => (
	<Provider store={store}>
		<Counter />
	</Provider>
)

const Counter = () => {
	const numberOfClicks = useSelector(state => state.numberOfClicks.reduce((sum, click) => sum+click.amount, 0));
	const dispatch = useDispatch();
	const increment = incrementBy => {
		dispatch(setNumberOfClicks({amount: incrementBy}));
	}

	return (
		<div className="content">
			<div className='wrapper'>
				<h1>Redux/toolkit: State Management Example</h1>
				<CounterButton numberOfClicks={numberOfClicks} increment={increment} />
			</div>
		</div>
	);
}


export default ReduxCounter;