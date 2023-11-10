import { useState, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import fetchCharacters from "../../functions/fetchAPI.ts";
import { filterImage } from "../../functions/filterImage.ts";
import Card from "../Card.tsx";
import Scoreboard from "../Scoreboard.tsx";
import "../../styles/GamePlateform.scss";
import GenshinLogo from "../../assets/genshin_impact_logo.svg";

export interface gameContextType {
	charList: string[];
	setCharList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const gameContext = createContext<gameContextType>({} as gameContextType);

export default function GamePage() {
	const [charList, setCharList] = useState<string[]>([]);
	const [currCharList, setCurrCharList] = useState<string[]>([]);

	useEffect(() => {
		async function fetchData() {
			const fetchedNameList = await fetchCharacters();
			const filteredList = filterImage(fetchedNameList);
			setCharList(filteredList);
		}
		fetchData();
	}, []);

	return (
		<gameContext.Provider value={{ charList, setCharList }}>
			<div className="main-game-container">
				<div className="header">
					<img id='genshin-logo' src={GenshinLogo} alt="" />
					<h1 className='title'>Memory Cards</h1>
				</div>
				<Scoreboard />
				<div className="card-container">
					{/* Populate the following with a bunch of cards base on data receive from fetchAPI */}
					{charList.map((char) => (
						<Card key={uuidv4()} charName={char} />
					))}
				</div>
			</div>
		</gameContext.Provider>
	);
}
