import React from 'react';
import { useParams } from 'react-router-dom';
import DataProducts from '../Data/DataProducts';

const Product = () => {
  const [product, setProduct] = React.useState({});
  console.log(product);
  const { id } = useParams();

  const productId = parseInt(id);

  const productID = DataProducts.find((product) => {
    return product.id === productId;
  });

  React.useEffect(() => {
    setProduct(productID);
  }, [productID]);

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
        <p>{product.useTo}</p>
        <p>{product.volume}</p>
        <p>{product.composition}</p>
        <p>{product.shelfLife}</p>
        <h4>{product.benefits}</h4>
      </div>
    </>
  );
};

export default Product;
