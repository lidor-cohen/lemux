import "./Gallery.css";

import { useContext, useEffect, useRef, useState } from "react";
import { getGameList } from "../../utils/apis/rawgApi";

import GameCard from "../GameCard/GameCard";
import Loader from "../UIElements/Loader/Loader";

import CurrentGalleryContext from "../../contexts/CurrentGalleryContext";
import CurrentFiltersContext from "../../contexts/CurrentFiltersContext";
import NotificationContext from "../../contexts/NotificationContext";

function Gallery() {
  const { currentGallery, setCurrentGallery } = useContext(
    CurrentGalleryContext
  );
  const { currentFilters } = useContext(CurrentFiltersContext);
  const { notifyError } = useContext(NotificationContext);

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
        })
        .catch(notifyError);
  }, [page, currentFilters, setCurrentGallery]);

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
      genre:
        currentFilters.filters.genre === "None"
          ? ""
          : currentFilters.filters.genre,
    })
      .then((res) => res.json())
      .then((json) => {
        setCurrentGallery(json.results);
        setLoading(false);
      })
      .catch(notifyError);
  }, [currentFilters, setCurrentGallery]);

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="gallery-container">
      <ul className="gallery" ref={galleryRef}>
        {currentGallery.map((item) => (
          <li key={item.id}>
            <GameCard
              id={item.id}
              title={item.name}
              releaseDate={item.released}
              coverImage={item.background_image}
              platforms={item.platforms.map((obj) => obj.platform.slug)}
              rating={item.rating}
              tags={item.genres.map((item) => item.name)}
            />
          </li>
        ))}
      </ul>
      {loading && <Loader />}
    </section>
  );
}

export default Gallery;
