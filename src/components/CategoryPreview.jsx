import { Link } from 'react-router-dom';

export default function CategoryPreview({ categories = [] }) {
  if (!categories.length) {
    return null;
  }

  return (
    <div className="category-strip">
      {categories.map((category, index) => (
        <Link key={category} className="category-card" to={`/shop?category=${encodeURIComponent(category)}`}>
          <span>0{index + 1} / category</span>
          <strong>{category}</strong>
          <small>Open selection</small>
        </Link>
      ))}
    </div>
  );
}
