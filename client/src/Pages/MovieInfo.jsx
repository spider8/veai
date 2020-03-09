import React from "react";
import "./MovieInfo.css";
import { useQuery } from "react-query";
import axios from "axios";
import { MdArrowBack } from "react-icons/md";
import { navigate } from "@reach/router"

export default function MovieInfo({ id }) {
  const { status, data } = useQuery("movieDetail", async _ => {
    return await axios.get("http://localhost:80/movie/" + id);
  });

  const poster_path = data && data.data && data.data.poster_path;
  const name = data && data.data && data.data.name;
  const overview = data && data.data && data.data.overview;

  const year = data && data.data && data.data.year;
  const date = new Date(year);

  return (
    <div className="movie-info-container">
      <div className="movie-info-back-button" onClick={_ => navigate("/")}>
        <MdArrowBack size="4rem"/>
      </div>
      {status === "success" ? (
        <div className="movie-info-wrap">
          <img className="movie-info-poster" src={poster_path} alt="Poster" />
          <div className="movie-info-text-wrap">
            <h1 className="movie-info-name">{name}</h1>
            <h2 className="movie-info-detail">Sinopse</h2>
            <p className="movie-info-overview">{overview}</p>
            <h3 className="movie-info-year">
              Lançamento: {date.toLocaleDateString("pt-br")}
            </h3>
          </div>
        </div>
      ) : status === "loading" ? (
        "Carregando..."
      ) : (
        "Erro"
      )}
    </div>
  );
}
