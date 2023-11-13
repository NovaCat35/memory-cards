import { useState, useEffect, createContext } from "react";
import fetchCharacters from "./functions/fetchAPI.ts";
import { filterImage } from "./functions/filterImage.ts";
import GamePage from "./components/pages/GamePage.tsx";
import DifficultyPage from "./components/pages/DifficultyPage.tsx";
import WinPage from "./components/pages/WinPage.tsx";
import LosePage from "./components/pages/LosePage.tsx";

import "./styles/App.scss";

export interface pageContextType {
	charList: string[];
	currScore: number;
	bestScore: number;
	selectedLevel: string;
	setCharList: React.Dispatch<React.SetStateAction<string[]>>;
	setWinActive: React.Dispatch<React.SetStateAction<boolean>>;
	setLoseActive: React.Dispatch<React.SetStateAction<boolean>>;
	setCurrScore: React.Dispatch<React.SetStateAction<number>>;
	setBestScore: React.Dispatch<React.SetStateAction<number>>;
	setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
}
export const pageContext = createContext<pageContextType>({} as pageContextType);

function App() {
	const [charList, setCharList] = useState<string[]>([]);
	const [winActive, setWinActive] = useState(false);
	const [loseActive, setLoseActive] = useState(false);
	const [difficultyActive, setDifficultyActive] = useState(true);
	const [selectedLevel, setSelectedLevel] = useState("");
	const [currScore, setCurrScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	useEffect(() => {
		async function fetchData() {
			const fetchedNameList = await fetchCharacters(); // raw API data contains names without official released img
			const filteredList = filterImage(fetchedNameList);
			setCharList(filteredList);
		}
		fetchData();
	}, []);

	return (
		<pageContext.Provider value={{ charList, setCharList, setWinActive, setLoseActive, currScore, bestScore, setCurrScore, setBestScore, selectedLevel, setSelectedLevel }}>
			<>{difficultyActive ? <DifficultyPage setPageActive={setDifficultyActive} /> : winActive ? <WinPage /> : loseActive ? <LosePage /> : <GamePage />} </>
		</pageContext.Provider>
	);
}

export default App;
