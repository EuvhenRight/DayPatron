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

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeVolume, setActiveVolume] = React.useState(2); // Default volume
  const [isPictureActive, setIsPictureActive] = React.useState(null); // Default picture
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

  const mainImage = product?.image.map((img, i) =>
    i === activeVolume ? img.url : null
  );

  const menuPicture = product?.image.map((img, i) =>
    i === isPictureActive ? img.url : null
  );

  const onChangeVolume = (index) => {
    setIsPictureActive(0); // Reset isPictureActive to null when changing the volume
    setActiveVolume(index);
  };

  const onChangePicture = (index) => {
    setActiveVolume(0); // Reset activeVolume to the default state when changing the picture
    setIsPictureActive(index);
  };

  const renderProductImage = () => {
    if (activeVolume) {
      return `/images/${mainImage[activeVolume]}`;
    } else {
      return `/images/${menuPicture[isPictureActive]}`;
    }
  };

  // Separate Image component
  const PictureTogglePhoto = ({ url, alt, isActive, onClick }) => (
    <WrapItem
      onClick={onClick}
      borderWidth={isActive ? '2px' : '0'}
      borderRadius="md"
      borderColor="green.200"
    >
      <Image src={`/images/${url}`} width="100px" alt={alt} />
    </WrapItem>
  );

  // Separate Volume component
  const VolumeTogglePhoto = ({ value, isActive, onClick }) => (
    <Tag
      size="md" // Define the size attribute here
      m={2}
      variant="outline"
      colorScheme={isActive ? 'green' : 'gray'}
      onClick={onClick}
    >
      {value}
    </Tag>
  );

  return (
    <>
      <Container key={product.id} maxW="container.lg" centerContent mt="150">
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'center', md: 'flex-end', lg: 'flex-end' }}
            mb={{ base: 5, md: 10, lg: 10 }}
          >
            <Heading as="h2" size="xl">
              {product.name}
            </Heading>
            <Text mt={2} mb={2}>
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
              <Box ml={1} mr={1}>
                <ShareButtonsComponent product={product} />
              </Box>
            </Box>
          </Box>
          <Grid
            as="section"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
            justifyItems="center"
            alignItems="end"
          >
            <GridItem colSpan={{ base: 6, md: 1, lg: 1 }}>
              <Wrap cursor="pointer" display="flex" justify="center">
                {/* Separate Picture */}
                {product.image.map((value, i) => (
                  <PictureTogglePhoto
                    key={i}
                    url={value.url}
                    alt={product.name}
                    isActive={isPictureActive === i}
                    onClick={() => onChangePicture(i)}
                  />
                ))}
              </Wrap>
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 4, lg: 4 }} w="60%">
              <ModalSpecification
                imageUrl={renderProductImage()}
                product={product}
                translate={translate}
              />
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 1, lg: 1 }}>
              <Wrap cursor="pointer" justify="center">
                {/* Separate Volume */}
                {product.volume.map((value, i) => (
                  <VolumeTogglePhoto
                    key={i}
                    value={value}
                    isActive={activeVolume === i}
                    onClick={() => onChangeVolume(i)}
                  />
                ))}
              </Wrap>
            </GridItem>
          </Grid>
          <Box mt={10} as="section">
            {isMobile ? (
              <AccordionComponent translate={translate} product={product} />
            ) : (
              <TabsComponent translate={translate} product={product} />
            )}
          </Box>
        </Box>
      </Container>
      {/* <Box>
        <Wrap display="flex" justify="center">
          {product.benefits.map((value, i) => (
            <WrapItem key={i}>
              <img src={`/images/${[value]}`} alt={product.name} />
            </WrapItem>
          ))}
        </Wrap>
      </Box> */}
    </>
  );
};

export default Product;
