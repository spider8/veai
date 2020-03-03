import React from "react"
import "./SearchBar.css"

export default function SearchBar(){
    return (
        <form className="container-form">
            <input className="search-bar" type="text" placeholder="Filme"/>
            <button className="submit-button" type="submit">Buscar</button>
        </form>
    )
}