import React, { useState } from "react";
import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext.tsx";

const PokedexNumForm = () => {
  const [pokedexNumber, setPokedexNumber] = useState("");
  const { filters, setFilters } = useContext(FiltersContext); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFilters = {...filters, pokedexNumber };
    setFilters(newFilters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-form"
        id="number-input"
        placeholder="Search by Pokedex Number..."
        type="text"
        autoComplete="off"
        value={pokedexNumber}
        onChange={(event) => setPokedexNumber(event.target.value)}
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
