import logo from "./logo.svg";
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { InputText } from "primereact/inputtext";

import { createContext, useState } from "react";
import InsertInfo from "./pages/InsertInfo";
import { ToastContainer } from "react-toastify";
import ViewInfo from "./pages/ViewInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateInfo from "./pages/UpdateInfo";
export const AppContext = createContext();

function App() {
  const [editedData, setEditedData] = useState({});
  return (
    <div className="App">
      <AppContext.Provider value={{ editedData, setEditedData }}>
        <Router>
          <Routes>
            <Route path="viewInfo" element={<ViewInfo />} />
            <Route path="updateInfo/:id" element={<UpdateInfo />} />
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

        <ToastContainer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
