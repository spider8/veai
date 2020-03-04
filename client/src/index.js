import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router} from "@reach/router";

ReactDOM.render(
  <Router>
    <App path="/" />
  </Router>,
  document.getElementById("root")
);
