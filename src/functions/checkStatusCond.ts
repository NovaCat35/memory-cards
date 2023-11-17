import {savedClicked} from './updateScore';

interface checkStatusConditionProps {
	cardsLimit: number;
	targetName: string;
}

export default function checkStatusCondition({ cardsLimit, targetName}: checkStatusConditionProps) {
	// Player loses if they click on the same card they previous clicked on. We reset everything as a result.
	if (savedClicked.includes(targetName)) {
		return "lose";
	} else {
		if (savedClicked.length == cardsLimit) {
			return "win";
		}
		return "continue";
	}
}

export {savedClicked};