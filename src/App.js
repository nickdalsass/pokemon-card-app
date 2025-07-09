import "./App.css";
import { useContext, useEffect, useMemo, useState } from "react";
import { getPokemonData } from "./misc/PokemonLoader.ts";
import PokemonCard from "./PokemonCard.tsx";
import PokemonSearchBar from "./PokemonSearchBar.tsx";
import { FiltersContext } from "./context/FiltersContext.tsx";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const { filters } = useContext(FiltersContext);

  useEffect(() => {
    const fetchData = async () => {
      const genericData = await getPokemonData(API_URL);
      await genericData.results.reduce((promise, poke) => {
        const {url} = poke;
        return promise.then((result)=>{
         return getPokemonData(url).then(res => {
          setPokemonData((previousPokemon) => [...previousPokemon, res]);
          return[...result,res];
        })
        })
      }, Promise.resolve([]));
    };
    fetchData();
  }, []);

  const filteredPokemon = useMemo(() => {
    const { name="", type="", pokedexNumber="" } = filters || {};
    return pokemonData
      .filter(({name: pokemonName }) => pokemonName.toLowerCase().includes(name.toLowerCase()))
      // TODO: Fix it up
      // .filter(({ types: [{ type: { name: typeA }}, { type: { name: typeB = ''} = {}} = {}] }) => {
      //   console.log('typeA', typeA)
      //   return typeA.toLowerCase().includes(type.toLowerCase()) || typeB.toLowerCase().includes(type.toLowerCase())
      // })
      .filter(({id}) => pokedexNumber === "" || id === parseInt(pokedexNumber))
  }, [pokemonData, filters])

  return (
    <>
      <PokemonSearchBar />
      <div className="App">
        {filteredPokemon.map((pokemon, index) => (
          <PokemonCard key={`pokemon-card-${index}-${Math.random()}`} pokemonData={pokemon} />
        ))}
        {filteredPokemon.length === 0 &&
        <div className="no-results-error">
          Sorry, No Pokemon Results...
        </div>}
      </div>
    </>
  );
};

export default App;
