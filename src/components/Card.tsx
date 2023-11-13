import { useContext } from "react";
import { charImageMap } from "../functions/filterImage";
import { gameContextType, gameContext } from "./pages/GamePage";
import { pageContextType, pageContext } from "../App";
import shuffle from "../functions/shuffle";
import checkScoreCondition from "../functions/checkCondition";
import "../styles/Card.scss";

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
	const { currCharList, setCurrCharList, setCardsCounter } = useContext<gameContextType>(gameContext);
	const { setWinActive, setLoseActive, currScore, bestScore, setBestScore, setCurrScore } = useContext<pageContextType>(pageContext);
	const imageSrc = charImageMap[charName]; // Finds the img src from the hashmap in filterImage.ts
	charName = normalizeName(charName);

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		const targetName = e.currentTarget.getAttribute("id") || ""; // typescript wants assurance there's no 'null'
		console.log(currCharList)
		const cardsLimit = currCharList.length;
		const pageStatus = checkScoreCondition({ cardsLimit, targetName, currScore, bestScore, setBestScore, setCurrScore });
		setCurrCharList(shuffle({ charList: currCharList })); // shuffle the cards whenever you click on a card
		setPageStatus(pageStatus);
		setCardsCounter((counter: number) => counter + 1)
	};

	const setPageStatus = (pageStatus: string) => {
		if (pageStatus == "win") {
			setWinActive(true);
		} else if (pageStatus == "lose") {
			setLoseActive(true);
		}
	};

	return (
		<div className="main-card-container">
			<h1>{charName}</h1>
			<img id={charName} src={imageSrc} alt="" onClick={handleClick} />
		</div>
	);
}

export default Card;
