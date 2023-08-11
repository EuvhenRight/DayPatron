import React from 'react';
import style from './Product.module.css';
import ReactPlayer from 'react-player';
import FacebookShare from '../ShareSocial/FacebookShare';
import TwitterShare from '../ShareSocial/TwitterShare';
import ViberShare from '../ShareSocial/ViberShare';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import { useLanguage } from '../language/LanguageContext';
import { useParams } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeVolume, setActiveVolume] = React.useState(2);
  const [isPictureActive, setIsPictureActive] = React.useState(null);
  const { id, lang } = useParams();

  const { t } = useLanguage();

  const translate = React.useCallback(
    (key) => {
      return t(key);
    },
    [t]
  );

  const fetchData = async (productId) => {
    try {
      const url = `https://daypatron.adaptable.app/products/${lang}/${productId}`;

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
    fetchData(id, lang);
    setIsLoading(true);
    window.scrollTo(0, 0);
  }, [id, lang]);

  // Check if product exists before rendering.
  if (isLoading) {
    return (
      <div className={style.section__middle}>
        <LoaderSpinner />
      </div>
    );
  }

  const mainImage = product?.image.map((img, i) =>
    i === activeVolume ? img.url : null
  );

  const menuPicture = product?.image.map((img, i) =>
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
        <div className={style.section__gradient}>
          <div className={style.gradient__wrapper}>
            <div className={style.gradient}></div>
          </div>
          <div className={style.container}>
            <div className={style.headline__wrapper}>
              <img
                className={style.headline__img}
                src={`/images/${product.tradeMarkImage}`}
                alt={product.tradeMarkImage}
              />
            </div>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.section__middle}>
            <div className={style.middle__main__name__title}>
              <h2>{product.name}</h2>
              <p>
                {translate('product.article')}: {product.article}
              </p>
              <div className={style.middle__main__social__media}>
                {translate('product.share')}:
                <button>
                  <FacebookShare />
                </button>
                <button>
                  <TwitterShare />
                </button>
                <button>
                  <ViberShare />
                </button>
              </div>
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
                <section className={style.middle__right__text}>
                  <article>
                    <h2>{translate('product.description')}:</h2>
                    <p>{product.description}</p>
                  </article>
                  <article>
                    <h2>{translate('product.useTo')}:</h2>
                    <p>{product.useTo}</p>
                  </article>
                  <article>
                    <h2>{translate('product.ingredients')}:</h2>
                    <p>{product.composition}</p>
                  </article>
                  <article>
                    <h2>{translate('product.shelfLife')}:</h2>
                    <p>{product.shelfLife}</p>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className={style.middle__benefits__wrapper}>
          <ul className={style.middle__benefits}>
            {product.benefits.map((value, i) => (
              <li key={i}>
                <div className={style.middle__left__container}>
                  <img src={`/images/${[value]}`} alt={product.name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.container}>
          <div className={style.section__down__wrapper}>
            <div className={style.section__down__video}>
              <ReactPlayer
                url="https://youtu.be/p33qMGs_-Vo"
                width={'100%'}
                height={'450px'}
              />
              <h2>{translate('product.video')}</h2>
              <p>{translate('product.videoText')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
