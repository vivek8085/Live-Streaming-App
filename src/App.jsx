import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";
import "./App.css";
// import "./index.css";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
