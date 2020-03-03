import React, { useState } from "react";
import "./App.css";
import axios from "axios";

import Container from "./Components/Container";
import Header from "./Components/Header";
import StoryCard from "./Components/StoryCard";
import SearchBar from "./Components/SearchBar";
import WrapContent from "./Components/WrapContent";
import FabButton from "./Components/FabButton";
import AddMovie from "./Components/AddMovie"

function App() {
  return (
    <Container>
      <Header />
      <WrapContent>
        <StoryCard />
        <SearchBar />
      </WrapContent>
      <FabButton>
        <AddMovie/>
      </FabButton>
    </Container>
  );
}

export default App;
