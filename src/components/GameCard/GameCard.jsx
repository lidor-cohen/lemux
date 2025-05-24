import "./GameCard.css";

import { useNavigate } from "react-router";

import NotFoundImage from "../../assets/images/imagenotfound.jpg";
import ArrowImage from "../../assets/icons/arrow.svg";
import Button from "../UIElements/Button/Button";
import TagBox from "../UIElements/TagBox/TagBox";

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
