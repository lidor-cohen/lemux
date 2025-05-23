import "./Navbar.css";

import SearchBar from "../UIElements/SearchBar/SearchBar";
import Logo from "../UIElements/Logo/Logo";
import DiceImage from "../../assets/icons/dice.svg";

function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <SearchBar />
      <img
        className="navbar__random-game"
        src={DiceImage}
        alt="Random Game Dice"
      />
    </div>
  );
}

export default Navbar;
