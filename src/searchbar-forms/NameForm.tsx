import React, { useState } from "react";
import { FiltersContext } from "../context/FiltersContext.tsx";
import { useContext } from "react";

const NameForm = () => {
  const [name, setName] = useState("");
  const { filters, setFilters } = useContext(FiltersContext); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFilters = {...filters, name };
    setFilters(newFilters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-form"
        id="name-input"
        placeholder="Search by Pokemon Name..."
        type="text"
        value={name}
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button className="search-button">Search</button>
      <button
        className="clear-button"
        onClick={() => setName("")}
      >
        Clear Name
      </button>
    </form>
  );
};

export default NameForm;
