import { useState, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import fetchCharacters from "../../functions/fetchAPI.ts";
import { filterImage } from "../../functions/filterImage.ts";
import Card from "../Card.tsx";
import Scoreboard from "../Scoreboard.tsx";
import CardCounter from "../CardCounter.tsx";
import Title from "../Title.tsx";
import "../../styles/GamePlateform.scss";

export interface gameContextType {
	charList: string[];
	cardsCounter: number;
	setCardsCounter: React.Dispatch<React.SetStateAction<number>>;
	setCharList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const gameContext = createContext<gameContextType>({} as gameContextType);

export default function GamePage() {
	const [charList, setCharList] = useState<string[]>([]);
	const [currCharList, setCurrCharList] = useState<string[]>([]);
	const [cardsCounter, setCardsCounter] = useState<number>(0);

	useEffect(() => {
		async function fetchData() {
			const fetchedNameList = await fetchCharacters();
			const filteredList = filterImage(fetchedNameList);
			setCharList(filteredList);
		}
		fetchData();
	}, []);

	return (
		<gameContext.Provider value={{ charList, cardsCounter, setCharList, setCardsCounter }}>
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
				<CardCounter cardsCounter={cardsCounter} totalCards={charList.length}/>
			</div>
		</gameContext.Provider>
	);
}
