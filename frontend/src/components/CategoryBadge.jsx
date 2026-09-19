import "./CategoryBadge.css";

export default function CategoryBadge({ category }) {
  return (
    <span className="badge">
      {category}
    </span>
  );
}