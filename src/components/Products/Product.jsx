import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Product.module.css';

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeVolume, setActiveVolume] = React.useState(0);
  const { id } = useParams();

  const fetchData = async (productId) => {
    try {
      const url = `http://localhost:3333/products/${productId}`

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
     setProduct(data);
     setIsLoading(false);
    }
    catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
      fetchData(id);
      setIsLoading(true)
}, [id]);

// const product = productsData.find((product) => product.id === productId);


console.log(product)
  // Check if product exists before rendering.
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const image = product.image.map((img, i) => i===activeVolume ? img.url : null)

  console.log(image)
  const onChangeVolume = (index) => {
    setActiveVolume(index);
  };

  console.log(activeVolume)

  return (
    <>
  <div key={product.id}>
    <div className={style.container}>
      <div className={style.section__gradient}>
        <div className={style.headline__wrapper}>
          <h1 className={style.headline__text}>CONTACTS</h1>
        </div>
      </div>
    </div>
    <div className={style.container}>
      <div className={style.section__middle}>
        <div className={style.middle__wrapper}>
          <div className={style.middle__left}>
            <h2 className={style.middle__left__text}>{product.name}</h2>
          </div>
          <div className={style.middle__right}>
            <p className={style.middle__right__text}>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className={style.container}>
      <div className={style.section__down}>
        <div>
          <img src={`/images/${image[activeVolume]}`} alt={product.name} />
          <h1>{product.name}</h1>
          <ul className={style.down__list__volume}>
            {product.volume.map((value, i) => (
              <li
                key={i}
                onClick={() => onChangeVolume(i)}
                className={activeVolume === i ? style.active : ''}
              >
                {value}
              </li>
            ))}
          </ul>
          <p>{product.description}</p>
          <p>{product.useTo}</p>
          <img src={image} alt={product.name} /> 
          <p>{product.composition}</p>
          <p>{product.shelfLife}</p>
          <h4>{product.benefits}</h4>
        </div>
      </div>
    </div>
  </div>
    </>
  )
};

export default Product;
