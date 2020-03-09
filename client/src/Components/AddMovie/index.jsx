import React, { useState } from "react"
import "./AddMovie.css"

import { useQuery } from "react-query"
import { useForm } from "react-hook-form"

async function saveMovie(_, name, year) {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/movie?name=${name}&year=${year}`, { method: "POST" })
    if (!response.ok) {
        throw await response.text();
    }
    return response;
}

export default function AddMovie() {

    const [form, setForm] = useState({})
    const { status, error } = useQuery(form.name && form.year && ['addMovie', form.name, form.year], saveMovie, { retry: false })
    const { register, handleSubmit, } = useForm();

    return (
        <div className="add-movie-container">
            {status === "loading" ? <h1>Carregando...</h1> : status === "error" ? <h1>{error}</h1> :
                <form onSubmit={handleSubmit(form => setForm(form))}>
                    <input className="add-movie-input" name="name" type="text" placeholder="Nome do filme" ref={register()} />
                    <input className="add-movie-input" name="year" type="number" placeholder="Ano do filme" ref={register()} />
                    <button className="add-movie-button " type="submit">
                        Enviar
                    </button>
                </form>}
        </div>
    )
}