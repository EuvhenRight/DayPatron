import React from 'react';
import { useLanguage } from '../Language/LanguageContext';
import product from '../assets/CLP-500ml.png';
import {
  Avatar,
  Box,
  Container,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import SwiperHC from './SwiperHC';
import userFriendly from '../assets/user_friendly.png';
import ammoniaFree from '../assets/ammonia_free.png';
import safety_barrel from '../assets/safety_barrel.png';
import AllProducts from '../assets/All_line.jpeg';
import HelmetComponent from '../Helmet/helmet.js';
import CardComponent from './Card';
import { useParams } from 'react-router-dom';
import LoaderSpinner from '../Loader_Spinner/Loader_Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  allProductsDataSelector,
  allProductsStatus,
  fetchAllProductsData,
} from '../../redux/productsSlice';

export default function Home() {
  const isLoading = useSelector(allProductsStatus);
  const productsData = useSelector(allProductsDataSelector);
  const dispatch = useDispatch();
  const { t } = useLanguage();
  const titles = ['home.title_one', 'home.title_two', 'home.title_three'];
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
  const { lang } = useParams();
  console.log(isLoading);
  console.log(productsData);

  React.useEffect(() => {
    console.log('useEffect is running');
    dispatch(fetchAllProductsData(lang));
    window.scrollTo(0, 0);
  }, [dispatch, lang]);

  const translate = React.useCallback(
    (key) => {
      return t(key);
    },
    [t]
  );

  const translateArray = titles.map((item) => translate(item));

  if (isLoading) {
    return (
      <Box minH="100dvh" alignItems="center">
        <LoaderSpinner />
      </Box>
    );
  }

  if (!productsData) {
    return null; // Don't render layout components if productsData is missing
  }

  return (
    <>
      <HelmetComponent
        title={translate('meta.title')}
        description={translate('meta.description')}
        addPostFixTitle={true}
        noIndex={true}
        keyWords={('Gun_Care', 'carbon_cleaner', 'CLP')}
        largeTwitterCard={true}
        imageCard={
          'https://www.daypatron.com.ua/static/media/DayLogo.671b16c7b8f9b78cb5de3763dd57fbc3.svg'
        }
      />
      <Container
        key={product.id}
        maxW="100%"
        minH="100dvh"
        centerContent
        fontSize={{ base: 'sm', sm: 'md' }}
        p="0"
      >
        <SwiperHC translateArray={translateArray} />
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexDirection="row"
          bg="gray"
          h="76px"
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection={isMobile ? 'column' : 'row'}
          >
            <Avatar
              name="user-friendly"
              src={userFriendly}
              alt="user-friendly"
            />
            USER FRIENDLY
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection={isMobile ? 'column' : 'row'}
          >
            <Avatar name="safety" src={safety_barrel} alt="safety" />
            SAFETY
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection={isMobile ? 'column' : 'row'}
          >
            <Avatar name="ammonia" src={ammoniaFree} alt="ammonia-free" />
            AMMONIA FREE
          </Box>
        </Box>
        <Box
          sx={{
            bgImage: `url(${AllProducts})`,
            bgSize: 'cover',
            height: '450px',
            bgPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            color="white"
            width="84%"
            bg="black"
            borderRadius="10px"
            fontSize={isMobile ? '13px' : '26px'}
            textAlign="justify"
          >
            {translate('home.about')}
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {productsData.map((product) => {
            return (
              <CardComponent
                image={`/images/${product.image[3].url}`}
                key={product.id}
                name={product.name}
                benefits={product.benefits}
                product={product}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
}
