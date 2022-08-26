
import { RecoilRoot, useRecoilState } from "recoil";
import CounterButton from '../components/CounterButton';
import { RecoilState } from "recoil";
import { counterState } from "./atoms/counterState";
import { incrementByState } from "./atoms/incrementByState";

const RecoilCounter = () => (
	<RecoilRoot>
		<Counter />
	</RecoilRoot>
)

const Counter = () => {
	const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);

	const increment = incrementBy => {
		setNumberOfClicks(numberOfClicks + incrementBy);
	}

	return (
		<div className="content">
			<div className='wrapper'>
				<h1>State Management Example</h1>
				<CounterButton numberOfClicks={numberOfClicks} increment={increment} />
			</div>
		</div>
	);
}


export default RecoilCounter;