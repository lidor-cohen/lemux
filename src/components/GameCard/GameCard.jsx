import "./GameCard.css";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import NotFoundImage from "../../assets/images/imagenotfound.jpg";
import ArrowImage from "../../assets/icons/arrow.svg";

import Button from "../UIElements/Button/Button";
import TagBox from "../UIElements/TagBox/TagBox";
import RatingStars from "../UIElements/RatingStars/RatingStars";
import PlatformsIcons from "../UIElements/PlatformsIcons/PlatformsIcons";

function GameCard({
  id,
  title = "Default",
  platforms = [],
  rating,
  releaseDate,
  tags = [],
  coverImage = NotFoundImage,
}) {
  let navigate = useNavigate();

  return (
    <div className="gamecard">
      <img
        className="gamecard__cover"
        src={coverImage}
        alt={`${title} cover image`}
      />
      <div className="gamecard__pnr">
        <div className="gamecard__platforms">
          <PlatformsIcons platforms={platforms} />
        </div>
        <div className="gamecard__rating">
          <RatingStars rating={rating} />
        </div>
      </div>
      <h2 className="gamecard__title">{title}</h2>
      <h3 className="gamecard__subtitle">Released on {releaseDate}</h3>
      <TagBox tags={tags} />
      <div className="gamecard__button">
        <Button
          theme="secondary"
          label="Read More"
          icon={ArrowImage}
          onClick={() => {
            navigate("/" + id);
          }}
        />
      </div>
    </div>
  );
}

export default GameCard;
