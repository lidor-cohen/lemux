import "./ResultsPage.css";

import { useNavigate, useParams, useContext } from "react-router";
import { useEffect, useState } from "react";

import PlatformsIcons from "../UIElements/PlatformsIcons/PlatformsIcons";
import RatingStars from "../UIElements/RatingStars/RatingStars";
import Button from "../UIElements/Button/Button";

import { getGameList } from "../../utils/apis/rawgApi";

import ArrowIcon from "../../assets/icons/arrow.svg";

import NotificationContext from "../../contexts/NotificationContext";

function ResultsPage() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { notifyError } = useContext(NotificationContext);

  const navigate = useNavigate();

  useEffect(() => {
    function windowSizeState() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", windowSizeState);
    return () => window.removeEventListener("resize", windowSizeState);
  }, []);

  useEffect(() => {
    getGameList({ search: query })
      .then((res) => res.json())
      .then((json) =>
        setResults(
          json.results.map((item) => ({
            name: item.name,
            id: item.id,
            platforms: item.platforms.map((platform) => platform.platform.slug),
            coverImage: item.background_image,
            rating: item.rating,
          }))
        )
      )
      .catch(notifyError);
  }, [query]);

  return (
    <main className="results-page">
      <h2 className="results__header">Results for: {query}</h2>
      {results.map((result, index) => (
        <div key={index} className="result-item">
          <div className="result-item__left-side">
            <img
              src={result.coverImage}
              alt={result.name + " cover image"}
              className="result-item__image"
            />
            <div className="result-item__text">
              <h3 className="result-item__title">{result.name}</h3>
              {windowWidth < 600 && windowWidth > 400 ? (
                <RatingStars rating={result.rating} size="15px" />
              ) : (
                windowWidth > 400 && (
                  <PlatformsIcons platforms={result.platforms} />
                )
              )}
            </div>
          </div>

          {windowWidth > 600 ? (
            <div className="result-item__right-side">
              <Button
                theme="secondary"
                label="Read More"
                icon={ArrowIcon}
                onClick={() => navigate(`/${result.id}`)}
              />
              <RatingStars rating={result.rating} />
            </div>
          ) : (
            <div className="result-item__right-side">
              <Button
                theme="secondary"
                label=""
                icon={ArrowIcon}
                size={4}
                onClick={() => navigate(`/${result.id}`)}
              />
              <PlatformsIcons platforms={result.platforms} />
            </div>
          )}
        </div>
      ))}
    </main>
  );
}

export default ResultsPage;
