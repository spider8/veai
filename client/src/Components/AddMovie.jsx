import React, {useState, useCallback} from "react"
import "./AddMovie.css"
import axios from "axios"


export default function AddMovie(){

    const [requestStatus, setRequestStatus] = useState({class: "add-movie-ready", status: "Adicionar"})
    const [name, setName] = useState('');
    const [year, setYear] = useState();

    const submitCb =  useCallback(
        async e => {
            e.preventDefault()
            setRequestStatus({...requestStatus, status: "Carregando"})
            try {
                const result = await axios.post(`http://localhost:80/movie?name=${name}&year=${year}`)
                console.log({result})
                setRequestStatus({class: "add-movie-sucess", status: "Sucesso!"})
            } catch (error) {
                setRequestStatus({class: "add-movie-error", status: ":("})
            }
        },
        [name, year],
    )

    return (
        <div className="add-movie-container">
            <form>
                <input  className="add-movie-input" onChange={ e=> setName(e.target.value)} value={name} name="name"type="text" placeholder="Nome do filme"/>
                <input className="add-movie-input" onChange={e=>setYear(e.target.value)} value={year} name="year" type="number" placeholder="Ano do filme" />
                <button className={requestStatus.class + " add-movie-button"} type="submit" onClick={submitCb}>
                    {requestStatus.status}
                </button>
            </form>
        </div>
    )
}