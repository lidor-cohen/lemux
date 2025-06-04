import "./Navbar.css";

import { useNavigate } from "react-router";

import SearchBar from "./SearchBar/SearchBar";
import Logo from "../UIElements/Logo/Logo";
import DiceImage from "../../assets/icons/dice.svg";

import { getRandomInt } from "../../utils/helpers";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div
        className="navbar__logo"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            navigate("/");
          }
        }}
        onClick={() => navigate("/")}
      >
        <Logo />
      </div>
      <SearchBar />
      <div
        className="navbar__random-game"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            navigate("/");
          }
        }}
        onClick={() => navigate(`/${getRandomInt(1, 9999)}`)}
      >
        <img src={DiceImage} alt="Random Game Dice" />
      </div>
    </nav>
  );
}

export default Navbar;
