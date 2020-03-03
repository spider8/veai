import React, { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <div className="App-header">
      <img className="App-logo" src="https://fontmeme.com/permalink/200303/0e781453e23c7d4a456b9cfb64e12c05.png" alt="netflix-font" border="0"/>

      </div>
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