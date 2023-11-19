import { useContext } from "react";
import { gameContextType, gameContext } from "./pages/GamePage";
import Card from "./Card.tsx";
import shuffle from "../functions/shuffle";
import { savedClicked } from "../functions/checkScoreCondition.ts";

interface CardListUIProps {
	currCharList: string[];
	showCardsNumber: number;
}

// We keep this as outer variable to prevent rerender during start of flip card active
let shownCharList: string[] = [];

function CardListUI({ currCharList, showCardsNumber }: CardListUIProps) {
	const { isFlipped } = useContext<gameContextType>(gameContext);

	// IF not flipped, that means we just got started or ending a flip, which in both cases require UI to display a new set of shown cards
	if (!isFlipped) {
		// Find the first char index that is not clicked yet
		const targetIndex = currCharList.findIndex((char) => !savedClicked.includes(char));
		const newCurrCharList = [...currCharList];

		// Switch the first element and the target unclicked index so that the shownCharList will always have one 'unclicked' card when we slice the list
		if (targetIndex !== -1) {
			[newCurrCharList[0], newCurrCharList[targetIndex]] = [newCurrCharList[targetIndex], newCurrCharList[0]];
		}

		/**
		 *  We need to show a certain number of card based on the difficulty (slice the amount of cards we need).
		 *  Then, we shuffle the current list of shown cards so the first element isn't always the 'unclicked' card.
		 */
		shownCharList = newCurrCharList.slice(0, showCardsNumber);
		shownCharList = shuffle({ charList: shownCharList });
	}

	/**
	 * To prevent the regeneration of cards every time there's a state change we have to set the keys as initial indexes instead of using uuidv4()
	 */
	return (
		<>
			{shownCharList.map((char, index) => (
				<Card key={index} charName={char} />
			))}
			{/* <Card charName={"amber"} />
			<Card charName={"paimon"} /> */}
		</>
	);
}

export default CardListUI;
