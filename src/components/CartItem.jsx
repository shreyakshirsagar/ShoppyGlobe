import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 99) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img 
          src={item.thumbnail} 
          alt={item.title}
          loading="lazy"
        />
      </div>
      
      <div className="item-details">
        <h3 className="item-title">{item.title}</h3>
        <p className="item-category">{item.category}</p>
        <div className="item-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`star ${i < Math.floor(item.rating) ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="rating-text">({item.rating})</span>
        </div>
      </div>
      
      <div className="item-quantity">
        <label htmlFor={`quantity-${item.id}`}>Qty:</label>
        <div className="quantity-controls">
          <button 
            className="quantity-btn"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <input
            id={`quantity-${item.id}`}
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            min="1"
            className="quantity-input"
          />
          <button 
            className="quantity-btn"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      <div className="item-price">
        <div className="price-per-item">
          ${item.price.toFixed(2)} each
        </div>
        <div className="total-price">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
      
      <button 
        className="remove-btn"
        onClick={handleRemove}
        title="Remove item"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3,6 5,6 21,6"></polyline>
          <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
