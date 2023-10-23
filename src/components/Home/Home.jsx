import React from 'react';
import { useLanguage } from '../Language/LanguageContext';
import product from '../assets/CLP-500ml.png';
import { Box, Container } from '@chakra-ui/react';
import SwiperHC from './SwiperHC';

const Home = () => {
  const { t } = useLanguage();
  const titles = ['home.title_one', 'home.title_two', 'home.title_three'];

  const translate = React.useCallback(
    (key) => {
      return t(key);
    },
    [t]
  );

  const translateArray = titles.map((item) => translate(item));

  return (
    <>
      <Container
        key={product.id}
        maxW="100%"
        centerContent
        mt={{ base: 85, sm: 85, md: 100, lg: 100 }}
        fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'md' }}
        p="0"
      >
        <SwiperHC translateArray={translateArray} />
      </Container>
    </>
  );
};

export default Home;
