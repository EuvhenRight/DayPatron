import {
  Container,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Motorsport from '../assets/motorsport.png';
import { useLanguage } from '../Language/LanguageContext';
import BreadcrumbComponent from '../Products/Breadcrumb';

const WhereToBuy = () => {
  const { lang } = useLanguage();
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
  return (
    <Container maxW="6xl" minH="100dvh">
      {!isMobile && <BreadcrumbComponent lang={lang} page="whereToBuy" />}
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
