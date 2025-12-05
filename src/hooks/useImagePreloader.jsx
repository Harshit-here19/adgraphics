import { useState, useEffect } from "react";

export default function useImagePreloader(imageUrls) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!imageUrls?.length) {
      setLoading(false);
      return;
    }

    let loadedCount = 0;

    const onLoad = () => {
      loadedCount += 1;
      if (loadedCount === imageUrls.length) setLoading(false);
    };

    const onError = () => {
      setError(true);
      setLoading(false);
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = onLoad;
      img.onerror = onError;
    });
  }, [imageUrls]);

  return { loading, error };
}
