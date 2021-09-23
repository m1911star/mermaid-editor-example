import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/global.scss";
import Editor from "./components/editor";

function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;
