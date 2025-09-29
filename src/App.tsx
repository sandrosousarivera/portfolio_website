import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import ArtPortfolio from "./pages/ArtPortfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/art" element={<ArtPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
