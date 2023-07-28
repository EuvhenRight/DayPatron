import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Product.module.css';

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeVolume, setActiveVolume] = React.useState(2);
  const { id } = useParams();

  const fetchData = async (productId) => {
    try {
      const url = `http://localhost:3333/products/${productId}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData(id);
    setIsLoading(true);
  }, [id]);

  // const product = productsData.find((product) => product.id === productId);

  console.log(product);
  // Check if product exists before rendering.
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const image = product.image.map((img, i) =>
    i === activeVolume ? img.url : null
  );

  console.log(image);
  const onChangeVolume = (index) => {
    setActiveVolume(index);
  };

  console.log(activeVolume);

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
                <img
                  className={style.middle__left__img}
                  src={`/images/${image[activeVolume]}`}
                  alt={product.name}
                />
                <h4>{product.benefits}</h4>
              </div>
              <div className={style.middle__right}>
                <ul className={style.middle__right__text}>
                  <li>
                    <h2 className={style.middle__right__text__title}>
                      {product.name}
                    </h2>
                  </li>
                  <li>
                    <p>
                      <strong>Description: </strong>
                      {product.description}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Use to: </strong>
                      {product.useTo}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Composition: </strong>
                      {product.composition}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Shelf life: </strong>
                      {product.shelfLife}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.section__down__wrapper}>
            <div className={style.section__down__video}>
              <iframe
                className={style.video}
                title="Gun Care"
                src="https://youtu.be/p33qMGs_-Vo"
                width="100%"
                height="450px"
                frameBorder="0"
              ></iframe>
              <h2>Video</h2>
              <p>text</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
