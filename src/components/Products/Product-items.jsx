import React from 'react';
import { Link } from 'react-router-dom';
import SpinnerLoader from '../LoaderSpinner/LoaderSpinner';
import style from './Product-items.module.css';

const ProductsItems = () => {
  const [productsData, setProductsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://localhost:3333/products/';

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
    fetchData();
  }, []);

  // if (isLoading) {
  //   return <SpinnerLoader />;
  // }

  return (
    <>
      <div className={style.section__down}>
        <div className={style.container}>
          {isLoading && <SpinnerLoader />}
          <ul className={style.down__list__wrapper}>
            {productsData.map((product) => {
              return (
                <Link
                  key={product.id}
                  to={`/products/${product.name}/${product.id}`}
                >
                  <li
                    className={
                      product.category === 'Oil'
                        ? style.down__list__Oil
                        : style.down__list__universal &&
                          product.category === 'CLP'
                        ? style.down__list__Clp
                        : style.down__list__universal &&
                          product.category === 'Cleaner'
                        ? style.down__list__Cleaner
                        : style.down__list__universal
                    }
                  >
                    <div className={style.down__list__content}>
                      <h1 className={style.down__list__content__text}>
                        {product.name}
                      </h1>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsItems;
