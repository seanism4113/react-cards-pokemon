import React from "react";
import useAxios from "./hooks/useAxios";
import PokemonSelect from "./PokemonSelect";
import { v4 as uuid } from "uuid";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
	const [pokemon, addPokemon, removePokemon] = useAxios("pokemon", "https://pokeapi.co/api/v2/pokemon/");

	return (
		<div className="PokeDex">
			<div className="PokeDex-buttons">
				<h3>Please select your pokemon:</h3>
				<PokemonSelect add={addPokemon} removePokemon={removePokemon} />
			</div>
			<div className="PokeDex-card-area">
				{pokemon.map((cardData) => (
					<PokemonCard key={`${cardData.id}${uuid()}`} {...cardData} />
				))}
			</div>
		</div>
	);
}

export default PokeDex;
