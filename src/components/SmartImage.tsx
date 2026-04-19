import { ImgHTMLAttributes, SyntheticEvent, useEffect, useState } from 'react';

type SmartImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const DEFAULT_FALLBACK =
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=70&w=1200&auto=format&fit=crop';

export default function SmartImage({
  src,
  fallbackSrc = DEFAULT_FALLBACK,
  loading = 'lazy',
  decoding = 'async',
  referrerPolicy = 'no-referrer',
  onError,
  ...props
}: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }

    onError?.(event);
  };

  return (
    <img
      {...props}
      src={currentSrc}
      loading={loading}
      decoding={decoding}
      referrerPolicy={referrerPolicy}
      onError={handleError}
    />
  );
}
