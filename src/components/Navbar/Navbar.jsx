import "./Navbar.css";

import SearchBar from "../UIElements/SearchBar/SearchBar";
import Logo from "../UIElements/Logo/Logo";
import DiceImage from "../../assets/icons/dice.svg";
import { useNavigate } from "react-router";

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
      />
    </div>
  );
}

export default Navbar;
