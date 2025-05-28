import "./Navbar.css";

import { useNavigate } from "react-router";

import SearchBar from "./SearchBar/SearchBar";
import Logo from "../UIElements/Logo/Logo";
import DiceImage from "../../assets/icons/dice.svg";

import { getRandomInt } from "../../utils/helpers";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div
        className="navbar__logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <Logo />
      </div>
      <SearchBar />
      <img
        className="navbar__random-game"
        src={DiceImage}
        alt="Random Game Dice"
        onClick={() => navigate(`/${getRandomInt(1, 9999)}`)}
      />
    </div>
  );
}

export default Navbar;
