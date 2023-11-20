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
import shuffle from "../../functions/shuffle";
import { useSoundContext } from "../../contexts/SoundContext.tsx";

export interface gameContextType {
	currCharList: string[];
	cardsCounter: number;
	isFlipped: boolean;
	shuffleActive: boolean;
	handleCardClick: (pageStatus: string) => void;
	setCurrCharList: React.Dispatch<React.SetStateAction<string[]>>;
	setCardsCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const gameContext = createContext<gameContextType>({} as gameContextType);

export default function GamePage() {
	const [currCharList, setCurrCharList] = useState<string[]>([]);
	const [cardsCounter, setCardsCounter] = useState<number>(0);
	const [showCardsNumber, setShowCardsNumber] = useState<number>(0);
	const [isFlipped, setIsFlipped] = useState<boolean>(false);
	const [shuffleActive, setShuffleActive] = useState<boolean>(false);
	const { charList, selectedLevel } = useContext(pageContext);
	const { currSoundActive, playFlipCard, stopFlipCard } = useSoundContext();

	// Based on the selected difficulty, we choose a set number of (randomized) cards & set a limit to cards being displayed on UI
	useEffect(() => {
		const { selectedCards, displayCards } = selectCardsAmount({ charList, selectedLevel });
		setCurrCharList(selectedCards);
		setShowCardsNumber(displayCards);
	}, [charList, selectedLevel]);

	const flipCardSound = () => {
		if (currSoundActive) {
			stopFlipCard();
			playFlipCard();
		} else {
			stopFlipCard();
		}
	};

	const handleCardClick = (pageStatus: string) => {
		// Prevent multiple clicks when flipping cards.
		if (isFlipped || pageStatus == "win" || pageStatus == "lose") {
			return;
		}
		setShuffleActive(true);
		setIsFlipped(true);
		flipCardSound();

		// Allow card shuffles to happen between intermission of card front & back flip so we don't awkwardly switch image
		// setTimeout(()=> {
		setCurrCharList(shuffle({ charList: currCharList })); // shuffle the cards whenever you click on a card
		// }, 0)

		setTimeout(() => {
			flipCardSound();
			setIsFlipped(false);
		}, 1000);
		setTimeout(() => {
			setShuffleActive(false);
		}, 1500);
	};

	return (
		<gameContext.Provider value={{ shuffleActive, currCharList, setCurrCharList, isFlipped, handleCardClick, cardsCounter, setCardsCounter }}>
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
