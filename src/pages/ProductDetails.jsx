import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import ErrorState from '../components/ErrorState';
import ImageWithFallback from '../components/ImageWithFallback';
import LoadingState from '../components/LoadingState';
import ProductGrid from '../components/ProductGrid';
import SectionHeader from '../components/SectionHeader';
import { useApi } from '../hooks/useApi';
import { useCart } from '../hooks/useCart';
import { getProductById, getProducts } from '../services/api';
import { formatCurrency } from '../utils/formatters';
import { getProductImageUrl } from '../utils/images';

export default function ProductDetails() {
  const { id } = useParams();
  const product = useApi(() => getProductById(id), [id]);
  const related = useApi(() => getProducts(), []);
  const { addItem } = useCart();

  const relatedProducts = useMemo(() => {
    if (!product.data || !related.data) return [];
    return related.data
      .filter((item) => item._id !== product.data._id && item.category === product.data.category)
      .slice(0, 4);
  }, [product.data, related.data]);

  if (product.loading) {
    return <LoadingState label="Loading product details" />;
  }

  if (product.error) {
    return (
      <section className="section">
        <ErrorState message={product.error} />
        <Button to="/shop" variant="ghost">
          Back to shop
        </Button>
      </section>
    );
  }

  if (!product.data) {
    return (
      <section className="section">
        <ErrorState message="Product not found." />
        <Button to="/shop" variant="ghost">
          Back to shop
        </Button>
      </section>
    );
  }

  const current = product.data;
  const categoryLabel = current.category || 'Catalog piece';
  const description = current.description || 'This piece is part of the current Hidden Thoughts collection.';
  const stockCount = Number(current.stock) || 0;
  const imageAlt = `${current.name} product image`;

  return (
    <>
      <section className="product-detail">
        <div className="product-detail__media">
          <ImageWithFallback src={getProductImageUrl(current)} alt={imageAlt} />
        </div>
        <div className="product-detail__content">
          <Link className="back-link" to="/shop">
            Back to shop
          </Link>
          <div className="product-detail__header">
            <p className="chip">{categoryLabel}</p>
            <h1>{current.name}</h1>
            <p className="price">{formatCurrency(current.price)}</p>
            <p className="product-detail__description">{description}</p>
          </div>
          <div className="product-facts">
            <div>
              <span className="eyebrow">Type</span>
              <strong>{current.featured ? 'Featured drop' : 'Catalog piece'}</strong>
            </div>
            <div>
              <span className="eyebrow">Availability</span>
              <strong>{stockCount > 0 ? `${stockCount} available` : 'Sold out'}</strong>
            </div>
          </div>
          <div className="product-detail__actions">
            <Button onClick={() => addItem(current)} disabled={stockCount <= 0}>
              {stockCount > 0 ? 'Add to cart' : 'Currently unavailable'}
            </Button>
            <p className="product-detail__note">Dynamic images, pricing, and stock are kept intact from the product API.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="03 / Related" title="More from this category" />
        {related.loading && <LoadingState label="Loading related products" />}
        {related.error && <ErrorState message={related.error} />}
        {!related.loading && !related.error && (
          <ProductGrid products={relatedProducts} emptyMessage="No related pieces are available yet." />
        )}
      </section>
    </>
  );
}
