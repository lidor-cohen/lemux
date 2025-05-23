import "./GameCard.css";

import { useNavigate } from "react-router";

import NotFoundImage from "../../assets/images/imagenotfound.jpg";
import ArrowImage from "../../assets/icons/arrow.svg";
import Button from "../UIElements/Button/Button";

function GameCard({
  id,
  title = "Default",
  platforms = [],
  rating,
  releaseDate,
  tags = [],
  backgroundImage = NotFoundImage,
}) {
  let navigate = useNavigate();

  return (
    <div className="gamecard">
      <img
        className="gamecard__cover"
        src={backgroundImage}
        alt={`${title} cover image`}
      />
      <h2 className="gamecard__title">{title}</h2>
      <h3 className="gamecard__subtitle">Released on {releaseDate}</h3>
      <Button
        theme="secondary"
        icon={ArrowImage}
        onClick={() => {
          navigate("/" + id);
        }}
      />
    </div>
  );
}

export default GameCard;
