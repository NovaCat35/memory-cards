import { useState, createContext, useContext } from "react";
import { pageContext } from "../../App";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card.tsx";
import Scoreboard from "../Scoreboard.tsx";
import CardCounter from "../CardCounter.tsx";
import Title from "../Title.tsx";
import "../../styles/GamePlateform.scss";

export interface gameContextType {
	cardsCounter: number;
	setCardsCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const gameContext = createContext<gameContextType>({} as gameContextType);

export default function GamePage() {
	const [currCharList, setCurrCharList] = useState<string[]>([]);
	const [cardsCounter, setCardsCounter] = useState<number>(0);
	const { charList } = useContext(pageContext);

	return (
		<gameContext.Provider value={{ cardsCounter, setCardsCounter }}>
			<div className="main-game-container">
				<header>
					<Title />
					<Scoreboard />
				</header>
				<div className="card-container">
					{/* Populate the following with a bunch of cards base on data receive from fetchAPI */}
					{charList.map((char) => (
						<Card key={uuidv4()} charName={char} />
					))}
				</div>
				<CardCounter cardsCounter={cardsCounter} totalCards={charList.length} />
			</div>
		</gameContext.Provider>
	);
}
