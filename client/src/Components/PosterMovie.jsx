import React from "react"
import "./PosterMovie.css"

import { Link } from "@reach/router";


export default function PosterMovie({url, id}){
    return (
        <Link to={"/movie/" + id}>
            <img className="poster-movie-container" src={url} alt=""/>
        </Link>
    )
}