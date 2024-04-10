import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/PokemonCard";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div>
      <PokemonCard></PokemonCard>
    </div>
  );
}

export default App;
