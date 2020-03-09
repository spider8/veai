import React, { useState } from "react";
import "./App.css";
import axios from "axios";

import Container from "./Components/Container";
import Header from "./Components/Header";
import StoryCard from "./Components/StoryCard";
import SearchBar from "./Components/SearchBar";
import WrapContent from "./Components/WrapContent";
import FabButton from "./Components/FabButton";
import AddMovie from "./Components/AddMovie";
import SearchBox from "./Components/SearchBox";
import PosterMovie from "./Components/PosterMovie";

function App() {
  const [showStory, setShowStory] = useState(true);
  const [movies, setMovies] = useState([]);
  const [msgSB, setMsgSB] = useState("Vamos procurar um filme! :D");
  const [, setLoading] = useState(false);

  async function SearchMovie(value) {
    try {
      setLoading(true);
      setMsgSB(null);
      const movies = await axios.get(
        `http://localhost:80/movie?search=${value}`
      );
      if (movies.data.length === 0) {
        setMsgSB("Nenhum filme encontrado. Adicione o seu com botão abaixo.")
      }
      setMovies(movies.data);
      setLoading(false);
    } catch (error) {
      setMsgSB("Ops, Algo de errado não está certo. ;(. Tente novamente.");
      setMovies([]);
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header />
      <WrapContent>
        {showStory && <StoryCard />}
        <SearchBar focus={_ => setShowStory(false)} submit={SearchMovie} />
        {!showStory && (
          <SearchBox onClose={_ => setShowStory(true)} msg={msgSB}>
            {movies.map(movie => (
              <PosterMovie
                key={movie.id}
                id={movie.id}
                url={movie.poster_path}
              />
            ))}
          </SearchBox>
        )}
      </WrapContent>
      <FabButton>
        <AddMovie />
      </FabButton>
    </Container>
  );
}

export default App;
