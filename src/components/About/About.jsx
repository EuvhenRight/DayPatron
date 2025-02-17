import { Box, Container, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { useLanguage } from '../Language/LanguageContext';
import BreadcrumbComponent from '../Products/Breadcrumb';

const About = () => {
  const { t, lang } = useLanguage();
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <Container maxW="6xl" mb={10}>
      {!isMobile && <BreadcrumbComponent lang={lang} page="About" />}
      <Box display="flex" flexDirection="column">
        <Text fontSize="lg" px={5} textAlign="justify">
          {t('aboutUs.text')}
        </Text>
      </Box>
    </Container>
  );
};

export default About;
