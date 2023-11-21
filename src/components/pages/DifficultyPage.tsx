import { useContext } from "react";
import { pageContext } from "../../App";
import Title from "../Title.tsx";
import "../../styles/DifficultyPage.scss";
import paimonSVG from "../../assets/paimon.webp";
import backgroundVideo from "../../assets/game_backdrop.mp4";
import backgroundPoster from "../../assets/game_backdrop_poster.jpeg";

function DifficultyPage() {
	const { setSelectedLevel, setDifficultyActive } = useContext(pageContext);
	const handleClick = (e: React.MouseEvent) => {
		const levelSelected = e.currentTarget.getAttribute("id") || "";
		setDifficultyActive(false);
		setSelectedLevel(levelSelected);
	};

	return (
		<div className="main-difficulty-page-container">
			<video muted autoPlay loop playsInline id="backgroundVideo" poster={backgroundPoster}>
				<source src={backgroundVideo} type="video/mp4" />
			</video>
			<Title />
			<div className="description-container">
				<img className="paimon-svg" src={paimonSVG} alt="paimon svg" />
				<div>
					<p>
						Ad astra abyssosque! You've received a special commission from a mysterious friend. <br />
						The rule is simple: avoid clicking the same card twice. <br />
						<br />
						Ready? Good luck, Traveler.
					</p>
				</div>
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
