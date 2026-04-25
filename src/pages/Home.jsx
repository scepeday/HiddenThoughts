import { useMemo } from 'react';
import ErrorState from '../components/ErrorState';
import HeroSection from '../components/HeroSection';
import LoadingState from '../components/LoadingState';
import ProductGrid from '../components/ProductGrid';
import SectionHeader from '../components/SectionHeader';
import { useApi } from '../hooks/useApi';
import { getProducts } from '../services/api';

export default function Home() {
  const products = useApi(() => getProducts(), []);

  const featuredProducts = useMemo(() => {
    const list = products.data || [];
    const featured = list.filter((item) => Number(item.featured));
    return (featured.length ? featured : list).slice(0, 4);
  }, [products.data]);

  return (
    <>
      <HeroSection />

      <section className="section quote-band">
        <p className="quote-band__label">Brand note</p>
        <p className="quote-band__text">Objects for the private side of the room.</p>
      </section>

      <section className="section">
        <SectionHeader
          eyebrow="01 / Selected pieces"
          title="A live storefront staged with editorial restraint."
          text="Product data, pricing, and images remain connected to the live API while the presentation shifts closer to the delivered brand system."
        />
        {products.loading && <LoadingState label="Loading selected pieces" />}
        {products.error && <ErrorState message={products.error} />}
        {!products.loading && !products.error && (
          <ProductGrid products={featuredProducts} emptyMessage="No selected pieces are live right now." />
        )}
      </section>
    </>
  );
}
