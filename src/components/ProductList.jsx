import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredProducts } from '../store/slices/searchSlice';
import useProducts from '../hooks/useProducts';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import './ProductList.css';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const { searchTerm, filteredProducts } = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0) {
      if (searchTerm.trim() === '') {
        dispatch(setFilteredProducts(products));
      } else {
        const filtered = products.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        dispatch(setFilteredProducts(filtered));
      }
    }
  }, [products, searchTerm, dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const displayProducts = searchTerm ? filteredProducts : products;

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Our Products</h2>
        <SearchBar />
      </div>
      
      <div className="product-grid">
        {displayProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      
      {displayProducts.length === 0 && searchTerm && (
        <div className="no-results">
          <p>No products found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
