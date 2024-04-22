function NavBar({ pokemonList, setPokemonIndex }) {
  const handleClick = (index) => {
    setPokemonIndex(index);
  };
}
return (
  <>
    {pokemonList.map((pokemon, index) => (
      <button key={index} onClick={() => setPokemonIndex(index)}>
        {pokemon.name}
      </button>
    ))}
  </>
);

export default NavBar;
