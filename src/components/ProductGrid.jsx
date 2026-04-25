import EmptyState from './EmptyState';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, emptyMessage }) {
  if (!products?.length) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={product._id} product={product} index={index} />
      ))}
    </div>
  );
}
