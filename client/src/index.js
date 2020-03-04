import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MovieInfo from "./Pages/MovieInfo"
import { Router} from "@reach/router";

ReactDOM.render(
  <Router>
    <App path="/" />
    <MovieInfo path="/movie/:id"/>
  </Router>,
  document.getElementById("root")
);
