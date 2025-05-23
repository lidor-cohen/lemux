import "./Button.css";

import useSound from "use-sound";

import clickSound from "../../../assets/sounds/click.wav";

function Button({ theme = "primary", label = "Click Me", onClick = () => {} }) {
  const [playSound] = useSound(clickSound);

  const handleClick = () => {
    playSound();
    onClick();
  };

  return (
    <button
      className={`button ${theme}-button`}
      type="button"
      onClick={handleClick}
    >
      <span className={`button__text ${theme}-button__text`}>{label}</span>
    </button>
  );
}

export default Button;
