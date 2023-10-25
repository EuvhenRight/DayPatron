import React from 'react';
import style from './Product.module.css';
import LoaderSpinner from '../Loader_Spinner/Loader_Spinner';
import { useLanguage } from '../Language/LanguageContext';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Tag,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import ShareButtonsComponent from '../ShareSocial/ShareButtons';
import TabsComponent from './TabsComponent';
import AccordionComponent from './AccordionComponent';
import ModalSpecification from './Modal';
import SwiperComponent from './Swiper';

export default function Product() {
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeMainPhoto, setActiveVolume] = React.useState(0);
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

  // Check if product exists before rendering.
  if (isLoading) {
    return (
      <div className={style.section__middle}>
        <LoaderSpinner />
      </div>
    );
  }

  const mainImage = product?.image.map((img) => img.url);

  const onTogglePhoto = (index) => {
    setActiveVolume(index);
  };

  const renderProductImage = () => {
    return `/images/${mainImage[activeMainPhoto]}`;
  };

  // Separate Image component
  const PictureTogglePhoto = ({ url, alt, isActive, onClick }) => (
    <WrapItem
      onClick={onClick}
      borderWidth={isActive ? '2px' : '2px'} // Set '0px' instead of '0' for proper CSS
      borderRadius="md"
      borderColor={isActive ? 'green.200' : 'gray'} // Apply a border color only when active
    >
      <Image
        src={`/images/${url}`}
        width={{ base: '75px', md: '75px', lg: '75px' }}
        alt={alt}
      />
    </WrapItem>
  );

  // Separate Volume component
  const VolumeTogglePhoto = ({ value, isActive, onClick }) => (
    <Tag
      size="md" // Define the size attribute here
      m={2}
      borderRadius="md"
      variant="outline"
      colorScheme={isActive ? 'green' : 'gray'}
      onClick={onClick}
    >
      {value}
    </Tag>
  );

  return (
    <>
      <Container key={product.id} mt="100px" maxW={'6xl'}>
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
        {isMobile ? (
          <>
            <Container mb={5} p="0">
              <SwiperComponent product={product} />
            </Container>
            <Wrap cursor="pointer" justify="center">
              {/* Separate Volume */}
              {product.volume.map((value, i) => (
                <VolumeTogglePhoto key={i} value={value} />
              ))}
            </Wrap>
          </>
        ) : (
          <Grid
            as="section"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
            justifyItems="center"
            alignItems="end"
          >
            <GridItem colSpan={{ base: 4, md: 1, lg: 1 }}>
              <Wrap cursor="pointer" display="flex" justify="center">
                {/* Separate Picture */}
                {product.image.map((value, i) => (
                  <PictureTogglePhoto
                    key={i}
                    url={value.url}
                    alt={product.name}
                    isActive={activeMainPhoto === i}
                    onClick={() => onTogglePhoto(i)}
                  />
                ))}
              </Wrap>
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 2, lg: 2 }} w="75%" h="auto">
              <ModalSpecification
                imageUrl={renderProductImage()}
                product={product}
                translate={translate}
              />
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 1, lg: 1 }}>
              <Wrap cursor="pointer" flexDirection="column">
                {/* Separate Volume */}
                {product.volume.map((value, i) => (
                  <VolumeTogglePhoto
                    key={i}
                    value={value}
                    isActive={activeMainPhoto === i}
                    onClick={() => onTogglePhoto(i)}
                  />
                ))}
              </Wrap>
            </GridItem>
          </Grid>
        )}
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
