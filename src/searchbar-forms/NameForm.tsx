import React, { useState } from "react";

const NameForm = ({ onSearch }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-form"
        id="name-input"
        placeholder="Search by Pokemon Name..."
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button className="search-button">Search</button>
      <button
        className="clear-button"
        type="button"
        onClick={() => setName("")}
      >
        Clear Name
      </button>
    </form>
  );
};

export default NameForm;
