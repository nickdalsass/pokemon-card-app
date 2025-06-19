import React from "react";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter, truncatePokemonName } from "./misc/utils.ts";
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

  if (!pokemonData) return <div>Loading...</div>;

  const pokemonName = pokemonData.name;
  const trimmedName = truncatePokemonName(pokemonName);
  const pokemonImageUrl = pokemonData.sprites?.front_default;
  const pokemonTypes = pokemonData.types;
  const pokemonType = pokemonData.types[0]?.type?.name;
  const isFlying = pokemonData.types[1]?.type?.name;
  const cardBackgroundUrl = setCardBackground(pokemonType, isFlying);
  const pokemonStats = pokemonData.stats.map((singleStat) => singleStat);
  const pokemonAbilities = pokemonData.abilities.map(
    (singleAbility) => singleAbility
  );

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "7%",
              width: "900px",
            }}
          >
            <section className="top-small-box" style={{ fontSize: "50px" }}>
              {capitalizeFirstLetter(trimmedName)}
            </section>
            <img
              className="pokeball-image"
              src="/images/pokeball.jpg"
              alt="Pokeball"
            />
            <section className="top-small-box" style={{ fontSize: "60px" }}>
              {pokemonStats[0].base_stat} HP
            </section>
          </div>
          <div className="background-image-container">
            <img
              src={pokemonImageUrl}
              alt="Pokemon Avatar"
              style={{ pointerEvents: "none", width: "50%" }}
            />
          </div>
          <section className="bottom-small-box" style={{ fontSize: "48px" }}>
            {pokemonStats.map((pokeStat) => {
              if (pokeStat?.stat?.name !== "hp") {
                return (
                  <li style={{ listStyleType: "none", padding: "10px" }}>
                    {capitalizeFirstLetter(pokeStat?.stat?.name)}:{"   "}
                    {pokeStat?.base_stat}
                  </li>
                );
              }
            })}
          </section>
          <section className="bottom-small-box">
            <div style={{ fontSize: "55px", padding: "30px" }}>
              Abilities:
              {pokemonAbilities.map((singleAbility) => {
                {
                  return (
                    <span style={{ wordSpacing: "50px", fontSize: "45px" }}>
                      {" "}
                      •{capitalizeFirstLetter(singleAbility?.ability?.name)}
                    </span>
                  );
                }
              })}
            </div>
          </section>
          <section
            className="bottom-small-box"
            style={{ height: "100px", wordSpacing: "50px" }}
          >
            Type:{capitalizeFirstLetter(pokemonType)} Height:
            {pokemonData.height}
          </section>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
