import logo from "./logo.svg";
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { InputText } from "primereact/inputtext";

import { useState } from "react";
import InsertInfo from "./pages/InsertInfo";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <InsertInfo />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
