import { useState, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import fetchCharacters from "../../functions/fetchAPI.ts";
import { filterImage } from "../../functions/filterImage.ts";
import Card from "../Card.tsx";
import Scoreboard from "../Scoreboard.tsx";
import "../../styles/GamePlateform.scss";
import GenshinLogo from "../../assets/genshin_impact_logo.svg";
import TCGLogo from "../../assets/tcg_logo.webp";
import TextLogo from "../../assets/text_logo.svg";

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
				<header>
					<div className="main-title-container">
						<div className="logo-container">
							<img id='genshin-logo' src={GenshinLogo} alt="genshin logo" />
							<div className='divide'>X</div>
							<div className="tcg-logo-container">
								<img id='tcg-logo' src={TCGLogo} alt="tcg cards logo"/>
								<img id='text-logo' src={TextLogo} alt="text logo"/>
							</div>
						</div>
						<p>A fan-made project inspired by the TCG card game</p>
					</div>
					<Scoreboard />
				</header>
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
