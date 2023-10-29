import { Container, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Motorsport from '../assets/motorsport.png';

const WhereToBuy = () => {
  return (
    <Container maxW="6xl" minH="100dvh">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} mt={10}>
        <Link to="https://motorsport.com.ua/">
          Motosport
          <Image src={Motorsport} alt="Motosport" />
        </Link>
      </SimpleGrid>
    </Container>
  );
};

export default WhereToBuy;
