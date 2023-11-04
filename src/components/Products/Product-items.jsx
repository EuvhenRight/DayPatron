import React from 'react';
import { Link, useParams } from 'react-router-dom';
import LoaderSpinner from '../Loader_Spinner/Loader_Spinner';
import style from './Product-items.module.css';
import logo from '../assets/logo.svg';
import { Box, Container, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import { useProductsData } from '../DataContext/DataContext';

export default function ProductsItems() {
  const { productsData, isLoading, fetchData } = useProductsData();
  const { lang } = useParams();

  React.useEffect(() => {
    const generalUrl = `https://daypatron.adaptable.app/products/${lang}`;
    fetchData(generalUrl);

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

  // Check if product exists before rendering.
  if (isLoading) {
    return (
      <Box minH="100dvh" alignItems="center">
        <LoaderSpinner />
      </Box>
    );
  }

  return (
    <Container maxW={'6xl'} mb={10} minH="100dvh">
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
}
