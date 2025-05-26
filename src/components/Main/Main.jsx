import "./Main.css";

import { getGameList } from "../../utils/apis/rawgApi";

import GameCard from "../GameCard/GameCard";
import Sidebar from "../UIElements/Sidebar/Sidebar";
import { useEffect, useState } from "react";

function Main() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getGameList({ page })
      .then((res) => res.json())
      .then((json) => {
        setGames((prevGames) => [...prevGames, ...json.results]);
      });
  }, [page]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    )
      setPage((prev) => prev + 1);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main">
      <Sidebar />
      <div className="gallery">
        {games.map((item) => (
          <GameCard
            key={item.id}
            id={item.id}
            title={item.name}
            releaseDate={item.released}
            coverImage={item.background_image}
            platforms={item.platforms.map((obj) => obj.platform.slug)}
            rating={item.rating}
            tags={item.genres.map((item) => item.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
