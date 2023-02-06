import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./pages/landing";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";
import { getAllCities } from "./utils/data";

function App() {
  getAllCities();
  return (
    <Provider store={setupStore()}>
      <Landing />
    </Provider>
  );
}

export default App;
