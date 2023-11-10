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

function Card({ charName }: CardProps) {
	const { charList, setCharList } = useContext<gameContextType>(gameContext);
	const { setWinActive, setLoseActive, currScore, bestScore, setBestScore, setCurrScore } = useContext<pageContextType>(pageContext);
	const imageSrc = charImageMap[charName];

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		const targetName = e.currentTarget.getAttribute("id") || ''; // typescript wants assurance there's no 'null'
		const cardsLimit = charList.length;
		const pageStatus = checkScoreCondition({ cardsLimit, targetName, currScore, bestScore, setBestScore, setCurrScore });
		shuffle({ charList, setCharList });
		setPageStatus(pageStatus);
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
