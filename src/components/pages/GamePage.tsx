import { useState, useEffect, createContext, useContext } from "react";
import { pageContext } from "../../App";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card.tsx";
import Scoreboard from "../Scoreboard.tsx";
import CardCounter from "../CardCounter.tsx";
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
	const [showNumber, setShowNumber] = useState<number>(0);
	const { charList, selectedLevel } = useContext(pageContext);

	// Select a number of cards base on difficulty (randomized)
	useEffect(() => {
		const {selectedCards, displayCards} = selectCardsAmount({ charList, selectedLevel })
		setCurrCharList(selectedCards);
		setShowNumber(displayCards);
	}, [charList, selectedLevel]);

	return (
		<gameContext.Provider value={{ currCharList, setCurrCharList, cardsCounter, setCardsCounter }}>
			<div className="main-game-container">
				<header>
					<Title />
					<Scoreboard />
				</header>
				<div className="card-container">
					{/* Populate the following with a bunch of cards base on data receive from fetchAPI */}
					{currCharList.slice(0,showNumber).map((char) => (
						<Card key={uuidv4()} charName={char} />
					))}
				</div>
				<CardCounter cardsCounter={cardsCounter} totalCards={currCharList.length} />
			</div>
		</gameContext.Provider>
	);
}
