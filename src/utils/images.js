import { API_BASE_URL } from '../services/config';

export function getProductImageUrl(product) {
  const source = product?.imageUrl || product?.image || product?.imagePath || '';

  if (!source) {
    return '';
  }

  if (/^https?:\/\//i.test(source)) {
    return source;
  }

  const normalizedPath = source.startsWith('/') ? source : `/${source}`;
  return `${API_BASE_URL}${normalizedPath}`;
}
