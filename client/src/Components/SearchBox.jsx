import React from "react"
import "./SearchBox.css"

export default function SearchBox({children}){
    return (
        <div className="search-box-container">
            {children}
        </div>
    )
}