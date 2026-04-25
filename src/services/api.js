import { API_BASE_URL, ENDPOINTS } from './config';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);

  if (!response.ok) {
    let message = 'The storefront could not reach the catalog API.';
    try {
      const body = await response.json();
      message = body.message || message;
    } catch {
      message = `${response.status} ${response.statusText}`;
    }
    throw new Error(message);
  }

  return response.json();
}

export function getProducts(params = {}) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      search.set(key, value);
    }
  });

  const suffix = search.toString() ? `?${search.toString()}` : '';
  return request(`${ENDPOINTS.products}${suffix}`);
}

export function getFeaturedProducts() {
  return getProducts({ featured: 'true' });
}

export function getProductById(id) {
  return request(ENDPOINTS.productById(id));
}

export function getCategories() {
  return request(ENDPOINTS.categories);
}
