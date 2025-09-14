import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    // Show success feedback
    console.log(`${product.title} added to cart!`);
  };

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img 
            src={product.thumbnail} 
            alt={product.title}
            className="product-image"
            loading="lazy"
          />
          <div className="product-overlay">
            <span className="product-category">{product.category}</span>
          </div>
        </div>
        
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">
            {product.description.length > 100 
              ? `${product.description.substring(0, 100)}...` 
              : product.description
            }
          </p>
          
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
            <span className="rating-text">({product.rating})</span>
          </div>
          
          <div className="product-price-container">
            <span className="product-price">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="product-discount">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>
        </div>
      </Link>
      
      <button 
        className="add-to-cart-btn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
