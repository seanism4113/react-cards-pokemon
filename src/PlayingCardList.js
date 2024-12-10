import React from "react";
import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";
import { formatCard } from "./helpers";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
	const [cards, addCard, removeCards] = useAxios("cards", "https://deckofcardsapi.com/api/deck/new/draw");

	return (
		<div className="PlayingCardList">
			<h3>Pick a card, any card!</h3>
			<div>
				<button onClick={() => addCard(formatCard)}>Add a playing card!</button>
				<button onClick={removeCards}>Remove all cards</button>
			</div>
			<div className="PlayingCardList-card-area">
				{cards.map((cardData) => (
					<PlayingCard key={cardData.id} front={cardData.image} />
				))}
			</div>
		</div>
	);
}

CardTable.defaultProps = {};

export default CardTable;
