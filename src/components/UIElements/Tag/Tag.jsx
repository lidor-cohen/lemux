import "./Tag.css";

function Tag({
  label,
  active = true,
  action,
  disabled = false,
  className = "",
}) {
  const handleClick = () => {
    if (disabled || !action) return;
    action();
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

  return (
    <div
      className={tagClasses}
      onClick={handleClick}
      aria-pressed={action ? active : undefined}
      aria-disabled={disabled}
    >
      {label}
    </div>
  );
}

export default Tag;
