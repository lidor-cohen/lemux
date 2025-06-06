import "./Button.css";

import useSound from "use-sound";

import clickSound from "../../../assets/sounds/click.wav";

function Button({
  theme = "primary",
  label = "Click Me",
  icon,
  size = 6,
  onClick = () => {},
  ...props
}) {
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
      style={{
        paddingBlock: size,
        paddingInline: size * 4,
      }}
      {...props}
    >
      {label !== "" && (
        <span className={`button__text ${theme}-button__text`}>{label}</span>
      )}{" "}
      {icon && <img className="button__icon" src={icon} alt="button icon" />}
    </button>
  );
}

export default Button;
