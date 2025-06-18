import './App.css';
import { getPokemonData } from './PokemonLoader.ts';
import PokemonCard from './PokemonCard.tsx';
import PokemonSearch from './PokemonSearch.tsx';

const twentyFiveUrl = "https://pokeapi.co/api/v2/pokemon?limit=400&offset=0"
const pokeData = await getPokemonData(twentyFiveUrl);

const pokemonObjects = pokeData.results.map((pokemon) => pokemon);

function App () {  
  return (
    <>
      <div className="App">
        {pokemonObjects.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon}/> 
        ))}
      </div>
    </>
  );
}

export default App;
