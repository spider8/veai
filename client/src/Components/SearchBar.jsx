import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ submit }) {
  const [value, setValue] = useState("");
  console.log({ submit });
  return (
    <form className="container-form">
      <input
        className="search-bar"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Filme"
      />
      <button
        className="submit-button"
        type="submit"
        onClick={e => {
          e.preventDefault();
          submit(value);
        }}
      >
        Buscar
      </button>
    </form>
  );
}
