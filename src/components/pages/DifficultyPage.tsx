import { useContext } from "react";
import { pageContext } from "../../App";
import Title from "../Title.tsx";
import "../../styles/DifficultyPage.scss";

interface DifficultyPageProps {
	setPageActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function DifficultyPage({ setPageActive }: DifficultyPageProps) {
	const { setSelectedLevel } = useContext(pageContext);
	const handleClick = (e: React.MouseEvent) => {
		const levelSelected = e.currentTarget.getAttribute("id") || "";
		setPageActive(false);
		setSelectedLevel(levelSelected);
	};

	return (
		<div className="main-difficulty-page-container">
			<Title />
			<div className="difficulty-opt-container">
				<button id="easy" onClick={handleClick}>
					Easy
				</button>
				<button id="medium" onClick={handleClick}>
					Medium
				</button>
				<button id="insane" onClick={handleClick}>
					Insane
				</button>
			</div>
		</div>
	);
}

export default DifficultyPage;
