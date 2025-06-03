import "./GamePage.css";

import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";

import Button from "../UIElements/Button/Button";
import RatingStars from "../UIElements/RatingStars/RatingStars";
import RatingCard from "../UIElements/RatingCard/RatingCard";
import PlatformsIcons from "../UIElements/PlatformsIcons/PlatformsIcons";
import TagBox from "../UIElements/TagBox/TagBox";

import NotificationContext from "../../contexts/NotificationContext";

import { STORES } from "../../utils/constants";
import {
  getGameDetails,
  getGameStores,
  getGameTrailers,
} from "../../utils/apis/rawgApi";

function GamePage() {
  const { notifyError } = useContext(NotificationContext);
  const { gameId } = useParams();
  const [game, setGame] = useState({
    gameDetails: {},
    gameStores: [],
    gameTrailers: [],
  });

  useEffect(() => {
    getGameDetails({ id: gameId })
      .then((res) => res.json())
      .then((json) => {
        setGame((prev) => ({
          ...prev,
          gameDetails: {
            name: json.name,
            slug: json.slug,
            description: json.description_raw,
            coverImage: json.background_image,
            metacritic: json.metacritic,
            released: json.released,
            website: json.website,
            rating: json.rating,
            ratings: json.ratings || [],
            platforms: json.platforms.map((item) => item.platform.slug),
            genres: json.genres.map((item) => item.name),
            tags: json.tags.map((item) => item.name),
            publishers: json.publishers.map((item) => item.name),
            esrb: json.esrb_rating?.name,
          },
        }));
      })
      .catch(notifyError);

    getGameStores({ id: gameId })
      .then((res) => res.json())
      .then((json) => {
        setGame((prev) => ({
          ...prev,
          gameStores: json.results.map((item) => ({
            id: item.store_id,
            url: item.url,
          })),
        }));
      })
      .catch(console.error);

    getGameTrailers({ id: gameId })
      .then((res) => res.json())
      .then((json) => {
        setGame((prev) => ({
          ...prev,
          gameTrailers: json.results.map((item) => ({
            preview: item.preview,
            trailer: item.data.max,
          })),
        }));
      })
      .catch(console.error);
  }, [gameId]);

  return (
    <main className="gamepage">
      <div className="gamepage__section gamepage__section_type_hero">
        <div className="gamepage__cover">
          <PlatformsIcons
            platforms={game.gameDetails.platforms}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              backgroundColor: "white",
              padding: "5px",
            }}
          />
          <img
            src={game.gameDetails.coverImage || null}
            alt={game.gameDetails.name + " cover image"}
            loading="lazy"
          />
        </div>
        <div className="gamepage__details">
          <h1 className="gamepage__title">{game.gameDetails.name}</h1>
          <h2 className="gamepage__released">
            Released on {game.gameDetails.released}
          </h2>
          <TagBox tags={game.gameDetails.genres} />
          <p className="gamepage__description">
            {game.gameDetails.description}
          </p>
          <div className="gamepage__getgame">
            {game.gameStores &&
              game.gameStores.map((item, index) => (
                <Button
                  key={index}
                  theme="secondary"
                  icon={STORES[item.id]?.logo}
                  label={`Get game on ${STORES[item.id]?.name}`}
                  onClick={() => window.open(item.url, "_blank")}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="gamepage__section gamepage__section_type_regular">
        <h1 className="gamepage__section-title">
          Rating:
          <RatingStars rating={game.gameDetails.rating} />
          <span className="gamepage__rating-text">
            ({game.gameDetails.rating} / 5)
          </span>
        </h1>
        <div className="gamepage__ratings">
          {Array.isArray(game.gameDetails.ratings) &&
            game.gameDetails.ratings.length > 0 &&
            game.gameDetails.ratings.map((item, index) => (
              <RatingCard key={index} ratingObject={item} />
            ))}
        </div>
      </div>
      {Array.isArray(game.gameTrailers) && game.gameTrailers.length > 0 && (
        <div className="gamepage__section gamepage__section_type_regular">
          <h1 className="gamepage__section-title">Game Trailers</h1>
          <div className="gamepage__trailers-carousel">
            {game.gameTrailers.map((item, index) => (
              <div className="carousel__item" key={index}>
                <video controls width="100%" poster={item.preview}>
                  <source src={item.trailer} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default GamePage;
