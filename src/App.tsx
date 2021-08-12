import React from "react";
import "./App.scss";
import Navbar from "src/components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;
