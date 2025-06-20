import "./App.css";
import { useState, useEffect } from "react";
import { getPokemonData } from "./misc/PokemonLoader.ts";
import PokemonCard from "./PokemonCard.tsx";
import PokemonSearchBar from "./PokemonSearchBar.tsx";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const genericData = await getPokemonData(API_URL);
      const detailedData = await Promise.all(
        genericData.results.map((pokemon) => {
          return getPokemonData(pokemon.url);
        })
      );
      setPokemonData(detailedData); // ALL POKEMON DATA
      setFilteredPokemon(detailedData); //No initial filter on that data
    };
    fetchData();
  }, []);

  const handleNameSearch = (name) => {
    const filtered = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  const handleTypeSearch = (type) => {
    const filtered = pokemonData.filter((pokemon) =>
      pokemon.types.some((pokeType) =>
        pokeType.type.name.toLowerCase().includes(type.toLowerCase())
      )
    );
    setFilteredPokemon(filtered);
  };

  const handleNumberSearch = (number) => {
    const filtered = pokemonData.filter(
      (pokemon) => pokemon.id === parseInt(number)
    );
    setFilteredPokemon(filtered);
  };

  return (
    <>
      <PokemonSearchBar
        onNameSearch={handleNameSearch}
        onTypeSearch={handleTypeSearch}
        onNumberSearch={handleNumberSearch}
      />
      <div className="App">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonData={pokemon} />
        ))}
        {filteredPokemon.length === 0 &&
        <div
          style={{ fontFamily:'Georgia, Times New Roman, Times, serif', marginLeft:'40%', marginTop:'20%'}}
        >
          Sorry, No Pokemon Results...
        </div>}
      </div>
    </>
  );
}

export default App;
