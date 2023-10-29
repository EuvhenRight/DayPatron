import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { useLanguage } from '../Language/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <Container maxW="6xl" mb={10}>
      <Box display="flex" flexDirection="column">
        <Text fontSize="lg" px={5} textAlign="justify">
          {t('aboutUs.text')}
        </Text>
      </Box>
    </Container>
  );
};

export default About;
