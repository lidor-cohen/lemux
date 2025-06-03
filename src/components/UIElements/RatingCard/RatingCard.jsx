import "./RatingCard.css";

function RatingCard({ ratingObject }) {
  const emojiMap = {
    1: "😡",
    2: "😤",
    3: "😐",
    4: "😊",
    5: "🤩",
  };

  const titleMap = {
    1: "Horrible",
    2: "Bad",
    3: "Meh",
    4: "Recommended",
    5: "Exceptional",
  };

  return (
    <div className="rating-card">
      <div className="rating-card__emoji">{emojiMap[ratingObject.id]}</div>
      <h2 className="rating-card__percent">{ratingObject.percent}%</h2>
      <p className="rating-card__text">
        of people voted for this game as{" "}
        <span className="rating-card__text_type_emphasized">
          {titleMap[ratingObject.id]}
        </span>
      </p>
    </div>
  );
}

export default RatingCard;
