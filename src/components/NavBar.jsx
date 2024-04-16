function NavBar({ pokemonIndex, setPokemonIndex, pokemonListLength }) {
  return (
    <>
      <button
        onClick={() => setPokemonIndex(pokemonIndex - 1)}
        disabled={pokemonIndex === 0}
      >
        Précédent
      </button>
      <button
        onClick={() => setPokemonIndex(pokemonIndex + 1)}
        disabled={pokemonIndex === pokemonListLength - 1}
      >
        Suivant
      </button>
    </>
  );
}
export default NavBar;
