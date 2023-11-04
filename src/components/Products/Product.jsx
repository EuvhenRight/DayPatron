import React from 'react';
import LoaderSpinner from '../Loader_Spinner/Loader_Spinner';
import { useLanguage } from '../Language/LanguageContext';
import { useParams } from 'react-router-dom';
import {
  Container,
  Heading,
  Tag,
  Text,
  useBreakpointValue,
  Wrap,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import ShareButtonsComponent from '../ShareSocial/ShareButtons';
import TabsComponent from './TabsComponent';
import AccordionComponent from './AccordionComponent';
import SwiperComponent from './Swiper';
import HelmetComponent from '../Helmet/helmet.js';

export default function Product() {
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
  const { id, lang } = useParams();

  const { t } = useLanguage();

  const translate = React.useCallback(
    (key) => {
      return t(key);
    },
    [t]
  );

  React.useEffect(() => {
    // Fetch product data
    const fetchData = async (productId) => {
      try {
        const url = `https://daypatron.adaptable.app/products/${lang}/${productId}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchData(id, lang);
    setIsLoading(true);
    window.scrollTo(0, 0);
  }, [id, lang]);

  console.log(product, 'product');

  // Separate Volume component
  const VolumeTogglePhoto = ({ value, isActive, onClick }) => (
    <Tag
      size="md" // Define the size attribute here
      m={2}
      borderRadius="md"
      variant="outline"
      colorScheme={isActive ? 'green' : 'gray'}
      onClick={onClick}
      cursor="auto"
    >
      {value}
    </Tag>
  );

  // Check if product exists before rendering.
  if (isLoading) {
    return (
      <Box minH="100dvh" alignItems="center">
        <LoaderSpinner />
      </Box>
    );
  }

  return (
    <>
      <HelmetComponent
        title={product.name}
        addPostFixTitle={true}
        description={product.description}
        keywords={product.keywords}
        imageCard={product.image.url}
        noIndex={true}
        largeTwitterCard={true}
      />
      <Container key={product.id} maxW={'6xl'} minH="100dvh">
        <Box
          display="flex"
          flexDirection="column-reverse"
          alignItems={{ base: 'flex-end', md: 'flex-end', lg: 'flex-end' }}
        >
          <Heading as="h2" size={isMobile ? 'md' : 'xl'}>
            {product.name}
          </Heading>
          <Text mb={1}>
            {translate('product.article')}: {product.article}
          </Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{
              base: 'center',
              md: 'flex-end',
              lg: 'flex-end',
            }}
          >
            {translate('product.share')}:
            <Box ml={2}>
              <ShareButtonsComponent product={product} />
            </Box>
          </Box>
        </Box>
        <Container mb={5} p="0">
          <SwiperComponent product={product} />
        </Container>
        <Wrap cursor="pointer" justify="center">
          {/* Separate Volume */}
          {product.volume.map((value, i) => (
            <VolumeTogglePhoto key={i} value={value} />
          ))}
        </Wrap>
        <Box mt={5} as="section">
          {isMobile ? (
            <AccordionComponent translate={translate} product={product} />
          ) : (
            <TabsComponent translate={translate} product={product} />
          )}
        </Box>
      </Container>
    </>
  );
}
