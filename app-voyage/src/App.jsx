import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import SearchBar from "./components/Search/SearchBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
    </div>
  );
};

export default App;
