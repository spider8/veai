import React from "react"
import "./StoryCard.css"

export default function StoryCard({children}){
    return (
        <div className="container-story">
            <h1 className="story-title">Encontre informações sobre seu filme favorito e muito mais. Sem limites.</h1>
            <h2>Nossa plataforma é colaborativa. Adicione seu filme também.</h2>
        </div>
    )
}