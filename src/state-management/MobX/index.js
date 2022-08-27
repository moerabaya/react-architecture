
import CounterButton from '../components/CounterButton';
import {default as CounterState} from "./Counter";
import { observer } from 'mobx-react-lite';

const counter = new CounterState();

const Counter = () => {
	return (
		<div className="content">
			<div className='wrapper'>
				<h1>MobX: State Management Example</h1>
				<CounterButton numberOfClicks={counter.numberOfClicks} increment={counter.increment} />
			</div>
		</div>
	);
}

export default observer(Counter);