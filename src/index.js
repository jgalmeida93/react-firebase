import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { urls } from "./utils/urlUtils";

ReactDOM.render(
  <Router>
    <Route path={urls.home.path} component={App} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
