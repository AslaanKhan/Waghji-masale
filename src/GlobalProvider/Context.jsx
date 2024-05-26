// ProductContext.js
import React, { createContext, useState } from 'react';
import { combinedProductList } from '../constants';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(combinedProductList);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setProducts(combinedProductList);
    } else {
      const filtered = combinedProductList.filter(product =>
        product.label.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filtered);
    }
  };

  return (
    <ProductContext.Provider value={{ products, searchQuery, handleSearch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
