import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="error-details">
          <h3>What could have happened?</h3>
          <ul>
            <li>The page might have been moved to a different location</li>
            <li>The page might have been deleted or is temporarily unavailable</li>
            <li>You might have typed the URL incorrectly</li>
            <li>The link you followed might be outdated</li>
          </ul>
        </div>
        <div className="error-actions">
          <Link to="/" className="home-btn">
            Go to Homepage
          </Link>
          <button 
            className="back-btn"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
