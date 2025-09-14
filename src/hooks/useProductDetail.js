import { useState, useEffect } from 'react';

const useProductDetail = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      if (!productId) return;
      
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching product detail:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [productId]);

  return { product, loading, error };
};

export default useProductDetail;
