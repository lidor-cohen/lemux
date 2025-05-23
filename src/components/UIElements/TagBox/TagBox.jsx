import "./TagBox.css";

import Tag from "../Tag/Tag";

function TagBox({ tags = [] }) {
  return (
    <div className="tagbox">
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </div>
  );
}

export default TagBox;
