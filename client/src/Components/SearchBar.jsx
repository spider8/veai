import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ submit, focus, blur }) {
  const [value, setValue] = useState("");
  return (
    <form className="container-form">
      <input
        className="search-bar"
        type="text"
        value={value}
        onFocus={focus}
        onBlur={blur}
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
