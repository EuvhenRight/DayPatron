import React from 'react';
import { useParams } from 'react-router-dom';
import DataProducts from '../Data/DataProducts';

const Product = () => {
  const { id } = useParams();

  const productId = parseInt(id);

  const product = DataProducts.find((product) => {
    return product.id === productId;
  });

  console.log(product);

  // Check if product exists before rendering.
  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <>
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>{product.volume}</p>
        <h4>{product.benefits}</h4>
      </div>
    </>
  );
};

export default Product;
