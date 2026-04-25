import { useEffect, useMemo, useState } from 'react';

export default function ImageWithFallback({ src, alt, className = '' }) {
  const sources = useMemo(() => (Array.isArray(src) ? src.filter(Boolean) : src ? [src] : []), [src]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [sources]);

  const currentSource = sources[index];

  if (!currentSource) {
    return (
      <div className={`image-fallback ${className}`.trim()} role="img" aria-label={alt || 'Product image unavailable'}>
        <span>Hidden Thoughts</span>
      </div>
    );
  }

  function handleError() {
    setIndex((current) => current + 1);
  }

  return <img className={className} src={currentSource} alt={alt} loading="lazy" onError={handleError} />;
}
