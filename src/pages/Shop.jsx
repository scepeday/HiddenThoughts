import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import LoadingState from '../components/LoadingState';
import PageIntro from '../components/PageIntro';
import ProductGrid from '../components/ProductGrid';
import { useApi } from '../hooks/useApi';
import { getCategories, getProducts } from '../services/api';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price low to high' },
  { value: 'price-desc', label: 'Price high to low' },
  { value: 'az', label: 'A to Z' }
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('featured');
  const selectedCategory = searchParams.get('category') || '';
  const products = useApi(() => getProducts(selectedCategory ? { category: selectedCategory } : {}), [selectedCategory]);
  const categories = useApi(getCategories, []);
  const visibleCategories = categories.data?.filter((category) => category.toLowerCase() !== 'creative tool') || [];

  const sortedProducts = useMemo(() => {
    const list = [...(products.data || [])];
    if (sort === 'price-asc') return list.sort((a, b) => Number(a.price) - Number(b.price));
    if (sort === 'price-desc') return list.sort((a, b) => Number(b.price) - Number(a.price));
    if (sort === 'az') return list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'newest') return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return list.sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [products.data, sort]);

  function chooseCategory(category) {
    if (!category) {
      setSearchParams({});
      return;
    }
    setSearchParams({ category });
  }

  return (
    <>
      <PageIntro
        title="Live Catalog"
      />

      <section className="section section--tight">
        <div className="shop-toolbar">
          <div className="filter-chips" aria-label="Product categories">
            <button className={!selectedCategory ? 'selected' : ''} type="button" onClick={() => chooseCategory('')}>
              All
            </button>
            {visibleCategories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? 'selected' : ''}
                type="button"
                onClick={() => chooseCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="sort-control">
            <span>Sort</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {categories.error && <ErrorState message={`Categories could not load: ${categories.error}`} />}
        {products.loading && <LoadingState label="Loading products" />}
        {products.error && <ErrorState message={products.error} />}
        {!products.loading && !products.error &&
          (sortedProducts.length ? (
            <ProductGrid products={sortedProducts} emptyMessage="The catalog is live, but no products match this view right now." />
          ) : (
            <EmptyState message="No products match this category yet." />
          ))}
      </section>
    </>
  );
}
