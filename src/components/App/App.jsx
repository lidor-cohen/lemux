import "./App.css";

import { Route, Routes } from "react-router";

import Main from "../Main/Main";
import GamePage from "../GamePage/GamePage";
import Button from "../UIElements/Button/Button";

function App() {
  return (
    <>
      <h1>INIT</h1>
      <Button />
      <Button theme="secondary" />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:gameId" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
