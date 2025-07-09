import React, { useState } from "react";
import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext.tsx";

const TypeForm = () => {
  const [type, setType] = useState("");
  const { filters, setFilters } = useContext(FiltersContext); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFilters = {...filters, type };
    setFilters(newFilters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-form"
        id="type-input"
        placeholder="Search by Pokemon Type..."
        type="text"
        autoComplete="off"
        value={type}
        onChange={(e) => setType(e.target.value)}
      ></input>
      <button className="search-button">Search</button>
      <button
        className="clear-button"
        type="button"
        onClick={() => setType("")}
      >
        Clear Type
      </button>
    </form>
  );
};

export default TypeForm;
