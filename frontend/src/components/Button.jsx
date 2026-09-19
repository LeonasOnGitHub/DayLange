import "./Button.css";

export default function Button({ onClick, children, color = "#5e35b1" }) {
  return (
    <button
      onClick={onClick}
      className="button"
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
} 