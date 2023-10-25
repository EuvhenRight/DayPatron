import * as React from 'react';
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
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaFacebook, FaTelegram, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../Language/LanguageContext';
import { Link } from 'react-router-dom';

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
  const { currentLanguage, t } = useLanguage();
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
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
            <Link to={`/${currentLanguage}/products/6/liquidator`}>
              {t('footer.liquidator')}
            </Link>
            <Link to={`/${currentLanguage}/products/4/carbon-killer`}>
              {t('footer.carbon-killer')}
            </Link>
            <Link to={`/${currentLanguage}/products/5/cooper-killer`}>
              {t('footer.copper-killer')}
            </Link>
            <Link
              to={`/${currentLanguage}/products/1/universal-oil-CLP-3-in-1`}
            >
              {t('footer.clp')}
            </Link>
            <Link to={`/${currentLanguage}/products/2/neutral-synthetic-oil`}>
              {t('footer.neutral-s-oil')}
            </Link>
            <Link to={`/${currentLanguage}/products/3/rust-protection`}>
              {t('footer.rust-protection')}
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>{t('footer.help')}</ListHeader>
            <Link to={`/${currentLanguage}/help/privacy-policy`}>
              Privacy Policy
            </Link>
          </Stack>

          <Stack>
            <Link to={`/${currentLanguage}/`}>
              <Image src={logo} alt="Logo" />
            </Link>
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
          <Stack direction={'row'} spacing={6} w>
            <SocialButton
              label={'Facebook'}
              href={
                'https://www.facebook.com/groups/1521928711901483/?mibextid=oMANbw'
              }
            >
              <FaFacebook size={isMobile ? 16 : 30} />
            </SocialButton>
            <SocialButton
              label={'Telegram'}
              href={'https://t.me/+x_wXRWsDHkk0Mzgy'}
            >
              <FaTelegram size={30} />
            </SocialButton>
            <SocialButton
              label={'Instagram'}
              href={
                'https://www.instagram.com/daypatron_ukraine/?utm_source=ig_web_button_share_sheet&igshid=ODE2OTA4Y2Y1MQ=='
              }
            >
              <FaInstagram size={30} />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
