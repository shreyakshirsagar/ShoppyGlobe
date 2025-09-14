import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

// Lazy load components for code splitting
const ProductList = React.lazy(() => import('./components/ProductList'));
const ProductDetail = React.lazy(() => import('./components/ProductDetail'));
const Cart = React.lazy(() => import('./components/Cart'));
const Checkout = React.lazy(() => import('./components/Checkout'));
const NotFound = React.lazy(() => import('./components/NotFound'));

// Home component
const Home = () => (
  <div className="home-container">
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to ShoppyGlobe</h1>
        <p>Discover amazing products at unbeatable prices</p>
        <a href="/products" className="cta-button">Shop Now</a>
      </div>
    </div>
    <Suspense fallback={<LoadingSpinner />}>
      <ProductList />
    </Suspense>
  </div>
);

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="app">
        <Header />
        <main className="main-content">
          <Home />
        </main>
      </div>
    ),
  },
  {
    path: '/products',
    element: (
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <ProductList />
          </Suspense>
        </main>
      </div>
    ),
  },
  {
    path: '/product/:id',
    element: (
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <ProductDetail />
          </Suspense>
        </main>
      </div>
    ),
  },
  {
    path: '/cart',
    element: (
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Cart />
          </Suspense>
        </main>
      </div>
    ),
  },
  {
    path: '/checkout',
    element: (
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Checkout />
          </Suspense>
        </main>
      </div>
    ),
  },
  {
    path: '*',
    element: (
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        </main>
      </div>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;