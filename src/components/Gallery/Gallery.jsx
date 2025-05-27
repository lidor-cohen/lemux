import "./Gallery.css";

import { useEffect, useState } from "react";
import { getGameList } from "../../utils/apis/rawgApi";

import GameCard from "../GameCard/GameCard";
import Loader from "../UIElements/Loader/Loader";

function Gallery({ sort }) {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGameList({ page, sort })
      .then((res) => res.json())
      .then((json) => {
        setGames((prevGames) => [...prevGames, ...json.results]);
        setLoading(false);
      });
  }, [page]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="gallery-container">
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
      {loading && <Loader />}
    </div>
  );
}

export default Gallery;
