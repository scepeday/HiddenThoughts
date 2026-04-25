import crewNeck from '../../assets/CrewNeck.jpg';
import fanzine from '../../assets/Fanzine.jpg';
import keyChain from '../../assets/KeyChain.jpg';
import postcard from '../../assets/Postcard.jpg';
import printPoster from '../../assets/PrintPoster.jpg';
import toteBag from '../../assets/ToteBag.jpg';
import vinyl from '../../assets/Vinyl.jpg';
import tShirt from '../../assets/hiddent_tshirt.png';
import { API_BASE_URL } from '../services/config';

function normalizeImagePath(source) {
  if (!source || typeof source !== 'string') {
    return '';
  }

  if (/^https?:\/\//i.test(source)) {
    return source;
  }

  if (/^(blob:|data:)/i.test(source)) {
    return source;
  }

  const normalizedPath = source.startsWith('/') ? source : `/${source}`;
  return `${API_BASE_URL}${normalizedPath}`;
}

function extractImageSources(product) {
  const directSources = [
    product?.imageUrl,
    product?.image_url,
    product?.image,
    product?.imagePath,
    product?.image_path,
    product?.thumbnail,
    product?.photo
  ];

  const arraySources = Array.isArray(product?.images)
    ? product.images.flatMap((entry) => {
        if (typeof entry === 'string') return [entry];
        if (entry && typeof entry === 'object') {
          return [entry.url, entry.imageUrl, entry.path, entry.src];
        }
        return [];
      })
    : [];

  return [...directSources, ...arraySources]
    .map((value) => normalizeImagePath(value))
    .filter(Boolean);
}

function getFallbackProductImage(product) {
  const text = `${product?.name || ''} ${product?.category || ''}`.toLowerCase();

  if (text.includes('tote')) return toteBag;
  if (text.includes('poster') || text.includes('print')) return printPoster;
  if (text.includes('postcard')) return postcard;
  if (text.includes('key')) return keyChain;
  if (text.includes('vinyl')) return vinyl;
  if (text.includes('fanzine') || text.includes('zine')) return fanzine;
  if (text.includes('crew')) return crewNeck;
  if (text.includes('shirt') || text.includes('tee')) return tShirt;

  return crewNeck;
}

export function getProductImageCandidates(product) {
  const candidates = extractImageSources(product);
  const fallback = getFallbackProductImage(product);

  if (!candidates.includes(fallback)) {
    candidates.push(fallback);
  }

  return candidates;
}

export function getProductImageUrl(product) {
  return getProductImageCandidates(product)[0] || '';
}
