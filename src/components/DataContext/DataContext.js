import React, { createContext, useContext, useState } from 'react';

const ProductsDataContext = createContext();

export function ProductsDataProvider({ children }) {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      console.log(url, 'url');
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      setProductsData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <ProductsDataContext.Provider
      value={{ productsData, isLoading, fetchData }}
    >
      {children}
    </ProductsDataContext.Provider>
  );
}

export function useProductsData() {
  return useContext(ProductsDataContext);
}
