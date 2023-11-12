import { useState, createContext } from "react";
import GamePage from "./components/pages/GamePage.tsx";
import DifficultyPage from "./components/pages/DifficultyPage.tsx";
import WinPage from "./components/pages/WinPage.tsx";
import LosePage from "./components/pages/LosePage.tsx";
import "./styles/App.scss";

export interface pageContextType {
	currScore: number;
	bestScore: number;
	selectedLevel: string;
	setWinActive: React.Dispatch<React.SetStateAction<boolean>>;
	setLoseActive: React.Dispatch<React.SetStateAction<boolean>>;
	setCurrScore: React.Dispatch<React.SetStateAction<number>>;
	setBestScore: React.Dispatch<React.SetStateAction<number>>;
	setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
}
export const pageContext = createContext<pageContextType>({} as pageContextType);

function App() {
	const [winActive, setWinActive] = useState(false);
	const [loseActive, setLoseActive] = useState(false);
	const [difficultyActive, setDifficultyActive] = useState(true);
	const [selectedLevel, setSelectedLevel] = useState("");
	const [currScore, setCurrScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	return (
		<pageContext.Provider value={{ setWinActive, setLoseActive, currScore, bestScore, setCurrScore, setBestScore, selectedLevel, setSelectedLevel }}>
			<>{difficultyActive ? <DifficultyPage setPageActive={setDifficultyActive} /> : winActive ? <WinPage /> : loseActive ? <LosePage /> : <GamePage />} </>
		</pageContext.Provider>
	);
}

export default App;
