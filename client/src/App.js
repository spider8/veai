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
  const [msgSB, setMsgSB] = useState("Vamos procurar um filme! :D")

  async function SearchMovie(value) {
    const movies = await axios.get(`http://localhost:80/movie?search=${value}`);
    setMovies(movies.data);
  }


  return (
    <Container>
      <Header />
      <WrapContent>
        {showStory && <StoryCard />}
        <SearchBar focus={_ => setShowStory(false)}  submit={SearchMovie} />
        {!showStory && (
          <SearchBox onClose={_=>setShowStory(true)} msg={msgSB}>
            {movies.map(movie => (
              <PosterMovie key={movie.id} url={movie.poster_path} />
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
