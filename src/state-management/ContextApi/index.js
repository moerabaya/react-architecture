

import CounterButton from './CounterButton';
import '../../App.css';
import CounterProvider from './CounterProvider';

const ContextApi = () => {
	return (
		<CounterProvider>
			<div className="content">
				<div className='wrapper'>
					<h1>State Management Example</h1>
					<CounterButton />
				</div>
			</div>
		</CounterProvider>
	);
}

export default ContextApi;