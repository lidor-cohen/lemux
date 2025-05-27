import "./TagBox.css";

import { useState } from "react";

import Tag from "../Tag/Tag";

function TagBox({ tags = [], action, initialActiveIndex = 0, onTagChange }) {
  const [activeTagIndex, setActiveTagIndex] = useState(initialActiveIndex);

  const handleTagAction = (index, tag) => {
    setActiveTagIndex(index);
    action?.(index, tag);
    onTagChange?.(index, tag);
  };

  return (
    <div className="tagbox">
      {tags.map((tag, index) => (
        <Tag
          key={`${tag}-${index}`}
          label={tag}
          active={action && index === activeTagIndex}
          action={action ? () => handleTagAction(index, tag) : undefined}
        />
      ))}
    </div>
  );
}

export default TagBox;
