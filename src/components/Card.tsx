import {useContext} from "react";
import {charImageMap} from "../functions/filterImage";
import {contextType, charContext} from "./pages/GamePage";
import "../styles/Card.scss";
import shuffle from "../functions/shuffle";

interface CardProps {
	charName: string;
}

function Card({ charName }: CardProps) {
  const {charList, setCharList} = useContext<contextType>(charContext);
	const imageSrc = charImageMap[charName];
  
  const handleClick = () => {
    shuffle({charList, setCharList});
  }

	return (
		<div className="main-card-container">
			<h1>{charName}</h1>
			<img src={imageSrc} alt="" onClick={handleClick}/>
		</div>
	)
}

export default Card;
