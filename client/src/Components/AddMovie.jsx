import React, {useState} from "react"
import "./AddMovie.css"

export default function AddMovie(){
    const [requestStatus, setRequestStatus] = useState({class: "add-movie-ready", status: "Adicionar"})
    return (
        <div className="add-movie-container">
            <form>
                <input  className="add-movie-input" name="name"type="text" placeholder="Nome do filme"/>
                <input className="add-movie-input" name="year" type="number" placeholder="Ano do filme" />
                <button className={requestStatus.class + " add-movie-button"}>
                    {requestStatus.status}
                </button>
            </form>
        </div>
    )
}