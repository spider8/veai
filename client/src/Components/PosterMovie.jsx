import React from "react"
import "./PosterMovie.css"

export default function PosterMovie({url}){
    return (
        <img className="poster-movie-container" src={url} alt=""/>
    )
}