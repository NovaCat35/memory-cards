import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import fetchCharacters from "../../functions/fetchAPI.ts";
import Card from '../Card.tsx';

export default function GamePage() {
	const [charList, setCharList] = useState([]);

	useEffect(() => {
		async function fetchData() {
      const getChar = await fetchCharacters()
      console.log(getChar);
			setCharList(getChar);
		}
		fetchData();
	}, []);

	return (
		<div className="main-game-container">
			<h1>Memory Cards</h1>
			<div className="card-container">
				{/* Populate the following with a bunch of cards base on data receive from fetchAPI */}
				{charList.map((char) => (
					<Card key={uuidv4()} charName={char}/>
				))}
			</div>
		</div>
	);
}
