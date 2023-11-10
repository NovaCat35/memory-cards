import { useState, createContext } from "react";
import GamePage from "./components/pages/GamePage.tsx";
import WinPage from "./components/pages/WinPage.tsx";
import LosePage from "./components/pages/LosePage.tsx";
import "./styles/App.scss";

export interface pageContextType {
	setWinActive: React.Dispatch<React.SetStateAction<boolean>>;
	setLoseActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export const pageContext = createContext<pageContextType>({} as pageContextType);

function App() {
	const [winActive, setWinActive] = useState(false);
	const [loseActive, setLoseActive] = useState(false);

	return (
		<pageContext.Provider value={{ setWinActive, setLoseActive }}>
			<>{winActive ? <WinPage /> : loseActive ? <LosePage /> : <GamePage />} </>
		</pageContext.Provider>
	);
}

export default App;
