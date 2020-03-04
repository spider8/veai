import React from "react";
import "./SearchBox.css";

export default function SearchBox({ children, onClose, msg }) {
  return (
    <div className="search-box-container">
      <div onClick={onClose} className="search-box-close-button" />
      {msg && <h1 className="search-box-msg">{msg}</h1>}
      {children}
    </div>
  );
}
