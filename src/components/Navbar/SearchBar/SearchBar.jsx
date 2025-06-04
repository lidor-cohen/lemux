import "./SearchBar.css";

import { useRef } from "react";
import { useNavigate } from "react-router";

import SearchIcon from "../../../assets/icons/search.svg";

function SearchBar({ placeholder = "Search games..." }) {
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputRef.current.value}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <img className="search-bar__icon" src={SearchIcon} alt="" />
      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
    </form>
  );
}

export default SearchBar;
