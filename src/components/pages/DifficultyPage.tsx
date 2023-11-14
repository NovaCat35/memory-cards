import { useContext } from "react";
import { pageContext } from "../../App";
import Title from "../Title.tsx";
import "../../styles/DifficultyPage.scss";
import paimonSVG from "../../assets/paimon.webp";
import backgroundVideo from "../../assets/game_backdrop.mp4";

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
			<video autoPlay muted loop playsInline id="backgroundVideo">
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<Title />
			<div className="description-container">
				<img className="paimon-svg" src={paimonSVG} alt="paimon svg" />
				<p>
					Ad astra abyssosque! You've been tasked with a special brain-teaser commission. <br />
					The rule is simple: avoid clicking the same card twice. <br />
					<br />
					Ready? Good luck, Traveler.
				</p>
			</div>
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
