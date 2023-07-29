import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Product.module.css';
import ReactPlayer from 'react-player';

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeVolume, setActiveVolume] = React.useState(2);
  const [isPictureActive, setIsPictureActive] = React.useState(null);
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

  // Check if product exists before rendering.
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const mainImage = product.image.map((img, i) =>
    i === activeVolume ? img.url : null
  );

  const menuPicture = product.image.map((img, i) =>
    i === isPictureActive ? img.url : null
  );

  const onChangeVolume = (index) => {
    setIsPictureActive(0); // Reset isPictureActive to null when changing the volume
    setActiveVolume(index);
  };

  const onChangePicture = (index) => {
    setActiveVolume(0); // Reset activeVolume to the default state when changing the picture
    setIsPictureActive(index);
  };

  const renderProductImage = () => {
    if (activeVolume) {
      return `/images/${mainImage[activeVolume]}`;
    } else {
      return `/images/${menuPicture[isPictureActive]}`;
    }
  };

  // Separate Image component
  const Picture = ({ url, alt, isActive, onClick }) => (
    <li onClick={onClick} className={isActive ? style.activePicture : ''}>
      <img src={`/images/${url}`} alt={alt} />
    </li>
  );

  // Separate Volume component
  const Volume = ({ value, isActive, onClick }) => (
    <li onClick={onClick} className={isActive ? style.activeMainImg : ''}>
      {value}
    </li>
  );

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
            <div className={style.middle__main__name__title}>
              <h2>{product.name}</h2>
              <p>Art: {product.article}</p>
            </div>
            <div className={style.middle__wrapper}>
              <div className={style.middle__left}>
                <div className={style.middle__left__menu__wrapper}>
                  <ul className={style.middle__left__menu}>
                    {product.image.map((value, i) => (
                      <Picture
                        key={i}
                        url={value.url}
                        alt={product.name}
                        isActive={isPictureActive === i}
                        onClick={() => onChangePicture(i)}
                      />
                    ))}
                  </ul>
                </div>
                <div>
                  <img
                    className={style.middle__left__img}
                    src={renderProductImage()}
                    alt={product.name}
                  />
                </div>
              </div>
              <div className={style.middle__right}>
                <ul className={style.down__list__volume}>
                  {product.volume.map((value, i) => (
                    <Volume
                      key={i}
                      value={value}
                      isActive={activeVolume === i}
                      onClick={() => onChangeVolume(i)}
                    />
                  ))}
                </ul>
                <ul className={style.middle__right__text}>
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
                  <div>
                    <ul className={style.middle__right__benefits}>
                      {product.benefits.map((value, i) => (
                        <li key={i}>
                          <div className={style.middle__left__container}>
                            <img
                              src={`/images/${[value]}`}
                              alt={product.name}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.section__down__wrapper}>
            <div className={style.section__down__video}>
              <ReactPlayer
                url="https://youtu.be/p33qMGs_-Vo"
                width={'100%'}
                height={'450px'}
              />
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
