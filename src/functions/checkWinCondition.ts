import {savedClicked} from "./checkScoreCondition";

function checkWinCondition(cardsLimit: number) {
	if (savedClicked.length === cardsLimit) {
		return "win";
	}
	return "continue";
}

export { checkWinCondition };
