import shuffle from "../functions/shuffle";

interface selectCardsAmountsProps {
	charList: string[];
	selectedLevel: string;
}

// Takes all the filtered fetch API names and selects a targeted card amount base on the difficulty
export default function selectCardsAmounts({ charList, selectedLevel }: selectCardsAmountsProps) {
	let newCharList = shuffle({ charList }); // randomize the name order
   let displayCards = 0;

	switch (selectedLevel) {
		case "easy":
			newCharList = newCharList.slice(0, 5);
         displayCards = 3;
			break;
		case "medium":
			newCharList = newCharList.slice(0, 10);
         displayCards = 5;
			break;
		case "insane":
			newCharList = newCharList.slice();
         displayCards = 6;
			break;
		default:
         newCharList = newCharList.slice(0, 10);
         break;
	}
	return {selectedCards: newCharList, displayCards};
}
