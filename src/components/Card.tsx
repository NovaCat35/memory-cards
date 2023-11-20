import { useContext } from "react";
import { charImageMap } from "../functions/filterImage";
import { gameContextType, gameContext } from "./pages/GamePage";
import { pageContextType, pageContext } from "../App";
import { checkScoreCondition } from "../functions/checkScoreCondition";
import { checkWinCondition } from "../functions/checkWinCondition";
import "../styles/Card.scss";
import cardBack from "../assets/glaze_lily_card_back.webp";
import Tilt from "react-parallax-tilt";

interface CardProps {
	charName: string;
}

// For example: arataki-itto becomes Arataki Itto
function normalizeName(charName: string) {
	charName = charName.replace(/-/g, " ");
	let charNameList = charName.split(" ");
	charNameList = charNameList.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
	charName = charNameList.join(" ");
	return charName;
}

function Card({ charName }: CardProps) {
	const { currCharList, isFlipped, handleCardClick, setCardsCounter } = useContext<gameContextType>(gameContext);
	const { setWinActive, setLoseActive, currScore, bestScore, setBestScore, setCurrScore } = useContext<pageContextType>(pageContext);
	const imageSrc = charImageMap[charName]; // Finds the img src from the hashmap in filterImage.ts
	const NormalizeName = normalizeName(charName);
	// const [cardsFlipActive, setCardsFlipActive] = useState<boolean>(false);

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		// Ignore multiple user clicks
		if (!isFlipped) {
			const targetName = e.currentTarget.getAttribute("id") || ""; // typescript wants assurance there's no 'null'
			const cardsLimit = currCharList.length;
			let pageStatus = checkScoreCondition({ targetName, currScore, bestScore, setBestScore, setCurrScore });
			if (checkWinCondition({ cardsLimit, setCurrScore }) == "win") {
				pageStatus = "win";
			}
			setPageStatus(pageStatus);
			setCardsCounter((counter: number) => counter + 1);
			handleCardClick(pageStatus); // handles the card flips
		}
	};

	const setPageStatus = (pageStatus: string) => {
		if (pageStatus == "win") {
			setWinActive(true);
		} else if (pageStatus == "lose") {
			setLoseActive(true);
		}
	};

	return (
		<>
			{isFlipped ? (
				<Tilt glareEnable={false} glareMaxOpacity={0}>
					<div id={charName} onClick={handleClick} className="scene">
						<div className={isFlipped ? "card flip-active" : "card"}>
							<div className="card-face card-face-front">
								<div className="card-content">
									<img src={imageSrc} alt="card front image" />
									<h1>{NormalizeName}</h1>
								</div>
							</div>
							<div className="card-face card-face-back">
								<div className="card">
									<img src={cardBack} alt="card back image" />
								</div>
							</div>
						</div>{" "}
					</div>
				</Tilt>
			) : (
				<Tilt glareEnable={true} glareMaxOpacity={0.3} glareColor="#ffffff" glarePosition="all" glareBorderRadius="20px">
					<div id={charName} onClick={handleClick} className="scene">
						<div className={isFlipped ? "card flip-active" : "card"}>
							<div className="card-face card-face-front">
								<div className="card-content">
									<img src={imageSrc} alt="card front image" />
									<h1>{NormalizeName}</h1>
								</div>
							</div>
							<div className="card-face card-face-back">
								<div className="card">
									<img src={cardBack} alt="card back image" />
								</div>
							</div>
						</div>{" "}
					</div>
				</Tilt>
			)}
		</>
	);
}

export default Card;
