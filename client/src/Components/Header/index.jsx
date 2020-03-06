import React from "react"
import "./Header.css"

export default function Header({children}){
    return (
        <header className="header">
            <img className="logo" src="https://fontmeme.com/permalink/200303/0e781453e23c7d4a456b9cfb64e12c05.png" alt="veai-logo" border="0"/>
        </header>
    )
}