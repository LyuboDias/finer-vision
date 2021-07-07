import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
// import "bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}
