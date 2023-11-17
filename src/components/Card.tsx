import { useContext } from "react";
import { charImageMap } from "../functions/filterImage";
import { gameContextType, gameContext } from "./pages/GamePage";
import { pageContextType, pageContext } from "../App";
import shuffle from "../functions/shuffle";
import {checkScoreCondition} from "../functions/checkScoreCondition";
import {checkWinCondition} from "../functions/checkWinCondition";
import "../styles/Card.scss";
import cardBack from "../assets/glaze_lily_card_back.webp";

interface CardProps {
	charName: string;
}

// For example: arataki-itto becomes Arataki Itto
function normalizeName(charName: string) {
	charName = charName.replace(/-/g, " ");
	let charNameList = charName.split(" ");
	charNameList = charNameList.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
	charName = charNameList.join(" ");
	return charName;
}

function Card({ charName }: CardProps) {
	const { currCharList, isFlipped, isClicked, handleCardClick, setCurrCharList, setCardsCounter } = useContext<gameContextType>(gameContext);
	const { setWinActive, setLoseActive, currScore, bestScore, setBestScore, setCurrScore } = useContext<pageContextType>(pageContext);
	const imageSrc = charImageMap[charName]; // Finds the img src from the hashmap in filterImage.ts
	const NormalizeName = normalizeName(charName);
	// const [cardsFlipActive, setCardsFlipActive] = useState<boolean>(false);

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		// Ignore multiple user clicks
		if (!isClicked) {
			handleCardClick();
			const targetName = e.currentTarget.getAttribute("id") || ""; // typescript wants assurance there's no 'null'
			const cardsLimit = currCharList.length;
			let pageStatus = checkScoreCondition({ targetName, currScore, bestScore, setBestScore, setCurrScore });
			if(checkWinCondition(cardsLimit) == 'win'){
				pageStatus = 'win'
			}
			setCurrCharList(shuffle({ charList: currCharList })); // shuffle the cards whenever you click on a card
			setPageStatus(pageStatus);
			setCardsCounter((counter: number) => counter + 1);
		}
	};

	// useEffect(() => {
	// 	if (cardsFlipActive) {
	// 		const timeoutId = setTimeout(() => {
	// 			setCardsFlipActive(false);
	// 		}, 1000);
	// 		return () => clearTimeout(timeoutId);
	// 	}
	// }, [cardsFlipActive]);

	// useEffect(() => {
	// 	if (isFlipped) {
	// 		const timeoutIdStart = setTimeout(() => {
	// 			setCardsFlipActive(true);
	// 		}, 500);
	// 		const timeoutIdEnd = setTimeout(() => {
	// 			setCardsFlipActive(false);
	// 			setIsFlipped(false)
	// 		}, 500);
	// 		return () => {
	// 			clearTimeout(timeoutIdStart);
	// 			clearTimeout(timeoutIdEnd);
	// 		};
	// 	}
	// 	console.log(cardsFlipActive);
	// }, []);

	const setPageStatus = (pageStatus: string) => {
		console.log(pageStatus);
		if (pageStatus == "win") {
			setWinActive(true);
		} else if (pageStatus == "lose") {
			setLoseActive(true);
		}
	};

	return (
		<div id={charName} onClick={handleClick} className="scene">
			<div className={isFlipped ? "card flip-active" : "card"}>
				<div className="card-face card-face-front">
					<div className="card-content">
						<img src={imageSrc} alt="card front image" />
						<h1>{NormalizeName}</h1>
					</div>
				</div>
				<div className="card-face card-face-back">
					<div className="card">
						<img src={cardBack} alt="card back image" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
