import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import useProductDetail from '../hooks/useProductDetail';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, loading, error } = useProductDetail(id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    // Show success notification
    alert(`${product.title} added to cart successfully!`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={handleGoBack}>
        ← Back to Products
      </button>
      
      <div className="product-detail">
        <div className="product-images">
          <img 
            src={product.thumbnail} 
            alt={product.title}
            className="main-image"
            loading="lazy"
          />
          {product.images && product.images.length > 1 && (
            <div className="image-gallery">
              {product.images.slice(0, 4).map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${product.title} ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="product-details">
          <div className="product-header">
            <span className="product-category">{product.category}</span>
            <h1 className="product-title">{product.title}</h1>
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-text">({product.rating} rating)</span>
            </div>
          </div>
          
          <div className="product-price-section">
            <div className="price-container">
              <span className="current-price">${product.price}</span>
              {product.discountPercentage > 0 && (
                <div className="discount-info">
                  <span className="original-price">
                    ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                  </span>
                  <span className="discount-percentage">
                    {product.discountPercentage}% OFF
                  </span>
                </div>
              )}
            </div>
            <div className="stock-info">
              <span className="stock-label">Stock:</span>
              <span className="stock-amount">{product.stock} available</span>
            </div>
          </div>
          
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <div className="product-specs">
            <h3>Specifications</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Brand:</span>
                <span className="spec-value">{product.brand}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Category:</span>
                <span className="spec-value">{product.category}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Rating:</span>
                <span className="spec-value">{product.rating}/5</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Stock:</span>
                <span className="spec-value">{product.stock} units</span>
              </div>
            </div>
          </div>
          
          <div className="product-actions">
            <button 
              className="add-to-cart-button"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button 
              className="buy-now-button"
              onClick={() => {
                dispatch(addToCart(product));
                navigate('/cart');
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
