import { useEffect, useState } from 'react';

export default function ImageWithFallback({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    setFailed(!src);
  }, [src]);

  if (failed) {
    return (
      <div className={`image-fallback ${className}`.trim()} role="img" aria-label={alt || 'Product image unavailable'}>
        <span>Hidden Thoughts</span>
      </div>
    );
  }

  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
