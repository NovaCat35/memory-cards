import Card from "./Card.tsx";
import shuffle from "../functions/shuffle";
import {savedClicked} from "../functions/checkCondition.ts";
import { v4 as uuidv4 } from "uuid";

interface CardListUIProps {
	currCharList: string[];
	showCardsNumber: number;
}

function CardListUI({ currCharList, showCardsNumber }: CardListUIProps) {
	// Find the first char index that is not clicked yet
	const targetIndex = currCharList.findIndex((char) => !savedClicked.includes(char));
	const newCurrCharList = [...currCharList];

	// Switch the first element and the target unclicked index so that the shownCharList will always have one 'unclicked' card when we slice the list
	if (targetIndex !== -1) {
		[newCurrCharList[0], newCurrCharList[targetIndex]] = [newCurrCharList[targetIndex], newCurrCharList[0]];
	}

   // We only want to show a certain number of card on UI base on the difficulty.
   // We ALSO shuffle the list so the first element isn't always the 'unclicked' card
	let shownCharList = newCurrCharList.slice(0, showCardsNumber);
   shownCharList = shuffle({charList: shownCharList})


	return (
		<>
			{shownCharList.map((char) => (
				<Card key={uuidv4()} charName={char} />
			))}
		</>
	);
}

export default CardListUI;
