import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatters';
import { getProductImageUrl } from '../utils/images';
import ImageWithFallback from './ImageWithFallback';

export default function ProductCard({ product }) {
  const categoryLabel = product.category || 'Catalog piece';
  const stockCount = Number(product.stock) || 0;

  return (
    <article className="product-card">
      <Link className="product-card__image" to={`/products/${product._id}`} aria-label={`View ${product.name}`}>
        <ImageWithFallback src={getProductImageUrl(product)} alt={`${product.name} product image`} />
      </Link>
      <div className="product-card__body">
        <div className="product-card__topline">
          <p className="chip">{categoryLabel}</p>
          <span className="product-card__index">{product.featured ? 'Featured' : 'Piece'}</span>
        </div>
        <h3>
          <Link to={`/products/${product._id}`}>{product.name}</Link>
        </h3>
        <div className="product-card__meta">
          <span>{formatCurrency(product.price)}</span>
          <span>{stockCount > 0 ? `${stockCount} in stock` : 'Sold out'}</span>
        </div>
        <div className="product-card__footer">
          <span className="product-card__cta">View piece</span>
        </div>
      </div>
    </article>
  );
}
