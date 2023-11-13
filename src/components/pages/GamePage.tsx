import { useState, useEffect, createContext, useContext } from "react";
import { pageContext } from "../../App";
import Scoreboard from "../Scoreboard.tsx";
import CardCounter from "../CardCounter.tsx";
import CardListUI from "../../components/CardListUI.tsx";
import Title from "../Title.tsx";
import selectCardsAmount from "../../functions/selectCardsAmount.ts";
import "../../styles/GamePlateform.scss";

export interface gameContextType {
	currCharList: string[];
	cardsCounter: number;
	setCurrCharList: React.Dispatch<React.SetStateAction<string[]>>;
	setCardsCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const gameContext = createContext<gameContextType>({} as gameContextType);

export default function GamePage() {
	const [currCharList, setCurrCharList] = useState<string[]>([]);
	const [cardsCounter, setCardsCounter] = useState<number>(0);
	const [showCardsNumber, setShowCardsNumber] = useState<number>(0);
	const { charList, selectedLevel } = useContext(pageContext);

	// Based on the selected difficulty, we choose a set number of (randomized) cards & set a limit to cards being displayed on UI
	useEffect(() => {
		const {selectedCards, displayCards} = selectCardsAmount({ charList, selectedLevel })
		setCurrCharList(selectedCards);
		setShowCardsNumber(displayCards);
	}, [charList, selectedLevel]);

	return (
		<gameContext.Provider value={{ currCharList, setCurrCharList, cardsCounter, setCardsCounter }}>
			<div className="main-game-container">
				<header>
					<Title />
					<Scoreboard />
				</header>
				<div className="card-container">
					<CardListUI currCharList={currCharList} showCardsNumber={showCardsNumber}/>
				</div>
				<CardCounter cardsCounter={cardsCounter} totalCards={currCharList.length} />
			</div>
		</gameContext.Provider>
	);
}
