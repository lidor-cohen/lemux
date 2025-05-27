import "./Gallery.css";

import { useContext, useEffect, useRef, useState } from "react";
import { getGameList } from "../../utils/apis/rawgApi";

import GameCard from "../GameCard/GameCard";
import Loader from "../UIElements/Loader/Loader";

import CurrentGalleryContext from "../../contexts/CurrentGalleryContext";
import CurrentFiltersContext from "../../contexts/CurrentFiltersContext";

function Gallery() {
  const { currentGallery, setCurrentGallery } = useContext(
    CurrentGalleryContext
  );

  const { currentFilters, setCurrentFilters } = useContext(
    CurrentFiltersContext
  );

  const galleryRef = useRef();

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (page > 1)
      getGameList({
        page,
        sort:
          currentFilters.ordering === "Descending"
            ? `-${currentFilters.sort}`
            : `${currentFilters.sort}`,
      })
        .then((res) => res.json())
        .then((json) => {
          setCurrentGallery((prevGames) => [...prevGames, ...json.results]);
          setLoading(false);
        });
  }, [page]);

  useEffect(() => {
    setPage(1);
    setCurrentGallery([]);
    setLoading(true);
    getGameList({
      page: 1,
      sort:
        currentFilters.ordering === "Descending"
          ? `-${currentFilters.sort}`
          : `${currentFilters.sort}`,
    })
      .then((res) => res.json())
      .then((json) => {
        setCurrentGallery(json.results);
        setLoading(false);
      });
  }, [currentFilters]);

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
      <div className="gallery" ref={galleryRef}>
        {currentGallery.map((item) => (
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
