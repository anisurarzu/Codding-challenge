import logo from "./logo.svg";
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { InputText } from "primereact/inputtext";

import { useState } from "react";
import InsertInfo from "./pages/InsertInfo";

function App() {
  return (
    <div className="App">
      <InsertInfo />
    </div>
  );
}

export default App;
