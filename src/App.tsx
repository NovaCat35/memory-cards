import { useState, useEffect, createContext } from "react";
import fetchCharacters from "./functions/fetchAPI.ts";
import { filterImage } from "./functions/filterImage.ts";
import LoadingPage from "./components/pages/LoadingPage.tsx";
import GamePage from "./components/pages/GamePage.tsx";
import DifficultyPage from "./components/pages/DifficultyPage.tsx";
import WinPage from "./components/pages/WinPage.tsx";
import LosePage from "./components/pages/LosePage.tsx";
import SoundBtn from "./components/SoundBtn.tsx";
import { SoundProvider } from "./contexts/SoundContext.tsx";
import "./styles/App.scss";

export interface pageContextType {
	charList: string[];
	currScore: number;
	bestScore: number;
	selectedLevel: string;
	setCharList: React.Dispatch<React.SetStateAction<string[]>>;
	setWinActive: React.Dispatch<React.SetStateAction<boolean>>;
	setLoseActive: React.Dispatch<React.SetStateAction<boolean>>;
	setDifficultyActive: React.Dispatch<React.SetStateAction<boolean>>;
	setCurrScore: React.Dispatch<React.SetStateAction<number>>;
	setBestScore: React.Dispatch<React.SetStateAction<number>>;
	setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
}
export const pageContext = createContext<pageContextType>({} as pageContextType);

function App() {
	const [charList, setCharList] = useState<string[]>([]);
	const [winActive, setWinActive] = useState(false);
	const [loseActive, setLoseActive] = useState(false);
	const [LoadingPageActive, setLoadingPageActive] = useState(true);
	const [difficultyActive, setDifficultyActive] = useState(false);
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
		<SoundProvider>
			<pageContext.Provider value={{ charList, setCharList, setDifficultyActive, setWinActive, setLoseActive, currScore, bestScore, setCurrScore, setBestScore, selectedLevel, setSelectedLevel }}>
				<>
					{LoadingPageActive ? <LoadingPage setPageActive={setLoadingPageActive} /> : difficultyActive ? <DifficultyPage /> : winActive ? <WinPage /> : loseActive ? <LosePage /> : <GamePage />}
					<SoundBtn />
				</>
			</pageContext.Provider>
		</SoundProvider>
	);
}

export default App;
