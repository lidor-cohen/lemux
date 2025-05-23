import "./App.css";

import { Route, Routes } from "react-router";

import Main from "../Main/Main";
import GamePage from "../GamePage/GamePage";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <>
      <div className="page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:gameId" element={<GamePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
