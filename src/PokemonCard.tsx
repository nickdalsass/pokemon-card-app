import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "./misc/utils.ts";
import { setCardBackground } from "./misc/utils.ts";

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemonResponse = async () => {
    const pokemonResponse = await fetch(pokemon.url);
    const data = await pokemonResponse.json();
    return data;
  };

  useEffect(() => {
    fetchPokemonResponse()
      .then((data) => setPokemonData(data))
      .catch(console.error);
  }, [pokemon]);

  if (!pokemonData) return console.log("Loading Pokemon...");

  const pokemonName = pokemonData.name;
  const pokemonImageUrl = pokemonData.sprites?.front_default;
  const pokemonType = pokemonData.types[0]?.type?.name;
  const cardBackgroundUrl = setCardBackground(pokemonType);
  const pokemonHP = pokemonData.stats[0].base_stat;
  //const pokemonBaseStats

  return (
    <>
      <div
        className="pokemon-card"
        style={{
          backgroundImage: `url('${cardBackgroundUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pokemon-card-container">
          <div style={{ display:'flex', justifyContent:"center", alignSelf:'center', gap:'7%', width:"900px" }}>
            <p className="card-small-box">{capitalizeFirstLetter(pokemonName)}</p>
						<img className="pokeball-image"src="/images/pokeball.jpg" alt="Pokeball"/>
            <p className="card-small-box">{pokemonHP} HP</p>
          </div>
          <div className="background-image-container">
            <img
              src={pokemonImageUrl}
              alt="Pokemon Avatar"
              style={{ pointerEvents: "none", width: "50%" }}
            />
          </div>
          <p
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "10px",
              border: "2px solid black",
              backgroundColor: "gold",
              fontFamily: "fantasy",
              fontSize: "40px",
              color: "black",
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
