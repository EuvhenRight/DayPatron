import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SpinnerLoader from '../Loader_Spinner/Loader_Spinner';
import style from './Product-items.module.css';
import logo from '../assets/logo.svg';
import { Box, Container, Heading, Image, SimpleGrid } from '@chakra-ui/react';

const ProductsItems = () => {
  const [productsData, setProductsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { lang } = useParams();

  React.useEffect(() => {
    const fetchData = async (lang) => {
      try {
        const url = `https://daypatron.adaptable.app/products/${lang}`;
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
    <Container maxW={'6xl'} mb={10} minH="100dvh">
      {isLoading && <SpinnerLoader />}
      <SimpleGrid columns={[1, 2, 3]} gap={3}>
        {productsData.map((product) => {
          return (
            <Link
              key={product.id}
              to={`/${lang}/products/${product.id}/${product.linkName}`}
            >
              <Box className={changeColor(product.category)}>
                <Box className={style.down__list__content}>
                  <Heading
                    as="h2"
                    textAlign="center"
                    className={style.down__list__content__text}
                  >
                    {product.name}
                  </Heading>
                  <Image
                    className={style.down__list__content__img}
                    src={logo}
                    alt={product.name}
                  />
                </Box>
              </Box>
            </Link>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default ProductsItems;
