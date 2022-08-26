import { selector } from "recoil";
import { counterState } from "../atoms/counterState";
export const numberOfClicks = selector({
	key: 'numberOfClicks',
	get: ({get}) => {
		const clicks = get(counterState);
		const totalClicks = clicks.reduce((sum, click) => sum+click.amount, 0);
		return totalClicks;
	}
})