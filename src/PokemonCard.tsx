import React, { memo } from "react";
import { capitalizeFirstLetter, truncatePokemonName } from "./misc/utils.ts";
import { setCardBackground } from "./misc/utils.ts";

const PokemonCard = ({ pokemonData }) => {
  const pokemonName = pokemonData.name;
  const trimmedName = truncatePokemonName(pokemonName);
  const pokemonSpriteUrl = pokemonData.sprites?.front_default;
  const pokemonDefaultType = pokemonData.types[0]?.type?.name;
  const isFlying = pokemonData.types[1]?.type?.name;
  const cardBackgroundUrl = setCardBackground(pokemonDefaultType, isFlying);
  const pokemonStats = pokemonData.stats.map((singleStat) => singleStat);
  const pokemonHP = pokemonStats[0].base_stat;
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
          <div className="pokemon-card-header">
            <section className="top-small-box" style={{ fontSize: "50px" }}>
              {capitalizeFirstLetter(trimmedName)}
            </section>
            <img
              className="pokeball-image"
              src="/images/pokeball.jpg"
              alt="Pokeball"
            />
            <section className="top-small-box" style={{ fontSize: "60px" }}>
              {pokemonHP} HP
            </section>
          </div>
          <div
            className="background-image-container"
            style={{ backgroundImage: 'url("/images/pokeforest.jpg")' }}
          >
            <img
              src={pokemonSpriteUrl}
              alt="Pokemon Avatar"
              style={{ pointerEvents: "none", width: "50%" }}
            />
          </div>
          <section className="bottom-small-box" style={{ fontSize: "48px" }}>
            {pokemonStats.map((pokeStat) => {
              return (
                pokeStat?.stat?.name !== "hp" && (
                  <span style={{ padding: "10px" }}>
                    {capitalizeFirstLetter(pokeStat?.stat?.name)}:{"   "}
                    {pokeStat?.base_stat}
                  </span>
                )
              );
            })}
          </section>
          <section className="bottom-small-box">
            <div style={{ fontSize: "55px", padding: "30px" }}>
              Abilities:
              {pokemonAbilities.map((singleAbility) => {
                return (
                  <span style={{ wordSpacing: "50px", fontSize: "45px" }}>
                    {" "}
                    &bull;{capitalizeFirstLetter(singleAbility?.ability?.name)}
                  </span>
                );
              })}
            </div>
          </section>
          <section
            className="bottom-small-box"
            style={{ height: "100px", wordSpacing: "50px" }}
          >
            Base-Type:{capitalizeFirstLetter(pokemonDefaultType)} Height:
            {pokemonData.height}
          </section>
        </div>
      </div>
    </>
  );
};

export default memo(PokemonCard);
