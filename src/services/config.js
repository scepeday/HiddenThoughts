export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const ENDPOINTS = {
  products: '/api/products',
  productById: (id) => `/api/products/${id}`,
  categories: '/api/categories'
};
