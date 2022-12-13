import logo from "./logo.svg";
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { InputText } from "primereact/inputtext";
import { InputField } from "./components/InputField/Input";
import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";

function App() {
  const [selectedCities1, setSelectedCities1] = useState(null);
  const [value2, setValue2] = useState("");

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <div className="App">
      <div class="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r  p-4 flex items-center justify-center">
        <div class="bg-white py-6 px-10 sm:max-w-md w-full  shadow">
          <div class="sm:text-xl text-xl font-semibold text-center text-sky-600  mb-12 ">
            Please enter your name and pick the Sectors you are currently
            involved in.
          </div>
          <div class="">
            <div>
              <span className="p-float-label">
                <InputText
                  id="username"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                />
                <label htmlFor="username">Username</label>
              </span>
            </div>

            <div>
              <MultiSelect
                value={selectedCities1}
                options={cities}
                onChange={(e) => setSelectedCities1(e.value)}
                optionLabel="name"
                placeholder="Select a City"
                maxSelectedLabels={3}
              />
            </div>

            <div class="flex">
              <input type="checkbox" class="border-sky-400 " value="" />
              <div class="px-3 text-gray-500">I accept terms & conditions</div>
            </div>
            <div class="flex justify-center my-6">
              <button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
