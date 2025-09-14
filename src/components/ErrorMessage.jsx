import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h3>Something went wrong</h3>
        <p>{message || 'An unexpected error occurred. Please try again later.'}</p>
        <button 
          className="retry-btn"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
