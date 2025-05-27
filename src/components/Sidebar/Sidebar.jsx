import "./Sidebar.css";

import Tagbox from "../UIElements/TagBox/TagBox";
import CurrentFiltersContext from "../../contexts/CurrentFiltersContext";
import { useContext } from "react";

function Sidebar() {
  const { currentFilters, setCurrentFilters } = useContext(
    CurrentFiltersContext
  );

  function handleSort(index, sort) {
    const sortSlugMap = {
      "A-Z": "name",
      Released: "released",
      "Date Added": "added",
      "Date Created": "created",
      Rating: "rating",
    };

    setCurrentFilters((prev) => ({ ...prev, sort: sortSlugMap[sort] }));
  }

  return (
    <div className="sidebar">
      <h2 className="sidebar__header">Filters</h2>
      <div className="sidebar__item">
        <h3 className="sidebar__item-header">sort</h3>
        <Tagbox
          tags={["A-Z", "Released", "Rating", "Date Added", "Date Created"]}
          action={handleSort}
        />
      </div>
    </div>
  );
}

export default Sidebar;
