import "./App.css";

import { Route, Routes } from "react-router";
import { useState } from "react";

import Main from "../Main/Main";
import GamePage from "../GamePage/GamePage";
import ResultsPage from "../ResultsPage/ResultsPage";
import Navbar from "../Navbar/Navbar";

import CurrentGalleryContext from "../../contexts/CurrentGalleryContext";
import CurrentFiltersContext from "../../contexts/CurrentFiltersContext";

function App() {
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentFilters, setCurrentFilters] = useState({
    sort: "added",
    ordering: "Descending",
    filters: {
      genre: "None",
    },
  });

  return (
    <>
      <div className="page">
        <CurrentFiltersContext.Provider
          value={{ currentFilters, setCurrentFilters }}
        >
          <CurrentGalleryContext.Provider
            value={{ currentGallery, setCurrentGallery }}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/:gameId" element={<GamePage />} />
              <Route path="/search/:query" element={<ResultsPage />} />
            </Routes>
          </CurrentGalleryContext.Provider>
        </CurrentFiltersContext.Provider>
      </div>
    </>
  );
}

export default App;
