import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
        </div>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart ({totalQuantity} items)</h2>
        <button 
          className="clear-cart-btn"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      
      <div className="cart-content">
        <div className="cart-items">
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="cart-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Items ({totalQuantity}):</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            
            <div className="cart-actions">
              <Link to="/" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <Link to="/checkout" className="checkout-btn">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
