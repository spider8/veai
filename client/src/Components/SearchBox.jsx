import React from "react";
import "./SearchBox.css";
import { MdClose } from "react-icons/md";


export default function SearchBox({ children, onClose, msg }) {
  return (
    <div className="search-box-container">
      <div onClick={onClose} className="search-box-close-button">
          <MdClose color="white" size="2rem"/>
      </div>
      {msg && <h1 className="search-box-msg">{msg}</h1>}
      {children}
    </div>
  );
}
