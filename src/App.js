import "./App.css";
import { getPokemonData } from "./PokemonLoader.ts";
import PokemonCard from "./PokemonCard.tsx";
import PokemonSearch from "./PokemonSearch.tsx";

const twentyFiveUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const pokeData = await getPokemonData(twentyFiveUrl);

const pokemonObjects = pokeData.results.map((pokemon) => pokemon);

function App() {
  return (
    <>
      <PokemonSearch />
      <div className="App">
        {pokemonObjects.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

export default App;
 