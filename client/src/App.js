import React, { useState } from 'react';
import './App.css';
//import {useQuery} from "react-query"
import axios from "axios";

//function getMovies(string){}

function App() {
  //const {data, loading, error} = useQuery("movies" )
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <form >
        <input name="search" onChange={e => setSearch(e.target.value)} value={search} />
        <input type="submit" onClick={async e => {
          e.preventDefault();
          const { data } = await axios.get("http://localhost:80/movie?search=" + search);
          setList(data);
        }} />
      </form>
      <ul>
        {list.map(item => <li key={item.id}>{item.overview}</li>)}
      </ul>
    </div>
  );
}

export default App;
