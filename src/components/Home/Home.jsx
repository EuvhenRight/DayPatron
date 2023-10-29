import React from 'react';
import { useLanguage } from '../Language/LanguageContext';
import product from '../assets/CLP-500ml.png';
import {
  Avatar,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import SwiperHC from './SwiperHC';
import userFriendly from '../assets/user_friendly.png';
import ammoniaFree from '../assets/ammonia_free.png';
import safety_barrel from '../assets/safety_barrel.png';
import protect from '../assets/protect_tr.svg';
import clp from '../assets/clp_tr.svg';
import oil from '../assets/oil_tr.svg';
import cleaner from '../assets/cleaner_tr.svg';
import liquidator from '../assets/liquidator_tr.svg';
import AllProducts from '../assets/All_line.jpeg';

const Home = () => {
  const { t } = useLanguage();
  const titles = ['home.title_one', 'home.title_two', 'home.title_three'];
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

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
          <Box display="flex" alignItems="center">
            <Avatar
              name="user-friendly"
              src={userFriendly}
              alt="user-friendly"
            />
            USER FRIENDLY
          </Box>
          <Box display="flex" alignItems="center">
            <Avatar name="ammonia" src={ammoniaFree} alt="ammonia-free" />
            AMMONIA FREE
          </Box>
          <Box display="flex" alignItems="center">
            <Avatar name="safety" src={safety_barrel} alt="safety" />
            SAFETY
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
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap={2}
        >
          <GridItem>
            <Heading as="h1">What we have?</Heading>
          </GridItem>
          <GridItem>
            <Image width="50%" src={clp} alt="clp" />
          </GridItem>
          <GridItem>
            <Image width="50%" src={oil} alt="clp" />
          </GridItem>
          <GridItem>
            <Image width="50%" src={protect} alt="clp" />
          </GridItem>
          <GridItem>
            <Image width="50%" src={cleaner} alt="clp" />
          </GridItem>
          <GridItem>
            <Image width="50%" src={liquidator} alt="clp" />
          </GridItem>
        </Grid>
        <Box>
          <Heading as="h1">Which product use?</Heading>
        </Box>
      </Container>
    </>
  );
};

export default Home;
