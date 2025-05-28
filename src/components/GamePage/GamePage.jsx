import "./GamePage.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Button from "../UIElements/Button/Button";
import RatingStars from "../UIElements/RatingStars/RatingStars";

import { stores } from "../../utils/constants";
import {
  getGameDetails,
  getGameStores,
  getGameTrailers,
} from "../../utils/apis/rawgApi";
import RatingCard from "../UIElements/RatingCard/RatingCard";

function GamePage() {
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
            platforms: json.platforms.map((item) => item.slug),
            genres: json.genres.map((item) => item.name),
            tags: json.tags.map((item) => item.name),
            publishers: json.publishers.map((item) => item.name),
            esrb: json.esrb_rating?.name,
          },
        }));
      })
      .catch(console.error);

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
          gameTrailers: json.results.map((item) => item.data.max),
        }));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="gamepage">
      <section className="gamepage__section gamepage__section_type_hero">
        <div className="gamepage__cover">
          <img
            src={game.gameDetails.coverImage || null}
            alt={game.gameDetails.name + " cover image"}
          />
        </div>
        <div className="gamepage__details">
          <h1 className="gamepage__title">{game.gameDetails.name}</h1>
          <p className="gamepage__description">
            {game.gameDetails.description}
          </p>
          <div className="gamepage__getgame">
            {game.gameStores &&
              game.gameStores.map((item) => (
                <Button
                  theme="secondary"
                  icon={stores[item.id]?.logo}
                  label={`Get game on ${stores[item.id]?.name}`}
                  onClick={() => window.open(item.url, "_blank")}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="gamepage__section gamepage__section_type_regular">
        <h1 className="gamepage__section-title">
          Rating:
          <RatingStars rating={game.gameDetails.rating} />(
          {game.gameDetails.rating} / 5)
        </h1>
        <div className="gamepage__ratings">
          {Array.isArray(game.gameDetails.ratings) &&
            game.gameDetails.ratings.length > 0 &&
            game.gameDetails.ratings.map((item) => (
              <RatingCard ratingObject={item} />
            ))}
        </div>
      </section>
    </div>
  );
}

export default GamePage;
