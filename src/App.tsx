import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import ArtPortfolio from "./pages/ArtPortfolio";
import ArtPiece from "./pages/ArtPiece";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/art" element={<ArtPortfolio />} />
        <Route path="/art/gallery/:category" element={<Gallery />} />
        <Route path="/art/piece/:id" element={<ArtPiece />} />
      </Routes>
    </Router>
  );
}

export default App;
