
import { useContext } from "react";
import CounterButton from '../components/CounterButton';
import CounterProvider from "./CounterProvider";
import CounterContext from './CounterContext';

const ContextApi = () => (
	<CounterProvider>
		<Counter />
	</CounterProvider>
)
const Counter = () => {
	const {numberOfClicks, increment} = useContext(CounterContext);

	return (
		<div className="content">
			<div className='wrapper'>
				<h1>State Management Example</h1>
				<CounterButton numberOfClicks={numberOfClicks} increment={increment} />
			</div>
		</div>
	);
}

export default ContextApi;