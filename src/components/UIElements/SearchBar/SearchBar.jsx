import "./SearchBar.css";

import SearchIcon from "../../../assets/icons/search.svg";

function SearchBar({ placeholder = "Search games..." }) {
  return (
    <div className="search-bar">
      <img className="search-bar__icon" src={SearchIcon} alt="" />
      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBar;
