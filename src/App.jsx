import "./App.css";
import PokemonCard from "./components/PokemonCard";
import React, { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <button
        onClick={() => setPokemonIndex(pokemonIndex - 1)}
        disabled={pokemonIndex === 0}
      >
        Précédent
      </button>

      <button
        onClick={() => setPokemonIndex(pokemonIndex + 1)}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}
export default App;
