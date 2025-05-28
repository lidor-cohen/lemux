import "./ResultsPage.css";

import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import PlatformsIcons from "../UIElements/PlatformsIcons/PlatformsIcons";
import RatingStars from "../UIElements/RatingStars/RatingStars";
import Button from "../UIElements/Button/Button";

import { getGameList } from "../../utils/apis/rawgApi";

import ArrowIcon from "../../assets/icons/arrow.svg";

function ResultsPage() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

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
      );
  }, [query]);

  return (
    <div className="results-page">
      <h1 className="results__header">Results for: {query}</h1>
      {results.map((result) => (
        <div className="result-item">
          <div className="result-item__left-side">
            <img
              src={result.coverImage}
              alt={result.name + " cover image"}
              className="result-item__image"
            />
            <div className="result-item__text">
              <h3 className="result-item__title">{result.name}</h3>
              <PlatformsIcons platforms={result.platforms} />
            </div>
          </div>

          <div className="result-item__right-side">
            <Button
              theme="secondary"
              label="Read More"
              icon={ArrowIcon}
              onClick={() => navigate(`/${result.id}`)}
            />
            <RatingStars rating={result.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultsPage;
