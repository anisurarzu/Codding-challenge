import logo from "./logo.svg";
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { InputText } from "primereact/inputtext";

import { useState } from "react";
import InsertInfo from "./pages/InsertInfo";
import { ToastContainer } from "react-toastify";
import ViewInfo from "./pages/ViewInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="viewInfo" element={<ViewInfo />} />
          <Route path="viewInfo" element={<ViewInfo />} />
          <Route path="/" element={<InsertInfo />} />
        </Routes>
      </Router>

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
