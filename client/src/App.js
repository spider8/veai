import React, { useState } from 'react';
import './App.css';
import axios from "axios";

import Container from "./Components/Container"
import Header from "./Components/Header"
import StoryCard from "./Components/StoryCard"
import SearchBar from "./Components/SearchBar"
import WrapContent from './Components/WrapContent';

function App() {
  return (
    <Container>
      <Header />
      <WrapContent>
        <StoryCard />
        <SearchBar />
      </WrapContent>


      {/* <form >
          <input name="search" onChange={e => setSearch(e.target.value)} value={search} />
          <input type="submit" onClick={async e => {
            e.preventDefault();
            const { data } = await axios.get("http://localhost:80/movie?search=" + search);
            setList(data);
          }} />
        </form>
        <ul>
          {list.map(item => <li key={item.id}>{item.overview}</li>)}
        </ul> */}
    </Container>
  );
}

export default App;