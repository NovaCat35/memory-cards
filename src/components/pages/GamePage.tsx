import { useState, useEffect, createContext, useContext } from "react";
import { pageContext } from "../../App";
import Scoreboard from "../Scoreboard.tsx";
import CardCounter from "../CardCounter.tsx";
import CardListUI from "../../components/CardListUI.tsx";
import Title from "../Title.tsx";
import selectCardsAmount from "../../functions/selectCardsAmount.ts";
import "../../styles/GamePlateform.scss";
import backgroundVideo from "../../assets/game_backdrop.mp4";
import backgroundPoster from "../../assets/game_backdrop_poster.jpeg";

export interface gameContextType {
	currCharList: string[];
	cardsCounter: number;
	isFlipped: boolean;
	isClicked: boolean,
	handleCardClick: () => void;
	setCurrCharList: React.Dispatch<React.SetStateAction<string[]>>;
	setCardsCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const gameContext = createContext<gameContextType>({} as gameContextType);

export default function GamePage() {
	const [currCharList, setCurrCharList] = useState<string[]>([]);
	const [cardsCounter, setCardsCounter] = useState<number>(0);
	const [showCardsNumber, setShowCardsNumber] = useState<number>(0);
	const [isFlipped, setIsFlipped] = useState<boolean>(false);
	const [isClicked, setIsClicked] = useState(false);
	const { charList, selectedLevel } = useContext(pageContext);

	// Based on the selected difficulty, we choose a set number of (randomized) cards & set a limit to cards being displayed on UI
	useEffect(() => {
		const { selectedCards, displayCards } = selectCardsAmount({ charList, selectedLevel });
		setCurrCharList(selectedCards);
		setShowCardsNumber(displayCards);
	}, [charList, selectedLevel]);

	const handleCardClick = () => {
		// Prevent multiple clicks when flipping cards.
		// After timeout below isClicked is false again and user can click on the card
		// if (isFlipped || isClicked) {
		// 	console.log('wthki')
		// 	return;
		// }
		setIsClicked(true);
		setIsFlipped(true);

		setTimeout(() => {
			setIsFlipped(false);
			setIsClicked(false);
		}, 500);
	};

	/**
	 * Because Card List UI is regenerated each time we click on a card, we track the card flip on this parent level
	 *	We then wait a few seconds before we flip back to show the new cards
	 */
	// useEffect(() => {
	// 	if (cardsFlipActive) {
	// 		const timeoutId = setTimeout(() => {
	// 			setCardsFlipActive(false);
	// 		}, 1000);
	// 		return () => clearTimeout(timeoutId);
	// 	}
	// }, [cardsFlipActive]);

	return (
		<gameContext.Provider value={{ currCharList, setCurrCharList, isFlipped, isClicked, handleCardClick, cardsCounter, setCardsCounter }}>
			<div className="main-game-container">
				<video muted autoPlay loop playsInline id="backgroundVideo" poster={backgroundPoster}>
					<source src={backgroundVideo} type="video/mp4" />
				</video>
				<header>
					<Title />
					<Scoreboard />
				</header>
				<div className="card-container">
					<CardListUI currCharList={currCharList} showCardsNumber={showCardsNumber} />
				</div>
				<CardCounter cardsCounter={cardsCounter} totalCards={currCharList.length} />
			</div>
		</gameContext.Provider>
	);
}
