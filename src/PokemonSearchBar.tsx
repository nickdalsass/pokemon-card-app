import React from "react";
import NameForm from "./searchbar-forms/NameForm.tsx";
import PokedexNumForm from "./searchbar-forms/PokedexNumForm.tsx";
import TypeForm from "./searchbar-forms/TypeForm.tsx";

const PokemonSearchBar = ({ onNameSearch, onTypeSearch, onNumberSearch }) => {
  return (
    <div className="search-bar">
      <div className="page-title">
        <img
          src="/images/pokemon_logo.jpg"
          alt="Pokemon Logo"
          style={{ position: "relative", width: "225px" }}
        />
      </div>
      <div className="search-container">
        <img
          src="/images/pikachu_favicon.gif"
          alt="Dancing Pikachu"
          style={{ position: "relative", width: "100px" }}
        />
        <NameForm onSearch={onNameSearch} />
        <TypeForm onSearch={onTypeSearch} />
        <PokedexNumForm onSearch={onNumberSearch} />
        <img
          src="/images/squirtle.gif"
          alt="Dancing Squirtle"
          style={{ position: "relative", width: "100px" }}
        />
      </div>
    </div>
  );
};

export default PokemonSearchBar;
