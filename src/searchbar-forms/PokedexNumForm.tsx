import React, { useState } from "react";

const PokedexNumForm = ({ onSearch }) => {
  const [pokedexNumber, setPokedexNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(pokedexNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-form"
        id="number-input"
        placeholder="Search by Pokedex Number..."
        type="text"
        value={pokedexNumber}
        onChange={(e) => setPokedexNumber(e.target.value)}
      ></input>
      <button className="search-button">Search</button>
      <button
        className="clear-button"
        type="button"
        onClick={() => setPokedexNumber("")}
      >
        Clear Number
      </button>
    </form>
  );
};

export default PokedexNumForm;
