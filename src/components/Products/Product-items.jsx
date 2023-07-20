import React from 'react';
import { Link } from 'react-router-dom';
import DataProducts from '../Data/DataProducts';

const ProductsItems = () => {
  return (
    <>
      <ul>
        {DataProducts.map((product, index) => {
          return (
            <li key={index}>
              <Link to={`/products/${product.name}/${product.id}`}>
                <div>
                  <h1>{product.name}</h1>
                  <img src={product.image} alt={product.name} />
                  <p>{product.volume}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsItems;
