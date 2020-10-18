import React from "react";
import "./App.css";
import Header from "./components/header";
import Image from "./components/image";
import RefreshButton from "./components/refreshButton";

const App = () => {
  return (
    <div className="App">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Header />
        <RefreshButton />
      </div>
      <Image />
    </div>
  );
};

export default App;
