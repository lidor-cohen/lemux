import "./App.css";

import { Route, Routes } from "react-router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Main from "../Main/Main";
import GamePage from "../GamePage/GamePage";
import ResultsPage from "../ResultsPage/ResultsPage";
import Navbar from "../Navbar/Navbar";

import CurrentGalleryContext from "../../contexts/CurrentGalleryContext";
import CurrentFiltersContext from "../../contexts/CurrentFiltersContext";
import NotificationContext from "../../contexts/NotificationContext";

const notifyError = () =>
  toast.error("Error fetching data!", {
    duration: 4000,
    position: "bottom-right",
    style: {
      backgroundColor: "#FCEEEA",
      color: "black",
      border: "1px solid #FB5859",
    },
  });

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
        <NotificationContext.Provider value={{ notifyError }}>
          <CurrentFiltersContext.Provider
            value={{ currentFilters, setCurrentFilters }}
          >
            <CurrentGalleryContext.Provider
              value={{ currentGallery, setCurrentGallery }}
            >
              <Toaster />
              <Navbar />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:gameId" element={<GamePage />} />
                <Route path="/search/:query" element={<ResultsPage />} />
              </Routes>
            </CurrentGalleryContext.Provider>
          </CurrentFiltersContext.Provider>
        </NotificationContext.Provider>
      </div>
    </>
  );
}

export default App;
