import "../styles/CardsCounter.scss";


type CardCounterProps = {
	cardsCounter: number;
	totalCards: number;
};

function CardCounter({ cardsCounter, totalCards }: CardCounterProps) {
	return (
		<div className='card-counter-container'>
			{cardsCounter} / {totalCards}
		</div>
	);
}

export default CardCounter;
