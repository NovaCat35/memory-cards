interface checkScoreConditionProps {
	cardsLimit: number;
	targetName: string;
	currScore: number;
	bestScore: number;
	setBestScore: React.Dispatch<React.SetStateAction<number>>;
	setCurrScore: React.Dispatch<React.SetStateAction<number>>;
}

// This list keeps track of all clicked cards
let savedClicked: string[] = [];

export default function checkScoreCondition({ cardsLimit, targetName, currScore, bestScore, setBestScore, setCurrScore }: checkScoreConditionProps) {
	// Player loses if they click on the same card they previous clicked on. We reset everything as a result.
	if (savedClicked.includes(targetName)) {
		setCurrScore(0);
		savedClicked = [];
		return "lose";
	} else {
		// Update score and best score
		const newScore = currScore + 1;
		const newBestScore = Math.max(newScore, bestScore);
		setCurrScore(newScore);
		setBestScore(newBestScore);
		savedClicked.push(targetName);
		// After score is updated, we now have enough info to check win status base on cardList length
		return checkWinCondition(cardsLimit);
	}
}

function checkWinCondition(cardsLimit: number) {
	if (savedClicked.length == cardsLimit) {
		return "win";
	}
	return "continue";
}

export {savedClicked};