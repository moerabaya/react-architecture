import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import CounterButton from '../components/CounterButton';
import { RecoilState } from "recoil";
import { counterState } from "./atoms/counterState";
import { numberOfClicks } from "./selectors/numberOfClicks";

const RecoilCounter = () => (
	<RecoilRoot>
		<Counter />
	</RecoilRoot>
)

const Counter = () => {
	const amount = useRecoilValue(numberOfClicks);
	const [clicksData, setClicksData] = useRecoilState(counterState);

	const increment = incrementBy => {
		setClicksData([...clicksData, {timestamp: Date.now(), amount: incrementBy}]);
	}

	return (
		<div className="content">
			<div className='wrapper'>
				<h1>Recoil: State Management Example</h1>
				<CounterButton numberOfClicks={amount} increment={increment} />
			</div>
		</div>
	);
}


export default RecoilCounter;