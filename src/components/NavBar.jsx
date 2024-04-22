function NavBar({ pokemonList, setPokemonIndex }) {
  const handleClick = (index) => {
    if (pokemonList[index].name === "pikachu") {
      // Si Pikachu est sélectionné, ouvrir une alerte
      alert("pika pikachu !!!");
    }
    setPokemonIndex(index);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
export default NavBar;
