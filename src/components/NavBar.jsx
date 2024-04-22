function NavBar({ pokemonList, setPokemonIndex }) {
  const handleClick = (index) => {
    setPokemonIndex(index);
  };
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => setPokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
export default NavBar;
