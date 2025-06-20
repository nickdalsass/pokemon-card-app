import React, { useState } from "react";

const TypeForm = ({ onSearch }) => {
  const [type, setType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(type);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-form"
        id="type-input"
        placeholder="Search by Pokemon Type..."
        type="text"
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
