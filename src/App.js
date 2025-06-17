import './App.css';
import { getPokemonData } from './PokemonLoader.ts';
import PokemonCard from './PokemonCard.tsx';
import PokemonSearch from './PokemonSearch.tsx';

const twentyFiveUrl = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0"
const pokeData = await getPokemonData(twentyFiveUrl);


console.log(pokemonObjects);

function App () {  
  return (
    <>
      <PokemonSearch />
      <div className="App">
        {pokeData.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon}/>
        ))}
      </div>
    </>
  );
}

export default App;
