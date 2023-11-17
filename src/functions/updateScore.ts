interface updateScoreProps {
	targetName: string;
	currScore: number;
	bestScore: number;
	setBestScore: React.Dispatch<React.SetStateAction<number>>;
	setCurrScore: React.Dispatch<React.SetStateAction<number>>;
}

// This list keeps track of all clicked cards
export let savedClicked: string[] = [];

export default function updateScore({ targetName, currScore, bestScore, setBestScore, setCurrScore }: updateScoreProps) {
	// Player loses if they click on the same card they previous clicked on. We reset everything as a result.
	if (savedClicked.includes(targetName)) {
		savedClicked = [];
		setCurrScore(0);
	} else {
		// Update score and best score
		const newScore = currScore + 1;
		console.log(newScore)
		const newBestScore = Math.max(newScore, bestScore);

		savedClicked.push(targetName);

		setCurrScore(newScore);
		setBestScore(newBestScore);
	}
}
