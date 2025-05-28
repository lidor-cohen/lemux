import "./SearchBar.css";

import { useNavigate } from "react-router";

import SearchIcon from "../../../assets/icons/search.svg";

function SearchBar({ placeholder = "Search games..." }) {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${e.target.value}`);
    }
  };

  return (
    <div className="search-bar">
      <img className="search-bar__icon" src={SearchIcon} alt="" />
      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
