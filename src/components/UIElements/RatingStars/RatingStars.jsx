import "./RatingStars.css";

import RatingStarSVG from "../../../assets/icons/star.svg";

function RatingStars({ rating = 1, size = "20px" }) {
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
          style={{
            width: size,
            height: size,
            aspectRatio: 1,
          }}
        />
      ))}
    </div>
  );
}

export default RatingStars;
