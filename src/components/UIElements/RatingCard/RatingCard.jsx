import { useMemo } from "react";
import "./RatingCard.css";
import { useEffect } from "react";

function RatingCard({ ratingObject }) {
  useEffect(() => {
    console.log(ratingObject);
  }, []);

  const emojiMap = useMemo(
    () => ({
      1: "😡",
      2: "😤",
      3: "😐",
      4: "😊",
      5: "🤩",
    }),
    []
  );

  const titleMap = useMemo(
    () => ({
      1: "Horrible",
      2: "Bad",
      3: "Meh",
      4: "Recommended",
      5: "Exceptional",
    }),
    []
  );

  return (
    <div className="rating-card">
      <div className="rating-card__emoji">{emojiMap[ratingObject.id]}</div>
      <h2 className="rating-card__percent">{ratingObject.percent}%</h2>
      <p className="rating-card__text">
        of people voted for this game as{" "}
        <span className="rating-card__text_type_emphasized">
          - {titleMap[ratingObject.id]} -
        </span>
      </p>
    </div>
  );
}

export default RatingCard;
