import "./Sidebar.css";

import { useContext, useEffect, useState } from "react";

import AscendingIcon from "../../assets/icons/ascending.svg";
import DescendingIcon from "../../assets/icons/descending.svg";

import Button from "../UIElements/Button/Button";
import Tagbox from "../UIElements/TagBox/TagBox";

import { getGenreList } from "../../utils/apis/rawgApi";

import CurrentFiltersContext from "../../contexts/CurrentFiltersContext";

function Sidebar() {
  const { currentFilters, setCurrentFilters } = useContext(
    CurrentFiltersContext
  );

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenreList()
      .then((res) => res.json())
      .then((json) => {
        setGenres(
          json.results.map((item) => ({ name: item.name, slug: item.slug }))
        );
      });
  }, []);

  function handleSort(index, sort) {
    const sortSlugMap = {
      "A-Z": "name",
      Released: "released",
      Relevant: "added",
      "Date Created": "created",
      Rating: "rating",
    };

    setCurrentFilters((prev) => ({ ...prev, sort: sortSlugMap[sort] }));
  }

  function handleOrdering() {
    setCurrentFilters((prev) => ({
      ...prev,
      ordering: prev.ordering === "Ascending" ? "Descending" : "Ascending",
    }));
  }

  function handleFilterGenre(index, label) {
    setCurrentFilters((prev) => ({
      ...prev,
      filters: {
        genre: genres.find((g) => g.name === label)?.slug,
      },
    }));
  }

  return (
    <div className="sidebar">
      <h2 className="sidebar__header">Filters</h2>
      <div className="sidebar__item sidebar__item_type_inline">
        <h3 className="sidebar__item-header">ordering: </h3>
        <Button
          theme="secondary"
          label=""
          icon={
            currentFilters.ordering === "Ascending"
              ? AscendingIcon
              : DescendingIcon
          }
          onClick={handleOrdering}
          style={{
            paddingBlock: 5,
            paddingInline: 30,
            width: "10px",
            justifyContent: "center",
          }}
        />
      </div>

      <div className="sidebar__item">
        <h3 className="sidebar__item-header">sort</h3>
        <Tagbox
          tags={["Relevant", "A-Z", "Released", "Rating", "Date Created"]}
          action={handleSort}
        />
      </div>

      <div className="sidebar__item">
        <h3 className="sidebar__item-header">genres</h3>
        <Tagbox
          tags={["None", ...genres.map((item) => item.name)]}
          action={handleFilterGenre}
        />
      </div>
    </div>
  );
}

export default Sidebar;
