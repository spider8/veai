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
import SearchBox from './Components/SearchBox'

function App() {
  const [showStory, setShowStory] = useState(false);
  const [movies, setMovies] = useState([]);

  return (
    <Container>
      <Header />
      <WrapContent>
        {showStory && <StoryCard />}
        <SearchBar />
        {!showStory && <SearchBox>Oi</SearchBox>}
      </WrapContent>
      <FabButton>
        <AddMovie />
      </FabButton>
    </Container>
  );
}

export default App;
