import style from './Footer.module.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/DayLogo_footer.svg';
import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  VisuallyHidden,
  chakra,
  Text,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { FaFacebook, FaTelegram, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../Language/LanguageContext';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={12}
      h={12}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('red.500', 'red.300'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const { colorMode, toggleColorMode } = useColorMode();

  const changeColorLanguageClick = (lang) => {
    return currentLanguage === lang
      ? style.lang__wrapper__button__active
      : style.lang__wrapper__button;
  };
  return (
    <Box borderTopRadius="4em" bg="#232323" color="white">
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>{t('footer.company')}</ListHeader>
            <Link to={`/${currentLanguage}/about`}>{t('footer.about')}</Link>
            <Link to={`/${currentLanguage}/whereToBuy`}>
              {t('footer.whereToBuy')}
            </Link>
            <Link to={`/${currentLanguage}/contact`}>
              {t('footer.contact')}
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>{t('footer.products')}</ListHeader>
            <Link to={`/${currentLanguage}/`}>{t('footer.liquidator')}</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={'#'}>
              Cookies Policy
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Law Enforcement
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <Image src={logo} alt="Logo" />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2023 DayPatron Inc. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Telegram'} href={'#'}>
              <FaTelegram />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
