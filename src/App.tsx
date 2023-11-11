import { useState, createContext } from "react";
import GamePage from "./components/pages/GamePage.tsx";
import DifficultyPage from "./components/pages/DifficultyPage.tsx";
import WinPage from "./components/pages/WinPage.tsx";
import LosePage from "./components/pages/LosePage.tsx";
import "./styles/App.scss";

export interface pageContextType {
	setWinActive: React.Dispatch<React.SetStateAction<boolean>>;
	setLoseActive: React.Dispatch<React.SetStateAction<boolean>>;
  currScore: number;
	bestScore: number;
	setCurrScore: React.Dispatch<React.SetStateAction<number>>;
	setBestScore: React.Dispatch<React.SetStateAction<number>>;
}
export const pageContext = createContext<pageContextType>({} as pageContextType);

function App() {
	const [winActive, setWinActive] = useState(false);
	const [loseActive, setLoseActive] = useState(false);
  const [currScore, setCurrScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	return (
		<pageContext.Provider value={{ setWinActive, setLoseActive,currScore, bestScore, setCurrScore, setBestScore }}>
			<>{winActive ? <WinPage /> : loseActive ? <LosePage /> : <GamePage />} </>
		</pageContext.Provider>
	);
}

export default App;
