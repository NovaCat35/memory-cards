import {savedClicked} from "./checkScoreCondition";

interface checkWinConditionProps{
	cardsLimit: number;
	setCurrScore: React.Dispatch<React.SetStateAction<number>>;
}
function checkWinCondition({cardsLimit, setCurrScore}: checkWinConditionProps) {
	if (savedClicked.length === cardsLimit) {
		setCurrScore(0); // reset scoreboard
		return "win";
	}
	return "continue";
}

export { checkWinCondition };
