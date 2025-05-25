import "./RatingStars.css";

import RatingStarSVG from "../../../assets/icons/star.svg";
import { useEffect } from "react";

function RatingStars({ rating = 1 }) {
  return (
    <div className="rating-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <img
          className={`rating-star ${
            i > rating ? "rating-star_type_empty" : ""
          }`}
          key={i}
          src={RatingStarSVG}
          alt="Rating Star"
        />
      ))}
    </div>
  );
}

export default RatingStars;
