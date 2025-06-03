import "./Tag.css";

function Tag({
  label = "default",
  active = true,
  action,
  disabled = false,
  className = "",
}) {
  const handleClick = () => {
    if (disabled || !action) return;
    action();
  };

  const handleKeyDown = (event) => {
    if (disabled || !action) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  const tagClasses = [
    "tag",
    active ? "tag_type_active" : "tag_type_inactive",
    action && !disabled ? "tag_type_clickable" : "",
    disabled ? "tag_type_disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (action && !disabled) {
    return (
      <div
        className={tagClasses}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={label}
        aria-pressed={active}
        aria-disabled={disabled}
      >
        {label}
      </div>
    );
  }

  return (
    <div className={tagClasses} aria-label={label} role="status">
      {label}
    </div>
  );
}

export default Tag;
