import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SpinnerLoader from '../LoaderSpinner/LoaderSpinner';
import style from './Product-items.module.css';
import logo from '../assets/logo.svg';

const ProductsItems = () => {
  const [productsData, setProductsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { lang } = useParams();

  React.useEffect(() => {
    const fetchData = async (lang) => {
      try {
        const url = `http://localhost:3333/products/${lang}`;
        console.log(url, 'url');
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProductsData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData(lang);
    window.scrollTo(0, 0);
  }, [lang]);

  const changeColor = (category) => {
    switch (category) {
      case 'Oil':
        return style.down__list__Oil;
      case 'CLP':
        return style.down__list__Clp;
      case 'Cleaner':
        return style.down__list__Cleaner;
      default:
        return style.down__list__universal;
    }
  };

  return (
    <div className={style.section__down}>
      <div className={style.container}>
        {isLoading && <SpinnerLoader />}
        <ul className={style.down__list__wrapper}>
          {productsData.map((product) => {
            return (
              <Link
                key={product.id}
                to={`/${lang}/products/${product.id}/${product.name}`}
              >
                <li className={changeColor(product.category)}>
                  <div className={style.down__list__content}>
                    <h1 className={style.down__list__content__text}>
                      {product.name}
                    </h1>
                    <img
                      className={style.down__list__content__img}
                      src={logo}
                      alt={product.name}
                    />
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductsItems;
